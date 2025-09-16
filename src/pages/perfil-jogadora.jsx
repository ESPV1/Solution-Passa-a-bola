import React, { useEffect, useState } from "react";
import defaultAvatar from "../assets/default-avatar.webp";
import { useAuth } from "../hooks/useAuth";
import { useData } from "../hooks/useData";
import eventos from "../data/json/eventos.json";

export default function PerfilJogadora() {
    const { user } = useAuth();
    const { getUsers } = useData();
    const [playerData, setPlayerData] = useState(null);

    // Mock data for recent games
    const recentGames = [
        { team1: "SCCP", team2: "SPFC", result: "X" },
        { team1: "SCCP", team2: "SPFC", result: "X" },
        { team1: "SCCP", team2: "SPFC", result: "X" },
        { team1: "SCCP", team2: "SPFC", result: "X" }
    ];

    useEffect(() => {
        // Find player data from users with type "player"
        const users = getUsers();
        const playerUsers = users?.filter(u => u.type === "player") || [];
        const currentPlayer = playerUsers.find(p => p.email === user?.email) || playerUsers[0];
        setPlayerData(currentPlayer);
    }, [getUsers, user]);

    if (!playerData) {
        return (
            <main className="w-full min-h-screen flex items-center justify-center">
                <div>Carregando perfil da jogadora...</div>
            </main>
        );
    }

    return (
        <main className="w-full min-h-screen px-6 py-8 bg-white">
            <section className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <div className="relative">
                            <div className="relative bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8 mb-6">
                                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 shadow-sm">
                                    <span className="text-xs font-bold text-gray-600">MEI</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img
                                        src={defaultAvatar}
                                        alt={playerData.name}
                                        className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg mb-4"
                                    />
                                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{playerData.name?.toUpperCase()}</h1>
                                    <div className="flex items-center gap-2 mb-2">
                                        <img src="/src/assets/brazil-flag.png" alt="Brasil" className="w-9 h-6 rounded" />
                                        <img src="/src/assets/corinthians.png" alt="Team" className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 font-bold">
                                <div className="flex items-center gap-3 mb-4">
                                    <img src="/src/assets/corinthians.png" alt="Team logo" className="w-10 h-10" />
                                    <h2 className="text-3xl font-bold text-pink-600">{playerData.time}</h2>
                                </div>
                                <hr className="mb-[2px] text-gray-400" />
                                <div className="text-sm mb-6 text-gray-600  bg-gray-100 pl-2 py-1">
                                    <span className="">Visão geral</span>
                                </div>
            
                                <div className="space-y-4">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-pink-600 text-sm font-bold">Idade</div>
                                                <div className="text-sm font-bold">{playerData.idade}</div>
                                            </div>
                                            <div>
                                                <div className="text-pink-600 text-sm font-bold">Altura</div>
                                                <div className="text-sm">{playerData.altura}</div>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-4 border-x-1 border-gray-500">
                                            <div>
                                                <div className="text-pink-600 text-sm">Posição</div>
                                                <div className="text-sm font-bold">{playerData.posicao?.substring(0,3).toUpperCase()}</div>
                                            </div>
                                            <div>
                                                <div className="text-pink-600 text-sm">Pé preferido</div>
                                                <div className="text-sm">{playerData.pePreferido}</div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col justify-center">
                                            <div>
                                                <div className="text-pink-600 text-sm">Camisa</div>
                                                <div className="text-5xl font-bold text-gray-800">{playerData.numeroCamisa}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <section className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-2xl font-bold text-pink-600 text-center mb-6">Próximos Eventos</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {eventos.slice(0, 3).map((evento, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg p-4 h-32 bg-gray-50">
                                        <h4 className="font-semibold text-sm text-gray-800 mb-2 line-clamp-2">
                                            {evento.titulo}
                                        </h4>
                                        <p className="text-xs text-gray-600 line-clamp-3">
                                            {evento.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-2xl font-bold text-pink-600 mb-6">Últimos jogos</h3>
                            <div className="space-y-3">
                                {recentGames.map((game, index) => (
                                    <div key={index} className="flex items-center justify-between border-1 border-gray-400 rounded-lg p-3">
                                        <div className="flex items-center gap-4">
                                            <img src="/src/assets/corinthians.png" alt="Team 1" className="w-8 h-8" />
                                            <span className="font-medium text-gray-700">{game.result}</span>
                                            <img src="/src/assets/saopaulo.png" alt="Team 2" className="w-8 h-8" />
                                        </div>
                                        <div className="text-sm font-medium text-gray-600">
                                            {game.team1} X {game.team2}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
}