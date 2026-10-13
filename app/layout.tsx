import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Management System',
  description: 'Full stack school management platform with administration, grades, attendance and communication tools.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
