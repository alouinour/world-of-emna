import { useEffect, useRef, useState } from "react";
import { X, ArrowLeft, ArrowRight, Trash2, Pencil, Check, Upload } from "lucide-react";

export interface AlbumPhoto {
  src: string;
  title: string;
  caption: string;
  meta?: string;
}

export interface Category {
  id: string;
  kicker: string;
  title: string;
  description: string;
  cover: string;
  tint: string;
  photos: AlbumPhoto[];
}

interface AlbumModalProps {
  category: Category | null;
  onClose: () => void;
  isOwner: boolean;
  onUpdatePhoto: (categoryId: string, photoIndex: number, patch: Partial<AlbumPhoto>) => void;
  onDeletePhoto: (categoryId: string, photoIndex: number) => void;
  onAddPhotos: (categoryId: string, files: FileList) => void;
}

export function AlbumModal({ category, onClose, isOwner, onUpdatePhoto, onDeletePhoto, onAddPhotos }: AlbumModalProps) {
  const [active, setActive] = useState(0);
  const [editing, setEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState("");
  const [draftCaption, setDraftCaption] = useState("");
  const [draftMeta, setDraftMeta] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const uploadRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!category) return;
    setActive(a => Math.min(a, Math.max(0, category.photos.length - 1)));
    setEditing(false);
    setConfirmDelete(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { if (editing) { setEditing(false); setConfirmDelete(false); } else onClose(); }
      if (!editing && e.key === "ArrowRight" && category.photos.length > 0) setActive(a => (a + 1) % category.photos.length);
      if (!editing && e.key === "ArrowLeft" && category.photos.length > 0) setActive(a => (a - 1 + category.photos.length) % category.photos.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [category, onClose, editing]);

  if (!category) return null;

  // Empty state
  if (category.photos.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />
        <div className="relative rounded-3xl bg-paper border border-border p-12 text-center max-w-md">
          <p className="font-mono-tt text-[10px] uppercase tracking-widest text-flame mb-4">Album · {category.kicker}</p>
          <p className="text-muted-foreground mb-6">No photos in this section yet.</p>
          {isOwner && (
            <label className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-full bg-flame text-white px-6 py-3 text-[11px] font-mono-tt uppercase tracking-widest hover:bg-foreground transition-all">
              <Upload className="h-3.5 w-3.5" />Upload first photo
              <input type="file" accept="image/*" multiple className="hidden" onChange={e => e.target.files && onAddPhotos(category.id, e.target.files)} />
            </label>
          )}
          <button onClick={onClose} className="mt-4 block mx-auto text-[10px] font-mono-tt uppercase tracking-widest text-muted-foreground hover:text-flame transition-colors">Close</button>
        </div>
      </div>
    );
  }

  const photo = category.photos[active];

  const startEdit = () => { setDraftTitle(photo.title); setDraftCaption(photo.caption); setDraftMeta(photo.meta ?? ""); setEditing(true); setConfirmDelete(false); };
  const saveEdit = () => { onUpdatePhoto(category.id, active, { title: draftTitle, caption: draftCaption, meta: draftMeta }); setEditing(false); };
  const handleDelete = () => {
    if (!confirmDelete) { setConfirmDelete(true); return; }
    onDeletePhoto(category.id, active);
    setConfirmDelete(false);
    setActive(a => Math.max(0, a - 1));
  };
  const navigate = (dir: 1 | -1) => { setEditing(false); setConfirmDelete(false); setActive(a => (a + dir + category.photos.length) % category.photos.length); };

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-center p-0 md:p-6 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-7xl max-h-screen md:max-h-[92vh] overflow-hidden rounded-none md:rounded-3xl bg-paper border border-border shadow-2xl animate-in zoom-in-95 duration-500 flex flex-col">

        {/* HEADER */}
        <div className="relative flex items-center justify-between gap-4 px-6 md:px-10 py-5 border-b border-border bg-paper/80 backdrop-blur z-20">
          <div className="flex items-center gap-4 min-w-0">
            <span className="font-mono-tt text-[10px] uppercase tracking-[0.25em] text-flame">Album · {category.kicker}</span>
            <span className="hidden md:block h-4 w-px bg-border" />
            <h2 className="hidden md:block font-display text-2xl font-medium truncate">{category.title}</h2>
          </div>
          <div className="flex items-center gap-3">
            {/* Owner-only: add more photos */}
            {isOwner && (
              <label className="hidden sm:flex items-center gap-1.5 rounded-full border border-dashed border-flame/50 text-flame px-3 py-1.5 text-[10px] font-mono-tt uppercase tracking-widest cursor-pointer hover:bg-flame/10 transition-all">
                <Upload className="h-3 w-3" />Add
                <input ref={uploadRef} type="file" accept="image/*" multiple className="hidden" onChange={e => e.target.files && onAddPhotos(category.id, e.target.files)} />
              </label>
            )}
            <span className="font-mono-tt text-[11px] tracking-widest text-muted-foreground tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(category.photos.length).padStart(2, "0")}
            </span>
            <button onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-flame hover:text-white hover:rotate-90 transition-all duration-300" aria-label="Close">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto">
          <div className="relative grid lg:grid-cols-5 gap-0 border-b border-border">

            {/* Photo */}
            <div className="relative lg:col-span-3 bg-cream/40">
              <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[560px]">
                <img key={photo.src} src={photo.src} alt={photo.title} className="absolute inset-0 h-full w-full object-cover animate-in fade-in zoom-in-95 duration-700" />
                <div className="absolute inset-0 mix-blend-soft-light opacity-60" style={{ background: category.tint }} />
                <button onClick={() => navigate(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-paper/80 backdrop-blur border border-border hover:bg-flame hover:text-white transition-all" aria-label="Previous"><ArrowLeft className="h-5 w-5" /></button>
                <button onClick={() => navigate(1)} className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-paper/80 backdrop-blur border border-border hover:bg-flame hover:text-white transition-all" aria-label="Next"><ArrowRight className="h-5 w-5" /></button>
              </div>
            </div>

            {/* Info / Edit panel */}
            <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-between bg-paper">
              <div className="flex-1">
                {/* Owner edit form */}
                {isOwner && editing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="font-mono-tt text-[9px] uppercase tracking-widest text-muted-foreground block mb-1.5">Meta / Date</label>
                      <input value={draftMeta} onChange={e => setDraftMeta(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs font-mono-tt focus:outline-none focus:border-flame transition-colors" placeholder="e.g. Photography · 2025" />
                    </div>
                    <div>
                      <label className="font-mono-tt text-[9px] uppercase tracking-widest text-muted-foreground block mb-1.5">Title</label>
                      <input value={draftTitle} onChange={e => setDraftTitle(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 font-display text-2xl focus:outline-none focus:border-flame transition-colors" />
                    </div>
                    <div>
                      <label className="font-mono-tt text-[9px] uppercase tracking-widest text-muted-foreground block mb-1.5">Caption</label>
                      <textarea value={draftCaption} onChange={e => setDraftCaption(e.target.value)} rows={6} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-muted-foreground leading-relaxed resize-none focus:outline-none focus:border-flame transition-colors" />
                    </div>
                  </div>
                ) : (
                  /* Read-only view (everyone sees this) */
                  <>
                    <p className="font-mono-tt text-[10px] uppercase tracking-[0.25em] text-flame mb-3">{photo.meta ?? `Frame ${String(active + 1).padStart(2, "0")}`}</p>
                    <h3 className="font-display text-4xl md:text-5xl font-medium leading-[0.95] text-balance">{photo.title}</h3>
                    <p className="mt-6 text-muted-foreground leading-relaxed text-balance">{photo.caption}</p>
                  </>
                )}
              </div>

              {/* Owner-only CRUD actions */}
              {isOwner && (
                <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-border">
                  {editing ? (
                    <>
                      <button onClick={saveEdit} className="flex items-center gap-2 rounded-full bg-flame text-white px-5 py-2.5 text-[10px] font-mono-tt uppercase tracking-widest hover:bg-foreground transition-all">
                        <Check className="h-3 w-3" /> Save
                      </button>
                      <button onClick={() => { setEditing(false); setConfirmDelete(false); }} className="rounded-full border border-border px-5 py-2.5 text-[10px] font-mono-tt uppercase tracking-widest hover:border-flame hover:text-flame transition-all">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={startEdit} className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[10px] font-mono-tt uppercase tracking-widest hover:border-flame hover:text-flame transition-all">
                        <Pencil className="h-3 w-3" /> Edit
                      </button>
                      <button onClick={handleDelete} className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-mono-tt uppercase tracking-widest transition-all border ${confirmDelete ? "bg-red-500 text-white border-red-500 hover:bg-red-600" : "border-border text-muted-foreground hover:border-red-400 hover:text-red-400"}`}>
                        <Trash2 className="h-3 w-3" /> {confirmDelete ? "Confirm delete" : "Delete"}
                      </button>
                      {confirmDelete && (
                        <button onClick={() => setConfirmDelete(false)} className="rounded-full border border-border px-4 py-2.5 text-[10px] font-mono-tt uppercase tracking-widest hover:border-flame hover:text-flame transition-all">Cancel</button>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Thumbnail rail */}
          <div className="px-6 md:px-10 py-8 bg-cream/30">
            <p className="font-mono-tt text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5">— All frames in this chapter</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
              {category.photos.map((p, i) => (
                <button key={p.src + i} onClick={() => { setEditing(false); setConfirmDelete(false); setActive(i); }} className={`group relative aspect-square overflow-hidden rounded-xl border transition-all duration-300 ${i === active ? "border-flame ring-2 ring-flame/40 scale-[1.03]" : "border-border hover:border-flame/60 hover:-translate-y-0.5"}`}>
                  <img src={p.src} alt={p.title} loading="lazy" className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${i === active ? "" : "grayscale group-hover:grayscale-0"}`} />
                  <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="font-mono-tt text-[9px] uppercase tracking-widest text-white/90 truncate">{String(i + 1).padStart(2, "0")} · {p.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
