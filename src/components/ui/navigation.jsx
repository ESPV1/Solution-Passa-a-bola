import { Link, useLocation } from "react-router-dom";

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/player-list", label: "Jogadoras" },
  { to: "/team-list", label: "Times" },
  { to: "/courts", label: "Quadras" },
];

export default function Navigation({ orientation = "horizontal" }) {
  const location = useLocation();

  return (
    <ul
      className={`flex items-center justify-center text-lg ${
        orientation === "horizontal" ? "flex-row gap-4" : "flex-col gap-4"
      }`}
    >
      {navigationLinks.map(({ to, label }) => {
        const isActive = location.pathname === to;
        return (
          <li key={to}>
            <Link
              to={to}
              className={`transition-colors duration-200 block px-2 ${
                isActive ? "text-rose-200 font-bold" : "hover:text-rose-200"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
