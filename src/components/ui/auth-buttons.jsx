import { Link } from 'react-router-dom';

export default function AuthButtons() {
    return (
        <ul className="flex gap-6">
            <li>
                <Link
                    to="/login"
                    className="inline-block px-12 py-2 bg-white text-rose-500 rounded-md hover:bg-rose-100 transition-colors duration-200"
                >
                    Login
                </Link>
            </li>
            <li>
                <Link
                    to="/user-type"
                    className="inline-block px-8 py-2 bg-rose-700 rounded-md hover:bg-rose-800 transition-colors duration-200"
                >
                    Cadastre-se
                </Link>
            </li>
        </ul>
    );
}