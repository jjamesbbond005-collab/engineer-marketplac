export type Student = {
  id: string;
  name: string;
  className: string;
  attendance: number;
  averageGrade: number;
  status: 'Active' | 'On Leave';
};

export type Teacher = {
  id: string;
  name: string;
  subject: string;
  classes: string;
  rating: number;
};

export type AttendanceRecord = {
  day: string;
  present: number;
  absent: number;
  late: number;
};

export type GradeRecord = {
  subject: string;
  teacher: string;
  average: number;
};

export type Announcement = {
  title: string;
  content: string;
  date: string;
};

export const students: Student[] = [
  { id: 'S-101', name: 'Aisha Okafor', className: 'Grade 10-A', attendance: 96, averageGrade: 91, status: 'Active' },
  { id: 'S-102', name: 'Daniel Mensah', className: 'Grade 9-B', attendance: 89, averageGrade: 86, status: 'Active' },
  { id: 'S-103', name: 'Grace Thompson', className: 'Grade 12-C', attendance: 94, averageGrade: 93, status: 'Active' },
  { id: 'S-104', name: 'James Kofi', className: 'Grade 11-A', attendance: 86, averageGrade: 82, status: 'On Leave' },
  { id: 'S-105', name: 'Mariam Abdou', className: 'Grade 8-D', attendance: 90, averageGrade: 88, status: 'Active' },
];

export const teachers: Teacher[] = [
  { id: 'T-201', name: 'Mrs. Ada Koomson', subject: 'Mathematics', classes: 'Grade 9-12', rating: 4.9 },
  { id: 'T-202', name: 'Mr. Solomon Eze', subject: 'Physics', classes: 'Grade 10-12', rating: 4.8 },
  { id: 'T-203', name: 'Ms. Chloe Boateng', subject: 'English Literature', classes: 'Grade 7-10', rating: 4.7 },
  { id: 'T-204', name: 'Mr. Ibrahim Yusuf', subject: 'Biology', classes: 'Grade 8-12', rating: 4.9 },
];

export const attendanceRecords: AttendanceRecord[] = [
  { day: 'Mon', present: 128, absent: 9, late: 14 },
  { day: 'Tue', present: 131, absent: 8, late: 12 },
  { day: 'Wed', present: 126, absent: 11, late: 15 },
  { day: 'Thu', present: 133, absent: 7, late: 10 },
  { day: 'Fri', present: 136, absent: 6, late: 9 },
];

export const gradeReports: GradeRecord[] = [
  { subject: 'Mathematics', teacher: 'Mrs. Koomson', average: 92 },
  { subject: 'Physics', teacher: 'Mr. Eze', average: 88 },
  { subject: 'Chemistry', teacher: 'Ms. Naa', average: 90 },
  { subject: 'English', teacher: 'Ms. Boateng', average: 94 },
  { subject: 'Biology', teacher: 'Mr. Yusuf', average: 89 },
];

export const announcements: Announcement[] = [
  {
    title: 'Parent-Teacher Meeting',
    content: 'The next parent-teacher conference is scheduled for Friday at 4:00 PM in the school hall.',
    date: '2026-10-10',
  },
  {
    title: 'Science Fair Registration',
    content: 'Students interested in the inter-school science fair should submit projects by next Monday.',
    date: '2026-10-08',
  },
  {
    title: 'Exam Timetable Updated',
    content: 'The final exams timetable has been updated and is available in the student portal.',
    date: '2026-10-06',
  },
];

export function getOverview() {
  const totalStudents = students.length;
  const totalTeachers = teachers.length;
  const totalClasses = 12;
  const attendanceRate = Math.round(
    attendanceRecords.reduce((sum, record) => sum + record.present, 0) /
      attendanceRecords.reduce((sum, record) => sum + record.present + record.absent + record.late, 0) *
      100
  );

  return {
    totalStudents,
    totalTeachers,
    totalClasses,
    attendanceRate,
    students: students.slice(0, 5),
    teachers: teachers.slice(0, 4),
    attendance: attendanceRecords,
    grades: gradeReports,
    announcements,
  };
}
