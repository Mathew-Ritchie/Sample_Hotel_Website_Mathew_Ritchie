import { Link } from "react-router-dom";

export default function BookNowButton() {
  return (
    <Link
      to="/booking"
      className="primary-button-colour px-2 w-1/2 text-center  py-2 text-white rounded-md text-shadow-lg transition duration-200"
    >
      Book Now
    </Link>
  );
}