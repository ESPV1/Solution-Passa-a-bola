import React from "react";
import { Link } from "react-router-dom";

export const UserTypeNotSelected = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-15">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Tipo de usuário não selecionado
        </h2>
        <p className="text-gray-600 font-bold">
          Você precisa escolher se deseja ser um torcedor ou uma jogadora.
        </p>
        <Link
          to="/user-type"
          className="inline-block px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
        >
          Escolher tipo de usuário
        </Link>
      </div>
    </div>
  );
};