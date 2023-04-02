import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.png";
import { useState } from "react";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    // <nav>

    // </nav>
    <header className="navbar md:px-12 sticky top-0 left-0 z-40 h-20 bg-red-700">
      <div className="navbar-start h-full">
        <div className="hidden md:block">
          <Image src={logo} alt="stadium" width={100} height={50} />
        </div>
        <label
          className="btn btn-circle swap swap-rotate"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <input type="checkbox" />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            tabIndex={0}
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

        <div className={`dropdown dropdown-open ${!dropdownOpen && "hidden"}`}>
          <label tabIndex={0}></label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar-center hidden md:flex">
        <Link href="/">Home</Link>
        <Link href="/tournaments">Tournaments</Link>
        <Link href="/training">Training</Link>
        <Link href="/add-new">Add New</Link>
      </nav>
      <div className="navbar-end"></div>
    </header>
  );
}

export default Navbar;
