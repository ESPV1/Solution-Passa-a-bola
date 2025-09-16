import React from "react";
import Card from "../components/ui/card";
import AdCard from "../components/ui/adCard";
import cardsData from "../data/json/cardsData.json";
import adsData from "../data/json/adsData.json";
import StepByStep from "../components/home/stepByStep";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-800 flex flex-col">
      {/* passo a passo */}
      <StepByStep />

      {/* conteúdo principal */}
      <section className="flex-1 w-full max-w-7xl mx-auto flex gap-6 px-6 py-8">
        {/* propaganda esquerda */}
        {adsData
          .filter((_, i) => i % 2 === 0)
          .map((ad, index) => (
            <AdCard key={index} data={ad} position="left" />
          ))}

        {/* cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardsData.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>

        {/* propaganda direita */}
        {adsData
          .filter((_, i) => i % 2 !== 0)
          .map((ad, index) => (
            <AdCard key={index} data={ad} position="right" />
          ))}
      </section>
    </main>
  );
}
