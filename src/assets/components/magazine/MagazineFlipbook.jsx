import { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./MagazineFlipbook.css";

/**
 * Each page must be a DOM node that forwards `ref` (required by react-pageflip / StPageFlip).
 */
const FlipPage = forwardRef(({ src, alt, pageIndex }, ref) => (
  <div
    className="magazine-flip-page"
    ref={ref}
    data-density={pageIndex === 0 ? "hard" : "soft"}
  >
    <img src={src} alt={alt} draggable={false} />
  </div>
));
FlipPage.displayName = "FlipPage";

/**
 * Interactive magazine spread using screenshots from `public/` (e.g. /magazine/page-01.png).
 *
 * @param {{ pages: string[] }} props - URLs to page images, in order (cover first).
 */
export function MagazineFlipbook({ pages = [] }) {
  if (!pages.length) {
    return (
      <p className="magazine-flipbook-empty">
        Add PNG/JPG screenshots to <code>public/magazine/</code> and list their paths in{" "}
        <code>MAGAZINE_PAGE_IMAGES</code> in <code>MagazinePage.jsx</code>.
      </p>
    );
  }

  return (
    <div className="magazine-flipbook-wrap">
      <HTMLFlipBook
        width={450}
        height={600}
        minWidth={280}
        maxWidth={920}
        minHeight={380}
        maxHeight={1230}
        size="stretch"
        /* Less “spine” in the middle: no fold shadows + low shadow cap */
        drawShadow={false}
        maxShadowOpacity={0}
        /* First + last pages as “hard”; first spread is cover only (not paired with page 2) */
        showCover={true}
        mobileScrollSupport
        className="magazine-flipbook"
      >
        {pages.map((src, i) => (
          <FlipPage
            key={`${src}-${i}`}
            pageIndex={i}
            src={src}
            alt={i === 0 ? "Magazine cover" : `Magazine page ${i + 1}`}
          />
        ))}
      </HTMLFlipBook>
      <p className="magazine-flipbook-hint">Drag corners or tap edges to turn pages.</p>
    </div>
  );
}
