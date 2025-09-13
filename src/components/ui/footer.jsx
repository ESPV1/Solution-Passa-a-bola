export default function Footer() {
    return (
        <footer className="grid grid-cols-3 px-8 py-8 bg-[#383838] text-white">
            <section className="flex flex-col gap-10 border-r-2">
                <div>
                    <h2 className="text-2xl">Fale Conosco</h2>
                    <span>passaabola@dominio.com</span>
                </div>
                <div className="flex gap-2">
                    <span>IC1</span>
                    <span>IC2</span>
                    <span>IC3</span>
                </div>
            </section>
            <section className="flex flex-col gap-2 border-r-2">
                <h2 className="text-2xl ml-px">Links rápidos</h2>
                <nav className="flex justify-around">
                    <ul className="flex flex-col gap-3">
                        <li>Sobre nós</li>
                        <li>Perguntas frequentes - FAQ</li>
                        <li>Politica de Pirivacidade</li>
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <li>Termos de uso</li>
                        <li>Cards de Jogadoras</li>
                        <li>Eventos</li>
                    </ul>
                </nav>
            </section>
            <section className="flex flex-col justify-center items-center">
                <h2 className="text-2xl">© 2025 Passa Bola</h2>
                <span className="text-2xl">Todos os direitos reservados.</span>
            </section>
        </footer>
    )

}