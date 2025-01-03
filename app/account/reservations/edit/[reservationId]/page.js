import { getReservation } from "@/app/_lib/data-service";
import { updateReservation } from "@/app/_lib/actions";
import SubmitButton from "@/app/_components/SubmitButton";
import SpinnerMini from "@/app/_components/SpinnerMini";

export const metadata = {
  title: "Edit reservation",
};

async function Page({ params }) {
  const { reservationId } = await params;

  const reservation = await getReservation(reservationId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

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
