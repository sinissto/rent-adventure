import BikeCard from "@/app/_components/BikeCard";
import { getBikes } from "@/app/_lib/data-service";
import Filter from "@/app/_components/Filter";

async function BikeList({ filter }) {
  const motorbikes = await getBikes();
  const brands = motorbikes.map((bike) => bike.brand.toLowerCase());

  function filterBikes(value) {
    return motorbikes.filter((bike) => bike.brand.toLowerCase() === value);
  }

  if (!motorbikes.length) return null;

  let displayedBikes;

  if (filter === "all") displayedBikes = motorbikes;
  if (filter !== "all") displayedBikes = filterBikes(filter);

  return (
    <>
      <div className={"flex justify-end mb-8"}>
        <Filter filterValues={brands} />
      </div>

      <div
        className={
          "grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14"
        }
      >
        {displayedBikes.map((bike) => (
          <BikeCard bike={bike} key={bike.id} />
        ))}
      </div>
    </>
  );
}

export default BikeList;
