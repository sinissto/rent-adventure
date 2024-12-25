"use client";

import { useReservation } from "@/app/_components/ReservationContext";

function ReservationForm({ bike, user }) {
  const { range } = useReservation();

  return (
    <div className={"scale-[1] flex flex-col bg-accent-600 "}>
      <div
        className={
          "bg-accent-800 text-primary-300 px-16 py-2 flex justify-between items-center"
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
        className={
          "bg-accent-600 py-10 px-16 text-lg flex flex-col grow justify-between"
        }
      >
        <div className={"space-y-2 mb-8"}>
          <label htmlFor={"observations"}>
            Anything else we could help you with?
          </label>
          <textarea
            name={"additionalRequest"}
            id={"additionalRequest"}
            rows={5}
            className={
              "px-5 py-3 bg-primary-100 text-primary-800 w-full shadow-sm rounded-sm outline-none"
            }
            placeholder={"Any other request that we can assist"}
          />
        </div>

        <div className={"flex justify-end items-center gap-6"}>
          <p className={"text-primary-800 text-base"}>
            Start by selecting dates
          </p>

          <button
            className={
              "bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
            }
          >
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
