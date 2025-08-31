import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import RollOnIcon from "@/icons/new.svg";
import { Menu, PhoneCallIcon, User2Icon } from "lucide-react";
interface AppBarProps {
  children?: ReactNode;
  className?: string;
}

function AppBar({ className }: AppBarProps) {
  return (
    <div className={cn("", className)}>
      <ul className={cn("flex items-center justify-between")}>
        <li className=" ">
          <RollOnIcon className="w-10 fill-slate-900" />
        </li>

        <li className="">
          <Menu className="text-slate-900 lg:hidden" />
          <figure className="group hidden select-none lg:flex lg:flex-col lg:items-center">
            <User2Icon className="group-hover:stroke-slate-900" />
            <figcaption className="text-xs group-hover:text-indigo-600">
              customer login
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
