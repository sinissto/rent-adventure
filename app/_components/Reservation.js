import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import {
  getReservationDatesByBikeId,
  getSettings,
} from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";
import LoginMessage from "@/app/_components/LoginMessage";

async function Reservation({ bike }) {
  const session = await auth();

  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getReservationDatesByBikeId(bike.id),
  ]);
  return (
    <div
      className={
        "grid grid-cols-[4fr_3fr] border border-primary-800 items-stretch mb-24"
      }
    >
      <DateSelector settings={settings} bookedDates={bookedDates} bike={bike} />
      {session?.user ? (
        <ReservationForm bike={bike} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
