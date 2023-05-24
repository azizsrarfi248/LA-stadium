import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo-no-background.svg";
import { useState } from "react";
import BurgerToggle from "./burger-toggle";
import siteConfig from "@/config/site";
import { signIn } from "next-auth/react";

function Navbar() {
  const pages = siteConfig.pages;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <header className="navbar md:px-12 fixed top-0 left-0 z-40 h-20 shadow-md bg-base-200 bg-opacity-40">
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
        <button className="btn btn-primary" onClick={() => signIn()}>
          Login
        </button>
      </div>
    </header>
  );
}

export default Navbar;
