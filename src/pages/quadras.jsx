import React from "react";

const escolinhas = [
    { nome: "Escolinha Primavera", desc: "Aulas 2ª/4ª, futsal e society.", distancia: "1,2 km" },
    { nome: "Projeto Passa a Bola – Zona Leste", desc: "Categorias sub-11 ao adulto.", distancia: "3,4 km" },
    { nome: "Quadra Comunitária Vila Rosa", desc: "Treinos gratuitos sábados.", distancia: "4,1 km" },
    { nome: "Centro Esportivo Aurora", desc: "Avaliações mensais para novas jogadoras.", distancia: "6,0 km" },
    { nome: "Arena Parque", desc: "Locação por hora, society 7x7.", distancia: "7,8 km" },
];

export default function Quadras() {
    return (
        <main className="min-h-screen w-full bg-white text-slate-900">
            <section className="mx-auto w-full max-w-7xl px-6 py-8">
               
                <h1 className="text-2xl font-bold text-rose-600 mb-6">Quadras e Escolinhas</h1>

      
                <div className="grid grid-cols-[380px,1fr] gap-8">

                    <aside className="bg-white rounded-2xl p-4 border border-rose-200 shadow-sm">
                        <input
                            type="text"
                            placeholder="Buscar escolinhas ou quadras…"
                            className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                        />

                        <ul className="mt-4 space-y-4">
                            {escolinhas.map((e, i) => (
                                <li
                                    key={i}
                                    className="rounded-xl border border-slate-200 hover:border-rose-300 transition-shadow shadow-sm hover:shadow-md"
                                >
                                    <div className="p-4">
                                        <h3 className="font-semibold text-slate-800">
                                            <span className="inline-block rounded-md bg-rose-100 px-2 py-0.5 text-rose-700 mr-2 text-xs">
                                                {e.distancia}
                                            </span>
                                            {e.nome}
                                        </h3>
                                        <p className="text-sm text-slate-600 mt-1">{e.desc}</p>
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

                    <div className="relative rounded-2xl overflow-hidden border border-rose-200 shadow-sm">
                        <div className="w-full h-[560px] bg-slate-100" />
                        <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-rose-700 border border-rose-200">
                            Quadras próximas
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
