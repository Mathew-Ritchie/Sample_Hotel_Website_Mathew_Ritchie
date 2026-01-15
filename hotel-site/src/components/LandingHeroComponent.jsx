import "../App.css"
import { Link } from "react-router-dom";

export default function LandingHeroComponent() {
    return (
  
        <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/pool1.jpeg')" }}>
            <div className="absolute inset-0 bg-black/20"></div>
           
            <div className="relative z-10 bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">Welcome to Sample Hotel</h1>
                <p className="text-lg md:text-2xl mb-8 text-shadow-lg">Experience luxury and comfort in the heart of the city.</p>
                {/* <Link
                    to="/contact-us"
                    className="button-colour text-white font-semibold py-3 px-6 rounded-md text-shadow-lg transition duration-200 "
                >
                    Have a look at our accommodation options
                </Link> */}
            </div>
        </section>
   
    );
}