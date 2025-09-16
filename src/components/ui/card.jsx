import React from "react";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  const { image, title, description, url, type } = data;

  return (
    <Link
      to={url}
      className="relative bg-white rounded-lg overflow-hidden border border-rose-200 transform transition duration-300 hover:scale-105 hover:brightness-90 shadow-lg cursor-pointer"
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-rose-900/80 to-transparent text-white">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
}
