"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "@/app/_components/SignOutButton";
import Uploader from "@/app/(db_data)/Uploader";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Rider's profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation({ user }) {
  const pathname = usePathname();

  const showUploader = user.email === "sinisha.stojanovic@gmail.com";

  return (
    <nav className={"border-r border-primary-900"}>
      <ul className={"flex flex-col gap-2 h-full text-lg"}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-300 hover:text-primary-800 transition-colors flex items-center gap-4 font-semibold text-primary-700 ${
                pathname === link.href ? "bg-primary-100" : ""
              }`}
              href={link.href}
            >
              <span className={"pb-2"}>{link.icon}</span>
              <span className={"leading-none"}>{link.name}</span>
            </Link>
          </li>
        ))}

        {showUploader && (
          <li className={"my-16"}>
            <Uploader />
          </li>
        )}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
