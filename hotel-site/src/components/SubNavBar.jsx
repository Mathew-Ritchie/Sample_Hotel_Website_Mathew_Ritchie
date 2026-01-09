import { NavLink, useParams } from "react-router-dom";

export default function SideNav({ links }) {
  const { section } = useParams();

  return (
    <aside className="h-full w-64 border-r border-gray-200 bg-white">
      <nav className="flex h-screen flex-col justify-start pt-30 px-6 py-8 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `
              rounded-md px-3 py-2 text-sm font-medium transition
              ${
                isActive || section === link.param
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }
              `
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
