import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Instagram, Mail, Phone, Sparkles, Linkedin, Star, Settings2, Plus, Lock, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { CategoryCard } from "@/components/CategoryCard";
import { AlbumModal, type Category, type AlbumPhoto } from "@/components/AlbumModal";
import { SectionEditor } from "@/components/SectionEditor";
import { AddSectionModal } from "@/components/AddSectionModal";
import { OwnerLogin } from "@/components/OwnerLogin";

import heroPortrait from "@/assets/welcome-girl.jpg";
import drawnGirl from "@/assets/drawn-girl.png";
import signature from "@/assets/signature-v2.png";
import pWhereMind from "@/assets/proj-where-mind.jpg";
import pAllYours from "@/assets/proj-all-yours.jpg";
import pCurtain from "@/assets/proj-curtain.jpg";
import pSurob from "@/assets/proj-surob.jpg";
import pMedbiova from "@/assets/proj-medbiova.jpg";
import pMural from "@/assets/proj-mural.jpg";
import pFashion from "@/assets/proj-fashion.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WORLD OF EJ" },
      { name: "description", content: "Portfolio of Emna Jeridi — photography, videography, branding, illustration & installation. ESSTED 2026." },
      { property: "og:title", content: "Emna Jeridi — Audiovisual Designer" },
      { property: "og:description", content: "Where art direction meets storytelling. A creative portfolio." },
      { property: "og:image", content: heroPortrait },
    ],
  }),
});

const defaultCategories: Category[] = [
  {
    id: "the-hand", kicker: "The Hand", title: "The Hand",
    description: "Where everything starts — sketches, ink, paint and the raw mark of a thought becoming visible.",
    cover: pMural, tint: "linear-gradient(135deg, #ff6b35cc, #1e3a8acc)",
    photos: [
      { src: pMural, title: "The Mural", caption: "Some ideas are too big for a screen — they need a wall. A collaborative portrait built in public space.", meta: "Installation · 2025" },
      { src: pWhereMind, title: "Blank Page Diary", caption: "A drawing made about the silence of not drawing. The loudest page I ever filled.", meta: "Ink on paper · 2025" },
      { src: pFashion, title: "Studies in Gesture", caption: "Quick figure studies — chasing movement before it disappears from memory.", meta: "Sketchbook · 2024" },
      { src: pAllYours, title: "Red Balloon", caption: "A symbol that kept returning to my notebooks until it became a film.", meta: "Concept · 2025" },
    ],
  },
  {
    id: "the-world", kicker: "The World", title: "The World",
    description: "Streets, walls, light and weather — the world as it offers itself when you slow down enough to see it.",
    cover: pAllYours, tint: "linear-gradient(135deg, #2563ebcc, #f97316cc)",
    photos: [
      { src: pAllYours, title: "All Yours", caption: "She sees what others don't. By the time you understand the balloon, it's already too late.", meta: "Sensitization spot · 2025" },
      { src: pCurtain, title: "Before The Curtain", caption: "Theater begins before the lights go down — a teaser built from the weight of waiting.", meta: "Teaser · 2025" },
      { src: pMural, title: "Public Walls", caption: "What the city writes back when you give it a surface and a brush.", meta: "Tunis · 2024" },
      { src: pWhereMind, title: "Quiet Streets", caption: "Walking with a camera, learning that the world performs when no one is watching.", meta: "Series · 2024" },
    ],
  },
  {
    id: "the-eye", kicker: "The Eye", title: "The Eye",
    description: "Photography as training — the discipline of looking, framing, and trusting that a single frame can hold a whole feeling.",
    cover: pFashion, tint: "linear-gradient(135deg, #fb923ccc, #1d4ed8cc)",
    photos: [
      { src: pFashion, title: "Controlled Chaos", caption: "Fashion as tension — between softness and edge. Built around a feeling before a look.", meta: "Editorial · 2025" },
      { src: pWhereMind, title: "Where Is My Mind", caption: "A girl. A blank page. The loudest silence she's ever heard.", meta: "Short film still · 2025" },
      { src: pCurtain, title: "Stage Light", caption: "Studying how light becomes a character before any actor walks in.", meta: "Behind the scenes · 2025" },
      { src: pAllYours, title: "Red in Frame", caption: "The single color allowed in. Everything else negotiates around it.", meta: "Color study · 2025" },
    ],
  },
  {
    id: "the-brand", kicker: "The Brand", title: "The Brand",
    description: "Identity systems with a soul — type, mark, color and packaging built so a brand carries a value, not just a product.",
    cover: pSurob, tint: "linear-gradient(135deg, #1e40afcc, #ea580ccc)",
    photos: [
      { src: pSurob, title: "Surob — Sucrée Comme Un Secret", caption: "Wine identity: serif logotype, floral pattern system, packaging and signage.", meta: "Branding · 2024" },
      { src: pMedbiova, title: "Medbiova", caption: "An identity for a sustainable label — qualité, conformité et durabilité in every touchpoint.", meta: "Brand identity · 2024" },
      { src: pCurtain, title: "Curtain — Visual System", caption: "Posters, motion bumpers and an alphabet built for one season of theater.", meta: "Visual system · 2025" },
      { src: pAllYours, title: "All Yours — Campaign Marks", caption: "Sub-marks and frames that hold the world of the campaign together.", meta: "Campaign · 2025" },
    ],
  },
  {
    id: "the-frame", kicker: "The Frame", title: "The Frame",
    description: "Moving image — the place where everything else converges. Editing, motion, sound and the rhythm of a cut.",
    cover: pWhereMind, tint: "linear-gradient(135deg, #ff6b35cc, #3b82f6cc)",
    photos: [
      { src: pWhereMind, title: "Where Is My Mind", caption: "A film about what it feels like when creativity goes somewhere you can't follow.", meta: "Short film · 2025" },
      { src: pCurtain, title: "Before The Curtain", caption: "Trailer built to make you feel the weight of what's coming.", meta: "Teaser · 2025" },
      { src: pAllYours, title: "All Yours — Spot", caption: "Thirty seconds, one balloon, one warning. Cut to the bone.", meta: "Spot · 2025" },
      { src: pMural, title: "The Mural — Process Film", caption: "Time-lapse and B-roll capturing a wall becoming a portrait.", meta: "Process film · 2025" },
    ],
  },
];

