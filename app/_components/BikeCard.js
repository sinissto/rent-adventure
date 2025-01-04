import { BoltIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function BikeCard({ bike }) {
  const { id, brand, model, price, image, hp, seatHeight } = bike;

  return (
    <div className="grid grid-rows-2 border-primary-800 border shadow-xl">
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
        <div className={"pt-5 pb-4 px-7 bg-primary-200"}>
          <h3 className={"text-primary-950 font-semibold text-2xl mb-3"}>
            {brand} {model}
          </h3>

          <div className={"flex gap-3 items-center mb-2 text-primary-950"}>
            <BoltIcon className={"h-5 w-5"} />

            <p className={"text-lg pt-1"}>
              <span className={"font-bold "}>{hp}</span> hp
            </p>
          </div>

          <div className={"flex gap-3 items-center mb-2"}>
            <ChevronUpDownIcon className={"h-5 w-5"} />

            <p className={"text-lg pt-1"}>
              <span className={"font-bold"}>{seatHeight}</span> mm seat height
            </p>
          </div>

          <div className={"flex gap-3 justify-end items-baseline text-xl"}>
            <p className={"font-[350]"}>
              &euro; <span className={"text-3xl font-semibold"}>{price}</span>
            </p>

            <span className={"text-primary-700"}>/ day</span>
          </div>
        </div>

        <div
          className={"bg-primary-200 border-t border-t-primary-800 text-right"}
        >
          <Link
            href={`/motorbikes/${id}`}
            className={
              "border-l border-primary-800 py-4 px-6 inline-block bg-primary-400 font-semibold hover:bg-primary-700 hover:text-white transition-all"
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
