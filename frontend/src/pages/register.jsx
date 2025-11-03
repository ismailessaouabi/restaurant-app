import { useState } from "react";
import Header from "../paretails/header";
import {useNavigate, Link} from "react-router-dom";
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

    // Hook to navigate programmatically
    const navigate = useNavigate();

    console.log(formData);

    // Function to handle form submission
    const StoreData = async (e) => {

        e.preventDefault();

        try {

            // envoyer les données au backend
            const response = await fetch("http://localhost:8000/api/register", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                },
                widhCredentials: "include",
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log("Success:", data);
            navigate("/profile");

        }catch(error){

            console.error("Erreur:", error);
            alert("Erreur lors de l'inscription.");

        }
    };


  return (
    <>
      <Header />
      <section className="flex flex-col justify-start items-center gap-4 bg-[#191a1f] w-full h-fit text-white py-10">
        <div className="flex gap-3 justify-center items-center">        
          <ChefHat className="text-[#d4af37]  h-16 w-16" />
          <h1 className="text-5xl font-bold">Create Your Account</h1>        
        </div>
        <p className="text-[#99999a] text-xl">Join us to make reservations and discover exclusive offers.</p>
        <form onSubmit={StoreData} className="flex flex-col  gap-4 w-[510px] pt-7">
          <div className="flex flex-col">
            <label  >Full Name</label>
            <input type="text" placeholder="Enter your full name " className="bg-[#2c2d33] border-none p-3 
                                 focus:outline-1 focus:outline-[#d4af37] rounded-md  text-white" required/>
          </div>
          <div className="flex flex-col">
            <label  >Email Adress</label>
            <input type="email" placeholder="Enter your email adress " className="bg-[#2c2d33] border-none p-3 
                                 focus:outline-1 focus:outline-[#d4af37] rounded-md  text-white" required/>
          </div>
          <div className="flex flex-col">
            <label  >Password</label>
            <input type="password" placeholder="Enter your password " className="bg-[#2c2d33] border-none p-3 
                                 focus:outline-1 focus:outline-[#d4af37] rounded-md  text-white" required/>
          </div>
          <div className="flex flex-col">
            <label  >Confirm Password</label>
            <input type="password" placeholder="Enter your password " className="bg-[#2c2d33] border-none p-3 
                                 focus:outline-1 focus:outline-[#d4af37] rounded-md  text-white" required/>
          </div>
          <button type="submit" className="bg-[#d4af37] text-white py-2 rounded-md 
                               hover:bg-transparent hover:text-[#d4af37] border border-[#d4af37] 
                               transition mt-4 font-semibold text-lg cursor-pointer">
            Register
          </button>         
        </form>
        <div>
          <p className="pt-1 text-[#99999a]">Already have an account? <Link to="/login" className="text-[#d4af37] hover:underline">Login here</Link></p>
        </div>
      </section>
   
    </>
  );
}
