import React, { useState } from 'react';

export default function GalleryPage() {
  // State to track the currently selected image URL
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    {id:1, path:"/images/reception1.jpeg", alt:"Staff helping guest at reception area"},
    {id:2, path:"/images/deluxe-room1.jpeg", alt:"view of the deluxe bedroom"},
    {id:3, path:"/images/deluxe-room2.jpeg", alt:"view of the deluxe bedroom"},
    {id:4, path:"/images/roomcoffee.jpeg", alt:"image of coffee cups arranged on the bed"},
    {id:5, path:"/images/twinroom1.jpeg", alt:"view of the twin room"},
    {id:6, path:"/images/standard-room1.jpeg", alt:"view of the standard room"},
    {id:7, path:"/images/pool1.jpeg", alt:"Image showing the pool area"},
    {id:8, path:"/images/pool2.jpeg", alt:"Image showing the pool area"},
    {id:9, path:"/images/spa1.jpeg", alt:"Image of a lady in the spa bath"},
    {id:10, path:"/images/gym1.jpeg", alt:"Image of a guy in the gym on a tredmill"},
    {id:11, path:"/images/breakfast1.jpeg", alt:"Image of the buffet breakfast"},
    {id:12, path:"/images/breakfast2.jpeg", alt:"Image of the buffet breakfast"}, 
    {id:13, path:"/images/breakfast-area.jpeg", alt:"Image of the breakfast area"},
  ];

  return (
     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-2 sm:p-8 pt-21 sm:pt-21">
        <div className="min-h-screen flex flex-col items-center w-full max-w-4xl bg-white rounded-lg shadow-md p-2 sm:p-6">
            <h1 className="page-main-title">Gallery</h1>
            <hr className="md:pt-5"></hr>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" >
        {images.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item p-2 bg-gray-700 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setSelectedImg(image.path)} // Open modal on click
          > 
            <img 
              src={image.path} 
              alt={image.alt} 
              className="object-cover h-full w-full" 
            />
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedImg(null)} // Close modal when clicking background
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            {/* Close Button */}
            <button 
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>
            
            <img 
              src={selectedImg} 
              alt="Selected" 
              className="max-h-[85vh] max-w-full rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </div>
        </div>
      )}
    </div>
    </div>
  );
}