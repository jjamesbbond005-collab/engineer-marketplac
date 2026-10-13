import { NextResponse } from 'next/server';
import { students } from '@/lib/school-data';

export async function GET() {
  return NextResponse.json(students);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newStudent = {
    id: `S-${Date.now()}`,
    name: body.name ?? 'New Student',
    className: body.className ?? 'Grade 9-A',
    attendance: Number(body.attendance ?? 0),
    averageGrade: Number(body.averageGrade ?? 0),
    status: body.status ?? 'Active',
  };

  students.push(newStudent);
  return NextResponse.json(newStudent, { status: 201 });
}
