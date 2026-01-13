import React from "react";
//import { Linkedin, Facebook, Instagram } from "lucide-react";
import SocialMediaComponent from "../components/SocialMediaComponent";
import ContactInfoComponent from "../components/ContactInfoComponent";

export default function ContactUsPage({ id }) {
  return (
    <div
      className="w-full min-h-screen px-10 pb-10 pt-22 flex justify-center items-center gap-10  text-black"
      id={id}
    >
      <div className="relative z-10 md:w-full w-full  text-black p-8 overflow-y-auto ">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 rounded-lg text-center">
          Contact Us
        </h1>
        <div className="w-full flex flex-col justify-center items-center gap-20">
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5">
            <img className="w-70" src={"/images/hotel-logo.png"} width={1500} height={1000} />
            <div className=" flex flex-col justify-start items-start space-y-6  leading-relaxed">
             <ContactInfoComponent  />  
            </div>
          </div>
         <SocialMediaComponent />
        </div>
      </div>
    </div>
  );
}
