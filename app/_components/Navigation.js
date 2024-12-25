import Link from "next/link";
import { auth } from "@/app/_lib/auth";

async function Navigation() {
  const session = await auth();

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
          {session?.user?.image ? (
            <Link
              href={"/account"}
              className={
                "hover:text-accent-400 transition-colors flex items-center gap-4"
              }
            >
              <span>My account</span>
              <img
                src={session.user.image}
                alt={session.user.name}
                className={"h-8 rounded-full"}
                referrerPolicy={"no-referrer"}
              />
            </Link>
          ) : (
            <Link
              href={"/account"}
              className={"hover:text-accent-400 transition-colors"}
            >
              Login / Sign in
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
