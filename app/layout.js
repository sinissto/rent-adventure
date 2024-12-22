import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";

// Font definition
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Rent Adventure",
    default: "Welcome / Rent Adventure",
  },

  description: "Adventure motorbikes for rent and long lasting memories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased text-primary-950 min-h-screen flex flex-col relative`}
      >
        <Header />

        <main className={"flex-1 grid"}>
          <div className={"mx-auto w-full"}>
            {/*<div className={"max-w-7xl mx-auto"}>{children}</div>*/}
            {children}
          </div>
        </main>
        <footer>FOOTER</footer>
      </body>
    </html>
  );
}
