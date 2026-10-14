const attendanceData = [
  { day: 'Mon', present: 128, absent: 9, late: 14 },
  { day: 'Tue', present: 131, absent: 8, late: 12 },
  { day: 'Wed', present: 126, absent: 11, late: 15 },
  { day: 'Thu', present: 133, absent: 7, late: 10 },
  { day: 'Fri', present: 136, absent: 6, late: 9 },
];

export default function AttendancePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Operations</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Attendance</h1>
          </div>
          <a href="/dashboard" className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-cyan-500 hover:text-cyan-300">
            Dashboard
          </a>
        </header>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-soft">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-3 font-medium">Day</th>
                  <th className="py-3 font-medium">Present</th>
                  <th className="py-3 font-medium">Absent</th>
                  <th className="py-3 font-medium">Late</th>
                  <th className="py-3 font-medium">Rate</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((row) => {
                  const rate = Math.round((row.present / (row.present + row.absent + row.late)) * 100);
                  return (
                    <tr key={row.day} className="border-b border-slate-800 last:border-0">
                      <td className="py-3 font-medium text-white">{row.day}</td>
                      <td className="py-3 text-slate-300">{row.present}</td>
                      <td className="py-3 text-slate-300">{row.absent}</td>
                      <td className="py-3 text-slate-300">{row.late}</td>
                      <td className="py-3 text-cyan-300">{rate}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
