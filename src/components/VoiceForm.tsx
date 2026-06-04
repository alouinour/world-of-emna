import { useState } from "react";
import { Send, Star } from "lucide-react";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  pending?: boolean;
}

interface Props {
  onSubmit: (t: Omit<Testimonial, "id">) => void;
}

export function VoiceForm({ onSubmit }: Props) {
  const [open, setOpen] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (!quote.trim() || !author.trim()) return;
    onSubmit({ quote: quote.trim(), author: author.trim(), role: role.trim() || "Visitor", rating, pending: true });
    setQuote(""); setAuthor(""); setRole(""); setRating(5);
    setSent(true);
    setTimeout(() => { setSent(false); setOpen(false); }, 2500);
  };

  if (sent) {
    return (
      <div className="shrink-0 w-[85vw] sm:w-[420px] rounded-3xl border border-flame/40 bg-flame/5 p-8 md:p-10 flex flex-col items-center justify-center text-center gap-4">
        <div className="text-4xl">✦</div>
        <p className="font-display text-2xl">Thank you.</p>
        <p className="font-mono-tt text-[10px] uppercase tracking-widest text-muted-foreground">Your voice was received.</p>
      </div>
    );
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="shrink-0 w-[85vw] sm:w-[420px] rounded-3xl border border-dashed border-flame/40 bg-transparent p-8 md:p-10 flex flex-col items-center justify-center gap-4 text-center hover:border-flame hover:bg-flame/5 transition-all duration-300 group"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border group-hover:border-flame transition-all">
          <Send className="h-5 w-5 text-muted-foreground group-hover:text-flame transition-colors" />
        </div>
        <div>
          <p className="font-display text-2xl font-medium">Leave your voice</p>
          <p className="mt-2 font-mono-tt text-[10px] uppercase tracking-widest text-muted-foreground">Share what you think about Emna's work</p>
        </div>
      </button>
    );
  }

  return (
    <div className="shrink-0 w-[85vw] sm:w-[480px] rounded-3xl border border-flame/30 bg-paper dark:bg-card p-8 md:p-10 flex flex-col gap-5">
      <div>
        <p className="font-mono-tt text-[10px] uppercase tracking-widest text-flame mb-1">Leave your voice</p>
        <h3 className="font-display text-2xl font-medium">Your opinion matters.</h3>
      </div>

      {/* Rating */}
      <div>
        <p className="font-mono-tt text-[9px] uppercase tracking-widest text-muted-foreground mb-2">Rating</p>
        <div className="flex gap-1">
          {[1,2,3,4,5].map(n => (
            <button key={n} onMouseEnter={() => setHoverRating(n)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(n)} className="transition-transform hover:scale-110">
              <Star className={`h-6 w-6 transition-colors ${n <= (hoverRating || rating) ? "fill-flame text-flame" : "text-border"}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div>
        <p className="font-mono-tt text-[9px] uppercase tracking-widest text-muted-foreground mb-2">Your message <span className="text-flame">*</span></p>
        <textarea
          value={quote}
          onChange={e => setQuote(e.target.value)}
          rows={4}
          placeholder="What did Emna's work make you feel or think?"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed resize-none focus:outline-none focus:border-flame transition-colors placeholder:text-muted-foreground/40"
        />
      </div>

      {/* Author */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="font-mono-tt text-[9px] uppercase tracking-widest text-muted-foreground mb-2">Your name <span className="text-flame">*</span></p>
          <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Firstname Lastname" className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-flame transition-colors placeholder:text-muted-foreground/40" />
        </div>
        <div>
          <p className="font-mono-tt text-[9px] uppercase tracking-widest text-muted-foreground mb-2">Role / Context</p>
          <input value={role} onChange={e => setRole(e.target.value)} placeholder="e.g. Classmate" className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-flame transition-colors placeholder:text-muted-foreground/40" />
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={submit} disabled={!quote.trim() || !author.trim()} className="flex-1 flex items-center justify-center gap-2 rounded-full bg-flame text-white py-3 text-[11px] font-mono-tt uppercase tracking-widest hover:bg-foreground transition-all disabled:opacity-40 disabled:cursor-not-allowed">
          <Send className="h-3.5 w-3.5" /> Submit
        </button>
        <button onClick={() => setOpen(false)} className="rounded-full border border-border px-5 py-3 text-[11px] font-mono-tt uppercase tracking-widest hover:border-flame hover:text-flame transition-all">Cancel</button>
      </div>
    </div>
  );
}
