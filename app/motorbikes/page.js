import BikeList from "@/app/_components/BikeList";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Filter from "@/app/_components/Filter";
import ReservationReminder from "@/app/_components/ReservationReminder";

export const metadata = {
  title: "Motorcycles",
};

async function Page({ searchParams }) {
  const query = await searchParams;
  const filter = query?.brand ?? "all";

  return (
    <div className={"max-w-7xl mx-auto px-8 py-10"}>
      <h1 className={"text-4xl mb-5 text-primary-600 font-medium"}>
        Our motorbikes
      </h1>
      <p className={"text-lg mb-2"}>
        Our collection includes a wide range of well-maintained motorbikes. Each
        bike is regularly serviced to ensure safety and performance.
      </p>
      <p className={"text-lg mb-2"}>
        Our friendly team is dedicated to making your rental experience smooth
        and enjoyable, offering expert advice and local tips to enhance your
        ride.
      </p>
      <p className={"text-lg mb-10"}>
        We believe that every ride should be memorable, whether you’re cruising
        coastal highways, navigating urban streets, exploring off-road trails,
        or go over mountains passes.
      </p>

      <Suspense fallback={<Spinner />} key={filter}>
        <BikeList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

export default Page;
