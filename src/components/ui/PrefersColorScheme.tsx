'use client';

import { ReactNode, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
interface DarkModeProps {
  children?: ReactNode;
  className?: string;
}

function PrefersColorScheme({ className }: DarkModeProps) {
  const [dark, setDark] = useState(false);
  return (
    <button type="button" onClick={() => setDark(!dark)} className="leading-0">
      {dark ? (
        <span className="inline-flex flex-col items-center">
          <MoonIcon className="h-6 w-6" />
        </span>
      ) : (
        <span className="inline-flex flex-col items-center">
          <SunIcon className="h-6 w-6" />
        </span>
      )}
    </button>
  );
}

export default PrefersColorScheme;
