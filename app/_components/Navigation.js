import Link from "next/link";

function Navigation() {
  return (
    <nav className={"z-10 text-2xl"}>
      <ul className={"flex gap-16 items-center"}>
        <li>
          <Link
            href={"/motorbikes"}
            className={"hover:text-accent-400 transition-colors"}
          >
            Motorbikes
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className={"hover:text-accent-400 transition-colors"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={"/account"}
            className={"hover:text-accent-400 transition-colors"}
          >
            Guest Area
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
