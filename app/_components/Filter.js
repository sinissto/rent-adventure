"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter({ filterValues }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("brand") ?? "all";

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

  const filterUniqueValues = filterValues.filter(onlyUnique);

  function handleFilter(filterValue) {
    const params = new URLSearchParams(searchParams);
    params.set("brand", filterValue);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className={"px-5 border border-primary-700 flex items-center gap-3"}>
      <p>Filter by brand:</p>
      <Button
        filter={"all"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All Bikes
      </Button>

      {filterUniqueValues.map((filterValue, index) => (
        <Button
          key={index}
          filter={filterValue}
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          {filterValue.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-500 hover:text-white ${
        filter === activeFilter ? "bg-primary-700 text-white" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
