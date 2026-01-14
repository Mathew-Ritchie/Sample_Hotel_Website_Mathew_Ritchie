import React from "react";
//import { Linkedin, Facebook, Instagram } from "lucide-react";
import SocialMediaComponent from "../components/SocialMediaComponent";
import ContactInfoComponent from "../components/ContactInfoComponent";

export default function ContactUsPage() {
  return (
   <div className="h-screen flex flex-col items-center bg-gray-100 p-2 sm:p-8 pt-21 sm:pt-21">
        <div className="h-full flex flex-col items-center w-full max-w-4xl bg-white rounded-lg shadow-md p-2 sm:p-6">
            <h1 className="page-main-title">Contact Us</h1>
        <div className="w-full flex flex-col justify-center items-center gap-20">
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5">
            <img className="w-70" src={"/images/hotel-logo.png"} width={1500} height={1000} />
            <div className=" flex flex-col justify-start items-start space-y-6  leading-relaxed">
              {/* Tel,Email,Location information can be changed in contactAndSocialData.js*/}
             <ContactInfoComponent  />  
            </div>
          </div>
          {/* Social Media details can be updated in contactAndSocialData.js */}
         <SocialMediaComponent />
        </div>
      </div>
    </div>
  );
}
