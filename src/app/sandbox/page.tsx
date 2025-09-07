import { cn } from "@/lib/utils";
import { ReactNode } from "react";
interface SandboxProps {
  children?: ReactNode;
  className?: string;
}
interface SingleCardProps {
  image?: string;
  CardDescription: string;
  CardTitle: string;
  titleHref: string;
  btnHref: string;
  Button: string;
}

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}: SingleCardProps) => {
  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-1/2">
      <div className="dark:bg-dark-2 relative z-10 mb-10 block items-center overflow-hidden rounded-lg bg-[#F2F5FC] sm:flex sm:items-stretch md:items-center lg:block xl:flex xl:items-stretch">
        <div className="w-full sm:max-w-[200px] md:max-w-[250px] lg:max-w-full xl:max-w-[200px] 2xl:max-w-[240px]">
          <div className="h-[250px] sm:h-full lg:h-[250px] xl:h-full">
            <img
              src={image}
              alt="image"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full p-8 sm:p-6 md:p-8">
          <h3>
            <a
              href={titleHref}
              className="text-dark hover:text-primary mb-3 block text-xl font-semibold dark:text-white"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-body-color dark:text-dark-6 mb-5 text-base leading-relaxed">
            {CardDescription}
          </p>
          {Button && (
            <a
              href={btnHref}
              className="border-primary text-primary hover:border-primary hover:bg-primary inline-block rounded-full border px-6 py-2 text-sm font-medium transition hover:text-white"
            >
              {Button}
            </a>
          )}
        </div>
        <span className="absolute right-2 bottom-2 z-[-1]">
          <svg
            width="22"
            height="30"
            viewBox="0 0 22 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="20.3422"
              cy="28.6142"
              r="1.07573"
              transform="rotate(180 20.3422 28.6142)"
              fill="#3056D3"
            />
            <circle
              cx="20.3422"
              cy="10.3271"
              r="1.07573"
              transform="rotate(180 20.3422 10.3271)"
              fill="#3056D3"
            />
            <circle
              cx="20.3383"
              cy="19.3631"
              r="1.07573"
              transform="rotate(180 20.3383 19.3631)"
              fill="#3056D3"
            />
            <circle
              cx="20.3422"
              cy="1.07564"
              r="1.07573"
              transform="rotate(180 20.3422 1.07564)"
              fill="#3056D3"
            />
            <circle
              cx="10.7094"
              cy="28.6142"
              r="1.07573"
              transform="rotate(180 10.7094 28.6142)"
              fill="#3056D3"
            />
            <circle
              cx="10.7094"
              cy="10.3271"
              r="1.07573"
              transform="rotate(180 10.7094 10.3271)"
              fill="#3056D3"
            />
            <circle
              cx="10.7094"
              cy="19.3631"
              r="1.07573"
              transform="rotate(180 10.7094 19.3631)"
              fill="#3056D3"
            />
            <circle
              cx="10.7094"
              cy="1.07564"
              r="1.07573"
              transform="rotate(180 10.7094 1.07564)"
              fill="#3056D3"
            />
            <circle
              cx="1.07661"
              cy="28.6142"
              r="1.07573"
              transform="rotate(180 1.07661 28.6142)"
              fill="#3056D3"
            />
            <circle
              cx="1.07661"
              cy="10.3271"
              r="1.07573"
              transform="rotate(180 1.07661 10.3271)"
              fill="#3056D3"
            />
            <circle
              cx="1.07661"
              cy="19.3631"
              r="1.07573"
              transform="rotate(180 1.07661 19.3631)"
              fill="#3056D3"
            />
            <circle
              cx="1.07661"
              cy="1.07564"
              r="1.07573"
              transform="rotate(180 1.07661 1.07564)"
              fill="#3056D3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

function SandBox({ className }) {
  return (
    <section>
      <SingleCard
        image="https://res.cloudinary.com/jimbits/image/upload/v1755015701/roll-on-painting/remove-3_dojwr6.png"
        CardTitle="Creative Website Themes & Templates in 2021"
        titleHref="#"
        btnHref="#"
        CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit."
        Button="View Details"
      />
    </section>
  );
}

export default SandBox;
