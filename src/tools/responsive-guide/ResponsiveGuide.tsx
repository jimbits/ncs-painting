'use client';
import { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import useGetBreakpoint from '@/hooks/useGetBreakpoint';

export interface ResponsiveGuideProps {
  children?: ReactNode;
  className?: string;
  visible?: boolean;
  position?: GuidePosition;
}
export type GuidePosition = 'left' | 'right' | 'top' | 'bottom';

const guidePositions = {
  left: 'inset-y-0 left-0  ',
  right: 'inset-y-0 right-0 ',
  top: 'inset-x-0 top-0   ',
  bottom: 'inset-x-0 bottom-0  ',
};

function ResponsiveGuide({
  className,
  visible = false,
  position = 'bottom',
}: ResponsiveGuideProps) {
  const [viewport, setViewPortSize] = useState(0);
  const breakPoint = useGetBreakpoint(viewport);

  useEffect(() => {
    console.log('adding event listener');
    const handleResize = () => setViewPortSize(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return function cleanUp() {
      console.log('Clean up remove listener');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={cn(
        'responsive fixed z-100 py-3',
        guidePositions[position],
        className
      )}
    >
      <div className="text-center leading-0"> {breakPoint}</div>
    </div>
  );
}

export default ResponsiveGuide;
