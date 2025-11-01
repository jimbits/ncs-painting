import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
interface ResponseProps {
  children?: ReactNode;
  className?: string;
}

function Response({ className }: ResponseProps) {
  return (
    <button type="button" title="responsive guide" className="leading-0">
      <ArrowsPointingOutIcon className="h-6 w-6 stroke-1" />
    </button>
  );
}

export default Response;
