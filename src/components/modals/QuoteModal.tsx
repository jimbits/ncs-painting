import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface QuoteModalProps {
  children?: ReactNode;
  className?: string;
}

function QuoteModal({ className }: QuoteModalProps) {
  return <div className={cn("text-inherit", className)}></div>;
}

export default QuoteModal;
