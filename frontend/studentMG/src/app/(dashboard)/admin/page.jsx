import "./page.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">

      <div className="content">

        {/* HERO */}
        <section className="hero">
          <p className="hero-label">ADMIN DASHBOARD</p>
          <h1>Welcome, Admin</h1>
          <p>
            Track activity, monitor classes, and stay aligned with the daily priorities.
          </p>
        </section>

        <div className="main-grid">

          {/* LEFT */}
          <div className="left">

            {/* CARDS */}
            <div className="cards">
              {["students", "teachers", "staffs"].map((type) => (
                <div className="card" key={type}>
                  <h1>756</h1>
                  <h2>{type}</h2>
                </div>
              ))}
            </div>

            {/* STATS */}
            <div className="stats">
              <div className="stat">
                <p>Today attendance</p>
                <h2>94%</h2>
              </div>

              <div className="stat">
                <p>Staffs on leave</p>
                <h2>8</h2>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="actions">
              <h3>Quick Actions</h3>
              <div className="buttons">
                <button>Add Teacher</button>
                <button>Add Student</button>
                <button>Publish Notice</button>
                <button>View Reports</button>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="right">

            <div className="box">
              <h3>Today agenda</h3>
              <ul>
                <li>9:30 AM - Principal coordination meeting</li>
                <li>12:00 PM - Parent feedback review</li>
                <li>2:15 PM - Staff planning session</li>
              </ul>
            </div>

            <div className="box">
              <h3>Announcements</h3>
              <p>
                Mid-term exam result schedule has been published. Please remind all teachers to finalize scores by Friday.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}