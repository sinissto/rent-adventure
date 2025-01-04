import { Suspense } from "react";
import { getBike, getBikes } from "@/app/_lib/data-service";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import Bike from "@/app/_components/Bike";
import ReservationReminder from "@/app/_components/ReservationReminder";

export async function generateMetadata({ params }) {
  const { bikeId } = await params;
  const { model } = await getBike(bikeId);

  return {
    title: `Bike ${model}`,
  };
}

export async function generateStaticParams() {
  const bikes = await getBikes();
  const ids = bikes.map((bike) => ({ bikeId: String(bike.id) }));
  return ids;
}

async function Page({ params }) {
  const { bikeId } = await params;
  const bike = await getBike(bikeId);

  const { brand, model } = bike;

  return (
    <div className={"max-w-7xl mx-auto mt-8"}>
      <Bike bike={bike} />

      <div>
        <h2 className={"text-4xl font-semibold text-center mb-8"}>
          Reserve {brand} {model} today.
          <br /> Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation bike={bike} />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
