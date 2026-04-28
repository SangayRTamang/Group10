// import Announcements from "@/components/Announcements";
// import BigCalendar from "@/components/BigCalender";
// import EventCalendar from "@/components/EventCalendar";
const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      <div className="w-full xl:w-2/3 space-y-4">
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Student Portal</p>
          <h1 className="mt-2 text-2xl font-semibold">My Schedule (Class 4A)</h1>
          <p className="mt-2 text-sm text-slate-300">See your daily routine, homework status, and upcoming deadlines.</p>
        </section>

        <div className="h-full bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Weekly Schedule</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-slate-50 p-3 text-slate-700">Mon - Mathematics / English / Science</div>
            <div className="rounded-lg bg-slate-50 p-3 text-slate-700">Tue - ICT / History / Physical Education</div>
            <div className="rounded-lg bg-slate-50 p-3 text-slate-700">Wed - Chemistry / Biology / Literature</div>
            <div className="rounded-lg bg-slate-50 p-3 text-slate-700">Thu - Physics / Civics / Art</div>
          </div>
          {/* <BigCalendar /> */}
        </div>
      </div>

      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-800">Assignments</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li className="rounded-lg bg-slate-50 p-3">Math Worksheet - Due Tomorrow</li>
            <li className="rounded-lg bg-slate-50 p-3">Science Project - Due Friday</li>
            <li className="rounded-lg bg-slate-50 p-3">English Essay - Due Sunday</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-800">Attendance Snapshot</h3>
          <p className="mt-2 text-3xl font-semibold text-slate-800">96%</p>
          <p className="mt-1 text-sm text-slate-500">Excellent consistency this term.</p>
        </div>
      </div>
    </div>
  );
};
export default StudentPage;
