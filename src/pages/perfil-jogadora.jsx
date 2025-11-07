import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useData } from "../hooks/useData";
import eventos from "../data/json/eventos.json";
import {
  ChartBarMultiple,
  ChartLine,
  ChartLineInteractive,
  ChartRadar,
} from "@/components/charts";

export default function PerfilJogadora() {
  const { id } = useParams();
  const { user } = useAuth();
  const { getUsers } = useData();
  const [playerData, setPlayerData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  // mock data for recent games
  const recentGames = [
    { team1: "SCCP", team2: "SPFC", result: "X" },
    { team1: "SCCP", team2: "SPFC", result: "X" },
    { team1: "SCCP", team2: "SPFC", result: "X" },
    { team1: "SCCP", team2: "SPFC", result: "X" },
  ];

  useEffect(() => {
    const users = getUsers();
    const playerUsers = users?.filter((u) => u.type === "player") || [];

    let currentPlayer;
    if (id) {
      currentPlayer = playerUsers.find((p) => p.id === parseInt(id));
    } else {
      currentPlayer =
        playerUsers.find((p) => p.email === user?.email) || playerUsers[0];
    }

    setPlayerData(currentPlayer);
  }, [getUsers, user, id]);

  // cleanup para o timeout caso o componente desmonte
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // reajusta a rolagem ao redimensionar tela, mantendo a "página" visível
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const pageWidth = containerRef.current.clientWidth;
      containerRef.current.scrollTo({
        left: pageWidth * currentPage,
        behavior: "instant",
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentPage]);

  const scrollToPage = (pageIndex) => {
    if (containerRef.current) {
      const pageWidth = containerRef.current.clientWidth;
      containerRef.current.scrollTo({
        left: pageWidth * pageIndex,
        behavior: "smooth",
      });
      setCurrentPage(pageIndex);
    }
  };

  // lógica do handleScroll com debounce
  const handleScroll = () => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const pageWidth = containerRef.current.clientWidth;
        const newPage = Math.round(scrollLeft / pageWidth);
        if (newPage !== currentPage) setCurrentPage(newPage);
      }
    }, 150);
  };

  if (!playerData) {
    return (
      <main className="w-full min-h-screen flex items-center justify-center px-4">
        <div>Carregando perfil da jogadora...</div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-white relative">
      {/* navegação de páginas */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200 px-3 sm:px-4 md:px-6 py-3 sm:py-4">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div className="flex gap-2">
            <button
              onClick={() => scrollToPage(0)}
              className={`px-3 sm:px-4 py-2 cursor-pointer rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
                currentPage === 0
                  ? "bg-rose-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Perfil
            </button>
            <button
              onClick={() => scrollToPage(1)}
              className={`px-3 sm:px-4 py-2 cursor-pointer rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
                currentPage === 1
                  ? "bg-rose-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Dashboard
            </button>
          </div>

          {/* indicadores de página - apenas desktop */}
          <div className="flex gap-2">
            {[0, 1].map((page) => (
              <div
                key={page}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentPage === page ? "bg-rose-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* container com scroll horizontal */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
      >
        {/* esconder scrollbar cross-browser */}
        <style>{`
          /* Chrome/Safari */
          div::-webkit-scrollbar { display: none; }
        `}</style>

        {/* página 1: perfil */}
        <div className="w-full flex-shrink-0 snap-start px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
          <section className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {/* coluna da esquerda */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-5 sm:p-6 md:p-8 mb-5 sm:mb-6">
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white rounded-lg px-2.5 py-1 shadow-sm">
                      <span className="text-[10px] sm:text-xs font-bold text-gray-600">
                        MEI
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src={playerData.profileURL || defaultAvatar}
                        alt={playerData.name}
                        className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg mb-3 sm:mb-4"
                      />
                      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1.5 sm:mb-2 text-center">
                        {playerData.name?.toUpperCase()}
                      </h1>
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src="/brazil-flag.png"
                          alt="Brasil"
                          className="w-6 h-4 sm:w-7 sm:h-5 md:w-9 md:h-6 rounded"
                        />
                        <img
                          src="/corinthians.png"
                          alt="Team"
                          className="w-5 h-5 md:w-6 md:h-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 md:p-6 mb-5 sm:mb-6 font-bold">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src="/corinthians.png"
                        alt="Team logo"
                        className="w-8 h-8 md:w-10 md:h-10"
                      />
                      <h2 className="text-xl md:text-3xl font-bold text-rose-500">
                        {playerData.time}
                      </h2>
                    </div>
                    <hr className="mb-2 text-gray-200" />
                    <div className="text-xs sm:text-sm mb-4 sm:mb-6 text-gray-600 bg-gray-100 rounded-md pl-2 pr-2 py-1">
                      <span>Visão geral</span>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                        <div className="space-y-3 sm:space-y-4">
                          <div>
                            <div className="text-rose-500 text-[11px] sm:text-xs md:text-sm font-bold">
                              Idade
                            </div>
                            <div className="text-sm font-bold">
                              {playerData.idade}
                            </div>
                          </div>
                          <div>
                            <div className="text-rose-500 text-[11px] sm:text-xs md:text-sm font-bold">
                              Altura
                            </div>
                            <div className="text-sm">{playerData.altura}</div>
                          </div>
                        </div>

                        <div className="space-y-3 sm:space-y-4 border-x border-gray-200 px-2">
                          <div>
                            <div className="text-rose-500 text-[11px] sm:text-xs md:text-sm">
                              Posição
                            </div>
                            <div className="text-sm font-bold">
                              {playerData.posicao
                                ?.substring(0, 3)
                                .toUpperCase()}
                            </div>
                          </div>
                          <div>
                            <div className="text-rose-500 text-[11px] sm:text-xs md:text-sm">
                              Pé preferido
                            </div>
                            <div className="text-sm">
                              {playerData.pePreferido}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col justify-center">
                          <div>
                            <div className="text-rose-500 text-[11px] sm:text-xs md:text-sm">
                              Camisa
                            </div>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                              {playerData.numeroCamisa}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* coluna da direita */}
              <div className="lg:col-span-2 space-y-5 sm:space-y-6">
                {/* eventos */}
                <section className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-rose-500 text-center mb-4 sm:mb-6">
                    Próximos Eventos
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {eventos.slice(0, 3).map((evento, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-4 h-36 sm:h-40 md:h-48 bg-gray-50"
                      >
                        <h4 className="font-semibold text-sm sm:text-base text-gray-800 mb-1.5 sm:mb-2 line-clamp-2">
                          {evento.titulo}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                          {evento.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* últimos jogos */}
                <section className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-rose-500 mb-4 sm:mb-6">
                    Últimos jogos
                  </h3>
                  <div className="space-y-3">
                    {recentGames.map((game, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row items-center justify-between border border-gray-200 rounded-xl p-3 gap-3"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src="/corinthians.png"
                            alt="Team 1"
                            className="w-6 h-6 md:w-8 md:h-8"
                          />
                          <span className="font-medium text-gray-700">
                            {game.result}
                          </span>
                          <img
                            src="/saopaulo.png"
                            alt="Team 2"
                            className="w-6 h-6 md:w-8 md:h-8"
                          />
                        </div>
                        <div className="text-xs md:text-sm font-medium text-gray-600 text-center sm:text-right">
                          {game.team1} X {game.team2}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>

        {/* página 2: dashboard */}
        <div className="w-full flex-shrink-0 snap-start px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
          <section className="w-full bg-gray-50 max-w-6xl rounded-xl border p-4 sm:p-5 md:p-6 mx-auto">
            <div className="mb-4 sm:mb-5">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-700">
                Dashboard
              </h1>
              <h2 className="text-sm sm:text-base text-gray-500">
                Avalie seu desempenho como jogadora
              </h2>
            </div>

            {/* charts grid responsiva */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <ChartRadar />
              <ChartBarMultiple />
              <ChartLine />
            </div>

            <div className="mt-4 sm:mt-5">
              <ChartLineInteractive />
            </div>
          </section>
        </div>
      </div>

      {/* setas de navegação (mostrar só em md+) */}
      {currentPage > 0 && (
        <button
          onClick={() => scrollToPage(currentPage - 1)}
          className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 bg-white text-rose-500 cursor-pointer border rounded-full p-3 shadow-lg hover:bg-pink-50 transition-colors z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          aria-label="Página anterior"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {currentPage < 1 && (
        <button
          onClick={() => scrollToPage(currentPage + 1)}
          className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 bg-white cursor-pointer border text-rose-500 rounded-full p-3 shadow-lg hover:bg-pink-50 transition-colors z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          aria-label="Próxima página"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

    </main>
  );
}
