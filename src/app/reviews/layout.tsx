import { ReactNode } from 'react';
interface ReviewsLayoutProps {
  children: React.ReactNode;
}

export default function ReviewsLayout({ children }: ReviewsLayoutProps) {
  return <>{children}</>;
}
