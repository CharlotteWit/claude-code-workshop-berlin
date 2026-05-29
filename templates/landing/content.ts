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
  intro: "Filtere nach Bezirk und Ausstattung, um genau das zu finden, was du brauchst.",
  items: [
    // ── Pankow ──────────────────────────────────────────────────
    {
      name: "Volkspark Prenzlauer Berg",
      neighborhood: "Prenzlauer Berg",
      bezirk: "Pankow",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Großer Sandbereich mit zwei Wasserpumpen. Eiswagen steht im Sommer täglich ab 12 Uhr direkt am Eingang.",
      transport: "🚇 U2 Eberswalder Str., 5 Min. Fußweg",
    },
    {
      name: "Mauerpark",
      neighborhood: "Prenzlauer Berg",
      bezirk: "Pankow",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Sonntags Flohmarkt direkt nebenan. Wasserpumpe am Spielbereich gut erreichbar, mehrere Eisstände.",
      transport: "🚇 U8 Bernauer Str., 10 Min. Fußweg",
    },
    {
      name: "Kollwitzplatz Spielplatz",
      neighborhood: "Prenzlauer Berg",
      bezirk: "Pankow",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Sehr beliebt, mitten im Kiez. Wasserpumpe oft gut besucht, viele Cafés und Eisdielen rundherum.",
      transport: "🚇 U2 Senefelderplatz, 3 Min. Fußweg",
    },
    {
      name: "Bürgerpark Pankow",
      neighborhood: "Pankow",
      bezirk: "Pankow",
      hasPump: true,
      hasToilet: true,
      hasIceCream: false,
      note: "Ruhiger, großzügiger Park. Gut gepflegte Wasserpumpe am Kinderspielplatz nahe dem Rosengarten.",
      transport: "🚇 S-Bahn Pankow, 8 Min. Fußweg",
    },
    // ── Friedrichshain-Kreuzberg ─────────────────────────────────
    {
      name: "Görlitzer Park",
      neighborhood: "Kreuzberg",
      bezirk: "Friedrichshain-Kreuzberg",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Belebt und beliebt. Wasserpumpe am Kinderspielbereich direkt neben dem Sommercafé.",
      transport: "🚇 U1/U3 Görlitzer Bahnhof, direkt vor dem Eingang",
    },
    {
      name: "Viktoriapark",
      neighborhood: "Kreuzberg",
      bezirk: "Friedrichshain-Kreuzberg",
      hasPump: true,
      hasToilet: false,
      hasIceCream: true,
      note: "Wasserpumpe direkt neben dem kleinen Wasserfall. Eisdiele am Parkeingang Kreuzbergstr.",
      transport: "🚇 U6 Mehringdamm, 5 Min. Fußweg",
    },
    {
      name: "Volkspark Friedrichshain",
      neighborhood: "Friedrichshain",
      bezirk: "Friedrichshain-Kreuzberg",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Großer Stadtpark mit mehreren Spielbereichen. Märchenbrunnen und Wasserpumpen am Ostteil des Parks.",
      transport: "🚇 U5 Frankfurter Tor, 8 Min. Fußweg",
    },
    // ── Mitte ────────────────────────────────────────────────────
    {
      name: "Weinbergspark",
      neighborhood: "Mitte",
      bezirk: "Mitte",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Kleiner Hügel mit tollem Blick, beliebter Familienpunkt. Wasserpumpe am Spielplatz am Fuß des Hügels.",
      transport: "🚇 U8 Rosenthaler Platz, 5 Min. Fußweg",
    },
    {
      name: "Spielplatz Tiergarten (Großer Stern)",
      neighborhood: "Tiergarten",
      bezirk: "Mitte",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Weitläufiges Parkgelände mit mehreren Wasserpumpen. Kiosks und Imbisse im Sommer geöffnet.",
      transport: "🚇 S5/S7 Tiergarten, 10 Min. Fußweg",
    },
    // ── Tempelhof-Schöneberg ─────────────────────────────────────
    {
      name: "Rudolph-Wilde-Park",
      neighborhood: "Schöneberg",
      bezirk: "Tempelhof-Schöneberg",
      hasPump: true,
      hasToilet: true,
      hasIceCream: false,
      note: "Ruhiger, gut gepflegter Park. Spielplatz mit Wasserpumpe in gutem Zustand, selten überfüllt.",
      transport: "🚇 U4 Rathaus Schöneberg, 8 Min. Fußweg",
    },
    {
      name: "Tempelhofer Feld",
      neighborhood: "Tempelhof",
      bezirk: "Tempelhof-Schöneberg",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Riesiges Freigelände auf dem ehemaligen Flughafen. Wasserpumpen im Spielbereich am Tempelhofer Damm-Eingang.",
      transport: "🚇 U6 Paradestraße oder U8 Boddinstr., je 10 Min. Fußweg",
    },
    // ── Neukölln ─────────────────────────────────────────────────
    {
      name: "Volkspark Hasenheide",
      neighborhood: "Neukölln",
      bezirk: "Neukölln",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Großer Park an der Kreuzberg/Neukölln-Grenze. Wasserpumpe nahe dem Freiluftkino-Eingang.",
      transport: "🚇 U7 Südstern oder Hermannplatz, je 8 Min. Fußweg",
    },
    {
      name: "Britzer Garten",
      neighborhood: "Britz",
      bezirk: "Neukölln",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Weitläufige Parkanlage mit Miniseilbahn. Wasserpumpe am Kinderspielbereich nahe dem Eingang Buckower Damm.",
      transport: "🚇 U7 Britz-Süd, 15 Min. Fußweg oder Bus 179",
    },
    // ── Treptow-Köpenick ─────────────────────────────────────────
    {
      name: "Treptower Park",
      neighborhood: "Treptow",
      bezirk: "Treptow-Köpenick",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Schöner Spreeuferpark. Spielplatz mit Wasserpumpe nahe der Abteibrücke. Eisverkäufer im Sommer vor Ort.",
      transport: "🚇 S8/S9/S85 Treptower Park, 5 Min. Fußweg",
    },
    {
      name: "Wuhlheide",
      neighborhood: "Köpenick",
      bezirk: "Treptow-Köpenick",
      hasPump: true,
      hasToilet: true,
      hasIceCream: false,
      note: "Großes Waldgelände mit Freizeit- und Spielangeboten. Wasserpumpe beim FEZ-Kinderparkeingang.",
      transport: "🚇 S3 Wuhlheide, direkt",
    },
    // ── Marzahn-Hellersdorf ──────────────────────────────────────
    {
      name: "Gärten der Welt",
      neighborhood: "Marzahn",
      bezirk: "Marzahn-Hellersdorf",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Internationale Gartenanlage mit großem Kinderspielbereich und Wasserspielen. Sehr familienfreundlich.",
      transport: "🚇 U5 Cottbusser Platz, 10 Min. Fußweg",
    },
    {
      name: "Erholungspark Marzahn",
      neighborhood: "Marzahn",
      bezirk: "Marzahn-Hellersdorf",
      hasPump: true,
      hasToilet: true,
      hasIceCream: false,
      note: "Ruhiger Park, weniger bekannt. Gut gepflegte Wasserpumpe am Spielplatz nahe dem Rosengarten.",
      transport: "🚇 S7 Marzahn, 12 Min. Fußweg",
    },
    // ── Charlottenburg-Wilmersdorf ───────────────────────────────
    {
      name: "Lietzenseepark",
      neighborhood: "Charlottenburg",
      bezirk: "Charlottenburg-Wilmersdorf",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Idyllischer Park am See. Spielplatz mit Wasserpumpe direkt am Seeufer, Eiskiosk im Sommer.",
      transport: "🚇 U2 Sophie-Charlotte-Platz, 8 Min. Fußweg",
    },
    {
      name: "Preußenpark",
      neighborhood: "Wilmersdorf",
      bezirk: "Charlottenburg-Wilmersdorf",
      hasPump: true,
      hasToilet: false,
      hasIceCream: true,
      note: "Bekannt für den Thai-Markt am Wochenende. Kleine Wasserpumpe am Spielplatz, Imbisse rings um den Park.",
      transport: "🚇 U3 Fehrbelliner Platz, 8 Min. Fußweg",
    },
    // ── Lichtenberg ──────────────────────────────────────────────
    {
      name: "Tierpark Berlin Spielplatz",
      neighborhood: "Lichtenberg",
      bezirk: "Lichtenberg",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Spielplatz direkt neben dem Tierpark-Eingang. Wasserpumpe gut erreichbar, Imbisse auf dem Gelände.",
      transport: "🚇 U5 Tierpark, direkt",
    },
    {
      name: "Spielplatz am Fennpfuhl",
      neighborhood: "Lichtenberg",
      bezirk: "Lichtenberg",
      hasPump: true,
      hasToilet: true,
      hasIceCream: false,
      note: "Schöner Seeuferpark. Wasserpumpe am Spielbereich nahe der Promenade, ruhig und gut erreichbar.",
      transport: "🚇 U5 Frankfurter Allee oder Anton-Saefkow-Platz, 10 Min.",
    },
    // ── Reinickendorf ─────────────────────────────────────────────
    {
      name: "Spielplatz Tegeler See",
      neighborhood: "Tegel",
      bezirk: "Reinickendorf",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Wunderschöne Lage am See. Spielplatz mit Wasserpumpe nahe dem Strandbad, Eis und Kiosk vor Ort.",
      transport: "🚌 Bus 133, Haltestelle Alt-Tegel, 10 Min. Fußweg",
    },
    {
      name: "Freizeitpark Lübars",
      neighborhood: "Lübars",
      bezirk: "Reinickendorf",
      hasPump: true,
      hasToilet: true,
      hasIceCream: false,
      note: "Ländlicher Charme am Dorfrand. Wasserpumpe am Abenteuerspielplatz, ideal für einen ruhigen Ausflug.",
      transport: "🚌 Bus 222, Haltestelle Lübars",
    },
    // ── Spandau ──────────────────────────────────────────────────
    {
      name: "Spielplatz Zitadelle Spandau",
      neighborhood: "Spandau",
      bezirk: "Spandau",
      hasPump: true,
      hasToilet: true,
      hasIceCream: false,
      note: "Direkt neben der historischen Zitadelle. Gut ausgestatteter Spielplatz mit Wasserpumpe am Havelpark.",
      transport: "🚇 U7 Zitadelle, 5 Min. Fußweg",
    },
    {
      name: "Kladower Seeufer",
      neighborhood: "Kladow",
      bezirk: "Spandau",
      hasPump: true,
      hasToilet: false,
      hasIceCream: true,
      note: "Idyllisch am Wannsee-Ufer. Kleiner Spielplatz mit Pumpe, Eisdiele am Fähranleger Kladow.",
      transport: "🚌 Bus 135, Haltestelle Kladow",
    },
    // ── Steglitz-Zehlendorf ──────────────────────────────────────
    {
      name: "Spielplatz Botanischer Garten",
      neighborhood: "Dahlem",
      bezirk: "Steglitz-Zehlendorf",
      hasPump: true,
      hasToilet: true,
      hasIceCream: true,
      note: "Familiärer Spielplatz nahe dem Botanischen Garten. Wasserpumpe im Sandbereich, Café direkt nebenan.",
      transport: "🚇 S1 Botanischer Garten, 5 Min. Fußweg",
    },
    {
      name: "Schlosspark Steglitz",
      neighborhood: "Steglitz",
      bezirk: "Steglitz-Zehlendorf",
      hasPump: true,
      hasToilet: true,
      hasIceCream: false,
      note: "Ruhiger Parkspielplatz im Schatten alter Bäume. Wasserpumpe gut gepflegt, wenig frequentiert.",
      transport: "🚇 S1 Lichterfelde West oder U9 Rathaus Steglitz, 10 Min.",
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
    "Berlins beste Spielplätze mit Wasserpumpen — gefiltert nach Bezirk, Toilette, Eis und mehr. Schnell, aktuell, von Eltern für Eltern.",
};
