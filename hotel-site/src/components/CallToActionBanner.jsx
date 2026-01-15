export default function CallToActionBanner() {
    return (
         
            <div className="relative bg-gray-800 z-10 h-full flex flex-col justify-center items-center text-center text-white p-4 rounded-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-shadow-lg">Ready to Experience Luxury?</h2>
                <p className="text-lg md:text-xl mb-6 text-shadow-lg">Book your stay with us today and indulge in comfort.</p>
                <a
                    href="/accommodations"
                    className="primary-button-colour text-white font-semibold py-3 px-6 rounded-md text-shadow-lg transition duration-200 "
                >
                    Contact Us Today!
                </a>
            </div>
     
    );
}