import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="w-full px-4 py-2 grid [grid-template-columns:0.5fr_1fr] items-center bg-rose-500 text-white">
            <h2 className="text-4xl">Passa a bola</h2>
            <nav className="flex items-center justify-around">
                <ul className="flex gap-6 text-lg">
                    <li>
                        <Link to="/" className="hover:text-rose-200 transition-colors duration-200">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/player-list" className="hover:text-rose-200 transition-colors duration-200">
                            Jogadoras
                        </Link>
                    </li>
                    <li>
                        <Link to="/team-list" className="hover:text-rose-200 transition-colors duration-200">
                            Times
                        </Link>
                    </li>
                    <li>
                        <Link to="/courts" className="hover:text-rose-200 transition-colors duration-200">
                            Quadras
                        </Link>
                    </li>
                </ul>
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
            </nav>
        </header>
    )
}