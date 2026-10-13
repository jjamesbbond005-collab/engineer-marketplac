import { NextResponse } from 'next/server';
import { teachers } from '@/lib/school-data';

export async function GET() {
  return NextResponse.json(teachers);
}
