import { Link } from "react-router-dom";
import Header from "../paretails/header";
import Footer from "../paretails/footer";

export default function Home() {
    return (
        <>
            <Header/>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main landing page of the application.</p>
            <Link to="/register">Go to Register Page</Link>
            <Footer/>
        </>
    )
    }