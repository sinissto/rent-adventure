import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} height="60" width="192" alt="The Rent Adventure Logo" />
      <span className="text-lg font-semibold  text-primary-950">
        See world differently
      </span>
    </Link>
  );
}

export default Logo;
