'use client';
import Link from "next/link";
import { useState } from "react";
import Navitem from "./Navitem";
import { User } from "@prisma/client";

interface NavbarProps {
  currentUser?: User | null;
}

export default function Navbar({ currentUser }: NavbarProps) {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  console.log(currentUser);

  return (
    <>
      <nav className="relative z-10 w-full bg-orange-500 text-white">
        <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
          <div className="flex items-center text-2xl h-14">
            <Link href="/">
              Logo
            </Link>
          </div>
          <div className="text-2xl sm:hidden">
            {menu === false ? <button onClick={handleMenu} >+</button> : <button onClick={handleMenu}>-</button>}
          </div>
          <div className="hidden sm:block">
            <Navitem currentUser={currentUser} />
          </div>
        </div>
        <div className="block sm:hidden">
          {(menu === false) ? null : <Navitem mobile />}
        </div>
      </nav>
    </>
  )
}