export default function Home() {
  return (
    <main className="scene">
      <div className="floating-particles" aria-hidden="true" />
      <section className="frame" aria-label="Luxury watch and whiskey editorial set">
        <div className="content-grid">
          <article className="copy">
            <span className="badge" aria-hidden="true">
              <span className="badge-dot" />
              Medium Format Capture
            </span>
            <h1 className="headline">
              Chronomancer Reserve — Midnight Release
            </h1>
            <p className="description">
              A private commission for discerning collectors, meticulously lit
              to reveal the interplay between hand-brushed steel and aged
              single-malt hues. Shot on a 100mm macro lens, the scene captures
              every beveled edge and amber reflection that defines haute
              horology.
            </p>
            <div className="specs">
              <span>100mm Macro</span>
              <span>f/5.6 | ISO 100</span>
              <span>Warm Cinematic Lighting</span>
              <span>Marble Lounge Suite</span>
            </div>
            <div className="mobile-divider" />
            <a className="cta" href="#portfolio">
              View Editorial Series
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6 6 6-6 6"
                />
              </svg>
            </a>
            <p className="signature">Atelier Lumière Studio</p>
          </article>
          <div className="composition" role="presentation">
            <div className="marble-plinth" aria-hidden="true" />
            <div className="watch-wrapper" aria-label="Luxury watch resting on marble">
              <div className="watch-shadow" aria-hidden="true" />
              <div className="watch-strap watch-strap--top" aria-hidden="true" />
              <div className="watch-body">
                <div className="watch-face">
                  <div className="watch-lume" aria-hidden="true" />
                  <span className="dial-hand dial-hand--hour" aria-hidden="true" />
                  <span className="dial-hand dial-hand--minute" aria-hidden="true" />
                  <span className="dial-hand dial-hand--second" aria-hidden="true" />
                  <span className="dial-axis" aria-hidden="true" />
                </div>
                <div className="watch-reflection" aria-hidden="true" />
              </div>
              <div className="watch-strap watch-strap--bottom" aria-hidden="true" />
            </div>
            <div className="whiskey" aria-label="Crystal glass of whiskey with amber reflections">
              <div className="whiskey-liquid" aria-hidden="true" />
              <div className="whiskey-base" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
