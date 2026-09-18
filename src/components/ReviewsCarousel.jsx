"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";

const GAP = 16;

export default function ReviewsCarousel({ children }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  const cardStep = useCallback(() => {
    const first = trackRef.current?.firstElementChild;
    return first ? first.offsetWidth + GAP : 0;
  }, []);

  const updateActive = useCallback(() => {
    const el = trackRef.current;
    const step = cardStep();
    if (!el || !step) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
    setActive(atEnd ? count - 1 : Math.round(el.scrollLeft / step));
  }, [cardStep, count]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActive, { passive: true });
    return () => el.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  const goTo = (i) => {
    trackRef.current?.scrollTo({ left: i * cardStep(), behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={trackRef}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div className="mt-1 flex justify-center gap-1.5">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir a la reseña ${i + 1}`}
            aria-current={i === active}
            className={`h-2 shrink-0 cursor-pointer rounded-full transition-all duration-200 ${
              i === active ? "w-5 bg-celeste" : "w-2 bg-border"
            }`}
          />
        ))}
      </div>
    </>
  );
}
