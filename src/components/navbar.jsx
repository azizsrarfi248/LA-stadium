import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/tournaments">Tournaments</Link>
      <Link href="/training">Training</Link>
      <Link href="/add-new">Add New</Link>
    </nav>
  );
}

export default Navbar;
