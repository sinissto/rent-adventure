"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
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
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { price: bikePrice } = bike;

  const numDays = differenceInDays(displayRange.to, displayRange.from) + 1 || 1;
  const rentPrice = bikePrice * numDays;

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className={"flex flex-col justify-between"}>
      <DayPicker
        className={"pt-2 place-self-center"}
        mode={"range"}
        min={minBookingLength}
        max={maxBookingLength}
        startMonth={new Date()}
        endMonth={new Date(new Date().getFullYear() + 5, 12)}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
        numberOfMonths={2}
        captionLayout={"dropdown"}
        onSelect={setRange}
        selected={displayRange}
      />

      <div
        className={
          "flex items-center justify-between px-8 bg-primary-200 text-primary-800 h-[72px]"
        }
      >
        <div className={"flex items-baseline gap-6"}>
          <p className={"flex gap-2 items-baseline"}>
            <span className={"text-2xl"}>
              <span className={"text-lg"}>&euro;</span>
              {bikePrice}
            </span>

            <span>/ day</span>
          </p>
          {numDays ? (
            <>
              <p className={"px-3 py-2 text-2xl"}>
                <span className={"text-4xl"}>&times;</span>{" "}
                <span>{numDays}</span>
              </p>
              <p>
                <span className={"text-lg font-bold uppercase"}>Total</span>{" "}
                <span className={"text-2xl font-semibold"}>
                  <span className={"text-lg"}>&euro;</span>
                  <span className={"font-bold"}>{rentPrice}</span>
                </span>
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
