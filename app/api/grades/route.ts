import { NextResponse } from 'next/server';
import { gradeReports } from '@/lib/school-data';

export async function GET() {
  return NextResponse.json(gradeReports);
}
