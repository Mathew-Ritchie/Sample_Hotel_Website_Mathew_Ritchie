import { Link } from "react-router-dom";


export default function ReadMoreButton({ to }) {
  return (
    <Link
      to={to}
      className="secondary-button-colour px-2 py-2 w-1/2 text-center text-white rounded-md  transition duration-200"
    >
      Read More
    </Link>
  );
}