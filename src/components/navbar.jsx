import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo-no-background.svg";
import { useState } from "react";
import BurgerToggle from "./burger-toggle";
import siteConfig from "@/config/site";
import { signOut, useSession } from "next-auth/react";
import { ChevronDown, LogOut } from "lucide-react";

function Navbar() {
  const pages = siteConfig.pages;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);
  const { data: session, status } = useSession();

  return (
    <header className="flex navbar md:px-12 fixed top-0 left-0 z-40 h-20 shadow-md bg-base-200 bg-opacity-40">
      <div className="navbar-start h-full">
        <div className="hidden md:block">
          <Image src={logo} alt="stadium" width={100} height={30} />
        </div>
        <div className="flex flex-col gap-1 md:hidden">
          <BurgerToggle onToggle={() => setDropdownOpen(!dropdownOpen)} />
          {dropdownOpen && (
            <nav className="dropdown dropdown-open transition-all duration-150 hover:ease-in-out">
              <label tabIndex="0"></label>
              <ul className="dropdown-content menu p-2 bg-base-100 shadow-lg rounded-box w-52">
                {pages.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
      <nav className="navbar-center hidden md:flex gap-4 text-lg font-semibold text-base-content">
        {pages.map((item, index) => (
          <Link
            className={`py-2 px-4 rounded-md ${
              selectedPage === index && "bg-primary text-primary-content"
            }`}
            key={index}
            href={item.link}
            onClick={() => setSelectedPage(index)}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="navbar-end">
        {status === "authenticated" ? (
          <div className="flex items-center gap-2">
            {/* User Image */}
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={session.user.image} />
              </div>
            </div>
            {/* Dropdown menu */}
            <div className="dropdown dropdown-end">
              <ChevronDown tabIndex={0} className="hover:cursor-pointer" />

              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button onClick={() => signOut()}>
                    <LogOut className="text-red-600" />
                    <span className="font-semibold">Sign Out</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
