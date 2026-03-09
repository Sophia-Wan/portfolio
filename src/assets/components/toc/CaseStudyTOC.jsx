import { useEffect, useMemo, useState } from "react";
import "./CaseStudyTOC.css";

// Exact visual order from the reference:
// waning crescent → third quarter → waning gibbous → full →
// waxing gibbous → first quarter → waxing crescent (then repeat if needed)
const DEFAULT_PHASES = [
  "waning-crescent",
  "third-quarter",
  "waning-gibbous",
  "full",
  "waxing-gibbous",
  "first-quarter",
  "waxing-crescent",
];

const PHASE_IMAGES = {
  "waning-crescent": "/waning crescent.svg",
  "third-quarter": "/third quater.svg",
  "waning-gibbous": "/waning gibbous.svg",
  full: "/full moon.svg",
  "waxing-gibbous": "/waxing gibbous.svg",
  "first-quarter": "/first quater.svg",
  "waxing-crescent": "/waxing cresent.svg",
};

export function CaseStudyTOC({ sections, side = "left", ariaLabel = "On this page" }) {
  const [activeId, setActiveId] = useState(sections?.[0]?.id ?? null);

  const normalizedSections = useMemo(() => {
    const safe = Array.isArray(sections) ? sections : [];
    return safe
      .filter((s) => s && typeof s.id === "string" && s.id.trim().length > 0)
      .map((s, idx) => ({
        id: s.id,
        label: typeof s.label === "string" ? s.label : s.id,
        phase:
          typeof s.phase === "string"
            ? s.phase
            : DEFAULT_PHASES[idx % DEFAULT_PHASES.length],
      }));
  }, [sections]);

  useEffect(() => {
    if (normalizedSections.length === 0) return;

    const targets = normalizedSections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const best = visible
          .slice()
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];

        if (best?.target?.id) setActiveId(best.target.id);
      },
      {
        root: null,
        threshold: [0.1, 0.2, 0.35],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [normalizedSections]);

  const handleJump = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (normalizedSections.length === 0) return null;

  return (
    <nav className={`case-toc case-toc--${side}`} aria-label={ariaLabel}>
      <div className="case-toc__pill" role="list">
        {normalizedSections.map((s) => (
          <button
            key={s.id}
            type="button"
            role="listitem"
            className={`case-toc__item ${activeId === s.id ? "is-active" : ""}`}
            onClick={() => handleJump(s.id)}
            aria-current={activeId === s.id ? "location" : undefined}
            title={s.label}
          >
            <span className="case-toc__icon" aria-hidden="true">
              <img
                className="case-toc__moon"
                src={PHASE_IMAGES[s.phase] ?? PHASE_IMAGES.full}
                alt=""
              />
            </span>
            <span className="case-toc__label" aria-hidden="true">
              {s.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

