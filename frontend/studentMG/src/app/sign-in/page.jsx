"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./page.css";

const ROLE_ROUTES = {
  admin: "/admin",
  teacher: "/list/teachers",
  student: "/list/students",
};

const ROLE_EXTRA_FIELDS = {
  admin: [
    {
      key: "adminCode",
      label: "Admin Code",
      type: "input",
      placeholder: "Enter admin code",
      full: true,
      required: true,
    },
  ],
  teacher: [
    {
      key: "subject",
      label: "Subject",
      type: "select",
      options: ["Math", "Science", "English", "History", "Art", "PE"],
      required: true,
    },
    {
      key: "teacherId",
      label: "Teacher ID",
      type: "input",
      placeholder: "T-0001",
      required: true,
    },
  ],
  student: [
    {
      key: "grade",
      label: "Grade",
      type: "select",
      options: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
      required: true,
    },
    {
      key: "studentId",
      label: "Student ID",
      type: "input",
      placeholder: "S-0001",
      required: true,
    },
  ],
};

const ROLE_STYLES = {
  admin:   { selected: "selected-admin",   submit: "submit-admin" },
  teacher: { selected: "selected-teacher", submit: "submit-teacher" },
  student: { selected: "selected-student", submit: "submit-student" },
};

export default function RegisterPage() {
  const router = useRouter();

  const [role, setRole] = useState("teacher");
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Reset role-specific fields when switching roles so stale values don't linger
  function handleRoleChange(newRole) {
    setRole(newRole);
    setError("");
    const extraKeys = ROLE_EXTRA_FIELDS[newRole].map((f) => f.key);
    setForm((prev) => {
      const next = { ...prev };
      // Clear all possible extra keys from all roles
      ["adminCode", "department", "subject", "teacherId", "grade", "studentId"].forEach(
        (k) => { if (!extraKeys.includes(k)) delete next[k]; }
      );
      return next;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = form;

    // --- Common field validation ---
    if (!firstName?.trim() || !lastName?.trim()) {
      return setError("Please enter your full name.");
    }
    if (!email || !email.includes("@")) {
      return setError("Please enter a valid email address.");
    }
    if (!password || password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    // FIX 5: validate role-specific required fields (was completely missing before)
    for (const field of ROLE_EXTRA_FIELDS[role]) {
      if (field.required && !form[field.key]?.trim()) {
        return setError(`${field.label} is required.`);
      }
    }

    setError("");
    router.push(ROLE_ROUTES[role]);
  }

  const extraFields = ROLE_EXTRA_FIELDS[role];

  return (
    <div className="reg-root">
      <div className="reg-card">

        {/* HEADER */}
        <div className="reg-header">
          <div>
            <h1>Student Hub</h1>
            <p>Create your account</p>
          </div>
        </div>

        <form className="reg-body" onSubmit={handleSubmit}>

          {/* ROLE SELECTOR */}
          <div className="role-grid">
            {["admin", "teacher", "student"].map((r) => (
              <button
                key={r}
                type="button"
                className={`role-btn ${role === r ? ROLE_STYLES[r].selected : ""}`}
                onClick={() => handleRoleChange(r)}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>

          {/* ROLE-SPECIFIC EXTRA FIELDS — now properly wired to handleChange */}
          <div className="field-grid">
            {extraFields.map((field) => (
              <div
                key={field.key}
                className={`field-group ${field.full ? "field-full" : ""}`}
              >
                <label htmlFor={field.key}>{field.label}</label>

                {field.type === "select" ? (
                  <select
                    id={field.key}
                    name={field.key}
                    value={form[field.key] || ""}
                    onChange={handleChange}
                  >
                    <option value="">Select…</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field.key}
                    name={field.key}
                    placeholder={field.placeholder}
                    value={form[field.key] || ""}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                )}
              </div>
            ))}
          </div>

          {/* COMMON FIELDS */}
          <div className="field-grid">
            <div className="field-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                value={form.firstName || ""}
                onChange={handleChange}
                autoComplete="given-name"
              />
            </div>
            <div className="field-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                value={form.lastName || ""}
                onChange={handleChange}
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className="field-group field-full">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="mail@school.edu"
              value={form.email || ""}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="field-grid">
            <div className="field-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Min. 6 characters"
                value={form.password || ""}
                onChange={handleChange}
              />
            </div>

            <div className="field-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Repeat password"
                value={form.confirmPassword || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          {error && <div className="error-msg">{error}</div>}

          <button
            type="submit"
            className={`submit-btn ${ROLE_STYLES[role].submit}`}
          >
            Create Account
          </button>
          
          <div className="signin-prompt">
            <p>
              Haven't registered yet?{" "}
              <a href="/register" className="signin-link">Do it now</a>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}