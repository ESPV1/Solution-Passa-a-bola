export default function Header() {
    return (
        <header className="w-full px-4 py-2 grid [grid-template-columns:0.5fr_1fr] items-center bg-rose-500 text-white">
            <h2 className="text-4xl">Passa a bola</h2>
            <nav className="flex items-center justify-around">
                <ul className="flex gap-6 text-lg">
                    <li className="hover:text-rose-200 transition-colors duration-200 cursor-pointer">Home</li>
                    <li className="hover:text-rose-200 transition-colors duration-200 cursor-pointer">Jogadoras</li>
                    <li className="hover:text-rose-200 transition-colors duration-200 cursor-pointer">Times</li>
                    <li className="hover:text-rose-200 transition-colors duration-200 cursor-pointer">Quadras</li>
                </ul>
                <ul className="flex gap-6">
                    <li className="px-12 py-2 bg-white text-rose-500 rounded-md hover:bg-rose-100 transition-colors duration-200 cursor-pointer">Login</li>
                    <li className="px-8 py-2 bg-rose-700 rounded-md hover:bg-rose-800 transition-colors duration-200 cursor-pointer">Cadastre-se</li>
                </ul>
            </nav>
        </header>
    )
}