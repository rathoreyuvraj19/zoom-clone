"use client";
import { sidebarLinks } from "@/constants/sidebarLinks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathName = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link) => {
          console.log(pathName.startsWith(`${link.route}/`));
          return (
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
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SideBar;
