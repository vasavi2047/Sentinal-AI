import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function UserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold">
          {user?.name?.charAt(0).toUpperCase() || "U"}
        </div>

        <div className="text-left">
          <p className="font-semibold">
            {user?.name || "User"}
          </p>

          <p className="text-xs text-gray-500">
            {user?.email}
          </p>
        </div>

      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-44 bg-white rounded-lg shadow-lg border">

          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-600"
          >
            Logout
          </button>

        </div>
      )}

    </div>
  );
}

export default UserMenu;