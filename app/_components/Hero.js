import Image from "next/image";
import Link from "next/link";
import hondaAfricaTwin from "@/public/honda_africa_twin.png";
import Section from "@/app/_components/Section";

function Hero() {
  return (
    <Section>
      <div
        className={
          "min-h-[80vh] max-w-7xl mx-auto flex items-center justify-around relative"
        }
      >
        <Image
          src={"/bg_mountains_v2.png"}
          height={500}
          width={680}
          className={"absolute right-[-20px] top-10 z-[-1]"}
          alt={"Mountains drawing image"}
        />
        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl text-primary-950 mb-10 tracking-tight font-normal">
            Welcome to adventure&apos;s paradise.
          </h1>
          <p className={"text-2xl block mb-4"}>
            Rent most famous adventure bikes on the world, and make
            unforgettable memories...
          </p>
          <p className={"text-2xl block mb-12"}>
            Unbeatable prices, just reserve bike and pay before the ride
          </p>

          <div className={"flex items-center gap-4"}>
            <Link
              href="/motorbikes"
              className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all "
            >
              Explore adventure motorcycles
            </Link>

            <Link
              href="/about"
              className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all "
            >
              About us
            </Link>
          </div>
        </div>
        <Image
          src={hondaAfricaTwin}
          className={"max-w-xl"}
          alt={"Honda Africa Twin image"}
        />
      </div>
    </Section>
  );
}

export default Hero;
