"use client";

import "./page.css";

export default function Dashboard() {
  // Calendar config for May 2026
  // May 1, 2026 is a Friday. Calendar starts on Monday.
  const calendarDays = [
    { day: 27, muted: true }, { day: 28, muted: true }, { day: 29, muted: true }, { day: 30, muted: true },
    { day: 1 }, { day: 2, weekend: true }, { day: 3, weekend: true },
    { day: 4 }, { day: 5 }, { day: 6 }, { day: 7 }, { day: 8, active: true }, { day: 9, weekend: true }, { day: 10, weekend: true },
    { day: 11 }, { day: 12 }, { day: 13 }, { day: 14 }, { day: 15 }, { day: 16, weekend: true }, { day: 17, weekend: true },
    { day: 18 }, { day: 19 }, { day: 20 }, { day: 21 }, { day: 22 }, { day: 23, weekend: true }, { day: 24, weekend: true },
    { day: 25 }, { day: 26 }, { day: 27 }, { day: 28 }, { day: 29 }, { day: 30, weekend: true }, { day: 31, weekend: true },
  ];

  const statCards = [
    { value: "2", label: "Admins", variant: "purple" },
    { value: "24", label: "Teachers", variant: "yellow" },
    { value: "460", label: "Students", variant: "purple" },
  ];

  const events = [
    {
      title: "Book Fair",
      time: "08:00 – 10:00",
      description: "Browse and purchase books at our annual school Book Fair.",
      variant: "purple",
    },
    {
      title: "Sports Day",
      time: "10:00 – 12:00",
      description: "A fun-filled day of athletic events and competitions.",
      variant: "yellow",
    },
  ];

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Admin Dashboard</h1>
          <p className="dashboard-subtitle">
            Welcome back.
          </p>
        </div>
        <button className="add-new-btn">
          <span className="plus">+</span> Add New
        </button>
      </div>

      <div className="dashboard-grid">
        {/* LEFT COLUMN */}
        <div className="left-column">
          {/* Stat Cards */}
          <div className="stat-cards">
            {statCards.map((card) => (
              <div key={card.label} className={`stat-card stat-card--${card.variant}`}>
                <div className="stat-card-top">
                  <span className="year-pill">2025/26</span>
                  <span className="dots">···</span>
                </div>
                <h2 className="stat-value">{card.value}</h2>
                <p className="stat-label">{card.label}</p>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="charts-row">
            {/* Students Chart */}
            <div className="chart-card">
              <div className="chart-header">
                <h3>Students</h3>
                <span className="dots">···</span>
              </div>
              <div className="donut-placeholder">
                <svg viewBox="0 0 200 200" className="donut">
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#fef3c7" strokeWidth="40" />
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="#c7d2fe"
                    strokeWidth="40"
                    strokeDasharray="197.92 439.82"
                    transform="rotate(-90 100 100)"
                  />
                </svg>
              </div>
              <div className="chart-legend">
                <div className="legend-item">
                  <span className="dot dot-blue"></span>
                  <h4>207</h4>
                  <p>Boys (45%)</p>
                </div>
                <div className="legend-item">
                  <span className="dot dot-yellow"></span>
                  <h4>253</h4>
                  <p>Girls (55%)</p>
                </div>
              </div>
            </div>

            {/* Attendance Chart */}
            <div className="chart-card chart-card--wide">
              <div className="chart-header">
                <h3>Attendance</h3>
                <span className="dots">···</span>
              </div>
              <div className="legend-top">
                <div className="legend-pill">
                  <span className="dot dot-purple"></span> present
                </div>
                <div className="legend-pill">
                  <span className="dot dot-yellow"></span> absent
                </div>
              </div>
              <div className="bars-container">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => {
                  const present = [85, 92, 78, 88, 95][i];
                  const absent = 100 - present;
                  return (
                    <div className="bar-group" key={day}>
                      <div className="bars">
                        <div className="bar bar-purple" style={{ height: `${present}%` }}></div>
                        <div className="bar bar-yellow" style={{ height: `${absent}%` }}></div>
                      </div>
                      <span className="bar-label">{day}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
          {/* Calendar */}
          <div className="calendar-card">
            <div className="calendar-header">
              <button className="cal-nav">‹</button>
              <h3>May 2026</h3>
              <button className="cal-nav">›</button>
            </div>
            <div className="calendar-grid">
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
                <span key={d} className="weekday">{d}</span>
              ))}
              {calendarDays.map((d, i) => (
                <span
                  key={i}
                  className={`cal-day ${d.muted ? "muted" : ""} ${d.weekend ? "weekend" : ""} ${d.active ? "active" : ""}`}
                >
                  {d.day}
                </span>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="events-card">
            <div className="events-header">
              <h3>Events</h3>
              <a href="#" className="view-all">View all</a>
            </div>
            {events.map((event) => (
              <div key={event.title} className={`event-item event-item--${event.variant}`}>
                <div className="event-top">
                  <h4>{event.title}</h4>
                  <span className="event-time">{event.time}</span>
                </div>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}