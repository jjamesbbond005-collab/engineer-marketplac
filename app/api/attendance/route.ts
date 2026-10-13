import { NextResponse } from 'next/server';
import { attendanceRecords } from '@/lib/school-data';

export async function GET() {
  return NextResponse.json(attendanceRecords);
}
