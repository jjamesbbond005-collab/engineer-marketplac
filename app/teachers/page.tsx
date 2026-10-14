'use client';

import { useMemo, useState } from 'react';

const initialStudents = [
  { id: 'STD-1001', name: 'Aisha Okafor', className: 'Grade 10-A', attendance: 96, avg: 91, status: 'Active' },
  { id: 'STD-1002', name: 'Daniel Mensah', className: 'Grade 9-B', attendance: 89, avg: 86, status: 'Active' },
  { id: 'STD-1003', name: 'Grace Thompson', className: 'Grade 12-C', attendance: 94, avg: 93, status: 'Active' },
  { id: 'STD-1004', name: 'James Kofi', className: 'Grade 11-A', attendance: 86, avg: 82, status: 'On Leave' },
  { id: 'STD-1005', name: 'Mariam Abdou', className: 'Grade 8-D', attendance: 90, avg: 88, status: 'Active' },
];

export default function StudentsPage() {
  const [students, setStudents] = useState(initialStudents);
  const [form, setForm] = useState({ name: '', className: '', attendance: '', avg: '' });

  const totalAttendance = useMemo(
    () => Math.round(students.reduce((sum, student) => sum + student.attendance, 0) / students.length),
    [students]
  );

  function handleAddStudent() {
    if (!form.name || !form.className) return;

    setStudents((current) => [
      {
        id: `STD-${Date.now()}`,
        name: form.name,
        className: form.className,
        attendance: Number(form.attendance) || 0,
        avg: Number(form.avg) || 0,
        status: 'Active',
      },
      ...current,
    ]);

    setForm({ name: '', className: '', attendance: '', avg: '' });
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Academics</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Student records</h1>
          </div>
          <a href="/dashboard" className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-cyan-500 hover:text-cyan-300">
            Back to dashboard
          </a>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Student list</h2>
              <span className="badge">Avg attendance: {totalAttendance}%</span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-3 font-medium">Student</th>
                    <th className="py-3 font-medium">Class</th>
                    <th className="py-3 font-medium">Attendance</th>
                    <th className="py-3 font-medium">Avg</th>
                    <th className="py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b border-slate-800 last:border-0">
                      <td className="py-3">
                        <p className="font-medium text-white">{student.name}</p>
                        <p className="text-xs text-slate-500">{student.id}</p>
                      </td>
                      <td className="py-3 text-slate-300">{student.className}</td>
                      <td className="py-3 text-slate-300">{student.attendance}%</td>
                      <td className="py-3 text-slate-300">{student.avg}%</td>
                      <td className="py-3">
                        <span className={`rounded-full px-2 py-1 text-xs ${student.status === 'Active' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}`}>
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Add new student</h2>
            <div className="mt-5 space-y-4">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Student name"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-white placeholder:text-slate-500"
              />
              <input
                value={form.className}
                onChange={(e) => setForm({ ...form, className: e.target.value })}
                placeholder="Class e.g. Grade 10-A"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-white placeholder:text-slate-500"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  value={form.attendance}
                  onChange={(e) => setForm({ ...form, attendance: e.target.value })}
                  placeholder="Attendance"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-white placeholder:text-slate-500"
                />
                <input
                  type="number"
                  value={form.avg}
                  onChange={(e) => setForm({ ...form, avg: e.target.value })}
                  placeholder="Avg grade"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-white placeholder:text-slate-500"
                />
              </div>
              <button onClick={handleAddStudent} className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-medium text-slate-950 hover:bg-cyan-400">
                Add student
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
