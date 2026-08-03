import {
  LayoutDashboard,
  MessageSquare,
  Link2,
  Image,
  Mic,
  FileText,
  Settings,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Message Scan",
    path: "/message",
    icon: MessageSquare,
  },
  {
    name: "URL Scan",
    path: "/url",
    icon: Link2,
  },
  {
    name: "Image Scan",
    path: "/image",
    icon: Image,
  },
  {
    name: "Voice Scan",
    path: "/voice",
    icon: Mic,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: FileText,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">

      <div className="p-6">

        <h1 className="text-3xl font-bold text-cyan-400">
          Sentinel AI
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Cyber Security Suite
        </p>

      </div>

      <nav className="flex-1 px-4 space-y-2">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "hover:bg-slate-800 text-gray-300"
                }`
              }
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.name}
              </span>

            </NavLink>

          );
        })}

      </nav>

      <div className="p-5 border-t border-slate-700">

        <p className="text-xs text-gray-400">
          Sentinel AI v1.0
        </p>

      </div>

    </div>
  );
}

export default Sidebar;