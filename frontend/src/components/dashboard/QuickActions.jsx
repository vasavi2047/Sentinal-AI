import { Link } from "react-router-dom";
import {
  MessageSquare,
  Link2,
  Image,
  Mic,
} from "lucide-react";

function QuickActions() {
  const actions = [
    {
      title: "Message Scan",
      path: "/message",
      icon: MessageSquare,
      color: "bg-blue-500",
    },
    {
      title: "URL Scan",
      path: "/url",
      icon: Link2,
      color: "bg-green-500",
    },
    {
      title: "Image Scan",
      path: "/image",
      icon: Image,
      color: "bg-purple-500",
    },
    {
      title: "Voice Scan",
      path: "/voice",
      icon: Mic,
      color: "bg-red-500",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.path}
              className={`${action.color} text-white rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition`}
            >
              <Icon size={40} />

              <p className="mt-3 font-semibold">
                {action.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;