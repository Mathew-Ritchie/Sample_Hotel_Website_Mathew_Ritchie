export default function FacilitiesPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-6">Our Facilities</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="/images/pool2.jpeg" alt="Swimming Pool" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold mb-2">Swimming Pool</h2>
                        <p className="text-gray-700 mb-4">Enjoy our outdoor swimming pool with a relaxing ambiance.</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="/images/gym1.jpeg" alt="Fitness Center" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold mb-2">Fitness Center</h2>
                        <p className="text-gray-700 mb-4">State-of-the-art gym equipped with modern fitness equipment.</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="/images/spa1.jpeg" alt="Spa" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold mb-2">Spa</h2>
                        <p className="text-gray-700 mb-4">Relax and rejuvenate with our range of spa treatments.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}