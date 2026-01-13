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
    <div className="pb-5 px-4 sm:px-10  md:px-20 lg:px-20">
      <h2
        className="text-3xl font-bold text-center pt-25 mb-5  md:mb-10"
      >
        {facility.title}
      </h2>
      <hr className="md:pt-5"></hr>
      <p className="py-5 text-justify">
        <img
          src={facility.image1.path}
          alt={facility.image1.alt}
          // Floating the image to the left with margin on larger screens
          className="rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 sm:float-left sm:mr-4 mb-4 sm:mb-2"
        />
        {facility.paragraph[0]}
      </p>
      <p className="pb-5 text-justify">
        <img
          src={facility.image2.path}
          alt={facility.image2.alt}
          // Floating the image to the right with margin on larger screens
          className="rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 sm:float-right sm:ml-4 mb-4 sm:mb-2"
        />
        {facility.paragraph[1]}
      </p>
      <p className="pb-5 text-justify md:pb-10 xl:pb-15">
        {facility.paragraph[2]}
      </p>
      <hr></hr>
    </div>
  );  
}