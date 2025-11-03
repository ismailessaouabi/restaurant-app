import { ChefHat } from "lucide-react"
import Header from "../paretails/header"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <>
      <Header />

      <section className="w-full min-h-screen flex justify-center items-center bg-[#191a1f] p-4 sm:p-6 md:p-10">
        <div
          className="w-full max-w-[400px] rounded-2xl border border-[#414247] 
                     text-white shadow-2xl bg-[#2c2e32] flex flex-col justify-start 
                     items-center gap-5 p-5 sm:p-6 md:p-8"
        >
          {/* Logo */}
          <ChefHat className="text-[#d4af37] h-14 w-14 sm:h-16 sm:w-16" />

          {/* Titles */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            The Golden Spoon
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
            Welcome Back
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-4 sm:gap-5 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm sm:text-base">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg bg-[#2a2b30] border border-[#414247] 
                           text-white p-2 sm:p-3 focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm sm:text-base">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg bg-[#2a2b30] border border-[#414247] 
                           text-white p-2 sm:p-3 focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#d4af37] text-white py-2 sm:py-2.5 rounded-md 
                         hover:bg-transparent hover:text-[#d4af37] border border-[#d4af37] 
                         transition font-semibold text-base sm:text-lg cursor-pointer"
            >
              Login
            </button>
          </form>

          {/* Footer text */}
          <div className="text-center">
            <p className="pt-2 text-sm sm:text-base text-[#99999a]">
              Don&apos;t have an account?{" "}
              <Link
                to="/"
                className="text-[#d4af37] hover:underline hover:text-[#f1cf6c] transition"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
