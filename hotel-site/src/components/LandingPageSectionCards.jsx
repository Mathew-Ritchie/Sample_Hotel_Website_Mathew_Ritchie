import { Link } from "react-router-dom";

export default function LandingPageSectionCards() {
const services = {
                  accommodation: { title: "Accommodation", 
                                   image: "/images/deluxe-room1.jpeg", 
                                   alt: "image of the Deluxe Room", 
                                   description: "Comfortable and luxurious rooms to make your stay memorable." },
                  facilities:    { title: "Facilities", 
                                   image: "/images/pool2.jpeg", 
                                   alt: "Image of the swimming pool", 
                                   description: "Enjoy our state-of-the-art facilities including a swimming pool and fitness center and Spa." },
                  wellness:      { title: "Restaurant", 
                                   image: "/images/breakfast1.jpeg", 
                                   alt: "Image of buffet breakfast", 
                                   description: "Enjoy our delicious breakfast daily." }
                 };

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4 w-full flex flex-col md:flex-row gap-2 ">
                {Object.values(services).map((service, index) => (
                  <Link to={`/${service.title.toLowerCase()}`} key={index} className="w-1/3 mb-8 h-100">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden  bg-cover bg-center h-100" style={{ backgroundImage: `url(${service.image})` }}>
                        <div className="flex flex-col justify-center items-center p-6 text-white text-shadow-lg font-bold h-full bg-black/30 text-center">
                            <h2 className="text-3xl font-semibold mb-4  ">{service.title}</h2>
                            <p className="text-lg">{service.description}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}