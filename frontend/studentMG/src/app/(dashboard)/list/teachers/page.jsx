import React from "react";
import "./page.css";

const Teacher = () => {
  return (
    <div className="teacher-container">
      <div className="content-wrapper">
        
        {/* LEFT SIDE */}
        <div className="left-section">
          
          {/* Top Card */}
          <section className="hero-card">
            <p className="hero-subtitle">Teacher Workspace</p>
            <h1 className="hero-title">Classroom Schedule</h1>
            <p className="hero-text">
              Manage your classes, monitor submissions, and plan lesson flow for the week.
            </p>
          </section>

          {/* Today Classes */}
          <div className="card">
            <h2 className="card-title">Today Classes</h2>

            <div className="class-list">
              <div className="class-item">08:30 - Grade 6 Mathematics</div>
              <div className="class-item">10:15 - Grade 7 Mathematics</div>
              <div className="class-item">01:00 - Grade 8 Mathematics</div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="right-section">

          {/* Tasks */}
          <div className="card">
            <h3 className="card-title">Tasks</h3>
            <ul className="task-list">
              <li className="task-item">Review quiz submissions (24)</li>
              <li className="task-item">Prepare chapter test for Thursday</li>
              <li className="task-item">Send progress update to parents</li>
            </ul>
          </div>

          {/* Weekly Completion */}
          <div className="card">
            <h3 className="card-title">Weekly Completion</h3>
            <p className="completion-percentage">82%</p>
            <p className="completion-text">Syllabus coverage is on track.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Teacher;