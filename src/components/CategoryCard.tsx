import { useRef, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "./AlbumModal";

export function CategoryCard({
  category,
  index,
  onOpen,
}: {
  category: Category;
  index: number;
  onOpen: (c: Category) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(0)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateY(0) rotateX(0)";
  };

  // mosaic: position 0 and 3 are large
  const isLarge = index % 5 === 0 || index % 5 === 3;

  return (
    <div
      className={`group relative ${isLarge ? "md:col-span-2 md:row-span-2" : ""}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <button
        onClick={() => onOpen(category)}
        className="block w-full text-left"
      >
        <div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          className="relative h-full w-full overflow-hidden rounded-3xl border border-border bg-cream transition-transform duration-300 ease-out will-change-transform"
          style={{ aspectRatio: "4/5" }}
        >
          <img
            src={category.cover}
            alt={category.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.05] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-110"
          />
          {/* color tint on hover */}
          <div
            className="absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-700 group-hover:opacity-90"
            style={{ background: category.tint }}
          />
          {/* always-on bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* category index tag */}
          <div className="absolute left-5 top-5 flex items-center gap-2">
            <span className="font-mono-tt text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm bg-black/40 px-2.5 py-1 rounded-full">
              {String(index + 1).padStart(2, "0")} · {category.kicker}
            </span>
          </div>

          {/* count chip */}
          <div className="absolute right-5 top-5">
            <span className="font-mono-tt text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm bg-flame/80 px-2.5 py-1 rounded-full">
              {category.photos.length} pieces
            </span>
          </div>

          {/* bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="font-mono-tt text-xs uppercase tracking-widest text-white/60 mb-2">
              Chapter {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-display text-3xl md:text-5xl font-medium text-white leading-[0.95] text-balance">
              {category.title}
            </h3>
            <p className="mt-3 max-w-md text-sm text-white/70 line-clamp-2 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              {category.description}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-white font-mono-tt text-xs uppercase tracking-[0.2em]">
              <span className="relative">
                Open the album
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-flame-glow transition-all duration-500 group-hover:w-full" />
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
