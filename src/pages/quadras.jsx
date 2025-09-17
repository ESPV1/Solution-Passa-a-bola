import React, { useState, useEffect } from "react";
import { useData } from "../hooks/useData";

export default function Quadras() {
  const { getQuadras } = useData();
  const [quadras, setQuadras] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredQuadras, setFilteredQuadras] = useState([]);

  useEffect(() => {
    const quadrasData = getQuadras();
    setQuadras(quadrasData);
    setFilteredQuadras(quadrasData);
  }, [getQuadras]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredQuadras(quadras);
    } else {
      const filtered = quadras.filter(
        (quadra) =>
          quadra.endereco?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          quadra.desc?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          quadra.bairro?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          quadra.localidade?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredQuadras(filtered);
    }
  }, [searchTerm, quadras]);

  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-bold text-rose-600 mb-6">
          Quadras e Escolinhas
        </h1>

        {/* layout responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[380px_1fr] gap-6">
          {/* sidebar lista */}
          <aside className="order-1 bg-white rounded-2xl p-4 border border-rose-200 shadow-sm">
            {/* busca */}
            <input
              type="text"
              placeholder="Buscar escolinhas ou quadras…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
            />

            {/* lista */}
            <ul className="mt-4 space-y-4">
              {filteredQuadras.length > 0 ? (
                filteredQuadras.map((e, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-slate-200 hover:border-rose-300 transition-shadow shadow-sm hover:shadow-md"
                  >
                    <div className="p-4">
                      {/* nome e distância */}
                      <h3 className="font-semibold text-slate-800">
                        <span className="inline-block rounded-md bg-rose-100 px-2 py-0.5 text-rose-700 mr-2 text-xs">
                          {e.distancia}
                        </span>
                        {e.endereco}
                      </h3>

                      {/* descrição */}
                      <p className="text-sm text-slate-600 mt-1">{e.desc}</p>

                      {/* endereço */}
                      {e.bairro && e.localidade && (
                        <p className="text-xs text-slate-500 mt-1">
                          {e.bairro} - {e.localidade}{" "}
                          {e.cep && `- CEP: ${e.cep}`}
                        </p>
                      )}

                      {/* botões */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button className="flex-1 rounded-lg bg-rose-500 text-white px-3 py-1.5 text-sm hover:bg-rose-600 transition-colors duration-200 cursor-pointer">
                          Ver no mapa
                        </button>
                        <button className="flex-1 rounded-lg border border-rose-300 text-rose-700 px-3 py-1.5 text-sm hover:bg-rose-50 transition-colors duration-200 cursor-pointer">
                          Contato
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="text-center py-8 text-slate-500">
                  <p>Nenhuma quadra encontrada para "{searchTerm}"</p>
                  <p className="text-sm mt-1">Tente buscar por outro termo</p>
                </li>
              )}
            </ul>
          </aside>

          {/* mapa */}
          <div className="order-2 relative rounded-2xl overflow-hidden border border-rose-200 shadow-sm">
            <iframe
              title="Mapa de quadras"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.437374799562!2d-46.656573!3d-23.588254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c9a54e81b7%3A0x1234567890abcdef!2sFIAP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="560"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* etiqueta */}
            <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-rose-700 border border-rose-200 transition-colors duration-200 cursor-pointer hover:bg-rose-50">
              Quadras próximas
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
