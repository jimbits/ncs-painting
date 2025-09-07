"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import RollOnIcon from "@/icons/new.svg";
import { Menu, PhoneCallIcon, User2Icon } from "lucide-react";
import DarkModeToggle from "@/lib/DarkModeToggle";
interface AppBarProps {
  children?: ReactNode;
  className?: string;
}

function AppBar({ className }: AppBarProps) {
  return (
    <div className={cn("px-2 py-3 dark:bg-gray-900", className)}>
      <ul className={cn("flex items-center justify-between")}>
        <li className=" ">
          <RollOnIcon className="w-12 fill-slate-900 dark:fill-white" />
        </li>

        <li className="">
          <Menu className="h-10 w-10 text-slate-900 lg:hidden dark:text-white" />
          <figure className="group hidden select-none lg:flex lg:flex-col lg:items-center">
            <User2Icon className="w-6 group-hover:stroke-slate-900 dark:text-white" />
            <figcaption className="text-xs group-hover:text-indigo-600 dark:text-white">
              <DarkModeToggle />
            </figcaption>
          </figure>
        </li>
      </ul>
      {/* <nav className="hidden lg:mb-6 lg:flex lg:justify-between">
        <figure>
          <figcaption>brand</figcaption>
        </figure>
        <ul className="flex">
          <li>kipsic singelit.</li>
          <li>sit koptetur </li>
          <li>ectetur adipis</li>
          <li>amiput conse</li>
          <li>shmet consectetur </li>
          <li>ectetur adipis</li>
        </ul>
        <p>customer login</p>
      </nav> */}
    </div>
  );
}

export default AppBar;
