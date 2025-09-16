import React, { useEffect, useState } from "react";
import defaultAvatar from "../assets/default-avatar.webp";
import { eventos } from "../data/json/eventos";
import { useAuth } from "../hooks/useAuth";

export default function PerfilTorcedor() {

    const { user } = useAuth();

    return (
        <main className="w-full min-h-screen flex items-center justify-center px-6 bg-white">
            <section className="w-full max-w-7xl">
                <div className="flex w-full items-start justify-between gap-8">
                    {/* Foto e dados do torcedor */}
                    <aside className="shrink-0 flex flex-col items-center text-center gap-3">
                        <img
                            src={ user?.profileURL || defaultAvatar }
                            alt="Foto do torcedor"
                            className="w-56 h-56 rounded-full object-cover bg-rose-50 border border-rose-200"
                        />
                        <div>
                            <h2 className="text-xl font-semibold text-rose-600">{user?.name + ' ' + user?.surname}</h2>
                            <p className="text-gray-600 text-sm">{user?.email}</p>
                        </div>
                    </aside>

                    {/* Inscrições */}
                    <section className="flex-1 w-full">
                        <div className="w-full bg-rose-50 rounded-lg p-6 border border-rose-200">
                            <h3 className="text-lg text-rose-700 font-semibold">I N S C R I Ç Õ E S</h3>

                            <div className="grid grid-cols-3 gap-4 mt-4">
                                {eventos.map((ev) => (
                                    <article
                                        key={ev.titulo}
                                        className="flex gap-5 flex-col justify-between rounded-lg border border-rose-200 bg-white p-4"
                                    >
                                        <div className="flex flex-col gap-5">
                                            <h4 className="font-medium text-xl text-rose-700">{ev.titulo}</h4>
                                            <p className="text-base text-gray-600">{ev.desc}</p>
                                        </div>
                                        <button
                                            type="button"
                                            className="px-3 py-2 text-sm rounded bg-rose-600 text-white duration-150 hover:cursor-pointer hover:bg-rose-700"
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