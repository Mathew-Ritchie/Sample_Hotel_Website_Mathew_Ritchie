export default function AccomodationPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-6">Our Accommodations</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="/images/deluxe-room1.jpeg" alt="Deluxe Room" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold mb-2">Deluxe Room</h2>
                        <p className="text-gray-700 mb-4">Spacious room with a king-size bed, ensuite bathroom, and city views.</p>
                        <span className="text-blue-600 font-bold">$150/night</span>
                    </div>
                </div>
                {/* <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="/images/room2.jpeg" alt="Suite" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold mb-2">Suite</h2>
                        <p className="text-gray-700 mb-4">Luxurious suite with separate living area, premium amenities, and ocean views.</p>
                        <span className="text-blue-600 font-bold">$250/night</span>
                    </div>
                </div> */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="/images/standard-room1.jpeg" alt="Standard Room" className="w-full h-48 object-cover" />
                    <div className="p-4">   
                        <h2 className="text-2xl font-semibold mb-2">Standard Room</h2>
                        <p className="text-gray-700 mb-4">Comfortable room with all essential amenities for a pleasant stay.</p>
                        <span className="text-blue-600 font-bold">$100/night</span>
                    </div>
                </div>
            </div>
        </div>
    );
}   