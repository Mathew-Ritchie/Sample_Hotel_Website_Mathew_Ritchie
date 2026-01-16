import LandingHeroComponent from "../components/LandingHeroComponent";
import LandingPageSectionCards from "../components/LandingPageSectionCards";
import LandingWelcomeMessageComponent from "../components/LandingWelcomeMessageComponent";


export default function LandingPage() {
    return (
        <div>
            <LandingHeroComponent />
            <LandingWelcomeMessageComponent />
            <LandingPageSectionCards />
        </div>
    );
}