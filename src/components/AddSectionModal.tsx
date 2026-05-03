import { useRef, useState } from "react";
import { X, Upload, Check } from "lucide-react";
import type { Category } from "./AlbumModal";

interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (section: Category) => void;
}

const TINTS = [
  "linear-gradient(135deg, #ff6b35cc, #1e3a8acc)",
  "linear-gradient(135deg, #2563ebcc, #f97316cc)",
  "linear-gradient(135deg, #fb923ccc, #1d4ed8cc)",
  "linear-gradient(135deg, #1e40afcc, #ea580ccc)",
  "linear-gradient(135deg, #ff6b35cc, #3b82f6cc)",
  "linear-gradient(135deg, #7c3aedcc, #db2777cc)",
];

export function AddSectionModal({ open, onClose, onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [kicker, setKicker] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [tint, setTint] = useState(TINTS[0]);
  const fileRef = useRef<HTMLInputElement>(null);

  if (!open) return null;

  const handleCover = (files: FileList | null) => {
    if (!files?.[0]) return;
    setCover(URL.createObjectURL(files[0]));
  };

  const reset = () => { setTitle(""); setKicker(""); setDescription(""); setCover(""); setTint(TINTS[0]); };

  const handleAdd = () => {
    if (!title.trim()) return;
    const id = "section-" + Date.now();
    onAdd({ id, kicker: kicker || title, title, description, cover, tint, photos: [] });
    reset();
    onClose();
  };

  const handleClose = () => { reset(); onClose(); };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={handleClose} />
      <div className="relative w-full max-w-2xl rounded-3xl bg-paper dark:bg-card border border-border shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-border">
          <div>
            <p className="font-mono-tt text-[10px] uppercase tracking-[0.25em] text-flame mb-1">New Section</p>
            <h2 className="font-display text-2xl font-medium">Add a chapter</h2>
          </div>
          <button onClick={handleClose} className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-flame hover:text-white hover:rotate-90 transition-all duration-300">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6 max-h-[65vh] overflow-y-auto">

          {/* Cover */}
          <div>
            <p className="font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Cover Photo</p>
            <div className="flex items-start gap-4">
              {cover ? (
                <div className="relative h-24 w-24 shrink-0 rounded-xl overflow-hidden border border-border">
                  <img src={cover} alt="cover preview" className="h-full w-full object-cover" />
                </div>
              ) : (
                <div className="h-24 w-24 shrink-0 rounded-xl border border-dashed border-border flex items-center justify-center bg-cream/30">
                  <Upload className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
              <button onClick={() => fileRef.current?.click()} className="flex items-center gap-2 rounded-xl border border-dashed border-border px-4 py-3 text-[11px] font-mono-tt uppercase tracking-widest text-muted-foreground hover:border-flame hover:text-flame transition-all">
                <Upload className="h-3.5 w-3.5" />
                {cover ? "Change cover" : "Upload cover"}
              </button>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => handleCover(e.target.files)} />
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">Section Title <span className="text-flame">*</span></label>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. The Voice" className="w-full rounded-xl border border-border bg-background px-4 py-3 font-display text-2xl focus:outline-none focus:border-flame transition-colors placeholder:text-muted-foreground/40" />
          </div>

          {/* Kicker */}
          <div>
            <label className="font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">Short Label (Kicker)</label>
            <input value={kicker} onChange={e => setKicker(e.target.value)} placeholder="e.g. The Voice" className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono-tt text-sm focus:outline-none focus:border-flame transition-colors placeholder:text-muted-foreground/40" />
          </div>

          {/* Description */}
          <div>
            <label className="font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} placeholder="A short description of this chapter…" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground leading-relaxed resize-none focus:outline-none focus:border-flame transition-colors placeholder:text-muted-foreground/40" />
          </div>

          {/* Tint color */}
          <div>
            <p className="font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Accent Gradient</p>
            <div className="flex flex-wrap gap-3">
              {TINTS.map(t => (
                <button key={t} onClick={() => setTint(t)} className={`h-8 w-14 rounded-lg border-2 transition-all ${tint === t ? "border-flame scale-110" : "border-transparent hover:border-flame/40"}`} style={{ background: t }} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-8 py-5 border-t border-border bg-cream/30">
          <button onClick={handleClose} className="rounded-full border border-border px-6 py-2.5 text-[11px] font-mono-tt uppercase tracking-widest hover:border-flame hover:text-flame transition-all">
            Cancel
          </button>
          <button onClick={handleAdd} disabled={!title.trim()} className="flex items-center gap-2 rounded-full bg-flame text-white px-6 py-2.5 text-[11px] font-mono-tt uppercase tracking-widest hover:bg-foreground transition-all disabled:opacity-40 disabled:cursor-not-allowed">
            <Check className="h-3.5 w-3.5" />
            Create section
          </button>
        </div>
      </div>
    </div>
  );
}
