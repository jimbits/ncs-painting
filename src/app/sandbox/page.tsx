import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SandBoxProps {
  children?: ReactNode;
  className?: string;
}

function SandBox({ className }: SandBoxProps) {
  return (
    <div className="p-4">
      <img
        src="https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_320/v1756737700/ncs-painting-edmonton/about-us/ncs-painting-131_jo352i.jpg"
        srcSet="
    https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_320/v1756737700/ncs-painting-edmonton/about-us/ncs-painting-131_jo352i.jpg 320w,
    https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_500/v1756737700/ncs-painting-edmonton/about-us/ncs-painting-131_jo352i.jpg 500w,
    https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_720/v1756737700/ncs-painting-edmonton/about-us/ncs-painting-131_jo352i.jpg 720w,
    https://res.cloudinary.com/jimbits/image/upload/c_scale,f_auto,w_900/v1756737700/ncs-painting-edmonton/about-us/ncs-painting-131_jo352i.jpg 900w
  "
        sizes="(max-width: 480px) 100vw,
         (max-width: 960px) calc(320px + (100vw - 480px) * 1.2083),
         900px"
        width="570"
        height="384"
        alt="room being painted red with ladder, red paint, roller and brush at the center of the room on the floor"
        className="w-full max-w-[900px] rounded-xl shadow-md"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
    </div>
  );
}

export default SandBox;
