import { submit } from "../content";

export function Contact() {
  return (
    <section id="submit" className="bg-muted px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {submit.heading}
        </h2>
        <p className="text-lg text-ink/70 leading-relaxed mb-10">
          {submit.body}
        </p>
        <a
          href={`mailto:${submit.email}`}
          className="inline-block px-8 py-4 bg-accent text-white rounded-full text-lg font-medium hover:opacity-90 transition"
        >
          ✉️ Tipp per E-Mail senden
        </a>
        <p className="mt-6 text-sm text-ink/50">{submit.email}</p>
      </div>
    </section>
  );
}
