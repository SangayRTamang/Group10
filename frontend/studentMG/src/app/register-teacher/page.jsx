"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./page.css";

// Auto-generate teacher ID
const generateTeacherId = () => {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `TCH-${year}-${random}`;
};

export default function TeacherRegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    teacherId: generateTeacherId(),
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    email: "",
    contact: "",
    address: "",
    qualification: "",
    subject: "",
    experience: "",
    joiningDate: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const required = [
      "firstName", "lastName", "dob", "gender", "bloodGroup",
      "email", "contact", "address", "qualification", "subject",
      "joiningDate", "password", "confirmPassword",
    ];

    for (const field of required) {
      if (!form[field]?.toString().trim()) {
        return setError("Please fill in all required fields.");
      }
    }

    if (!form.email.includes("@")) {
      return setError("Please enter a valid email address.");
    }
    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }
    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match.");
    }

    setError("");
    console.log("Teacher registered:", form);
    router.push("/list/teachers");
  }

  return (
    <div className="reg-root">
      <div className="reg-card reg-card-wide">

        {/* HEADER */}
        <div className="reg-header">
          <div>
            <h1>Teacher Registration</h1>
            <p>Create a teacher account</p>
          </div>
        </div>

        <form className="reg-body" onSubmit={handleSubmit}>

          {/* ===== Personal Details ===== */}
          <div className="section-title">Personal Details</div>

          <div className="field-group field-full">
            <label htmlFor="teacherId">Teacher ID</label>
            <input
              id="teacherId"
              name="teacherId"
              value={form.teacherId}
              readOnly
              className="readonly-input"
            />
          </div>

          <div className="field-grid">
            <div className="field-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                autoComplete="given-name"
              />
            </div>
            <div className="field-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className="field-grid">
            <div className="field-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                id="dob"
                name="dob"
                type="date"
                value={form.dob}
                onChange={handleChange}
              />
            </div>
            <div className="field-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
              >
                <option value="">Select…</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="field-grid">
            <div className="field-group">
              <label htmlFor="contact">Contact Number</label>
              <input
                id="contact"
                name="contact"
                type="tel"
                placeholder="+975 17XX XXXX"
                value={form.contact}
                onChange={handleChange}
              />
            </div>
            <div className="field-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={form.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select…</option>
                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="field-group field-full">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              placeholder="House no., street, town, district"
              value={form.address}
              onChange={handleChange}
            />
          </div>

          {/* ===== Professional Details ===== */}
          <div className="section-title">Professional Details</div>

          <div className="field-grid">
            <div className="field-group">
              <label htmlFor="qualification">Qualification</label>
              <select
                id="qualification"
                name="qualification"
                value={form.qualification}
                onChange={handleChange}
              >
                <option value="">Select…</option>
                <option value="Bachelors">Bachelor's Degree</option>
                <option value="Masters">Master's Degree</option>
                <option value="PhD">PhD / Doctorate</option>
                <option value="Diploma">Diploma</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="field-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              >
                <option value="">Select…</option>
                {["Math", "Science", "English", "History", "Art", "PE", "Geography", "Dzongkha"].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="field-grid">
            <div className="field-group">
              <label htmlFor="experience">Years of Experience</label>
              <input
                id="experience"
                name="experience"
                type="number"
                min="0"
                placeholder="e.g. 5"
                value={form.experience}
                onChange={handleChange}
              />
            </div>
            <div className="field-group">
              <label htmlFor="joiningDate">Joining Date</label>
              <input
                id="joiningDate"
                name="joiningDate"
                type="date"
                value={form.joiningDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* ===== Account ===== */}
          <div className="section-title">Account</div>

          <div className="field-group field-full">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="teacher@school.edu"
              value={form.email}
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
                value={form.password}
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
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {error && <div className="error-msg">{error}</div>}

          <button type="submit" className="submit-btn submit-teacher">
            Register Teacher
          </button>

          <div className="signin-prompt">
            <p>
              Already registered?{" "}
              <a href="/sign-in" className="signin-link">Sign in here</a>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}