const skills = ["Photography", "Videography", "Motion", "Branding", "Illustration", "Art Direction", "Installation", "Editing"];
const timeline = [
  { year: "2026", title: "ESSTED — Year 2", text: "Design & Audiovisual studies. Second year." },
  { year: "2025", title: "ESSTED — Year 1", text: "Design & Audiovisual studies. First year." },
  { year: "2024", title: "Bac Mathématiques", text: "Baccalauréat — mention mathématiques. Tunis." },
];
const events = [
  { year: "2026", title: "RAID 2026", text: "Workshop, Glibett." },
  { year: "2025", title: "Télé-VisionS", text: "Lignée Interrompue installation. Tunis — Bruxelles — Kinshasa." },
  { year: "2025", title: "L'Assiette Infinie", text: "Civic City × Designers of Tomorrow workshop, Tunis." },
  { year: "2024", title: "Workshops & Murals", text: "Character design workshop, sketching club, public murals." },
];
const testimonials = [
  { quote: "Emna brings a rare instinct for image — every frame feels deliberate, every choice carries weight.", author: "Workshop mentor", role: "ESSTED Faculty" },
  { quote: "She doesn't just design — she translates ideas into atmospheres. The Surob identity is proof.", author: "Brand collaborator", role: "Surob" },
  { quote: "Working alongside her on the mural was electric. Generous, sharp, and always ten steps ahead.", author: "Co-artist", role: "DNA Club" },
  { quote: "A gaze that observes without revealing. Her photography taught me how to look slower.", author: "Studio peer", role: "Audiovisual Dept." },
];

