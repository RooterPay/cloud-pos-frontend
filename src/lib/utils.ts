import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function logError(msg: string, err?: string) {
  console.error(msg, err);
}

export function pathSplitter(path: string): string[] {
  return path.split('/').filter(Boolean);
}

export function getWeekLabel(): string {
  const today = new Date();
  const monday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const sunday = new Date(
    monday.getFullYear(),
    monday.getMonth(),
    monday.getDate() + 7
  );
  return `${monday.getDate()} - ${sunday.getDate()} ${monday.toLocaleString('default', { month: 'short' })}`;
}
