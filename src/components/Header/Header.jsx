function Header(){
    return(
        <header className="w-full px-4 py-2 grid [grid-template-columns:0.5fr_1fr] border border-gray-300 items-center">
            <h2>Passa a bola</h2>
            <nav className="flex items-center justify-around">
                <ul className="flex gap-6">
                    <li>Home</li>
                    <li>Jogadoras</li>
                    <li>Times</li>
                    <li>Quadras</li>
                </ul>
                <ul className="flex gap-6">
                    <li className="px-8 py-2 border border-gray-300">Login</li>
                    <li className="px-8 py-2 border border-gray-300">Cadastre-se</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header