import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getBookedDatesByBikeId, getSettings } from "@/app/_lib/data-service";

async function Reservation({ bike }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByBikeId(bike.id),
  ]);
  return (
    <div
      className={
        "grid grid-cols-[4fr_3fr] border border-primary-800 items-stretch"
      }
    >
      <DateSelector settings={settings} bookedDates={bookedDates} bike={bike} />
      <ReservationForm bike={bike} />
    </div>
  );
}

export default Reservation;
