export default function PaintSpots() {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden bg-white">
      {/* Background SVG with animated spots */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Pastel radial gradients */}
          <radialGradient id="g-rose" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD4DA" />
            <stop offset="100%" stopColor="#FFE9ED" />
          </radialGradient>
          <radialGradient id="g-sky" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CFEAF7" />
            <stop offset="100%" stopColor="#EAF6FC" />
          </radialGradient>
          <radialGradient id="g-mint" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DFF5E3" />
            <stop offset="100%" stopColor="#F0FBF2" />
          </radialGradient>
          <radialGradient id="g-lav" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E7DCF9" />
            <stop offset="100%" stopColor="#F5F0FE" />
          </radialGradient>
          <radialGradient id="g-butter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF1C6" />
            <stop offset="100%" stopColor="#FFF8DD" />
          </radialGradient>
          <radialGradient id="g-peach" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE1C9" />
            <stop offset="100%" stopColor="#FFF1E6" />
          </radialGradient>

          {/* Blurs */}
          <filter id="blur-s" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="blur-m" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="24" />
          </filter>
          <filter id="blur-l" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="42" />
          </filter>

          {/* Optional wobble */}
          <filter
            id="paint-wobble"
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.7"
              numOctaves="1"
              seed="8"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="6"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Vignette mask */}
          <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
            <stop offset="70%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>
          <mask id="fade-edges" maskUnits="userSpaceOnUse">
            <rect x="0" y="0" width="1440" height="900" fill="url(#vignette)" />
          </mask>
        </defs>

        {/* Spots layer with Framer Motion */}
        <g mask="url(#fade-edges)" style={{ mixBlendMode: "multiply" }}>
          {/* Large daubs */}
          <g filter="url(#blur-l)">
            <circle
              cx="220"
              cy="200"
              r="180"
              fill="url(#g-sky)"
              opacity="0.8"
            />
            <circle
              cx="1220"
              cy="220"
              r="210"
              fill="url(#g-rose)"
              opacity="0.8"
            />
            <circle
              cx="980"
              cy="680"
              r="230"
              fill="url(#g-mint)"
              opacity="0.8"
            />
            <circle
              cx="320"
              cy="680"
              r="190"
              fill="url(#g-lav)"
              opacity="0.85"
            />
          </g>

          {/* Medium daubs */}
          <g filter="url(#blur-m)">
            <circle
              cx="540"
              cy="280"
              r="120"
              fill="url(#g-butter)"
              opacity="0.85"
            />
            <circle
              cx="800"
              cy="340"
              r="140"
              fill="url(#g-peach)"
              opacity="0.8"
            />
            <circle
              cx="1100"
              cy="520"
              r="120"
              fill="url(#g-lav)"
              opacity="0.85"
            />
            <circle
              cx="440"
              cy="500"
              r="130"
              fill="url(#g-rose)"
              opacity="0.8"
            />
          </g>

          {/* Small accents */}
          <g filter="url(#paint-wobble)">
            <g filter="url(#blur-s)">
              <circle
                cx="680"
                cy="180"
                r="60"
                fill="url(#g-sky)"
                opacity="0.9"
              />
              <circle
                cx="950"
                cy="240"
                r="50"
                fill="url(#g-butter)"
                opacity="0.9"
              />
              <circle
                cx="260"
                cy="420"
                r="55"
                fill="url(#g-mint)"
                opacity="0.9"
              />
              <circle
                cx="1180"
                cy="420"
                r="48"
                fill="url(#g-peach)"
                opacity="0.9"
              />
              <circle
                cx="760"
                cy="640"
                r="58"
                fill="url(#g-rose)"
                opacity="0.9"
              />
            </g>
          </g>
        </g>
      </svg>

      {/* Foreground content */}
      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36 lg:py-40">
        <p className="max-w-3xl text-6xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          NCS Painting
        </p>

        <h1 className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Edmontons Complete Interior & Exterior House Painting Services
        </h1>

        <div className="my-8 flex gap-4">
          <a
            href="#"
            className="rounded-2xl bg-gray-900 px-5 py-3 text-white shadow-lg shadow-black/10 hover:bg-black"
          >
            Call (780) - 722 6555
          </a>
          <a
            href="#"
            className="rounded-2xl px-5 py-3 text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          >
            Book Quote Online
          </a>
        </div>
      </div>
    </section>
  );
}
