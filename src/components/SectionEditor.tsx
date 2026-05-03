import { useEffect, useRef, useState } from "react";
import { X, Upload, Check } from "lucide-react";
import type { Category } from "./AlbumModal";

interface SectionEditorProps {
  category: Category | null;
  onClose: () => void;
  onSave: (id: string, patch: Partial<Pick<Category, "title" | "kicker" | "description" | "cover">>) => void;
}

export function SectionEditor({ category, onClose, onSave }: SectionEditorProps) {
  const [title, setTitle] = useState("");
  const [kicker, setKicker] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [coverPreview, setCoverPreview] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!category) return;
    setTitle(category.title);
    setKicker(category.kicker);
    setDescription(category.description);
    setCover(category.cover);
    setCoverPreview(category.cover);

    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [category, onClose]);

  if (!category) return null;

  const handleCoverChange = (files: FileList | null) => {
    if (!files || !files[0]) return;
    const url = URL.createObjectURL(files[0]);
    setCover(url);
    setCoverPreview(url);
  };

  const handleSave = () => {
    onSave(category.id, { title, kicker, description, cover });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-2xl rounded-3xl bg-paper dark:bg-card border border-border shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-border">
          <div>
            <p className="font-mono-tt text-[10px] uppercase tracking-[0.25em] text-flame mb-1">Edit Section</p>
            <h2 className="font-display text-2xl font-medium">{category.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-flame hover:text-white hover:rotate-90 transition-all duration-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          {/* Cover photo */}
          <div>
            <p className="font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Cover Photo</p>
            <div className="flex items-start gap-4">
              <div className="relative h-24 w-24 shrink-0 rounded-xl overflow-hidden border border-border">
                <img src={coverPreview} alt="cover" className="h-full w-full object-cover" />
              </div>
              <button
                onClick={() => fileRef.current?.click()}
                className="flex items-center gap-2 rounded-xl border border-dashed border-border px-4 py-3 text-[11px] font-mono-tt uppercase tracking-widest text-muted-foreground hover:border-flame hover:text-flame transition-all"
              >
                <Upload className="h-3.5 w-3.5" />
                Change cover
              </button>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => handleCoverChange(e.target.files)} />
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">Section Title</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 font-display text-2xl focus:outline-none focus:border-flame transition-colors"
            />
          </div>

          {/* Kicker */}
          <div>
            <label className="font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">Short Label (Kicker)</label>
            <input
              value={kicker}
              onChange={e => setKicker(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono-tt text-sm focus:outline-none focus:border-flame transition-colors"
              placeholder="e.g. The Hand"
            />
          </div>

          {/* Description */}
          <div>
            <label className="font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">Description</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={3}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground leading-relaxed resize-none focus:outline-none focus:border-flame transition-colors"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-8 py-5 border-t border-border bg-cream/30">
          <button
            onClick={onClose}
            className="rounded-full border border-border px-6 py-2.5 text-[11px] font-mono-tt uppercase tracking-widest hover:border-flame hover:text-flame transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-full bg-flame text-white px-6 py-2.5 text-[11px] font-mono-tt uppercase tracking-widest hover:bg-foreground transition-all"
          >
            <Check className="h-3.5 w-3.5" />
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
