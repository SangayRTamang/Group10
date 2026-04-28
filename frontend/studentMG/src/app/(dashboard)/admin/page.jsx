// import Announcements from "@/components/Announcements";
// import AttendanceChart from "@/components/AttendanceChart";
// import CountChart from "@/components/CountChart";
// import EventCalendar from "@/components/EventCalendar";
// import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col">
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Admin Dashboard</p>
        <h1 className="mt-2 text-2xl font-semibold">Welcome back, Admin</h1>
        <p className="mt-2 text-sm text-slate-300">
          Track campus activity, monitor teams, and stay aligned with the daily priorities.
        </p>
      </section>

      <div className="flex gap-4 flex-col md:flex-row">
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="student" />
            <UserCard type="teacher" />
            <UserCard type="staff" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Pending approvals</p>
              <p className="mt-2 text-3xl font-semibold text-slate-800">16</p>
              <p className="mt-1 text-sm text-slate-500">Admission forms and profile updates</p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Today attendance</p>
              <p className="mt-2 text-3xl font-semibold text-slate-800">94%</p>
              <p className="mt-1 text-sm text-slate-500">Improved compared to yesterday</p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Open tickets</p>
              <p className="mt-2 text-3xl font-semibold text-slate-800">8</p>
              <p className="mt-1 text-sm text-slate-500">IT and operations requests</p>
            </article>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-800">Quick Actions</h2>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              <button className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition">
                Add Teacher
              </button>
              <button className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition">
                Add Student
              </button>
              <button className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition">
                Publish Notice
              </button>
              <button className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition">
                View Reports
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800">Today agenda</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-600">
              <li className="rounded-lg bg-slate-50 p-3">9:30 AM - Principal coordination meeting</li>
              <li className="rounded-lg bg-slate-50 p-3">12:00 PM - Parent feedback review</li>
              <li className="rounded-lg bg-slate-50 p-3">2:15 PM - Staff planning session</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800">Announcements</h3>
            <p className="mt-3 text-sm text-slate-600">
              Mid-term exam schedule has been published. Please remind all teachers to finalize scores by Friday.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
