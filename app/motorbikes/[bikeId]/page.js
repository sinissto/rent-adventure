import {
  BoltIcon,
  CalendarIcon,
  ChevronUpDownIcon,
  CubeTransparentIcon,
  ScaleIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { getBike, getBikes } from "@/app/_lib/data-service";
import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";

export async function generateMetadata({ params }) {
  const { bikeId } = await params;
  const { model } = await getBike(bikeId);

  return {
    title: `Bike ${model}`,
  };
}

export async function generateStaticParams() {
  const bikes = await getBikes();
  const ids = bikes.map((bike) => ({ bikeId: String(bike.id) }));
  console.log(ids);
  return ids;
}

async function Page({ params }) {
  const { bikeId } = await params;
  const bike = await getBike(bikeId);
  const {
    id,
    brand,
    model,
    price,
    description,
    image,
    hp,
    capacity,
    weight,
    seatHeight,
    equipment,
    year,
  } = bike;

  const bikeEquipment = equipment.split(", ");

  return (
    <div className={"max-w-7xl mx-auto mt-8"}>
      <div
        className={
          "grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24 z-10"
        }
      >
        <div className={"relative scale-[1.1] -translate-x-3 z-[-3]"}>
          <Image
            src={image}
            fill={true}
            alt={`${brand} ${model}`}
            className={"object-contain"}
          />
        </div>

        <div>
          <h3
            className={
              "text-primary-700 font-black text-5xl mb-5 translate-x-[-200px] bg-accent-200 p-6 pb-1 w-[130%]"
            }
          >
            {brand} {model}
          </h3>

          <p className={"text-lg text-primary-700 mb-10"}>
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className={"flex flex-col gap-2 mb-7"}>
            <li className={"flex gap-3 items-center"}>
              <BoltIcon className={"h-5 w-5 text-primary-600"} />
              <span className={"text-lg pt-1"}>
                <span className={"font-bold"}>{hp}</span> HP
              </span>
            </li>
            <li className={"flex gap-3 items-center"}>
              <ChevronUpDownIcon className={"h-5 w-5 text-primary-600"} />
              <span className={"text-lg pt-1"}>
                <span className={"font-bold"}>{seatHeight}</span> mm seat height
              </span>
            </li>
            <li className={"flex gap-3 items-center"}>
              <CubeTransparentIcon className={"h-5 w-5 text-primary-600"} />
              <span className={"text-lg pt-1"}>
                <span className={"font-bold"}>{capacity}</span> cc
              </span>
            </li>
            <li className={"flex gap-3 items-center"}>
              <ScaleIcon className={"h-5 w-5 text-primary-600"} />
              <span className={"text-lg pt-1"}>
                <span className={"font-bold"}>{weight}</span> kg
              </span>
            </li>
            <li className={"flex gap-3 items-center"}>
              <CalendarIcon className={"h-5 w-5 text-primary-600"} />
              <span className={"text-lg pt-1"}>
                <span className={"font-bold"}>{year}</span>
              </span>
            </li>
          </ul>

          <div>
            <h4 className={"text-primary-700 font-semibold text-2xl mb-5 pb-1"}>
              Bike is equipped with:
            </h4>
            <ul className={"flex flex-col gap-2 mb-7"}>
              {bikeEquipment.map((equipment, index) => (
                <li key={index} className={"flex  gap-3 items-center"}>
                  <StarIcon className={"h-5 w-5 text-primary-600"} />
                  <span className={"text-lg pt-1"}>
                    <span className={"font-bold"}>{equipment}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={
              "border-primary-700 border flex justify-center px-8 py-4 bg-accent-200"
            }
          >
            <p className={"pt-1 text-primary-900"}>
              <span className={"font-bold text-4xl"}>{price}</span>
              <span className={"text-2xl"}> / day</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className={"text-6xl font-semibold text-center"}>
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}

export default Page;
