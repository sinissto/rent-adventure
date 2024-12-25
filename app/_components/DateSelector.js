"use client";

import { isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "@/app/_components/ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, bookedDates, bike }) {
  const { range, setRange, resetRange } = useReservation();

  // CHANGE
  const bikePrice = bike.price;
  const numDays = 23;
  const rentPrice = 23;
  // const range = { from: null, to: null };

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className={"flex flex-col justify-between"}>
      <DayPicker
        className={"pt-2 place-self-center"}
        mode={"range"}
        min={minBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        disabled={{ before: new Date() }}
        endMonth={new Date(new Date().getFullYear() + 5, 12)}
        numberOfMonths={2}
        captionLayout={"dropdown"}
        onSelect={setRange}
        selected={range}
      />

      <div
        className={
          "flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]"
        }
      >
        <div className={"flex items-baseline gap-6"}>
          <p className={"flex gap-2 items-baseline"}>
            <span className={"text-2xl"}>${bikePrice}</span>

            <span>/ days</span>
          </p>
          {numDays ? (
            <>
              <p className={"bg-accent-600 px-3 py-2 text-2xl"}>
                <span>&times;</span> <span>{numDays}</span>
              </p>
              <p>
                <span className={"text-lg font-bold uppercase"}>Total</span>{" "}
                <span className={"text-2xl font-semibold"}>${rentPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className={
              "border border-primary-800 py-2 px-4 text-sm font-semibold"
            }
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
