import SideNavigation from "@/app/_components/SideNavigation";
import { auth } from "@/app/_lib/auth";

async function Layout({ children }) {
  const session = await auth();

  return (
    <div
      className={
        "max-w-7xl m-auto py-16 grid grid-cols-[16rem_1fr] h-full gap-12"
      }
    >
      <SideNavigation user={session.user} />
      <div className={"py-1"}>{children}</div>
    </div>
  );
}

export default Layout;
