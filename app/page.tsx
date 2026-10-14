import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-soft">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">School dashboard</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Welcome back, Admin</h1>
          </div>
          <Link href="/login" className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300">
            Back to login
          </Link>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Students', '1,240'],
            ['Teachers', '96'],
            ['Attendance', '94.8%'],
            ['Classes', '42'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-soft">
              <p className="text-sm text-slate-400">{label}</p>
              <h2 className="mt-3 text-3xl font-bold text-white">{value}</h2>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-soft">
            <h3 className="mb-4 text-xl font-semibold text-white">Recent announcements</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>• Parent-teacher meeting scheduled for Friday at 4:00 PM.</li>
              <li>• Science fair submissions close next Monday.</li>
              <li>• Final exam timetable is now available.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-soft">
            <h3 className="mb-4 text-xl font-semibold text-white">Quick actions</h3>
            <div className="flex flex-wrap gap-3">
              {['Add student', 'Add teacher', 'Mark attendance', 'Manage grades'].map((action) => (
                <button key={action} className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-400">
                  {action}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
