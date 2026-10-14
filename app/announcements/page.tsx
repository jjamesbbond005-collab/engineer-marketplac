const gradeReports = [
  { subject: 'Mathematics', teacher: 'Mrs. Ada Koomson', average: 92 },
  { subject: 'Physics', teacher: 'Mr. Solomon Eze', average: 88 },
  { subject: 'Chemistry', teacher: 'Ms. Naa Mensah', average: 90 },
  { subject: 'English', teacher: 'Ms. Chloe Boateng', average: 94 },
  { subject: 'Biology', teacher: 'Mr. Ibrahim Yusuf', average: 89 },
];

export default function GradesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Academics</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Grade performance</h1>
          </div>
          <a href="/dashboard" className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-cyan-500 hover:text-cyan-300">
            Dashboard
          </a>
        </header>

        <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-soft">
          {gradeReports.map((subject) => (
            <div key={subject.subject} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-slate-300">{subject.subject}</span>
                <span className="text-cyan-300">{subject.average}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-cyan-500" style={{ width: `${subject.average}%` }} />
              </div>
              <p className="mt-2 text-xs text-slate-400">Teacher: {subject.teacher}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
