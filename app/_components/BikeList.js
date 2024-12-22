import BikeCard from "@/app/_components/BikeCard";
import { getBikes } from "@/app/_lib/data-service";

async function BikeList() {
  const motorbikes = await getBikes();

  if (!motorbikes.length) return null;

  return (
    <div
      className={"grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14"}
    >
      {motorbikes.map((bike) => (
        <BikeCard bike={bike} key={bike.id} />
      ))}
    </div>
  );
}

export default BikeList;
