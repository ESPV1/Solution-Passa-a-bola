import React from "react";
import { times } from "@/constants/times";

export default function Times() {
    return (
        <main className="min-h-screen w-full bg-white text-slate-900">
            <section className="mx-auto w-full max-w-7xl px-6 py-8">
                <h1 className="text-2xl font-bold text-rose-600 mb-6">Lista de Times</h1>

                {/* grade de times em grid */}
                <div className="rounded-2xl border border-rose-200 p-6 bg-white shadow-sm">
                    <div className="grid grid-cols-3 gap-8">
                        {times.map((t) => (
                            <div
                                key={t.id}
                                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/60 p-6"
                            >
                                {/* logo */}
                                <div className="w-40 h-40 rounded-lg bg-rose-100 flex items-center justify-center">
                                    <img
                                        src={t.logo}
                                        alt={`Logo do ${t.nome}`}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>

                                {/* nome + rank + estado */}
                                <div className="text-center">
                                    <p className="font-semibold text-slate-800">{t.nome}</p>
                                    <p className="text-xs text-slate-600">
                                        Rank {t.rank} • {t.estado}
                                    </p>
                                </div>

                                <button className="mt-2 rounded-lg bg-rose-500 text-white px-3 py-1.5 text-sm hover:bg-rose-600">
                                    Ver time
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}