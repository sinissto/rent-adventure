import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";
import { auth } from "@/app/_lib/auth";
import { getBiker } from "@/app/_lib/data-service";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export const metadata = {
  title: "Account",
};

export const revalidate = 0;

async function Page() {
  const session = await auth();
  const biker = await getBiker(session.user.email);

  return (
    <div className={"max-w-7xl m-auto "}>
      <h2 className={"font-semibold text-2xl text-primary-700 mb-4"}>
        Update your profile
      </h2>

      <p className={"text-lg  text-primary-600"}>
        Providing the following information will make your reservation process
        faster and smoother.
      </p>
      <p className={"text-lg mb-8 text-primary-600"}>See you soon!</p>

      <UpdateProfileForm biker={biker}>
        <SelectCountry
          name={"nationality"}
          id={"nationality"}
          className={
            "px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          }
          defaultCountry={biker.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}

export default Page;
