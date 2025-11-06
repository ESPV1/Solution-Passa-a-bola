import React from "react";
import { useAuth } from "../hooks/useAuth";
import eventos from "../data/json/eventos.json";

export default function PerfilTorcedor() {
  const { user } = useAuth();

  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 py-10 md:px-6 bg-white">
      <section className="w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row w-full items-start justify-between gap-6 md:gap-8">
          
          {/* Foto e dados do torcedor */}
          <aside className="w-full lg:w-1/3 flex flex-col items-center text-center gap-3">
            <img
              src={user?.profileURL || '/default-avatar.webp'}
              alt="Foto do torcedor"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover bg-rose-50 border border-rose-200"
            />
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-rose-600">
                {user?.name + " " + user?.surname}
              </h2>
              <p className="text-gray-600 text-sm md:text-base">{user?.email}</p>
            </div>
            
          </aside>

          {/* Inscrições */}
          <section className="flex-1 w-full">
            <div className="w-full bg-rose-50 rounded-lg p-4 md:p-6 border border-rose-200">
              <h3 className="text-base md:text-lg text-rose-700 font-semibold tracking-widest">
                INSCRIÇÕES
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {eventos.map((ev) => (
                  <article
                    key={ev.titulo}
                    className="flex flex-col justify-between gap-4 rounded-lg border border-rose-200 bg-white p-4"
                  >
                    <div className="flex flex-col gap-3">
                      <h4 className="font-medium text-lg md:text-xl text-rose-700">
                        {ev.titulo}
                      </h4>
                      <p className="text-sm md:text-base text-gray-600">
                        {ev.desc}
                      </p>
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
