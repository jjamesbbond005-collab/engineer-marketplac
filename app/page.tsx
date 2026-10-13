"use client";

import { useEffect, useState } from 'react';

type Student = {
  id: string;
  name: string;
  className: string;
  attendance: number;
  averageGrade: number;
  status: string;
};

type Teacher = {
  id: string;
  name: string;
  subject: string;
  classes: string;
  rating: number;
};

type AttendanceRecord = {
  day: string;
  present: number;
  absent: number;
  late: number;
};

type GradeRecord = {
  subject: string;
  teacher: string;
  average: number;
};

type Announcement = {
  title: string;
  content: string;
  date: string;
};

type DashboardData = {
  totalStudents: number;
  totalTeachers: number;
  totalClasses: number;
  attendanceRate: number;
  students: Student[];
  teachers: Teacher[];
  attendance: AttendanceRecord[];
  grades: GradeRecord[];
  announcements: Announcement[];
};

export default function Home() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch('/api/overview')
      .then((res) => res.json())
      .then((payload) => setData(payload))
      .catch(() => setData(null));
  }, []);

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-200">
        Loading school dashboard...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-soft md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">School admin</p>
            <h1 className="mt-2 text-3xl font-bold text-white">School Management System</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="badge">Term 1</span>
            <button className="rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400">
              + Add Student
            </button>
          </div>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Total Students', value: data.totalStudents, change: '+12%' },
            { label: 'Teachers', value: data.totalTeachers, change: '+3%' },
            { label: 'Active Classes', value: data.totalClasses, change: '+1' },
            { label: 'Attendance Rate', value: `${data.attendanceRate}%`, change: '+4.2%' },
          ].map((metric) => (
            <div key={metric.label} className="card">
              <p className="text-sm text-slate-400">{metric.label}</p>
              <div className="mt-3 flex items-end justify-between">
                <h2 className="text-3xl font-bold text-white">{metric.value}</h2>
                <span className="text-sm text-emerald-400">{metric.change}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card">
            <h3 className="section-title">Student overview</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-3 font-medium">Student</th>
                    <th className="py-3 font-medium">Class</th>
                    <th className="py-3 font-medium">Attendance</th>
                    <th className="py-3 font-medium">Avg</th>
                  </tr>
                </thead>
                <tbody>
                  {data.students.map((student) => (
                    <tr key={student.id} className="border-b border-slate-800 last:border-0">
                      <td className="py-3">
                        <div>
                          <p className="font-medium text-white">{student.name}</p>
                          <p className="text-xs text-slate-400">{student.id}</p>
                        </div>
                      </td>
                      <td className="py-3 text-slate-300">{student.className}</td>
                      <td className="py-3 text-slate-300">{student.attendance}%</td>
                      <td className="py-3 text-slate-300">{student.averageGrade}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <h3 className="section-title">Teacher roster</h3>
            <div className="space-y-4">
              {data.teachers.map((teacher) => (
                <div key={teacher.id} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 p-3">
                  <div>
                    <p className="font-medium text-white">{teacher.name}</p>
                    <p className="text-sm text-slate-400">{teacher.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-cyan-300">{teacher.classes}</p>
                    <p className="text-xs text-slate-400">Rating {teacher.rating}/5</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="card">
            <h3 className="section-title">Attendance tracking</h3>
            <div className="space-y-3">
              {data.attendance.map((entry) => (
                <div key={entry.day} className="rounded-xl border border-slate-800 bg-slate-950/40 p-3">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{entry.day}</span>
                    <span>{entry.present} present</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: `${(entry.present / (entry.present + entry.absent + entry.late)) * 100}%` }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-slate-400">
                    <span>Absent: {entry.absent}</span>
                    <span>Late: {entry.late}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="section-title">Class performance</h3>
            <div className="space-y-4">
              {data.grades.map((item) => (
                <div key={item.subject}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">{item.subject}</span>
                    <span className="text-cyan-300">{item.average}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-cyan-500" style={{ width: `${item.average}%` }} />
                  </div>
                  <p className="mt-2 text-xs text-slate-400">Teacher: {item.teacher}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 card">
          <h3 className="section-title">Announcements</h3>
          <div className="space-y-4">
            {data.announcements.map((note) => (
              <div key={note.title} className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-semibold text-white">{note.title}</p>
                  <span className="text-xs text-slate-400">{note.date}</span>
                </div>
                <p className="text-sm leading-6 text-slate-300">{note.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
