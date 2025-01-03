import ReservationCard from "@/app/_components/ReservationCard";
import Link from "next/link";
import { getReservations } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Reservations",
};

async function Page() {
  const session = await auth();
  const bookings = await getReservations(session.user.bikerId);
  console.log(bookings);

  return (
    <div className={"max-w-7xl m-auto"}>
      <h2 className={"font-semibold text-2xl text-primary-700 mb-7"}>
        Your reservations
      </h2>

      {bookings.length === 0 ? (
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
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Page;
