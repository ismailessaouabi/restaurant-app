import { useState } from "react";
import Header from "../paretails/header";
import {useNavigate} from "react-router-dom";

export default function Register() {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const navigate = useNavigate();


    console.log(formData);

  
    const StoreData = async (e) => {

    
        e.preventDefault();
        
    
        try {

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        {/* Logo ou titre */}
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          🍴 RestaurantApp
        </h1>
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-8">
          Créez votre compte
        </h2>

        {/* Form */}
        <form onSubmit={StoreData} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Entrez votre nom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="exemple@email.com"
              
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="********"
              
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirmer mot de passe
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="********"
              
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
          >
            S’inscrire
          </button>
        </form>

        {/* Lien vers login */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Vous avez déjà un compte ?{" "}
          <a href="/login" className="text-orange-600 font-medium hover:underline">
            Se connecter
          </a>
        </p>
      </div>
    </div>
    </>
  );
}
