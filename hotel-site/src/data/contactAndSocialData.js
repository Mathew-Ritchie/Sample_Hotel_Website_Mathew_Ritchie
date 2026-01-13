import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactData = {
  phone: { title: "Phone", info: "+27 (000) 123-4567", icon: "/images/icons/telephone.png" },
  email: { title: "Email", info: "info@luxuryhotel.com", icon: "/images/icons/email.png" },
  address: { title: "Address", info: "123 Luxury St, Cape Town, South Africa", icon: "/images/icons/location.png" },
};

const SocialMediaData = {
  facebook: { url: "https://www.facebook.com/luxuryhotel", tag: FaFacebookF , label: "Facebook" },
  twitter: { url: "https://www.twitter.com/luxuryhotel", tag: FaTwitter , label: "Twitter" },
  instagram: { url: "https://www.instagram.com/luxuryhotel", tag: FaInstagram, label: "Instagram" },
  linkedin: { url: "https://www.linkedin.com/company/luxuryhotel", tag: FaLinkedinIn , label: "LinkedIn" },
};

export { ContactData, SocialMediaData };