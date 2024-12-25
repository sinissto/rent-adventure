import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";

export const metadata = {
  title: "Account",
};

function Page() {
  // todo CHANGE
  const countryFlag = "pt.jpg";
  const nationality = "portugal";

  return (
    <div className={"max-w-7xl m-auto "}>
      <h2 className={"font-semibold text-2xl text-primary-700 mb-4"}>
        Update your guest profile
      </h2>

      <p className={"text-lg mb-8 text-primary-600"}>
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm>
        <SelectCountry
          name={"nationality"}
          id={"nationality"}
          className={
            "px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          }
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}

export default Page;
