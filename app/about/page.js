import Link from "next/link";
import Image from "next/image";
import image1 from "@/public/about/about_1.jpg";
import image2 from "@/public/about/about_2.jpg";
import image3 from "@/public/about/about_3.jpg";
import image4 from "@/public/about/about_4.jpg";

export const metadata = {
  title: "About",
};

function Page() {
  return (
    <div className={"max-w-7xl mx-auto px-8 py-32"}>
      <div
        className={"grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center"}
      >
        <div className={"col-span-3"}>
          <h1 className={"text-4xl mb-10 text-primary-600 font-medium"}>
            Welcome to <span className={"font-bold"}>Rent Adventure</span>
          </h1>
          <div className={"space-y-8"}>
            <p>
              Premier destination for motorbike rentals. Whether you’re an
              adventurous traveler, a weekend explorer, or someone who simply
              loves the thrill of the open road, we’re here to fuel your journey
              with top-quality bikes and unmatched service.
            </p>
            <p>
              Our mission is to provide a seamless and exhilarating rental
              experience. We believe that every ride should be memorable,
              whether you’re cruising coastal highways, navigating urban
              streets, exploring off-road trails, or go over mountains passes.
            </p>
            <p>
              We’re passionate about empowering our customers to explore the
              world on two wheels with confidence and freedom.
            </p>
          </div>
        </div>

        <div className={"col-span-2"}>
          <Image
            src={image1}
            placeholder={"blur"}
            alt={"Front view of BMW GSA 1250"}
          />
        </div>
        <div className={"col-span-2"}>
          <Image src={image2} placeholder={"blur"} alt={"Biker on the road"} />
        </div>

        <div className={"col-span-3"}>
          <h1 className={"text-4xl mb-10 text-primary-600 font-medium"}>
            What Sets Us Apart
          </h1>

          <div className={"space-y-8"}>
            <div>
              <h3 className={"text-2xl mb-4 text-primary-600 font-medium"}>
                Premium Fleet
              </h3>
              <p>
                Our collection includes a wide range of well-maintained
                adventure motorbikes. Each bike is regularly serviced to ensure
                safety and performance.
              </p>
            </div>
            <div>
              <h3 className={"text-2xl mb-2 text-primary-600 font-medium"}>
                Flexible Rentals
              </h3>
              <p>
                We offer flexible rental plans to suit your needs, whether it’s
                a quick day trip, a weekend getaway, or a long-term adventure.
              </p>
            </div>
            <div>
              <h3 className={"text-2xl mb-2 text-primary-600 font-medium"}>
                Customer-Centric Service
              </h3>
              <p>
                Our friendly team is dedicated to making your rental experience
                smooth and enjoyable, offering expert advice and local tips to
                enhance your ride.
              </p>
            </div>
            <div>
              <h3 className={"text-2xl mb-2 text-primary-600 font-medium"}>
                Affordable Pricing
              </h3>
              <p>
                Enjoy competitive rates without compromising on quality. We
                strive to provide excellent value for every rider.
              </p>
            </div>
          </div>
        </div>

        <div className={"col-span-3"}>
          <h1 className={"text-4xl mb-10 text-primary-600 font-medium"}>
            Why Choose Us
          </h1>

          <div className={"space-y-8"}>
            <div>
              <h3 className={"text-2xl mb-2 text-primary-600 font-medium"}>
                Safety First
              </h3>
              <p>
                Your safety is our priority. All our motorbikes are equipped
                with safety features, and we provide optional gear rentals for
                added protection.
              </p>
            </div>
            <div>
              <h3 className={"text-2xl mb-2 text-primary-600 font-medium"}>
                Convenient Booking
              </h3>
              <p>
                Reserve your motorbike online with ease through our
                user-friendly platform. Last-minute rentals? We’ve got you
                covered.
              </p>
            </div>
            <div>
              <h3 className={"text-2xl mb-2 text-primary-600 font-medium"}>
                Passion for Riding
              </h3>
              <p>
                As fellow riders, we understand what makes a great biking
                experience. We’re here to share our love for the road and help
                you create unforgettable memories.
              </p>
            </div>
          </div>
        </div>

        <div className={"col-span-2"}>
          <Image
            src={image3}
            placeholder={"blur"}
            alt={"Motorbike byside of the see"}
          />
        </div>

        <div className={"relative aspect-square col-span-2"}>
          <Image
            // src={"/about/about_4.jpg"}
            src={image4}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={"object-cover"}
            alt={"Group of bikers enjoying view"}
          />
        </div>

        <div className={"col-span-3"}>
          <h1 className={"text-4xl mb-10 text-primary-600 font-medium"}>
            Join Us for the Ride
          </h1>

          <div className={"space-y-8"}>
            <p>
              Ready to hit the road? Discover the freedom of exploring your
              destination on a motorbike from <span>Rent Adventure</span>.
              Whether you’re a seasoned rider or a first-timer, we’ll help you
              find the perfect bike to match your style and adventure goals.
            </p>
            <p>Let’s ride together!</p>
            <p>Contact us or book online today to start your journey. </p>
            <div>
              <Link
                href={"/motorbikes"}
                className={
                  "inline-block mt-4 bg-primary-500 px-8 py-5 text-primary-50 text-lg font-semibold hover:bg-primary-600 transition-all"
                }
              >
                Explore our rental fleet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
