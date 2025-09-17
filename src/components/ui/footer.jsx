import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-rose-500 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

        <section className="flex flex-col gap-6 md:border-r md:border-rose-300 pr-0 md:pr-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Fale Conosco</h2>
            <span className="text-sm">passaabola@dominio.com</span>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-rose-200 transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size="1.8em" />
            </a>
            <a
              href="#"
              className="hover:text-rose-200 transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter size="1.8em" />
            </a>
            <a
              href="#"
              className="hover:text-rose-200 transition-colors duration-200"
              aria-label="YouTube"
            >
              <FaYoutube size="1.8em" />
            </a>
          </div>
        </section>

        <section className="flex flex-col gap-4 md:border-r md:border-rose-300 px-0 md:px-8">
          <h2 className="text-xl font-semibold">Links Rápidos</h2>
          <nav className="flex flex-col sm:flex-row gap-6">
            <ul className="flex flex-col gap-2 text-sm">
              <li className="hover:text-rose-200 cursor-pointer">Sobre nós</li>
              <li className="hover:text-rose-200 cursor-pointer">
                Perguntas frequentes - FAQ
              </li>
              <li className="hover:text-rose-200 cursor-pointer">
                Política de Privacidade
              </li>
            </ul>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="hover:text-rose-200 cursor-pointer">
                Termos de uso
              </li>
              <li className="hover:text-rose-200 cursor-pointer">
                Cards de Jogadoras
              </li>
              <li className="hover:text-rose-200 cursor-pointer">Eventos</li>
            </ul>
          </nav>
        </section>

        <section className="flex flex-col items-center justify-center text-center">
          <h2 className="text-lg font-semibold">© 2025 Passa Bola</h2>
          <span className="text-sm">Todos os direitos reservados.</span>
        </section>
      </div>
    </footer>
  );
}