function Index() {
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [isOwner, setIsOwner] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState<Category | null>(null);
  const [editingSection, setEditingSection] = useState<Category | null>(null);
  const [showAddSection, setShowAddSection] = useState(false);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // ── CRUD (owner-only) ──────────────────────────────────────────────────────

  const handleAddPhotos = (categoryId: string, files: FileList) => {
    const newPhotos: AlbumPhoto[] = Array.from(files).map(f => ({
      src: URL.createObjectURL(f),
      title: f.name.replace(/\.[^/.]+$/, ""),
      caption: "",
      meta: "Uploaded",
    }));
    setCategories(prev => prev.map(c => c.id === categoryId ? { ...c, photos: [...c.photos, ...newPhotos] } : c));
  };

  const handleUpdatePhoto = (categoryId: string, photoIndex: number, patch: Partial<AlbumPhoto>) => {
    setCategories(prev => prev.map(c => {
      if (c.id !== categoryId) return c;
      return { ...c, photos: c.photos.map((p, i) => i === photoIndex ? { ...p, ...patch } : p) };
    }));
  };

  const handleDeletePhoto = (categoryId: string, photoIndex: number) => {
    setCategories(prev => prev.map(c => {
      if (c.id !== categoryId) return c;
      return { ...c, photos: c.photos.filter((_, i) => i !== photoIndex) };
    }));
  };

  const handleSaveSection = (id: string, patch: Partial<Pick<Category, "title" | "kicker" | "description" | "cover">>) => {
    setCategories(prev => prev.map(c => c.id === id ? { ...c, ...patch } : c));
  };

  const handleAddSection = (section: Category) => {
    setCategories(prev => [...prev, section]);
  };

  const handleDeleteSection = (id: string) => {
    setCategories(prev => prev.filter(c => c.id !== id));
  };

  const liveActiveAlbum = activeAlbum ? categories.find(c => c.id === activeAlbum.id) ?? null : null;
  const liveEditingSection = editingSection ? categories.find(c => c.id === editingSection.id) ?? null : null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-flame selection:text-paper">

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-md bg-background/40 border-b border-border/30">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight">
          emna<span className="text-flame">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 font-mono-tt text-[11px] uppercase tracking-[0.2em]">
          <a href="#work" className="hover:text-flame transition-colors">Work</a>
          <a href="#about" className="hover:text-flame transition-colors">About</a>
          <a href="#events" className="hover:text-flame transition-colors">Events</a>
          <a href="#contact" className="hover:text-flame transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* Owner toggle */}
          {isOwner ? (
            <button
              onClick={() => setIsOwner(false)}
              className="flex items-center gap-1.5 rounded-full border border-flame/40 bg-flame/10 text-flame px-3 py-1.5 font-mono-tt text-[10px] uppercase tracking-widest hover:bg-flame/20 transition-all"
              title="Exit owner mode"
            >
              <LogOut className="h-3 w-3" />
              <span className="hidden sm:inline">Owner mode</span>
            </button>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className="flex items-center justify-center h-8 w-8 rounded-full border border-border hover:border-flame hover:text-flame transition-all"
              title="Owner login"
            >
              <Lock className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="relative min-h-screen flex items-center px-6 md:px-10 pt-32 pb-20">
        <div ref={orbRef} className="pointer-events-none absolute -top-20 -right-20 w-[600px] h-[600px] glow-orb animate-pulse-glow opacity-70" />
        <div className="pointer-events-none absolute top-40 -left-32 w-[500px] h-[500px] glow-orb-azure animate-pulse-glow opacity-60" style={{ animationDelay: "1.5s" }} />
        <div className="pointer-events-none absolute -bottom-40 -left-40 w-[700px] h-[700px] aurora animate-blob" />
        <div className="pointer-events-none absolute inset-0 grain-overlay" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-10 w-full max-w-7xl mx-auto items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-8 font-mono-tt text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-flame opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-flame" />
              </span>
              ESSTED · Tunis · 2026
            </div>
            <h1 className="font-display text-[15vw] md:text-[10vw] lg:text-[8.5rem] leading-[0.85] font-medium tracking-tight text-balance">
              Welcome<br />to my <span className="text-flame">world</span>.
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              I'm <span className="text-foreground font-medium">Emna Jeridi</span> — audiovisual designer working between
              photography, videography, motion and branding. I care about why something looks the way it does,
              just as much as how it's made.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })} className="group rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-sm font-mono-tt uppercase tracking-[0.2em] hover:bg-flame hover:text-paper">
                <span>See the work</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background/20">
                  <ArrowDown className="h-4 w-4 group-hover:rotate-[-45deg] transition-transform" />
                </span>
              </MagneticButton>
              <MagneticButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="rounded-full border border-border px-6 py-3 text-sm font-mono-tt uppercase tracking-[0.2em] hover:border-flame hover:text-flame">
                Say hello
              </MagneticButton>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 font-mono-tt text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span><span className="text-flame">{String(categories.length).padStart(2, "0")}</span> chapters</span>
              <span><span className="text-azure">04</span> disciplines</span>
              <span><span className="text-flame">∞</span> ideas brewing</span>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <span className="font-mono-tt text-[10px] uppercase tracking-[0.25em] text-muted-foreground">— signed</span>
              <img src={signature} alt="Emna Jeridi signature" className="h-16 md:h-20 w-auto object-contain dark:invert opacity-90 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto aspect-[4/5] max-w-md animate-float-slow">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-flame/40 via-azure/30 to-azure-glow/40 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-border">
                <img src={heroPortrait} alt="Emna Jeridi" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent" />
              </div>
              <div className="absolute -top-4 -left-6 rounded-2xl bg-paper/90 dark:bg-cream/90 backdrop-blur border border-border px-4 py-2 font-mono-tt text-[10px] uppercase tracking-widest shadow-lg rotate-[-6deg]">
                <Sparkles className="inline h-3 w-3 text-flame mr-1.5" />photo · video · ink
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-gradient-to-br from-flame to-azure text-white px-4 py-3 font-display text-sm shadow-xl rotate-[5deg] max-w-[180px]">
                "Before everything, I learned to look."
              </div>
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full border-2 border-dashed border-azure/50 animate-spin" style={{ animationDuration: "20s" }} />
            </div>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <section className="relative border-y border-border py-3 overflow-hidden bg-cream/30">
        <div className="flex animate-marquee whitespace-nowrap font-mono-tt text-xs md:text-sm uppercase tracking-[0.2em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {["photography", "videography", "branding", "illustration", "installation", "art direction"].map((w) => (
                <span key={w} className="mx-6 flex items-center gap-6">{w}<Star className="h-3 w-3 text-flame fill-flame shrink-0" /></span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="relative px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="font-mono-tt text-[11px] uppercase tracking-[0.25em] text-flame mb-4">— Portfolio</p>
                <h2 className="font-display text-5xl md:text-7xl font-medium leading-[0.95] text-balance max-w-2xl">
                  Welcome to my world.
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <p className="md:max-w-xs text-muted-foreground">A glimpse into who I am — through the projects, ideas and images that shaped my path.</p>
                {/* Owner: Add section button */}
                {isOwner && (
                  <button
                    onClick={() => setShowAddSection(true)}
                    className="shrink-0 flex items-center gap-2 rounded-full border border-dashed border-flame text-flame px-5 py-2.5 text-[11px] font-mono-tt uppercase tracking-widest hover:bg-flame hover:text-white transition-all"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    New section
                  </button>
                )}
              </div>
            </div>
          </Reveal>

          {/* Owner mode banner */}
          {isOwner && (
            <div className="mb-8 flex items-center gap-3 rounded-2xl border border-flame/30 bg-flame/5 px-5 py-3">
              <Settings2 className="h-4 w-4 text-flame shrink-0" />
              <p className="font-mono-tt text-[10px] uppercase tracking-widest text-flame">Owner mode — hover any section card to edit, upload photos, or delete</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-5 md:gap-6">
            {categories.map((c, i) => (
              <Reveal key={c.id} delay={i * 60} className={i % 5 === 0 || i % 5 === 3 ? "md:col-span-2 md:row-span-2" : ""}>
                <div className="relative group/wrap">
                  <CategoryCard category={c} index={i} onOpen={(cat) => setActiveAlbum(cat)} />

                  {/* Owner-only controls — hidden from viewers */}
                  {isOwner && (
                    <>
                      <label
                        htmlFor={`upload-${c.id}`}
                        className="absolute bottom-[5.5rem] right-4 z-10 opacity-0 group-hover/wrap:opacity-100 transition-opacity duration-200 cursor-pointer flex items-center gap-1.5 bg-black/75 backdrop-blur text-white text-[10px] font-mono-tt uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 hover:bg-flame/80 hover:border-flame"
                      >
                        <Plus className="h-3 w-3" /> Add photos
                      </label>
                      <input id={`upload-${c.id}`} type="file" accept="image/*" multiple className="hidden" onChange={e => e.target.files && handleAddPhotos(c.id, e.target.files)} />

                      <button
                        onClick={() => { setEditingSection(c); }}
                        className="absolute bottom-14 right-4 z-10 opacity-0 group-hover/wrap:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 bg-black/75 backdrop-blur text-white text-[10px] font-mono-tt uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/20"
                      >
                        <Settings2 className="h-3 w-3" /> Edit section
                      </button>

                      <button
                        onClick={() => { if (window.confirm(`Delete "${c.title}"? This cannot be undone.`)) handleDeleteSection(c.id); }}
                        className="absolute bottom-4 right-4 z-10 opacity-0 group-hover/wrap:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 bg-red-500/80 backdrop-blur text-white text-[10px] font-mono-tt uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 hover:bg-red-600"
                      >
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 font-mono-tt text-[11px] uppercase tracking-[0.25em] text-muted-foreground text-center">
              — {categories.length} chapters · {categories.reduce((n, c) => n + c.photos.length, 0)} frames · click any chapter to open the album
            </p>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-6 md:px-10 py-24 md:py-32 bg-cream/40 overflow-hidden">
        <div className="absolute top-20 right-10 h-64 w-64 glow-orb opacity-30" />
        <div className="absolute bottom-10 left-10 h-72 w-72 glow-orb-azure opacity-25" />
        <img src={drawnGirl} alt="" aria-hidden="true" className="pointer-events-none select-none absolute -right-10 md:right-10 top-10 md:top-16 w-64 md:w-96 opacity-20 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen rotate-[6deg] hover:rotate-0 transition-transform duration-700" />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono-tt text-[11px] uppercase tracking-[0.25em] text-flame mb-4">— About</p>
              <h2 className="font-display text-5xl md:text-6xl font-medium leading-[0.95] text-balance">Curious by nature.</h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
                <p>Second-year design and audiovisual student at ESSTED, working across photography, videography, motion and branding — drawn to the space where art direction meets storytelling.</p>
                <p>I paint, I vlog, I spend too much time thinking about films and the way a single frame can hold an entire feeling. Music shapes how I edit. Photography trained my eye before anything else did.</p>
                <p className="text-foreground font-display text-xl">"This is just the beginning of what I'm building."</p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-background/60 backdrop-blur px-4 py-2 text-xs font-mono-tt uppercase tracking-widest hover:border-flame hover:text-flame transition-colors cursor-default">{s}</span>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pl-10">
            <Reveal>
              <p className="font-mono-tt text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-8">— Education</p>
            </Reveal>
            <ol className="relative border-l border-border space-y-10 pl-8">
              {timeline.map((t, i) => (
                <Reveal key={t.year + i} delay={i * 100}>
                  <li className="relative">
                    <span className="absolute -left-[42px] flex h-5 w-5 items-center justify-center rounded-full bg-flame ring-4 ring-background"><span className="h-2 w-2 rounded-full bg-paper" /></span>
                    <p className="font-mono-tt text-xs uppercase tracking-[0.2em] text-flame">{t.year}</p>
                    <h3 className="mt-1 font-display text-2xl md:text-3xl font-medium">{t.title}</h3>
                    <p className="mt-2 text-muted-foreground max-w-lg">{t.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="relative px-6 md:px-10 py-24 md:py-32 bg-cream/20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <p className="font-mono-tt text-[11px] uppercase tracking-[0.25em] text-flame mb-4">— Events & Projects</p>
              <h2 className="font-display text-5xl md:text-7xl font-medium leading-[0.95] text-balance max-w-2xl">What I've done.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {events.map((e, i) => (
              <Reveal key={e.title + i} delay={i * 80}>
                <div className="group rounded-2xl border border-border bg-background/60 backdrop-blur p-8 hover:border-flame hover:-translate-y-1 transition-all duration-300">
                  <p className="font-mono-tt text-xs uppercase tracking-[0.2em] text-flame mb-3">{e.year}</p>
                  <h3 className="font-display text-3xl md:text-4xl font-medium">{e.title}</h3>
                  <p className="mt-3 text-muted-foreground">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="voices" className="relative py-24 md:py-32 overflow-hidden">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-12">
              <div>
                <p className="font-mono-tt text-[11px] uppercase tracking-[0.25em] text-flame mb-4">— Voices</p>
                <h2 className="font-display text-5xl md:text-7xl font-medium leading-[0.95] text-balance max-w-2xl">What people say.</h2>
              </div>
              <p className="hidden md:block font-mono-tt text-xs uppercase tracking-widest text-muted-foreground">scroll →</p>
            </div>
          </Reveal>
        </div>
        <div className="overflow-x-auto scrollbar-none px-6 md:px-10 pb-6">
          <div className="flex gap-6 w-max">
            {testimonials.map((t, i) => (
              <div key={i} className="group w-[85vw] sm:w-[420px] shrink-0 rounded-3xl border border-border bg-cream/40 dark:bg-cream/60 p-8 md:p-10 transition-all hover:border-flame hover:-translate-y-1">
                <div className="flex gap-1 mb-6">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-flame text-flame" />)}</div>
                <p className="font-display text-xl md:text-2xl leading-snug text-balance">"{t.quote}"</p>
                <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-flame to-flame-glow flex items-center justify-center font-display text-paper">{t.author[0]}</div>
                  <div>
                    <p className="font-medium">{t.author}</p>
                    <p className="font-mono-tt text-[10px] uppercase tracking-widest text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative px-6 md:px-10 py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] glow-orb animate-pulse-glow" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] aurora animate-blob" />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="font-mono-tt text-[11px] uppercase tracking-[0.25em] text-flame mb-6">— Let's collaborate</p>
            <h2 className="font-display text-6xl md:text-[10rem] leading-[0.85] font-medium text-balance">Say <span className="text-flame">hello</span>.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-xl mx-auto text-lg text-muted-foreground">Open to new experiences, new collaborations, and new creative territories.</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-12 flex justify-center">
              <MagneticButton onClick={() => (window.location.href = "mailto:emnajeridi25@gmail.com")} strength={0.5} className="group relative rounded-full bg-flame text-paper px-10 py-6 text-base font-mono-tt uppercase tracking-[0.25em] shadow-2xl shadow-flame/30 hover:bg-foreground hover:text-background">
                <Mail className="h-5 w-5" /><span>Start a project</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
              {[
                { icon: Mail, label: "emnajeridi25@gmail.com", href: "mailto:emnajeridi25@gmail.com" },
                { icon: Phone, label: "+216 24 838 394", href: "tel:+21624838394" },
                { icon: Instagram, label: "@emnajeridi", href: "#" },
                { icon: Linkedin, label: "Emna Jeridi", href: "#" },
              ].map((s) => (
                <a key={s.label} href={s.href} className="group inline-flex items-center gap-3 rounded-full border border-border bg-background/60 backdrop-blur px-5 py-3 text-sm hover:border-flame hover:text-flame transition-all hover:-translate-y-0.5">
                  <s.icon className="h-4 w-4 transition-transform group-hover:rotate-12" />{s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono-tt text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <p>© 2026 Emna Jeridi · ESSTED</p>
        <p>Designed & built with intention</p>
      </footer>

      {/* ── MODALS ─────────────────────────────────────────────────────────── */}
      <AlbumModal
        category={liveActiveAlbum}
        onClose={() => setActiveAlbum(null)}
        isOwner={isOwner}
        onUpdatePhoto={handleUpdatePhoto}
        onDeletePhoto={handleDeletePhoto}
        onAddPhotos={handleAddPhotos}
      />
      <SectionEditor
        category={liveEditingSection}
        onClose={() => setEditingSection(null)}
        onSave={handleSaveSection}
      />
      <AddSectionModal
        open={showAddSection}
        onClose={() => setShowAddSection(false)}
        onAdd={handleAddSection}
      />
      {showLogin && (
        <OwnerLogin
          onSuccess={() => { setIsOwner(true); setShowLogin(false); }}
          onClose={() => setShowLogin(false)}
        />
      )}
    </div>
  );
}
