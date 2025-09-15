import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="grid grid-cols-3 px-8 py-8 bg-rose-500 text-white">
            <section className="flex flex-col gap-10 border-r-2">
                <div>
                    <h2 className="text-2xl">Fale Conosco</h2>
                    <span>passaabola@dominio.com</span>
                </div>
                <div className="flex gap-2">
                    <span className="hover:text-rose-200 transition-colors duration-200 cursor-pointer"><FaInstagram size="2em"/></span>
                    <span className="hover:text-rose-200 transition-colors duration-200 cursor-pointer"><FaTwitter size="2em"/></span>
                    <span className="hover:text-rose-200 transition-colors duration-200 cursor-pointer"><FaYoutube size="2em"/></span>
                </div>
            </section>
            <section className="flex flex-col gap-2 border-r-2">
                <h2 className="text-2xl ml-[2rem]">Links rápidos</h2>
                <nav className="flex justify-around">
                    <ul className="flex flex-col gap-3">
                        <li>Sobre nós</li>
                        <li>Perguntas frequentes - FAQ</li>
                        <li>Política de Pirivacidade</li>
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