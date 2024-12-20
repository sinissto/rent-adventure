import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

function Header() {
  return (
    <header>
      <div
        className={
          "flex justify-between items-center max-w-7xl mx-auto border-b border-primary-800 px-8 py-5 z-10 h-[10vh]"
        }
      >
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
