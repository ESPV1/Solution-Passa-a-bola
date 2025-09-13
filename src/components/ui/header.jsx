export default function Header() {
    return (
        <header className="w-full px-4 py-2 grid [grid-template-columns:0.5fr_1fr] items-center bg-[#383838] text-white">
            <h2 className="text-4xl">Passa a bola</h2>
            <nav className="flex items-center justify-around">
                <ul className="flex gap-6 text-lg">
                    <li>Home</li>
                    <li>Jogadoras</li>
                    <li>Times</li>
                    <li>Quadras</li>
                </ul>
                <ul className="flex gap-6">
                    <li className="px-12 py-2 bg-[#009EFF] rounded-md">Login</li>
                    <li className="px-8 py-2 bg-[#E9E3E3] rounded-md text-black">Cadastre-se</li>
                </ul>
            </nav>
        </header>
    )
}