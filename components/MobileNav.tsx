"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { sidebarLinks } from "@/constants/sidebarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild className="text-white">
          <Image
            src={"/icons/hamburger.svg"}
            alt="expand icon"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
          ></Image>
        </SheetTrigger>
        <SheetContent
          className="bg-dark-2 text-white border-none"
          side={"left"}
        >
          {" "}
          <SheetClose asChild>
            <Link href={"/"} className="flex items-center gap-1">
              <Image
                src={"/icons/logo.svg"}
                alt="bloom logo"
                width={32}
                height={32}
                className="max-sm:size-10"
              ></Image>
              <p className="text-[26px] text-white font-extrabold ">Bloom</p>
            </Link>
          </SheetClose>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <section className="flex h-full flex-col gap-6 pt-16 text-white">
              {sidebarLinks.map((link) => {
                return (
                  <SheetClose key={link.label} asChild>
                    <Link
                      key={link.label}
                      href={link.route}
                      className={cn(
                        "flex gap-4 items-center p-4 text-blue-2 rounded-lg justify-start font-semibold",
                        (pathName === link.route ||
                          pathName.startsWith(`${link.route}/`)) &&
                          "bg-blue-1 text-white"
                      )}
                    >
                      <Image
                        src={link.imageUrl}
                        alt={link.label}
                        height={24}
                        width={24}
                      ></Image>
                      <p className="text-lg font-semibold ">{link.label}</p>
                    </Link>
                  </SheetClose>
                );
              })}
            </section>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
