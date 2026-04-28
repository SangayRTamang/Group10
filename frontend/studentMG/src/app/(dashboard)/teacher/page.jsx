// import Announcements from "@/components/Announcements";
// import BigCalendar from "@/components/BigCalender";
const TeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      <div className="w-full xl:w-2/3 space-y-4">
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Teacher Workspace</p>
          <h1 className="mt-2 text-2xl font-semibold">Classroom Schedule</h1>
          <p className="mt-2 text-sm text-slate-300">Manage your classes, monitor submissions, and plan lesson flow for the week.</p>
        </section>

        <div className="h-full bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Today Classes</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="rounded-lg bg-slate-50 p-3 text-slate-700">08:30 - Grade 6 Mathematics</div>
            <div className="rounded-lg bg-slate-50 p-3 text-slate-700">10:15 - Grade 7 Mathematics</div>
            <div className="rounded-lg bg-slate-50 p-3 text-slate-700">01:00 - Grade 8 Mathematics</div>
          </div>
          {/* <BigCalendar /> */}
        </div>
      </div>

      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-800">Tasks</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li className="rounded-lg bg-slate-50 p-3">Review quiz submissions (24)</li>
            <li className="rounded-lg bg-slate-50 p-3">Prepare chapter test for Thursday</li>
            <li className="rounded-lg bg-slate-50 p-3">Send progress update to parents</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-800">Weekly Completion</h3>
          <p className="mt-2 text-3xl font-semibold text-slate-800">82%</p>
          <p className="mt-1 text-sm text-slate-500">Syllabus coverage is on track.</p>
        </div>
      </div>
    </div>
  );
};
export default TeacherPage;
