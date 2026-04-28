"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ROLES = [
  { key: "admin", label: "Admin", icon: "🛡️" },
  { key: "teacher", label: "Teacher", icon: "📚" },
  { key: "student", label: "Student", icon: "🎒" },
];

const ROLE_ROUTES = {
  admin: "/admin",
  teacher: "/teacher",
  student: "/student",
};

const INPUT_BASE =
  "w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300";

const SignInPage = () => {
  const router = useRouter();
  const [role, setRole] = useState("admin");
  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function validate() {
    if (!form.email.trim() || !form.email.includes("@")) {
      return "Please enter a valid email address.";
    }
    if (form.password.length < 4) {
      return "Password must be at least 4 characters.";
    }
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setLoading(true);
    setError("");

    await new Promise((r) => setTimeout(r, 700));
    const data = await import("@/lib/data");
    data.setRole(role);
    router.push(ROLE_ROUTES[role]);
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <section className="hidden lg:flex flex-col justify-between bg-slate-900 text-white p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-300">School Hub</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight">
              Smart school management starts here.
            </h1>
            <p className="mt-4 text-sm text-slate-300">
              Sign in as Admin, Teacher, or Student and continue to your personalized dashboard.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <div className="rounded-xl bg-white/10 border border-white/10 p-4">
              Keep all campus activities in one place.
            </div>
            <div className="rounded-xl bg-white/10 border border-white/10 p-4">
              Secure role-based access with a clean interface.
            </div>
          </div>
        </section>

        <section className="p-6 sm:p-8 md:p-10">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-800">Sign In</h2>
            <p className="mt-1 text-sm text-slate-500">Welcome back. Please enter your details.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Sign in as</p>
              <div className="grid grid-cols-3 gap-2">
                {ROLES.map(({ key, label, icon }) => {
                  const active = role === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setRole(key)}
                      className={`flex flex-col items-center gap-1 py-2.5 px-2 rounded-xl border transition-all text-slate-700
                      ${
                        active
                          ? "ring-2 ring-slate-600 border-slate-400 bg-slate-100"
                          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <span className="text-xl">{icon}</span>
                      <span className="text-xs font-medium">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-slate-500 uppercase tracking-wide">Email address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@school.edu"
                className={INPUT_BASE}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-slate-500 uppercase tracking-wide">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={INPUT_BASE}
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="inline-flex items-center gap-2 text-slate-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember((v) => !v)}
                  className="rounded border-slate-300"
                />
                Remember me
              </label>
              <Link href="/sign-in" className="text-slate-600 hover:text-slate-900 hover:underline">
                Forgot password?
              </Link>
            </div>

            {error && <p className="text-xs text-red-500">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-sm font-semibold shadow-sm transition-all active:scale-[0.98] disabled:opacity-60 bg-slate-900 text-white hover:bg-slate-800"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <p className="text-xs text-slate-500 text-center">
              Need an account?{" "}
              <Link href="/sign-in" className="text-slate-700 font-medium hover:underline">
                Contact admin
              </Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SignInPage;