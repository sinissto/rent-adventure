import { getBike, getReservation } from "@/app/_lib/data-service";
import { updateReservation } from "@/app/_lib/actions";
import SubmitButton from "@/app/_components/SubmitButton";
import SpinnerMini from "@/app/_components/SpinnerMini";
import { format, isToday } from "date-fns";
import { formatDistanceFromNow } from "@/app/_components/ReservationCard";

export const metadata = {
  title: "Edit reservation",
};

async function Page({ params }) {
  const { reservationId } = await params;

  const reservation = await getReservation(reservationId);
  const bike = await getBike(reservation.bikeId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-primary-700 mb-7">
        Edit reservation for: {bike.brand} {bike.model}
      </h2>

      <div className={"grid grid-cols-[100px_3fr] mb-8"}>
        <p className={"text-lg text-primary-950"}>Start date: </p>
        <p className={"text-lg text-primary-700"}>
          {format(new Date(reservation.startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(reservation.startDate))
            ? "Today"
            : formatDistanceFromNow(reservation.startDate)}
          )
        </p>

        <p className={"text-lg text-primary-950"}>End date: </p>
        <p className={"text-lg text-primary-700"}>
          {format(new Date(reservation.endDate), "EEE, MMM dd yyyy")}
        </p>
      </div>

      <form
        action={updateReservation}
        className={"bg-primary-100 py-8 px-12 text-lg flex gap-6 flex-col"}
      >
        <input type={"hidden"} name={"reservationId"} value={reservationId} />

        <div className={"space-y-2"}>
          <label htmlFor={"additionalRequest"} className={"block mb-4"}>
            Anything else we could help you with?
          </label>
          <textarea
            defaultValue={reservation.additionalRequest}
            name={"additionalRequest"}
            rows={5}
            className={
              "px-5 py-3 bg-primary-50 text-primary-800 w-full shadow-sm rounded-sm outline-none"
            }
          />
        </div>

        <div className={"flex justify-end items-center gap-6"}>
          <SubmitButton pendingLabel={<SpinnerMini />}>
            Update reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default Page;
