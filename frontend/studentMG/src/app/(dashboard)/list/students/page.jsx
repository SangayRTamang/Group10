import "./page.css";

export default function StudentDashboard() {
  return (
    <div className="student-container">

      <div className="student-content">

        {/* HERO */}
        <section className="hero">
          <p className="hero-label">STUDENT PORTAL</p>
          <h1>My Schedule (Class 4A)</h1>
          <p>
            See your daily routine, homework status, and upcoming deadlines.
          </p>
        </section>

        <div className="grid">

          {/* LEFT */}
          <div className="left">

            <div className="schedule-box">
              <h2>Weekly Schedule</h2>

              <div className="schedule-grid">
                <div>Mon - Mathematics / English / Science</div>
                <div>Tue - ICT / History / Physical Education</div>
                <div>Wed - Chemistry / Biology / Literature</div>
                <div>Thu - Physics / Civics / Art</div>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="right">

            <div className="box">
              <h3>Assignments</h3>
              <ul>
                <li>Math Worksheet - Due Tomorrow</li>
                <li>Science Project - Due Friday</li>
                <li>English Essay - Due Sunday</li>
              </ul>
            </div>

            <div className="box">
              <h3>Attendance Snapshot</h3>
              <h1>96%</h1>
              <p>Excellent consistency this term.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}