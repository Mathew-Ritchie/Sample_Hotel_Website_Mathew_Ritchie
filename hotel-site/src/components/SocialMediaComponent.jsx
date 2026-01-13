import { SocialMediaData } from "../data/contactAndSocialData";

export default function SocialMediaComponent() {
    return (
        <div className="flex items-center space-x-6 sm:space-x-8">
        {Object.entries(SocialMediaData).map(([key, social]) => (
            <a
                key={key}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-linkedin-500"
                aria-label={social.label}
            >
                <social.tag className="h-6 w-6" />
            </a>
        ))}
        </div>
    );
}