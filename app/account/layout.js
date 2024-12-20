import SideNavigation from "@/app/_components/SideNavigation";

function Layout({ children }) {
  return (
    <div
      className={
        "max-w-7xl m-auto py-16 grid grid-cols-[16rem_1fr] h-full gap-12"
      }
    >
      <SideNavigation />
      <div className={"py-1"}>{children}</div>
    </div>
  );
}

export default Layout;
