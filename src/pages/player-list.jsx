import React from "react";
import listaPlayers from "../data/json/players.json";
import { Link } from "react-router-dom";

export default function PlayerList() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      <section className="mx-auto w-full max-w-7xl px-6 py-8">
        <h1 className="text-2xl font-bold text-rose-600 mb-6">
          Lista de Jogadoras
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* filtros */}
          <aside className="order-1 lg:order-2 col-span-1 rounded-2xl border border-rose-200 bg-white p-4 shadow-sm">
            <div className="flex gap-3 mb-3">
              <button className="px-3 py-1.5 rounded-lg border border-rose-500 text-rose-700">
                Jogadoras
              </button>
              <Link
                to="/team-list"
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:cursor-pointer hover:bg-slate-50 transition-colors"
              >
                Times
              </Link>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Nome da jogadora"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
              />

              <select className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 cursor-pointer">
                <option>Posição</option>
                <option>Atacante</option>
                <option>Meio-campo</option>
                <option>Zagueira</option>
                <option>Lateral-direita</option>
                <option>Lateral-esquerda</option>
                <option>Goleira</option>
              </select>

              <select className="w-full rounded-xl border border-slate-200 px-3 py-2 outline-none bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 cursor-pointer">
                <option>Time</option>
                <option>Arsenal WFC</option>
                <option>Corinthians</option>
                <option>Grêmio</option>
                <option>Kansas City Current</option>
                <option>Levante UD</option>
                <option>North Carolina Courage</option>
                <option>Orlando Pride</option>
                <option>Palmeiras</option>
                <option>Racing Louisville</option>
                <option>Santos</option>
                <option>São Paulo FC</option>
              </select>

              <div className="space-y-2">
                <label className="text-sm text-slate-700">Rating mínimo</label>
                <input
                  type="range"
                  min="60"
                  max="100"
                  defaultValue="70"
                  className="w-full accent-rose-500"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>60</span>
                  <span>100</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button className="flex-1 rounded-lg bg-rose-500 text-white px-3 py-2 text-sm hover:bg-rose-600 transition-colors duration-200 cursor-pointer">
                  Aplicar filtros
                </button>
                <button className="rounded-lg border border-rose-300 text-rose-700 px-3 py-2 text-sm hover:bg-rose-50 transition-colors duration-200 cursor-pointer">
                  Limpar
                </button>
              </div>
            </div>
          </aside>

          {/* lista de jogadoras */}
          <div className="order-2 lg:order-1 col-span-3 rounded-2xl border border-rose-200 p-6 bg-white shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {listaPlayers.map((player) => (
                <div
                  key={player.id}
                  className="flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-6"
                >
                  {/* foto da jogadora */}
                  <div className="w-40 h-40 rounded-full bg-rose-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={player.foto}
                      alt={`Foto de ${player.nome}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* informações da jogadora */}
                  <div className="text-center">
                    <p className="font-semibold text-slate-800 text-lg">
                      {player.nome}
                    </p>
                    <p className="text-sm text-rose-600 font-medium">
                      {player.posicao}
                    </p>
                    <p className="text-xs text-slate-600">
                      {player.idade} anos • {player.time}
                    </p>
                    <p className="text-xs text-slate-500">
                      {player.nacionalidade}
                    </p>
                  </div>

                  {/* estatísticas */}
                  <div className="flex justify-center gap-4 text-xs text-slate-600 bg-white rounded-lg p-2 w-full">
                    <div className="text-center">
                      <p className="font-semibold text-rose-600">
                        {player.rating}
                      </p>
                      <p>Rating</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold">{player.gols}</p>
                      <p>Gols</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold">{player.assistencias}</p>
                      <p>Assist.</p>
                    </div>
                  </div>

                  {/* botão ver perfil */}
                  <button className="mt-2 rounded-lg bg-rose-500 text-white px-4 py-2 text-sm hover:bg-rose-600 transition-colors duration-200 cursor-pointer w-full">
                    Ver perfil
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
