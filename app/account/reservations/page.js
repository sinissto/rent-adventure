import ReservationCard from "@/app/_components/ReservationCard";
import Link from "next/link";

export const metadata = {
  title: "Reservations",
};

function Page() {
  // CHANGE
  const reservations = [];

  return (
    <div className={"max-w-7xl m-auto"}>
      <h2 className={"font-semibold text-2xl text-primary-700 mb-7"}>
        Your reservations
      </h2>

      {reservations.length === 0 ? (
        <p className={"text-lg"}>
          You have no reservations yet. Check out our{" "}
          <Link
            className={"underline text-primary-600 hover:text-primary-800 "}
            href={"/motorbikes"}
          >
            motorbikes &rarr;
          </Link>
        </p>
      ) : (
        <ul className={"space-y-6"}>
          {reservations.map((reservation) => (
            <ReservationCard reservation={reservation} key={reservation.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Page;
