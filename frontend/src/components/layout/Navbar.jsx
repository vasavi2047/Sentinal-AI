import { Bell, ShieldCheck, LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {

  const auth = useAuth?.() || {};

  const user = auth.user || {
    name: "User",
    email: "",
  };


  const logout =
    auth.logout ||
    (() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    });


  const navigate = useNavigate();

  const [open, setOpen] = useState(false);


  const handleLogout = () => {
    logout();
    navigate("/login");
  };


  return (

    <div className="h-16 bg-white shadow flex items-center justify-between px-8">


      {/* Left */}

      <div>

        <h2 className="text-2xl font-bold">
          Sentinel AI Dashboard
        </h2>

      </div>



      {/* Right */}

      <div className="flex items-center gap-6">


        {/* AI Status */}

        <div className="flex items-center gap-2 text-green-600">

          <ShieldCheck size={20} />

          <span className="font-medium">
            AI Online
          </span>

        </div>



        {/* Notification */}

        <Bell
          size={22}
          className="cursor-pointer hover:text-cyan-600 transition"
        />



        {/* User */}

        <div className="relative">

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3"
          >


            <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold">

              {user.name?.charAt(0).toUpperCase() || "U"}

            </div>



            <div className="hidden md:block text-left">


              <p className="font-semibold">
                {user.name || "User"}
              </p>


              <p className="text-xs text-gray-500">
                {user.email || ""}
              </p>


            </div>


          </button>




          {open && (

            <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-lg border overflow-hidden z-50">


              <button

                onClick={handleLogout}

                className="w-full px-5 py-3 flex items-center gap-3 hover:bg-red-50 text-red-600"

              >

                <LogOut size={18} />

                Logout

              </button>


            </div>

          )}


        </div>


      </div>


    </div>

  );
}


export default Navbar;