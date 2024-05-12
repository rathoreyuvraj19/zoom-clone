import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <nav className="flex  fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 ">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src={"/icons/logo.svg"}
          alt="bloom logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        ></Image>
        <p className="text-[26px] text-white font-extrabold max-sm:hidden">
          Bloom
        </p>
      </Link>
      <div className="flex justify-between gap-5 ">
        {/* TODO: Clerk User Management */}
      </div>
      <MobileNav />
    </nav>
  );
};

export default NavBar;
