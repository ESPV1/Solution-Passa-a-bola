import React from "react";
import { quadras } from "../constants/quadras";

export default function Quadras() {
    return (
        <main className="min-h-screen w-full bg-white text-slate-900">
            {/* conteúdo principal */}
            <section className="mx-auto w-full max-w-7xl px-6 py-8">
                <h1 className="text-2xl font-bold text-rose-600 mb-6">Quadras e Escolinhas</h1>

                <div className="flex items-start gap-8">
                    {/* coluna da lista */}
                    <aside className="shrink-0 w-[380px] bg-white rounded-2xl p-4 border border-rose-200 shadow-sm">
                        {/* campo de busca */}
                        <input
                            type="text"
                            placeholder="Buscar escolinhas ou quadras…"
                            className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                        />

                        {/* lista de escolinhas e quadras */}
                        <ul className="mt-4 space-y-4">
                            {quadras.map((e, i) => (
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
                                            {e.nome}
                                        </h3>

                                        {/* descrição */}
                                        <p className="text-sm text-slate-600 mt-1">{e.desc}</p>
                                        
                                        {/* botões */}
                                        <div className="mt-3 flex gap-2">
                                            <button className="rounded-lg bg-rose-500 text-white px-3 py-1.5 text-sm hover:bg-rose-600">
                                                Ver no mapa
                                            </button>
                                            <button className="rounded-lg border border-rose-300 text-rose-700 px-3 py-1.5 text-sm hover:bg-rose-50">
                                                Contato
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* coluna do mapa */}
                    <div className="flex-1 relative rounded-2xl overflow-hidden border border-rose-200 shadow-sm">
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

                        {/* etiqueta em cima do mapa */}
                        <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-rose-700 border border-rose-200">
                            Quadras próximas
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}