import facilitiesData from "../data/facilitiesData";
import { NavLink } from "react-router-dom";

export default function FacilitiesPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-2 sm:p-8 pt-21 sm:pt-20">
        <div className="min-h-screen flex flex-col items-center justify-center w-full max-w-4xl bg-white rounded-lg shadow-md p-2 sm:p-6">
            <h1 className="text-4xl font-bold mb-6 pt-4">Facilities</h1>
             <p className="text-center mb-8">Our hotel facilities are designed to enhance every aspect of your stay. 
              Guests can unwind by the sparkling swimming pool, maintain their wellness routine in the fully equipped
               fitness centre, or indulge in relaxation at the spa and beauty centre. Each facility offers a calm,
               welcoming environment, ensuring comfort, rejuvenation, and a truly well-rounded hotel experience.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
              {Object.entries(facilitiesData).map(([key, facility]) => (
                  <NavLink to={`/facilities/${key}`} key={key} className="no-underline h-90">
                    <div key={key} className="bg-white h-90 rounded-lg shadow-md overflow-hidden">
                        <img src={facility.image1.path} alt={facility.image1.alt} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold mb-2">{facility.title}</h2>
                            <p className="text-gray-700 mb-4">{facility.description}</p>
                        </div>
                        <p className="text-gray-400 font-bold text-lg">Click to find out more</p>
                    </div>
                  </NavLink>
                ))}
            </div>
          </div>
        </div>
    );
}