import React from "react";

export default function AdCard({ data }) {
  return (
    <aside className="hidden md:flex flex-col items-center w-38 cursor-pointer">
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <img
          src={data.image}
          alt={data.alt || "Publicidade"}
          className="rounded-lg border border-rose-200 h-150 object-cover"
        />
      </a>
    </aside>
  );
}
