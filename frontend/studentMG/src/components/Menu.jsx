"use client";

import "./menu.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: "/images.png", label: "Home", href: "/" },
      { icon: "/person2.png", label: "Teachers", href: "/list/teachers" },
      { icon: "/teach.png", label: "Students", href: "/list/students" },
      { icon: "/class3.png", label: "Classes", href: "/list/classes" },
      { icon: "/book2.png", label: "Subjects", href: "/list/subjects" },
      { icon: "/chart3.png", label: "Attendance", href: "/list/attendance" },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="menu-nav">
      {menuItems.map((section) => (
        <div key={section.title} className="menu-section">
          {/* Section label */}
          <span className="menu-section-title">{section.title}</span>

          {/* Nav items */}
          <div className="menu-items">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`menu-row ${isActive ? "active" : ""}`}
                >
                  <span className="menu-icon">
                    <Image
                      src={item.icon}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </span>
                  <span className="menu-label">{item.label}</span>
                  {isActive && <span className="menu-active-dot" />}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Menu;