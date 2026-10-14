@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-slate-950 text-slate-100;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

.badge {
  @apply inline-flex items-center rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-200;
}

.shadow-soft {
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.18);
}
