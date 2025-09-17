import { Link } from "react-router-dom";

export default function AuthButtons() {
  return (
    <ul className="flex gap-4 justify-center">
      <li>
        <Link
          to="/login"
          className="inline-block px-6 py-2 bg-white text-rose-500 rounded-md hover:bg-rose-100 transition-colors duration-200"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/user-type"
          className="inline-block px-4 py-2 bg-rose-700 rounded-md hover:bg-rose-800 transition-colors duration-200"
        >
          Cadastre-se
        </Link>
      </li>
    </ul>
  );
}
