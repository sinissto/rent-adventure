"use client";

import { useReservation } from "@/app/_components/ReservationContext";
import { differenceInDays } from "date-fns";
import { createReservation } from "@/app/_lib/actions";
import SubmitButton from "@/app/_components/SubmitButton";
import SpinnerMini from "@/app/_components/SpinnerMini";

function ReservationForm({ bike, user }) {
  const { range, resetRange } = useReservation();

  const { price: bikePrice, id } = bike;
  const startDate = range.from;
  const endDate = range.to || range.from;
  const numDays = differenceInDays(endDate, startDate) + 1 || 1;
  const rentPrice = numDays * bikePrice;

  const reservationData = {
    startDate,
    endDate,
    numDays,
    bikePrice,
    bikeId: id,
    rentPrice,
  };

  const createReservationWithData = createReservation.bind(
    null,
    reservationData
  );

  return (
    <div className={"scale-[1] flex flex-col"}>
      <div
        className={
          "bg-primary-800 text-white px-16 py-2 flex justify-between items-center"
        }
      >
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createReservationWithData(formData);
          resetRange();
        }}
        className={
          "bg-primary-300 py-10 px-16 text-lg flex flex-col grow justify-between"
        }
      >
        <div className={"space-y-3"}>
          <label htmlFor={"observations text-primary-950"}>
            Anything else we could help you with?
          </label>
          <textarea
            name={"additionalRequest"}
            id={"additionalRequest"}
            rows={5}
            className={
              "px-5 py-3 bg-primary-100 text-primary-950 w-full shadow-sm rounded-sm outline-none"
            }
            placeholder={"Any other request that we can assist"}
          />
        </div>

        <div className={"flex justify-end items-center gap-6"}>
          {!(startDate && endDate) ? (
            <p className={"text-primary-950 text-base"}>
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton pendingLabel={<SpinnerMini />}>
              Reserve now
            </SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
