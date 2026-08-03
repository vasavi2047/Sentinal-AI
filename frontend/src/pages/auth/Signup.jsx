import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {

  const navigate = useNavigate();

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:"",
  });

  const handleSubmit=(e)=>{

    e.preventDefault();

    toast.success("Account Created");

    navigate("/login");

  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-lg w-[420px]"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          Signup
        </h1>

        <input
        placeholder="Name"
        className="w-full border p-3 rounded-lg mb-4"
        value={form.name}
        onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
        placeholder="Email"
        className="w-full border p-3 rounded-lg mb-4"
        value={form.email}
        onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input
        type="password"
        placeholder="Password"
        className="w-full border p-3 rounded-lg mb-4"
        value={form.password}
        onChange={(e)=>setForm({...form,password:e.target.value})}
        />

        <button
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
        >
          Create Account
        </button>

        <p className="text-center mt-5">

          Already have an account?

          <Link
          to="/login"
          className="ml-2 text-cyan-600"
          >
            Login
          </Link>

        </p>

      </form>

    </div>

  );
}

export default Signup;