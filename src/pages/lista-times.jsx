import React from "react";
import listaTimes from "../data/json/times.json";

export default function Times() {
    return (
        <main className="min-h-screen w-full bg-white text-slate-900">
            <section className="mx-auto w-full max-w-7xl px-6 py-8">
                <h1 className="text-2xl font-bold text-rose-600 mb-6">Lista de Times</h1>

                {/* layout */}
                <div className="grid grid-cols-4 gap-6 items-start">
                    {/* lista de times */}
                    <div className="col-span-3 rounded-2xl border border-rose-200 p-6 bg-white shadow-sm">
                        <div className="grid grid-cols-3 gap-8">
                            {listaTimes.map((t) => (
                                <div
                                    key={t.id}
                                    className="flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/60 p-6"
                                >
                                    {/* brasão do time */}
                                    <div className="w-40 h-40 rounded-lg bg-rose-100 flex items-center justify-center">
                                        <img
                                            src={t.logo}
                                            alt={`Logo do ${t.nome}`}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>

                                    {/* informações do time */}
                                    <div className="text-center">
                                        <p className="font-semibold text-slate-800">{t.nome}</p>
                                        <p className="text-xs text-slate-600">
                                            Rank {t.rank} • {t.estado}
                                        </p>
                                    </div>

                                    {/* botão para ver mais informações sobre os times */}
                                    <button className="mt-2 rounded-lg bg-rose-500 text-white px-3 py-1.5 text-sm hover:bg-rose-600 transition-colors duration-200 cursor-pointer">
                                        Ver time
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* filtros */}
                    <aside className="col-span-1 rounded-2xl border border-rose-200 bg-white p-4 shadow-sm">
                        <div className="flex gap-3 mb-3">
                            <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700">
                                Jogadoras
                            </button>
                            <button className="px-3 py-1.5 rounded-lg border border-rose-500 text-rose-700">
                                Times
                            </button>
                        </div>

                        <div className="space-y-3">
                            <input
                                type="text"
                                placeholder="Nome do time"
                                className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                            />

                            <select className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 cursor-pointer">
                                <option>Rank</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                            </select>

                            <select className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 cursor-pointer">
                                <option>Estado</option>
                                <option>São Paulo</option>
                                <option>Rio de Janeiro</option>
                                <option>Minas Gerais</option>
                                <option>Bahia</option>
                                <option>Amazonas</option>
                                <option>Pernambuco</option>
                                <option>Paraná</option>
                                <option>Rio Grande do Sul</option>
                                <option>Santa Catarina</option>
                                <option>Mato Grosso</option>
                            </select>

                            <div className="flex gap-2 pt-1">
                                <button className="flex-1 rounded-lg bg-rose-500 text-white px-3 py-2 text-sm hover:bg-rose-600 transition-colors duration-200 cursor-pointer">
                                    Aplicar filtros
                                </button>
                                <button className="rounded-lg border border-rose-300 text-rose-700 px-3 py-2 text-sm hover:bg-rose-50 transition-colors duration-200 cursor-pointer">
                                    Limpar
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}