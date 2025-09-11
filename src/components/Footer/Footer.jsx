function Footer(){
    return(
        <footer className="grid grid-cols-3 border border-indigo-300 px-8 py-8">
            <section className="flex flex-col gap-10 border-r-2 border-indigo-500">
                <div>
                    <h2>Fale Conosco</h2>
                    <span>passaabola@dominio.com</span>
                </div>
                <div className="flex gap-2">
                    <span>IC1</span>
                    <span>IC2</span>
                    <span>IC3</span>
                </div>
            </section>
            <section className="flex flex-col gap-2 border-r-2 border-indigo-500">
                <h2>Links rápidos</h2>
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
                <h2>Passa a Bola</h2>
                <span>Todos os direitos Reservados</span>
            </section>
        </footer>
    )

}

export default Footer