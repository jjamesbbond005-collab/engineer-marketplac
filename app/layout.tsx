const notices = [
  {
    title: 'Parent-Teacher Meeting',
    date: '2026-10-10',
    body: 'The next parent-teacher conference is scheduled for Friday at 4:00 PM in the school hall.',
  },
  {
    title: 'Science Fair Registration',
    date: '2026-10-08',
    body: 'Students interested in the inter-school science fair should submit projects by next Monday.',
  },
  {
    title: 'Exam Timetable Updated',
    date: '2026-10-06',
    body: 'The final exams timetable has been updated and is available in the student portal.',
  },
];

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Communication</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Announcements</h1>
          </div>
          <a href="/dashboard" className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-cyan-500 hover:text-cyan-300">
            Dashboard
          </a>
        </header>

        <section className="space-y-4">
          {notices.map((notice) => (
            <article key={notice.title} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-soft">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">{notice.title}</h2>
                <span className="text-xs text-slate-400">{notice.date}</span>
              </div>
              <p className="text-sm leading-6 text-slate-300">{notice.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
