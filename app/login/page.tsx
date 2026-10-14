import Link from 'next/link';

const metrics = [
  { label: 'Students', value: '1,240' },
  { label: 'Teachers', value: '96' },
  { label: 'Attendance', value: '94.8%' },
  { label: 'Classes', value: '42' },
];

const features = [
  'Student and teacher management',
  'Attendance and grade tracking',
  'Announcements and school notices',
  'Admin, teacher, and student views',
  'Vercel-ready architecture',
  'Supabase and Neon-ready database layer',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 shadow-soft">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">SchoolOps</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300">
              Login
            </Link>
          </div>
        </header>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              School management system
            </p>
            <h1 className="max-w-xl text-4xl font-black leading-tight text-white md:text-6xl">
              Modern systems for smarter schools.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Manage students, teachers, attendance, grades, classes, and school communication from one intelligent dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/login" className="rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
                Open dashboard
              </Link>
              <Link href="/dashboard" className="rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300">
                View demo dashboard
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-sm text-slate-400">{metric.label}</p>
                  <p className="mt-3 text-3xl font-bold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-sm text-slate-400">This week</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• 11 new student registrations</li>
                <li>• Attendance improved by 4.2%</li>
                <li>• 3 new academic announcements</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-white">Everything your school needs</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-200">
                {feature}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
