import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Account",
};

async function Page() {
  const session = await auth();

  const firstName = session.user.name.split(" ").at(0);

  return (
    <div className={"max-w-7xl m-auto"}>
      <h2 className={"font-semibold text-2xl text-primary-700 mb-7"}>
        Welcome, {firstName}
      </h2>

      <p className={"text-xl mb-8 text-primary-950"}>
        Here you can edit your additional request for your reservation and your
        profile.
      </p>

      <p className={"text-xl mb-8 text-primary-950"}>
        On the left you can find sections according what you want to edit.
      </p>

      <p className={"text-xl mb-8 text-primary-950"}>
        If you want to change reservation days, please delete current
        reservation and make another one.
      </p>
    </div>
  );
}

export default Page;
