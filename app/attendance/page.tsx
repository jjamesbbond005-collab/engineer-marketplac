const teachers = [
  { name: 'Mrs. Ada Koomson', subject: 'Mathematics', classes: 'Grade 9-12', rating: 4.9 },
  { name: 'Mr. Solomon Eze', subject: 'Physics', classes: 'Grade 10-12', rating: 4.8 },
  { name: 'Ms. Chloe Boateng', subject: 'English Literature', classes: 'Grade 7-10', rating: 4.7 },
  { name: 'Mr. Ibrahim Yusuf', subject: 'Biology', classes: 'Grade 8-12', rating: 4.9 },
];

export default function TeachersPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Staff</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Teacher roster</h1>
          </div>
          <a href="/dashboard" className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-cyan-500 hover:text-cyan-300">
            Dashboard
          </a>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {teachers.map((teacher) => (
            <div key={teacher.name} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-soft">
              <p className="text-lg font-semibold text-white">{teacher.name}</p>
              <p className="mt-2 text-sm text-cyan-300">{teacher.subject}</p>
              <div className="mt-5 space-y-2 text-sm text-slate-300">
                <p>Classes: {teacher.classes}</p>
                <p>Rating: {teacher.rating}/5</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
