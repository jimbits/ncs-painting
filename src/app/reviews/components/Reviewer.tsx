import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ReviewerProps {
  children?: ReactNode;
  className?: string;
}

function Reviewer({ className }: ReviewerProps) {
  return <div className={cn('text-inherit', className)}></div>;
}

function ReviewerName({ className }) {
  return <div className={cn('text-inherit', className)}></div>;
}

function ReviewerLocation({ className }) {
  return <div className={cn('text-inherit', className)}></div>;
}
export default Reviewer;
