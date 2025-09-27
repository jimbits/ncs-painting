import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TestProps {
  children?: ReactNode;
  className?: string;
}

function Test({
  className,
}: TestProps) {
     
  return (
    <div
      className={`mx-auto max-w-7xl px-3 pt-16 pb-24 sm:px-6 sm:pt-20 sm:pb-32 lg:px-8 lg:pt-24 lg:pb-40 
         xl:px-12 xl:pt-28 xl:pb-48 2xl:px-16 2xl:pt-32 2xl:pb-56`}
    >
      3.
      Manually
      format
      with
      Shift+Alt+F
    </div>
  );
}

export default Test;
