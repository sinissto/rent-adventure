import Section from "@/app/_components/Section";
import Image from "next/image";
import bmwLogo from "@/public/brand_logos/bmw-logo.png";
import hondaLogo from "@/public/brand_logos/honda-logo_crop.png";
import ducatiLogo from "@/public/brand_logos/ducati_red_logo.png";
import suzukiLogo from "@/public/brand_logos/suzuki-logo-18.png";
import ktmLogo from "@/public/brand_logos/ktm_logo.jpg";
import yamahaLogo from "@/public/brand_logos/yamaha-logo_crop.webp";
import triumphLogo from "@/public/brand_logos/triumph-logo_crop.png";

function FleetBrands() {
  return (
    <Section>
      <div className={"max-w-7xl mx-auto px-8 py-32"}>
        <div className={"text-center mb-32"}>
          <h3 className={"mb-8 text-2xl"}>Motorcycle brands</h3>
          <h2
            className={
              "text-3xl uppercase text-primary-950 mb-4 tracking-tight font-normal"
            }
          >
            Our rental fleet
          </h2>
          <p className={"text-xl"}>
            Choose from a variety of amazing brands to rent favorite bike for
            your next adventure
          </p>
        </div>

        <div className={"flex items-center justify-between"}>
          <Image src={hondaLogo} height={120} alt={"Honda Logo image"} />
          <Image src={bmwLogo} height={120} alt={"BWM Logo image"} />
          <Image src={ducatiLogo} height={120} alt={"Ducati Logo image"} />
          <Image src={suzukiLogo} height={120} alt={"Suzuki Logo image"} />
          <Image src={ktmLogo} height={120} alt={"KTM Logo image"} />
          <Image src={yamahaLogo} height={120} alt={"Yamaha Logo image"} />
          <Image src={triumphLogo} height={120} alt={"Triumph Logo image"} />
        </div>
      </div>
    </Section>
  );
}

export default FleetBrands;
