import { useState } from "react";
import Header from "../paretails/header";
import { useNavigate, Link } from "react-router-dom";
import { ChefHat } from "lucide-react";

export default function Register() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const navigate = useNavigate();

  // Handle form submission
  const StoreData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        withCredentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Success:", data);
      navigate("/profile");
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de l'inscription.");
    }
  };

  return (
    <>
      <Header />

      {/* ✅ Section principale responsive */}
      <section className="flex flex-col items-center gap-6 bg-[#191a1f] text-white w-full min-h-screen py-10 px-4">
        {/* Titre + icône */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <ChefHat className="text-[#d4af37] h-12 w-12 sm:h-16 sm:w-16" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Create Your Account
          </h1>
        </div>

        {/* Sous-titre */}
        <p className="text-[#99999a] text-sm sm:text-base md:text-xl text-center max-w-xl">
          Join us to make reservations and discover exclusive offers.
        </p>

        {/* ✅ Formulaire responsive */}
        <form
          onSubmit={StoreData}
          className="flex flex-col gap-4 w-full max-w-md bg-[#1f2025] p-6 rounded-xl shadow-lg mt-4"
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-base">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="bg-[#2c2d33] border-none p-3 rounded-md text-white focus:outline-1 focus:outline-[#d4af37]"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-base">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-[#2c2d33] border-none p-3 rounded-md text-white focus:outline-1 focus:outline-[#d4af37]"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-base">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-[#2c2d33] border-none p-3 rounded-md text-white focus:outline-1 focus:outline-[#d4af37]"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-base">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="bg-[#2c2d33] border-none p-3 rounded-md text-white focus:outline-1 focus:outline-[#d4af37]"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#d4af37] text-white py-3 rounded-md hover:bg-transparent hover:text-[#d4af37] border border-[#d4af37] transition font-semibold text-lg cursor-pointer"
          >
            Register
          </button>
        </form>

        {/* Lien vers Login */}
        <p className="text-[#99999a] text-sm sm:text-base pt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-[#d4af37] hover:underline">
            Login here
          </Link>
        </p>
      </section>
    </>
  );
}
