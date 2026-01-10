//import { useParams } from "react-router-dom";
import roomData from "../data/roomData";
import { NavLink } from "react-router-dom";


export default function AccommodationPage() {
   console.log(roomData);
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-6">Our Accommodations</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {Object.entries(roomData).map(([key, room]) => (
                  <NavLink to={`/accommodations/${key}`} key={key} className="no-underline">
                    <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={room.images[0]} alt={room.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold mb-2">{room.name}</h2>
                            <p className="text-gray-700 mb-4">{room.description}</p>
                            <p className="text-blue-600 font-bold text-lg">${room.price}/night</p>
                        </div>
                    </div>
                  </NavLink>
                ))}
            </div>
        </div>
    );
}