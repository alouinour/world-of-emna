import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import type { Project } from "./ProjectCard";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-paper border border-border shadow-2xl animate-in zoom-in-95 duration-500">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur border border-border hover:bg-flame hover:text-white hover:rotate-90 transition-all duration-300"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-square md:aspect-auto md:min-h-[500px]">
            <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: project.tint, mixBlendMode: "soft-light" }} />
          </div>
          <div className="p-8 md:p-12 flex flex-col">
            <span className="font-mono-tt text-xs uppercase tracking-[0.25em] text-flame">
              {project.category} — {project.year}
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-tight text-balance">
              {project.title}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{project.description}</p>

            <div className="mt-8 rounded-2xl border border-dashed border-flame/40 bg-flame/5 p-6">
              <p className="font-mono-tt text-[11px] uppercase tracking-widest text-flame mb-3">
                Portfolio Preview
              </p>
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-flame to-flame-glow">
                  <span className="font-display text-xl font-bold text-white">C</span>
                </div>
                <div className="flex-1">
                  <p className="font-display text-lg leading-snug">
                    Portfolio built with Canva — <span className="italic text-flame">{project.title}</span> preview
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Mockup loader · interactive case study coming soon
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8 flex items-center gap-4">
              <button className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-mono-tt uppercase tracking-widest hover:bg-flame transition-colors">
                Open full study
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
