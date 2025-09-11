import React from "react";
import fotoTorcedor from "../assets/foto-torcedor.png";
import { eventos } from "../constants/eventos";

export default function PerfilTorcedor() {
    return (
        <main className="mx-auto p-8 max-w-7xl min-h-[80vh] grid place-items-center mt-10 md:mt-14">
            <section className="w-full">
                
                {/* Container principal */}
                <header className="mb-6 text-center">
                    <h1 className="text-4xl font-semibold tracking-wide text-rose-500">
                        Perfil Torcedor
                    </h1>
                </header>

                <div className="flex items-start justify-center gap-14">
                    {/* Foto de perfil e dados */}
                    <aside className="flex flex-col items-center self-center text-center gap-3">
                        <img
                            src={fotoTorcedor}
                            alt="Foto do torcedor"
                            className="w-64 h-64 rounded-full object-cover bg-rose-100 border-4 border-rose-200"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold text-rose-500">Edoardo Pari</h2>
                            <p className="text-gray-600">edo.pari@fiap.com.br</p>
                        </div>
                    </aside>

                    {/* Inscrições */}
                    <section className="flex-1 max-w-6xl">
                        <div className="bg-rose-50 rounded-2xl p-8 shadow border border-rose-200">
                            <h3 className="text-2xl tracking-wide uppercase text-rose-700 font-bold">
                                Inscrições
                            </h3>

                            <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                                {eventos.map((ev) => (
                                    <article
                                        key={ev.titulo}
                                        className="flex flex-col justify-between rounded-2xl border border-rose-200 bg-white p-6"
                                    >
                                        <div>
                                            <h4 className="font-medium text-rose-700">{ev.titulo}</h4>
                                            <p className="text-sm text-gray-500">{ev.desc}</p>
                                        </div>
                                        <button
                                            type="button"
                                            className="mt-4 px-3 py-1.5 text-sm rounded-full bg-rose-500 text-white"
                                        >
                                            Cancelar
                                        </button>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}