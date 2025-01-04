import Section from "@/app/_components/Section";
import MotorcycleIcon from "@/app/_components/icons/MotorcycleIcon";
import QuickAndEasyCard from "@/app/_components/QuickAndEasyCard";
import TargetIcon from "@/app/_components/icons/TargetIcon";
import PaymentIcon from "@/app/_components/icons/PaymentIcon";

function QuickAndEasy() {
  return (
    <Section className={"bg-accent-50"}>
      <div className="max-w-7xl mx-auto px-8 py-32 ">
        <div className="relative z-10 flex flex-col items-center mb-8">
          <h3 className={"mb-8 text-2xl"}>Plan tour adventure</h3>
          <h2 className="text-3xl uppercase text-primary-600 mb-10 tracking-tight font-normal">
            Quick and Easy rent
          </h2>
        </div>

        <div className="flex justify-between items-stretch">
          <QuickAndEasyCard
            icon={<MotorcycleIcon />}
            title={"Pick a bike"}
            text={
              "We offers a big range of adventure motorbikes for all your riding plans. We have the perfect bike to meet your needs"
            }
          />

          <QuickAndEasyCard
            icon={<TargetIcon />}
            title={"Reserve a bike"}
            text={"Reserve a bike "}
          />

          <QuickAndEasyCard
            icon={<PaymentIcon />}
            title={"Pay before a ride"}
            text={"Pay before you hit the open road"}
          />
        </div>
      </div>
    </Section>
  );
}

export default QuickAndEasy;
