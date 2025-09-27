// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// client version
export function clientTruncateText(
  text: string,
  wordLimit: number = 50
): {
  truncated: string;
  isTruncated: boolean;
} {
  const words = text.split(' ');

  if (words.length <= wordLimit) {
    return { truncated: text, isTruncated: false };
  }

  return {
    truncated: words.slice(0, wordLimit).join(' ') + '...',
    isTruncated: true,
  };
}

export function getWordCount(text: string): number {
  return text.trim().split(/\s+/).length;
}

export function shouldTruncateReview(
  text: string,
  wordLimit: number = 50
): boolean {
  return getWordCount(text) > wordLimit;
}

export function truncateText(text: string, wordLimit: number = 50): string {
  const words = text.split(/\s+/);
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
}
