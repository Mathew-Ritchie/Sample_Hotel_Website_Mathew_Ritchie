import facilitiesData from "../data/facilitiesData";
import { NavLink } from "react-router-dom";

export default function FacilitiesPage() {
    return (
        <div className="flex flex-col items-center bg-gray-100 p-2 sm:p-8 pt-21 sm:pt-21">
        <div className="flex flex-col items-center w-full max-w-4xl bg-white rounded-lg shadow-md p-2 sm:p-6">
            <h1 className="page-main-title">Facilities</h1>
             <hr className=" text-black md:pt-5 w-2/3"></hr>
             <p className="text-center mb-8">Our hotel facilities are designed to enhance every aspect of your stay. 
              Guests can unwind by the sparkling swimming pool, maintain their wellness routine in the fully equipped
               fitness centre, or indulge in relaxation at the spa and beauty centre. Each facility offers a calm,
               welcoming environment, ensuring comfort, rejuvenation, and a truly well-rounded hotel experience.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
              {Object.entries(facilitiesData).map(([key, facility]) => (
                  <NavLink to={`/facilities/${key}`} key={key} className="no-underline h-full">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full flex flex-col">
                      <img
                        src={facility.image1.path}
                        alt={facility.image1.alt}
                        className="w-full h-48 object-cover"
                      />

                      <div className="p-4 flex flex-col justify-between flex-grow">
                        <h2 className="text-2xl font-semibold mb-2">{facility.title}</h2>
                        <p className="text-gray-700 mb-4">{facility.description}</p>
                        <p className="text-gray-400 font-bold text-lg">
                          Click to find out more
                        </p>
                      </div>
                    </div>
                  </NavLink>
                ))}
            </div>
          </div>
        </div>
    );
}