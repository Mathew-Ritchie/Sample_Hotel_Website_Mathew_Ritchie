import { useParams } from "react-router-dom";
import facilitiesData from "../data/facilitiesData";



export default function DynamicFacilitiesInfoPage() {
    const { facilityType } = useParams();
    const facility = facilitiesData[facilityType];

    if (!facility) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
                <h1 className="text-4xl font-bold mb-6">Facility Not Found</h1>
                <p className="text-gray-700">The requested facility does not exist.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-6">{facility.title}</h1>
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">{facility.description}</p>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
                   
                </div>
            </div>
        </div>
    );
    
}