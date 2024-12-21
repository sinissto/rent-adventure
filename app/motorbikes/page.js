import BikeCard from "@/app/_components/BikeCard";
import { getBikes } from "@/app/_lib/data-service";

export const metadata = {
  title: "Motorcycles",
};

async function Page() {
  const motorbikes = await getBikes();
  console.log(motorbikes);

  return (
    <div className={"max-w-7xl mx-auto px-8 py-10"}>
      <h1 className={"text-4xl mb-5 text-primary-700 font-medium"}>
        Our motorbikes
      </h1>
      <p className={"text-primary-700 text-lg mb-2"}>
        Our collection includes a wide range of well-maintained motorbikes, from
        sporty models to rugged off-road options. Each bike is regularly
        serviced to ensure safety and performance.
      </p>
      <p className={"text-primary-700 text-lg mb-2"}>
        Our friendly team is dedicated to making your rental experience smooth
        and enjoyable, offering expert advice and local tips to enhance your
        ride.
      </p>
      <p className={"text-primary-700 text-lg mb-2"}>
        We believe that every ride should be memorable, whether you’re cruising
        coastal highways, navigating urban streets, exploring off-road trails,
        or go over mountains passes.
      </p>

      {motorbikes.length > 0 && (
        <div
          className={
            "grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14"
          }
        >
          {motorbikes.map((bike) => (
            <BikeCard bike={bike} key={bike.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
