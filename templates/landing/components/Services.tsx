"use client";
import { useState } from "react";
import { playgrounds } from "../content";

export function Services() {
  const [pumpFilter, setPumpFilter] = useState(false);
  const [toiletFilter, setToiletFilter] = useState(false);
  const [iceCreamFilter, setIceCreamFilter] = useState(false);

  const filtered = playgrounds.items.filter((p) => {
    if (pumpFilter && !p.hasPump) return false;
    if (toiletFilter && !p.hasToilet) return false;
    if (iceCreamFilter && !p.hasIceCream) return false;
    return true;
  });

  const btnClass = (active: boolean) =>
    `px-4 py-2 rounded-full text-sm font-medium border transition cursor-pointer ${
      active
        ? "bg-accent text-white border-accent"
        : "border-ink/20 bg-paper hover:bg-yellow-50"
    }`;

  return (
    <section id="playgrounds" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">{playgrounds.heading}</h2>
        <p className="mt-3 text-lg text-ink/65">{playgrounds.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => setPumpFilter(!pumpFilter)} className={btnClass(pumpFilter)}>
            🚿 Pumpe offen
          </button>
          <button onClick={() => setToiletFilter(!toiletFilter)} className={btnClass(toiletFilter)}>
            🚻 Toilette
          </button>
          <button onClick={() => setIceCreamFilter(!iceCreamFilter)} className={btnClass(iceCreamFilter)}>
            🍦 Eis in der Nähe
          </button>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={i}
              className="p-6 rounded-2xl bg-paper border border-ink/10 hover:border-accent/50 hover:shadow-sm transition"
            >
              <div className="h-28 rounded-xl bg-sky-50 mb-4 flex items-center justify-center text-4xl">
                🛝
              </div>
              <h3 className="font-semibold text-lg leading-tight">{p.name}</h3>
              <p className="text-sm text-ink/50 mb-3">{p.district}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.hasPump && (
                  <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full">🚿 Pumpe</span>
                )}
                {p.hasToilet && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">🚻 Toilette</span>
                )}
                {p.hasIceCream && (
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">🍦 Eis</span>
                )}
              </div>
              <p className="text-sm text-ink/70 leading-relaxed mb-3">{p.note}</p>
              <p className="text-xs text-ink/50">{p.transport}</p>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-ink/50 text-lg">
            Kein Spielplatz passt zu diesen Filtern. 😢
          </p>
        )}
      </div>
    </section>
  );
}
