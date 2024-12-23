"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("brand") ?? "all";

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
      <Button
        filter={"bmw"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        BMW
      </Button>
      <Button
        filter={"honda"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Honda
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
