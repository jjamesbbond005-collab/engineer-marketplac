import { NextResponse } from 'next/server';
import { getOverview } from '@/lib/school-data';

export async function GET() {
  return NextResponse.json(getOverview());
}
