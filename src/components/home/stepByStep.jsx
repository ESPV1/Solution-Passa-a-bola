import React from "react";

export default function StepByStep() {
  return (
    <section className="w-full bg-rose-50 py-3">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        {/* passo 1 */}
        <div className="flex flex-col items-center text-center flex-1">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-rose-600 text-white text-lg font-bold shadow-md">
            1
          </div>
          <p className="mt-4 text-rose-700 text-sm font-semibold">
            Cadastre-se
          </p>
        </div>

        <div className="hidden md:block flex-1 h-[2px] bg-rose-300"></div>

        {/* passo 2 */}
        <div className="flex flex-col items-center text-center flex-1">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-rose-600 text-white text-lg font-bold shadow-md">
            2
          </div>
          <p className="mt-4 text-rose-700 text-sm font-semibold">
            Inscreva-se em um evento
          </p>
        </div>

        <div className="hidden md:block flex-1 h-[2px] bg-rose-300"></div>

        {/* passo 3 */}
        <div className="flex flex-col items-center text-center flex-1">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-rose-600 text-white text-lg font-bold shadow-md">
            3
          </div>
          <p className="mt-4 text-rose-700 text-sm font-semibold">
            Agora é só jogar bola!
          </p>
        </div>
      </div>
    </section>
  );
}
