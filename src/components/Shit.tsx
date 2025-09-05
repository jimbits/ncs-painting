"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroBrushStrokes() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Background SVG */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          {/* Pastel palette */}
          <linearGradient id="pink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE2E4" />
            <stop offset="100%" stopColor="#F8E1D4" />
          </linearGradient>
          <linearGradient id="blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#CDE7F0" />
            <stop offset="100%" stopColor="#E6F3FA" />
          </linearGradient>
          <linearGradient id="mint" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E2F0CB" />
            <stop offset="100%" stopColor="#F1F8E8" />
          </linearGradient>
          <linearGradient id="lav" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EADCF8" />
            <stop offset="100%" stopColor="#F4EEFE" />
          </linearGradient>
          <linearGradient id="butter" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF1BF" />
            <stop offset="100%" stopColor="#FFF7D9" />
          </linearGradient>

          {/* Feather mask: fades to transparent on the right side */}
          <linearGradient id="fadeRight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" />
            <stop offset="55%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
          <mask id="featherRight" maskUnits="userSpaceOnUse">
            <rect
              x="0"
              y="0"
              width="1440"
              height="900"
              fill="url(#fadeRight)"
            />
          </mask>

          {/* Alternative: fades to transparent on the left side */}
          <linearGradient id="fadeLeft" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="white" />
            <stop offset="55%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
          <mask id="featherLeft" maskUnits="userSpaceOnUse">
            <rect x="0" y="0" width="1440" height="900" fill="url(#fadeLeft)" />
          </mask>

          {/* Bristle edge filter */}
          <filter id="bristle" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="1"
              seed="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="9"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="0.35" />
          </filter>
        </defs>

        {/* Brush strokes */}
        <g filter="url(#bristle)" mask="url(#featherRight)">
          <path
            d="M-50,180 C 300,120 1140,210 1520,140 L1520,260 C 1120,320 320,230 -50,300 Z"
            fill="url(#blue)"
            opacity="0.6"
          />
          <path
            d="M-60,330 C 280,300 1120,420 1510,340 L1510,460 C 1110,520 320,430 -60,500 Z"
            fill="url(#pink)"
            opacity="0.65"
          />
          <path
            d="M-40,490 C 260,470 1040,590 1500,520 L1500,640 C 1080,700 320,610 -40,670 Z"
            fill="url(#mint)"
            opacity="0.55"
          />
          <path
            d="M-20,640 C 260,620 980,720 1480,680 L1480,780 C 1000,850 300,770 -20,820 Z"
            fill="url(#lav)"
            opacity="0.55"
          />
          <path
            d="M-30,760 C 220,750 900,820 1460,800 L1460,880 C 980,940 260,900 -30,930 Z"
            fill="url(#butter)"
            opacity="0.5"
          />
        </g>
      </svg>

      {/* Content container */}
      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36 lg:py-40">
        <motion.h1
          className="max-w-3xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Soft brushstroke hero for a gentle, artsy vibe
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg leading-8 text-gray-600"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        >
          Pastel, feathered strokes created with pure SVG. Tweak the paths,
          gradients, and masks for your brand.
        </motion.p>
        <motion.div
          className="mt-10 flex gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <a
            href="#"
            className="rounded-2xl bg-gray-900 px-5 py-3 text-white shadow-lg shadow-black/10 hover:bg-black"
          >
            Get started
          </a>
          <a
            href="#"
            className="rounded-2xl px-5 py-3 text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  );
}
