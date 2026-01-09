import { NavLink } from "react-router-dom";

export default function NavItem({
  to,
  children,
  onClick,
  className = "",
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `
        block p-2 rounded-md transition
        ${
          isActive
            ? "bg-gray-700 text-white"
            : "hover:bg-gray-700 text-white"
        }
        ${className}
        `
      }
    >
      {children}
    </NavLink>
  );
}
