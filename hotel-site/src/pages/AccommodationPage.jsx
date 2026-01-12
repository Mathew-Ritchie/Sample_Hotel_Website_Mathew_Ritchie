//import { useParams } from "react-router-dom";
import roomData from "../data/roomData";
import { NavLink } from "react-router-dom";


export default function AccommodationPage() {
   console.log(roomData);
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-2 sm:p-8 pt-21 sm:pt-20">
        <div className="min-h-screen flex flex-col items-center justify-center w-full max-w-4xl bg-white rounded-lg shadow-md p-2 sm:p-6">
            <h1 className="text-4xl font-bold mb-6 pt-4">Accommodation</h1>
            <p className="text-center mb-8">Our hotel accommodation features both Standard and Deluxe room options, 
              thoughtfully designed to suit different travel needs. Standard rooms offer 
              comfortable furnishings and essential amenities for a relaxing stay. Deluxe rooms 
              provide additional space and upgraded finishes, along with the convenience of a
              private kitchenette, making them ideal for longer stays or guests seeking added 
              flexibility and comfort.</p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
                {Object.entries(roomData).map(([key, room]) => (
                  <NavLink to={`/accommodations/${key}`} key={key} className="no-underline w-full sm:w-2/3 md:w-1/3">
                    <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={room.images[0]} alt={room.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold mb-2">{room.name}</h2>
                            <p className="text-gray-700 mb-4">{room.shortDescription}</p>
                            {/* <p className="text-blue-600 font-bold text-lg">${room.price}/night</p> */}
                            <p className="text-blue-600 font-bold text-lg">Click to find out more</p>
                        </div>
                    </div>
                  </NavLink>
                ))}
            </div>
        </div>
      </div>
    );
}