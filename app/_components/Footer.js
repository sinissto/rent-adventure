import Section from "@/app/_components/Section";
import logo from "@/public/logo.png";
import Image from "next/image";
import PhoneIcon from "@/app/_components/icons/PhoneIcon";
import MailIcon from "@/app/_components/icons/MailIcon";
import Link from "next/link";
import SubmitButton from "@/app/_components/SubmitButton";

function Footer() {
  return (
    <Section>
      <div
        className={
          "max-w-7xl mx-auto px-8 py-10 grid grid-cols-[3fr_2fr_3fr_3fr] justify-between"
        }
      >
        <div
          className={
            "flex flex-col items-center gap-4 border-r border-primary-700 px-5"
          }
        >
          <div className={"mb-8"}>
            <Image
              src={logo}
              height="60"
              width="192"
              alt="The Rent Adventure Logo"
              className={"mb-2"}
            />
            <p className="text-lg font-semibold  text-primary-950">
              See world differently
            </p>
          </div>
          <p>
            We offers a big range of perfect adventure bikes for all your
            driving plans and meet your needs.
          </p>

          <div className={"w-full flex items-center gap-3"}>
            <PhoneIcon />
            <a href="tel:rent@adventure.com">123 456 789</a>
          </div>
          <div className={"w-full flex items-center gap-3"}>
            <MailIcon />
            <a href="mailto:rent@adventure.com">rent@adventure.com</a>
          </div>
        </div>

        <div className={"border-r border-primary-700 px-5"}>
          <h3 className={"uppercase font-bold text-2xl py-5 mb-4"}>Company</h3>

          <ul>
            <li className={"mb-4"}>
              <Link
                href={"/"}
                className={"hover:text-primary-500 transition-colors"}
              >
                HQ
              </Link>
            </li>
            <li className={"mb-4"}>
              <Link
                href={"/about"}
                className={"hover:text-primary-500 transition-colors"}
              >
                About us
              </Link>
            </li>
            <li className={"mb-4"}>
              <Link
                href={"/"}
                className={"hover:text-primary-500 transition-colors"}
              >
                Mobile app
              </Link>
            </li>
            <li className={"mb-4"}>
              <Link
                href={"/blog"}
                className={"hover:text-primary-500 transition-colors"}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href={"/careers"}
                className={"hover:text-primary-500 transition-colors"}
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div className={"border-r border-primary-700 px-5"}>
          <h3 className={"uppercase font-bold text-2xl py-5 mb-4"}>
            Working hours
          </h3>

          <ul>
            <li className={"mb-4"}>Mon &mdash; Fri: 09:00 &mdash; 21:00</li>
            <li className={"mb-4"}>Sat: 09:00 &mdash; 18:00</li>
            <li>
              <p className={"mb-1"}>Sun: Closed</p>
              <p>On Sunday, pick up bike is available on phone call</p>
            </li>
          </ul>
        </div>

        <div className={"px-5"}>
          <h3 className={"uppercase font-bold text-2xl py-5 mb-4"}>
            Subscription
          </h3>

          <p className={"mb-6"}>
            Subscribe your Email address for latest news & updates.
          </p>

          <form>
            <label htmlFor="subscription" className={"block mb-2"}>
              Your email address:
            </label>
            <input
              className={"bg-primary-100 p-2 w-full mb-3 outline-none"}
              type="email"
              name={"subscription"}
              id={"subscription"}
              placeholder={"Enter your email address"}
            />

            <SubmitButton>Subscribe</SubmitButton>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
