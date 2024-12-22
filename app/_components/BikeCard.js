import { BoltIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function BikeCard({ bike }) {
  const { id, brand, model, price, image, hp, seatHeight } = bike;

  return (
    <div className="grid grid-rows-2 border-primary-800 border ">
      <div className={"relative"}>
        <Link href={`/motorbikes/${id}`}>
          <Image
            src={image}
            fill
            alt={`${brand} ${model}`}
            className={"object-contain border-primary-800"}
          />
        </Link>
      </div>

      <div className={"grid-cols-1"}>
        <div className={"pt-5 pb-4 px-7 bg-accent-200"}>
          <h3 className={"text-primary-700 font-semibold text-2xl mb-3"}>
            {brand} {model}
          </h3>

          <div className={"flex gap-3 items-center mb-2"}>
            <BoltIcon className={"h-5 w-5 text-primary-700 "} />

            <p className={"text-lg text-primary-600 pt-1"}>
              <span className={"font-bold "}>{hp}</span> hp
            </p>
          </div>

          <div className={"flex gap-3 items-center mb-2"}>
            <ChevronUpDownIcon className={"h-5 w-5 text-primary-700"} />

            <p className={"text-lg text-primary-600 pt-1"}>
              <span className={"font-bold "}>{seatHeight}</span> mm seat height
            </p>
          </div>

          <p className={"flex gap-3 justify-end items-baseline"}>
            <span className={"text-3xl font-[350]"}>${price}</span>

            <span className={"text-primary-700"}>/ day</span>
          </p>
        </div>

        <div
          className={"bg-accent-200 border-t border-t-primary-800 text-right"}
        >
          <Link
            href={`/motorbikes/${id}`}
            className={
              "border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
            }
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BikeCard;
