import { useParams } from "react-router-dom";
import roomData, { sharedImages } from "../data/roomData";




export default function DynamicRoomInfoPage() {
    const { roomType } = useParams();
    const room = roomData[roomType];

    if (!room) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
                <h1 className="text-4xl font-bold mb-6">Room Not Found</h1>
                <p className="text-gray-700">The requested room type does not exist.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-2 sm:p-8 pt-21 sm:pt-20">
           
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-2 sm:p-6">
               <h1 className="w-full text-4xl text-center font-bold mb-6 pt-4 sm:pt-0">{room.name}</h1>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 h-auto mb-4">
                {room.images && room.images.map((image, index) => (
                  <img key={index} src={image.path} alt={image.alt} className=" w-full sm:w-1/2 h-64 object-cover rounded-lg mb-4" />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <p className="text-gray-700 mb-4 sm:w-3/4">{room.description}</p>
                <div className="mb-4 sm:w-1/4">
                    <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {room.amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                </div></div>
                
                <div>
                    <h2 className="text-2xl font-semibold">Price starting from: <span className="text-blue-600 font-bold text-lg">R{room.price}/night</span></h2>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-1">
                  {Object.values(sharedImages).map((image, index) => (
                    <img key={index} src={image.path} alt={image.alt} className="w-5/6 sm:w-1/5 max-h-60 sm:h-40 object-cover rounded-lg inline-block" />
                  ))}
                </div>
            </div>
        </div>
    );
    
}