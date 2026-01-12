'use client';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import Test from 'public/Test';
import NCSLogoBrand from '../branding/NCSLogo';
import { NCSTextBrandLarge, NCSTextBrandSmall } from '../branding/NCSTextBrand';
import { PrefersColorScheme } from '@/components/ui';
import Response from '@/tools/responsive-guide/Response';

// Replace with Heroicons:
import {
  Bars3Icon,
  UserIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

interface AppBarProps {
  children?: ReactNode;
  className?: string;
}

function AppBar({ className }: AppBarProps) {
  return (
    <div className={cn('px-2 pt-3 dark:bg-gray-900', className)}>
      <ul className={cn('flex items-center justify-between')}>
        <li>
          <figure className="flex">
            <Test className="" />
            <figcaption className="text-[10px] font-semibold tracking-wide text-stone-600">
              Roll On Quality
            </figcaption>
          </figure>
        </li>

        <li className="flex items-center gap-3">
          <Bars3Icon className="h-10 w-10 text-slate-900 md:hidden dark:text-white" />
        </li>

        <li className="hidden md:flex">
          <Response />
          <PrefersColorScheme />
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
