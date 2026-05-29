// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR LANDING PAGE
// Almost every text change you'll want to make lives here.
// You don't need to touch the components — they read from this file.
// ────────────────────────────────────────────────────────────────

export const business = {
  name: "Wasserspielplätze Berlin",
  shortName: "💧 Wasserspielplätze",
};

export const nav = {
  links: [
    { label: "Spielplätze", href: "#playgrounds" },
    { label: "Über uns", href: "#about" },
    { label: "Tipp einsenden", href: "#submit" },
  ],
  ctaLabel: "Spielplatz finden",
  ctaHref: "#playgrounds",
};

export const hero = {
  eyebrow: "🌞 Berlin · Sommer 2025",
  heading: "Berlin's beste Spielplätze mit Wasserpumpe — in Sekunden gefunden.",
  subheading:
    "Es ist heiß, du hast ein schwitzigendes 4-jähriges Kind und 90 Minuten Zeit. Du willst einen Spielplatz mit Wasserpumpe, einer Toilette in der Nähe und am besten noch Eis. Diese Seite zeigt dir genau das — schnell.",
  ctaPrimary: { label: "Spielplätze entdecken 🗺️", href: "#playgrounds" },
  ctaSecondary: { label: "Tipp einsenden", href: "#submit" },
};

export const playgrounds = {
  heading: "Spielplätze entdecken",
  intro: "Klicke auf die Filter, um genau das zu finden, was du brauchst.",
  items: [
    {
      name: "Volkspark Prenzlauer Berg",
      district: "Pankow",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Großer Sandbereich mit zwei Wasserpumpen. Eiswagen steht im Sommer täglich ab 12 Uhr direkt am Eingang.",
      transport: "🚇 U2 Eberswalder Str., 5 Min. Fußweg",
    },
    {
      name: "Görlitzer Park",
      district: "Kreuzberg",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Belebt und beliebt. Wasserpumpe am Kinderspielbereich direkt neben dem Sommercafé.",
      transport: "🚇 U1/U3 Görlitzer Bahnhof, direkt vor dem Eingang",
    },
    {
      name: "Rudolph-Wilde-Park",
      district: "Schöneberg",
      hasPump: true,
      hasToilet: true,
      hasIceCream: false,
      note: "Ruhiger, gut gepflegter Park. Spielplatz mit Wasserpumpe in gutem Zustand, selten überfüllt.",
      transport: "🚇 U4 Rathaus Schöneberg, 8 Min. Fußweg",
    },
    {
      name: "Mauerpark",
      district: "Prenzlauer Berg",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Sonntags Flohmarkt direkt nebenan. Wasserpumpe am Spielbereich gut erreichbar, mehrere Eisstände.",
      transport: "🚇 U8 Bernauer Str., 10 Min. Fußweg",
    },
    {
      name: "Viktoriapark",
      district: "Kreuzberg",
      hasPump: true,
      hasToilet: false,
      hasIceCream: true,
      note: "Wasserpumpe direkt neben dem kleinen Wasserfall. Eisdiele am Parkeingang Kreuzbergstr.",
      transport: "🚇 U6 Mehringdamm, 5 Min. Fußweg",
    },
    {
      name: "Friedrichshain Park",
      district: "Friedrichshain",
      hasPump: true,
      hasToilet: true,
      hasIceCream: false,
      note: "Toller Ausblick vom Hügel. Wasserpumpe am unteren Spielbereich, ruhiger als andere Parks.",
      transport: "🚇 U5 Frankfurter Tor, 8 Min. Fußweg",
    },
  ],
};

export const about = {
  heading: "Warum diese Seite?",
  items: [
    {
      title: "Weil Google dich im Stich lässt",
      summary:
        "Wenn dein Kind im Juli Durst hat und du schnell einen Spielplatz mit laufender Wasserpumpe suchst, bekommst du Ergebnisse von 2018 und halbfertige Karten. Das wollten wir besser machen.",
    },
    {
      title: "Von Berliner Eltern, für Berliner Eltern",
      summary:
        "Ich bin Mama in Kreuzberg und habe diese Seite aus Frust gebaut — nach dem dritten Sommertag, an dem die Pumpe gesperrt war. Alle Infos kommen von echten Besuchen, nicht vom Schreibtisch.",
    },
    {
      title: "Immer aktuell",
      summary:
        "Die Community hilft mit. Wenn eine Pumpe kaputt ist oder ein neuer Spielplatz öffnet, schick uns einen Tipp. Wir halten die Liste frisch.",
    },
  ],
};

export const testimonials = {
  heading: "Was Eltern sagen",
  quotes: [
    {
      text: "Endlich eine Seite, die mir in 30 Sekunden sagt, wo wir hingehen können. Mein Sohn liebt den Görlitzer Park — die Pumpe läuft immer.",
      author: "Julia M.",
      role: "Mama, Kreuzberg",
    },
    {
      text: "Als Touristin mit Kind war das Gold wert. Ich wusste nicht, wo ich anfangen soll — diese Seite hat das Problem in 2 Minuten gelöst.",
      author: "Sara K.",
      role: "Besucherin aus Amsterdam",
    },
  ],
};

export const submit = {
  heading: "Spielplatz vorschlagen",
  body: "Du kennst einen Spielplatz mit Wasserpumpe, der hier noch fehlt? Schick uns die Infos — wir prüfen und fügen ihn hinzu. Die Community dankt dir! 🙌",
  email: "hallo@wasserspielplaetze-berlin.de",
};

export const meta = {
  title: "Wasserspielplätze Berlin — Spielplätze mit Wasserpumpe finden",
  description:
    "Berlins beste Spielplätze mit Wasserpumpen — gefiltert nach Toilette, Eis und Bezirk. Schnell, aktuell, von Eltern für Eltern.",
};
