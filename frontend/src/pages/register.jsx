import { useState } from "react";
import Header from "../paretails/header";
import {useNavigate} from "react-router-dom";
import image from "../assets/img-register.jpg";


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
    <div className="min-h-screen w-full flex items-center px-16 justify-between bg-gradient-to-br from-orange-100 to-red-100 p-6">
      <div className=" w-[45%] h-[50%] bg-amber-200">
        <form className=" flex flex-col gap-3.5" >

          <label >Nom complet
            <input type="text" />
          </label>

          <select  >

            <option value="">selecter votre role</option>
            <option value="">Client</option>
            <option value="">Admin</option>
            <option value="">chéf</option>
          </select>

          <label >Email
            <input type="email" />
          </label>

          <label >Mot de passe
            <input type="password" />
          </label>
          <label >Confirmer mot de passe
            <input type="password" />
          </label>

        </form>
      </div>
      <div className="w-[35%] h-[50%] rounded-2xl overflow-hidden">
        
        <img src={image} alt="" />
      </div>
    </div>
    </>
  );
}
