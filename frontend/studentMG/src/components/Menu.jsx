"use client";

import "./menu.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: "/home.png", label: "Home", href: "/" },
      { icon: "/person.png", label: "Students", href: "/list/students" },
      { icon: "/teach.png", label: "Teachers", href: "/list/teachers" },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="mt-8 px-3">
      {menuItems.map((section) => (
        <div key={section.title} className="mb-6">

        <div className="  border-t border-gray-100" />

          {/* Section label */}
          <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase py-10 px-10 mb-6">
            {section.title}
          </span>

          {/* Nav items */}
          <div className="flex flex-col gap-0.5">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 px-2 py-2 rounded-lg text-sm transition-all duration-150 group
                    ${isActive
                      ? "bg-violet-50 text-violet-700 font-medium"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                    }`}
                >
                  {/* Icon as link */}
                  <Link href={item.href}>
                    <span className={`w-7 h-7 flex items-center justify-center rounded-md flex-shrink-0 transition-colors
                      ${isActive ? "bg-violet-100" : "group-hover:bg-gray-100"}`}
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={28}
                        height={28}
                        className={isActive ? "opacity-100" : "opacity-50 group-hover:opacity-70"}
                      />
                    </span>
                  </Link>

                  {/* Plain label — not a link */}
                  <span className="text-sm">{item.label}</span>

                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-500" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Menu;