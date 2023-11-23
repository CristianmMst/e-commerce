import Link from "next/link";
import { PiUser } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import { Lobster } from "next/font/google";
import { Links } from "./components/Links";
import { LogOut } from "./components/LogOut";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

const routes = [
  {
    title: "Hombre",
    path: "/hombre",
  },
  {
    title: "Mujer",
    path: "/mujer",
  },
  {
    title: "Accesorios",
    path: "/accesorios",
  },
];

async function Navbar() {
  const session = await getServerSession(authOptions);

  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", () => {
  //     console.log("scroll");
  //   });
  // }

  return (
    <header className="p-8 px-16 fixed w-full">
      <nav className="flex justify-between items-center">
        <h1 className={`${lobster.className} text-4xl font-bold w-36`}>
          <Link href={"/"}>Shop.</Link>
        </h1>
        <Links routes={routes} />
        <div className="flex justify-between items-center gap-x-6">
          <div className="relative bg-neutral-100 rounded-3xl hover:bg-neutral-200 py-2">
            <input
              type="text"
              className="w-40 bg-transparent pl-4 pr-10 outline-none placeholder:text-neutral-400 font-semibold hover:placeholder:text-neutral-500"
              placeholder="Buscar"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2"
              aria-label="search"
            >
              <BiSearch size={20} />
            </button>
          </div>
          <button type="button">
            <Link href={`${session ? "/profile" : "/login"}`}>
              <PiUser size={25} />
            </Link>
          </button>
          {session && <LogOut />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
