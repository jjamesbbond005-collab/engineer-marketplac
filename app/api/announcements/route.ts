import { NextResponse } from 'next/server';
import { announcements } from '@/lib/school-data';

export async function GET() {
  return NextResponse.json(announcements);
}
