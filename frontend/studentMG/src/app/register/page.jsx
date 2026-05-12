"use client";

import { useState } from "react";
import "./page.css";


export default function RegisterPage() {
  const [formData, setFormData] = useState({
    // Personal details
    name: "",
    dob: "",
    contact: "",
    email: "",
    address: "",
    grade: "",
    stream: "",
    bloodGroup: "",
    // Guardian details
    guardianName: "",
    relation: "",
    occupation: "",
    guardianContact: "",
    guardianEmail: "",
    guardianAddress: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // Reset stream if grade changes away from 11/12
      if (name === "grade" && value !== "11" && value !== "12") {
        updated.stream = "";
      }
      return updated;
    });
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const required = [
      "name", "dob", "contact", "address", "grade", "bloodGroup",
      "guardianName", "relation", "occupation", "guardianContact",
      "guardianEmail", "guardianAddress",
    ];
    required.forEach((field) => {
      if (!formData[field]) newErrors[field] = "This field is required";
    });
    if ((formData.grade === "11" || formData.grade === "12") && !formData.stream) {
      newErrors.stream = "Please select a stream";
    }
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.guardianEmail && !/^\S+@\S+\.\S+$/.test(formData.guardianEmail)) {
      newErrors.guardianEmail = "Invalid email format";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("Form submitted:", formData);
    alert("Registration submitted successfully!");
  };

  const showStream = formData.grade === "11" || formData.grade === "12";

  return (
    <div className="register-page">
      <div className="register-container">
        {/* Header */}
        <div className="register-header">
          <h1>Student Registration</h1>
          <p>Fill in the details below to create a student account.</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          {/* ===== Personal Details ===== */}
          <section className="form-section">
            <div className="section-header">
              <span className="section-number">01</span>
              <div>
                <h2>Personal Details</h2>
                <p>Basic information about the student.</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label>Full Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Tashi Wangchuk"
                  className={errors.name ? "error" : ""}
                />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>

              <div className="form-field">
                <label>Date of Birth <span className="required">*</span></label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className={errors.dob ? "error" : ""}
                />
                {errors.dob && <span className="error-msg">{errors.dob}</span>}
              </div>

              <div className="form-field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="student@example.com"
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label>Contact Number <span className="required">*</span></label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="+975 17XX XXXX"
                  className={errors.contact ? "error" : ""}
                />
                {errors.contact && <span className="error-msg">{errors.contact}</span>}
              </div>

              <div className="form-field full-width">
                <label>Address <span className="required">*</span></label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House no., street, town, district"
                  className={errors.address ? "error" : ""}
                />
                {errors.address && <span className="error-msg">{errors.address}</span>}
              </div>

              <div className="form-field">
                <label>Grade <span className="required">*</span></label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className={errors.grade ? "error" : ""}
                >
                  <option value="">Select grade</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      Grade {i + 1}
                    </option>
                  ))}
                </select>
                {errors.grade && <span className="error-msg">{errors.grade}</span>}
              </div>

              {showStream && (
                <div className="form-field stream-field">
                  <label>Stream <span className="required">*</span></label>
                  <div className="stream-options">
                    {["Arts", "Science", "Commerce"].map((stream) => (
                      <label
                        key={stream}
                        className={`stream-pill ${formData.stream === stream ? "selected" : ""}`}
                      >
                        <input
                          type="radio"
                          name="stream"
                          value={stream}
                          checked={formData.stream === stream}
                          onChange={handleChange}
                        />
                        {stream}
                      </label>
                    ))}
                  </div>
                  {errors.stream && <span className="error-msg">{errors.stream}</span>}
                </div>
              )}

              <div className="form-field">
                <label>Blood Group <span className="required">*</span></label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className={errors.bloodGroup ? "error" : ""}
                >
                  <option value="">Select blood group</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
                    <option key={bg} value={bg}>{bg}</option>
                  ))}
                </select>
                {errors.bloodGroup && <span className="error-msg">{errors.bloodGroup}</span>}
              </div>
            </div>
          </section>

          {/* ===== Guardian Details ===== */}
          <section className="form-section">
            <div className="section-header">
              <span className="section-number">02</span>
              <div>
                <h2>Guardian Details</h2>
                <p>Information about parent or legal guardian.</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label>Guardian Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleChange}
                  placeholder="e.g. Karma Dorji"
                  className={errors.guardianName ? "error" : ""}
                />
                {errors.guardianName && <span className="error-msg">{errors.guardianName}</span>}
              </div>

              <div className="form-field">
                <label>Relation <span className="required">*</span></label>
                <select
                  name="relation"
                  value={formData.relation}
                  onChange={handleChange}
                  className={errors.relation ? "error" : ""}
                >
                  <option value="">Select relation</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Guardian">Guardian</option>
                </select>
                {errors.relation && <span className="error-msg">{errors.relation}</span>}
              </div>

              <div className="form-field">
                <label>Occupation <span className="required">*</span></label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="e.g. Teacher"
                  className={errors.occupation ? "error" : ""}
                />
                {errors.occupation && <span className="error-msg">{errors.occupation}</span>}
              </div>

              <div className="form-field">
                <label>Contact Number <span className="required">*</span></label>
                <input
                  type="tel"
                  name="guardianContact"
                  value={formData.guardianContact}
                  onChange={handleChange}
                  placeholder="+975 17XX XXXX"
                  className={errors.guardianContact ? "error" : ""}
                />
                {errors.guardianContact && <span className="error-msg">{errors.guardianContact}</span>}
              </div>

              <div className="form-field">
                <label>Email <span className="required">*</span></label>
                <input
                  type="email"
                  name="guardianEmail"
                  value={formData.guardianEmail}
                  onChange={handleChange}
                  placeholder="guardian@example.com"
                  className={errors.guardianEmail ? "error" : ""}
                />
                {errors.guardianEmail && <span className="error-msg">{errors.guardianEmail}</span>}
              </div>

              <div className="form-field full-width">
                <label>Address <span className="required">*</span></label>
                <input
                  type="text"
                  name="guardianAddress"
                  value={formData.guardianAddress}
                  onChange={handleChange}
                  placeholder="House no., street, town, district"
                  className={errors.guardianAddress ? "error" : ""}
                />
                {errors.guardianAddress && <span className="error-msg">{errors.guardianAddress}</span>}
              </div>
            </div>
          </section>

          {/* Submit */}
          <div className="form-actions">
            <button type="button" className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Register Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}