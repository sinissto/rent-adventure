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
    </div>
  );
}

export default Page;
