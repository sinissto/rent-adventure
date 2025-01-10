import Section from "@/app/_components/Section";
import Link from "next/link";
import VignetteIcon from "@/app/_components/icons/VignetteIcon";
import DollarIcon from "@/app/_components/icons/DollarIcon";
import QuestionMarkIcon from "@/app/_components/icons/QuestionMarkIcon";

function WhyChooseUs() {
  return (
    <Section className={"bg-accent-50"}>
      <div className={"max-w-7xl mx-auto px-8 py-32 flex items-center gap-12"}>
        <div className={"max-w-2xl flex flex-col items-start"}>
          <h3 className={"mb-8 text-2xl"}>Why choose us</h3>
          <h2
            className={
              "text-3xl uppercase text-primary-600 mb-10 tracking-tight font-normal"
            }
          >
            Best valued deals you will ever find
          </h2>
          <p className={"text-xl mb-8"}>
            Discover the best deals you&apos;ll ever find with our unbeatable
            offers. We&apos;re dedicated to providing you with the best value
            for your money, so you can enjoy top-quality services and products
            without breaking the bank. Our deals are designed to give you the
            ultimate renting experience, so don&apos;t miss out on your chance
            to save big.
          </p>

          <Link
            href={"/about"}
            className={
              "gap-2 py-4 px-8 bg-primary-50 flex items-center hover:bg-primary-100"
            }
          >
            <span>Find Details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-chevron-right"
            >
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
          </Link>
        </div>
        <div className={"max-w-xl"}>
          <div className={"flex flex-col items-start gap-10"}>
            <div
              className={
                "flex items-center gap-6 bg-primary-50 p-5 shadow-2xl rounded-sm"
              }
            >
              <div className={"p-4 flex-1 bg-white rounded-full"}>
                <VignetteIcon />
              </div>
              <div>
                <h4 className={"text-xl font-bold mb-4 uppercase"}>
                  Cross Country Drive
                </h4>
                <p className={"text-xl"}>
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div
              className={
                "flex items-center gap-6 bg-primary-50 p-5 shadow-2xl rounded-sm"
              }
            >
              <div className={"p-4 flex-1 bg-white rounded-full"}>
                <DollarIcon />
              </div>
              <div>
                <h4 className={"text-xl font-bold mb-4 uppercase"}>
                  All Inclusive Pricing
                </h4>
                <p className={"text-xl"}>
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div
              className={
                "flex items-center gap-6 bg-primary-50 p-5 shadow-2xl rounded-sm"
              }
            >
              <div className={"p-4 flex-1 bg-white rounded-full"}>
                <QuestionMarkIcon />
              </div>
              <div>
                <h4 className={"text-xl font-bold mb-4 uppercase"}>
                  No Hidden Charges
                </h4>
                <p className={"text-xl"}>
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default WhyChooseUs;
