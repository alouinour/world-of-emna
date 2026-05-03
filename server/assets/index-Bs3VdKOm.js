import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-CqU13SVh.js";
import { h as heroPortrait } from "./router-DxsnI-lN.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$m = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
];
const ArrowDown = createLucideIcon("arrow-down", __iconNode$m);
const __iconNode$l = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$l);
const __iconNode$k = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$k);
const __iconNode$j = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$j);
const __iconNode$i = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$i);
const __iconNode$h = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$h);
const __iconNode$g = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$g);
const __iconNode$f = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$f);
const __iconNode$e = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$e);
const __iconNode$d = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$d);
const __iconNode$c = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode$c);
const __iconNode$b = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$b);
const __iconNode$a = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode$a);
const __iconNode$9 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$8);
const __iconNode$7 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$7);
const __iconNode$6 = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
];
const Settings2 = createLucideIcon("settings-2", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$4);
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
function ThemeToggle() {
  const [dark, setDark] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: "group relative h-11 w-11 rounded-full border border-border bg-background/60 backdrop-blur transition-all hover:border-flame hover:rotate-12",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "absolute inset-0 m-auto h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "absolute inset-0 m-auto h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" })
      ]
    }
  );
}
function MagneticButton({ children, strength = 0.35, className = "", ...rest }) {
  const ref = reactExports.useRef(null);
  const inner = reactExports.useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
    if (inner.current) inner.current.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
    if (inner.current) inner.current.style.transform = "";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      ref,
      onMouseMove: handleMove,
      onMouseLeave: reset,
      className: `inline-flex items-center justify-center transition-transform duration-300 ease-out will-change-transform ${className}`,
      ...rest,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref: inner, className: "inline-flex items-center gap-3 transition-transform duration-300 ease-out", children })
    }
  );
}
function Reveal({ children, delay = 0, className = "" }) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("in"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `reveal ${className}`, children });
}
function CategoryCard({
  category,
  index,
  onOpen
}) {
  const ref = reactExports.useRef(null);
  const handleMove = (e) => {
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
  const isLarge = index % 5 === 0 || index % 5 === 3;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `group relative ${isLarge ? "md:col-span-2 md:row-span-2" : ""}`,
      style: { transformStyle: "preserve-3d" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => onOpen(category),
          className: "block w-full text-left",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref,
              onMouseMove: handleMove,
              onMouseLeave: reset,
              className: "relative h-full w-full overflow-hidden rounded-3xl border border-border bg-cream transition-transform duration-300 ease-out will-change-transform",
              style: { aspectRatio: "4/5" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: category.cover,
                    alt: category.title,
                    loading: "lazy",
                    className: "absolute inset-0 h-full w-full object-cover grayscale contrast-[1.05] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-110"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-700 group-hover:opacity-90",
                    style: { background: category.tint }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-5 top-5 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono-tt text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm bg-black/40 px-2.5 py-1 rounded-full", children: [
                  String(index + 1).padStart(2, "0"),
                  " · ",
                  category.kicker
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-5 top-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono-tt text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm bg-flame/80 px-2.5 py-1 rounded-full", children: [
                  category.photos.length,
                  " pieces"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 md:p-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono-tt text-xs uppercase tracking-widest text-white/60 mb-2", children: [
                    "Chapter ",
                    String(index + 1).padStart(2, "0")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-5xl font-medium text-white leading-[0.95] text-balance", children: category.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-sm text-white/70 line-clamp-2 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0", children: category.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-2 text-white font-mono-tt text-xs uppercase tracking-[0.2em]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
                      "Open the album",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-flame-glow transition-all duration-500 group-hover:w-full" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })
                  ] })
                ] })
              ]
            }
          )
        }
      )
    }
  );
}
function AlbumModal({ category, onClose, isOwner, onUpdatePhoto, onDeletePhoto, onAddPhotos }) {
  const [active, setActive] = reactExports.useState(0);
  const [editing, setEditing] = reactExports.useState(false);
  const [draftTitle, setDraftTitle] = reactExports.useState("");
  const [draftCaption, setDraftCaption] = reactExports.useState("");
  const [draftMeta, setDraftMeta] = reactExports.useState("");
  const [confirmDelete, setConfirmDelete] = reactExports.useState(false);
  const uploadRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!category) return;
    setActive((a) => Math.min(a, Math.max(0, category.photos.length - 1)));
    setEditing(false);
    setConfirmDelete(false);
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (editing) {
          setEditing(false);
          setConfirmDelete(false);
        } else onClose();
      }
      if (!editing && e.key === "ArrowRight" && category.photos.length > 0) setActive((a) => (a + 1) % category.photos.length);
      if (!editing && e.key === "ArrowLeft" && category.photos.length > 0) setActive((a) => (a - 1 + category.photos.length) % category.photos.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [category, onClose, editing]);
  if (!category) return null;
  if (category.photos.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/85 backdrop-blur-md", onClick: onClose }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl bg-paper border border-border p-12 text-center max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono-tt text-[10px] uppercase tracking-widest text-flame mb-4", children: [
          "Album · ",
          category.kicker
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "No photos in this section yet." }),
        isOwner && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "cursor-pointer inline-flex items-center justify-center gap-2 rounded-full bg-flame text-white px-6 py-3 text-[11px] font-mono-tt uppercase tracking-widest hover:bg-foreground transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3.5 w-3.5" }),
          "Upload first photo",
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", multiple: true, className: "hidden", onChange: (e) => e.target.files && onAddPhotos(category.id, e.target.files) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "mt-4 block mx-auto text-[10px] font-mono-tt uppercase tracking-widest text-muted-foreground hover:text-flame transition-colors", children: "Close" })
      ] })
    ] });
  }
  const photo = category.photos[active];
  const startEdit = () => {
    setDraftTitle(photo.title);
    setDraftCaption(photo.caption);
    setDraftMeta(photo.meta ?? "");
    setEditing(true);
    setConfirmDelete(false);
  };
  const saveEdit = () => {
    onUpdatePhoto(category.id, active, { title: draftTitle, caption: draftCaption, meta: draftMeta });
    setEditing(false);
  };
  const handleDelete = () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }
    onDeletePhoto(category.id, active);
    setConfirmDelete(false);
    setActive((a) => Math.max(0, a - 1));
  };
  const navigate = (dir) => {
    setEditing(false);
    setConfirmDelete(false);
    setActive((a) => (a + dir + category.photos.length) % category.photos.length);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-stretch justify-center p-0 md:p-6 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/85 backdrop-blur-md", onClick: onClose }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-7xl max-h-screen md:max-h-[92vh] overflow-hidden rounded-none md:rounded-3xl bg-paper border border-border shadow-2xl animate-in zoom-in-95 duration-500 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between gap-4 px-6 md:px-10 py-5 border-b border-border bg-paper/80 backdrop-blur z-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono-tt text-[10px] uppercase tracking-[0.25em] text-flame", children: [
            "Album · ",
            category.kicker
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:block h-4 w-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "hidden md:block font-display text-2xl font-medium truncate", children: category.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          isOwner && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "hidden sm:flex items-center gap-1.5 rounded-full border border-dashed border-flame/50 text-flame px-3 py-1.5 text-[10px] font-mono-tt uppercase tracking-widest cursor-pointer hover:bg-flame/10 transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3 w-3" }),
            "Add",
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: uploadRef, type: "file", accept: "image/*", multiple: true, className: "hidden", onChange: (e) => e.target.files && onAddPhotos(category.id, e.target.files) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono-tt text-[11px] tracking-widest text-muted-foreground tabular-nums", children: [
            String(active + 1).padStart(2, "0"),
            " / ",
            String(category.photos.length).padStart(2, "0")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-flame hover:text-white hover:rotate-90 transition-all duration-300", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-5 gap-0 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative lg:col-span-3 bg-cream/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] lg:aspect-auto lg:min-h-[560px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photo.src, alt: photo.title, className: "absolute inset-0 h-full w-full object-cover animate-in fade-in zoom-in-95 duration-700" }, photo.src),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 mix-blend-soft-light opacity-60", style: { background: category.tint } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate(-1), className: "absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-paper/80 backdrop-blur border border-border hover:bg-flame hover:text-white transition-all", "aria-label": "Previous", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate(1), className: "absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-paper/80 backdrop-blur border border-border hover:bg-flame hover:text-white transition-all", "aria-label": "Next", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 p-8 md:p-12 flex flex-col justify-between bg-paper", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: isOwner && editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono-tt text-[9px] uppercase tracking-widest text-muted-foreground block mb-1.5", children: "Meta / Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: draftMeta, onChange: (e) => setDraftMeta(e.target.value), className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-xs font-mono-tt focus:outline-none focus:border-flame transition-colors", placeholder: "e.g. Photography · 2025" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono-tt text-[9px] uppercase tracking-widest text-muted-foreground block mb-1.5", children: "Title" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: draftTitle, onChange: (e) => setDraftTitle(e.target.value), className: "w-full rounded-lg border border-border bg-background px-3 py-2 font-display text-2xl focus:outline-none focus:border-flame transition-colors" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono-tt text-[9px] uppercase tracking-widest text-muted-foreground block mb-1.5", children: "Caption" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: draftCaption, onChange: (e) => setDraftCaption(e.target.value), rows: 6, className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-muted-foreground leading-relaxed resize-none focus:outline-none focus:border-flame transition-colors" })
              ] })
            ] }) : (
              /* Read-only view (everyone sees this) */
              /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[10px] uppercase tracking-[0.25em] text-flame mb-3", children: photo.meta ?? `Frame ${String(active + 1).padStart(2, "0")}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl md:text-5xl font-medium leading-[0.95] text-balance", children: photo.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed text-balance", children: photo.caption })
              ] })
            ) }),
            isOwner && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-border", children: editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: saveEdit, className: "flex items-center gap-2 rounded-full bg-flame text-white px-5 py-2.5 text-[10px] font-mono-tt uppercase tracking-widest hover:bg-foreground transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }),
                " Save"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                setEditing(false);
                setConfirmDelete(false);
              }, className: "rounded-full border border-border px-5 py-2.5 text-[10px] font-mono-tt uppercase tracking-widest hover:border-flame hover:text-flame transition-all", children: "Cancel" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: startEdit, className: "flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[10px] font-mono-tt uppercase tracking-widest hover:border-flame hover:text-flame transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3 w-3" }),
                " Edit"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleDelete, className: `flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-mono-tt uppercase tracking-widest transition-all border ${confirmDelete ? "bg-red-500 text-white border-red-500 hover:bg-red-600" : "border-border text-muted-foreground hover:border-red-400 hover:text-red-400"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" }),
                " ",
                confirmDelete ? "Confirm delete" : "Delete"
              ] }),
              confirmDelete && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setConfirmDelete(false), className: "rounded-full border border-border px-4 py-2.5 text-[10px] font-mono-tt uppercase tracking-widest hover:border-flame hover:text-flame transition-all", children: "Cancel" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 md:px-10 py-8 bg-cream/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5", children: "— All frames in this chapter" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4", children: category.photos.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            setEditing(false);
            setConfirmDelete(false);
            setActive(i);
          }, className: `group relative aspect-square overflow-hidden rounded-xl border transition-all duration-300 ${i === active ? "border-flame ring-2 ring-flame/40 scale-[1.03]" : "border-border hover:border-flame/60 hover:-translate-y-0.5"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.src, alt: p.title, loading: "lazy", className: `absolute inset-0 h-full w-full object-cover transition-all duration-500 ${i === active ? "" : "grayscale group-hover:grayscale-0"}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono-tt text-[9px] uppercase tracking-widest text-white/90 truncate", children: [
              String(i + 1).padStart(2, "0"),
              " · ",
              p.title
            ] }) })
          ] }, p.src + i)) })
        ] })
      ] })
    ] })
  ] });
}
function SectionEditor({ category, onClose, onSave }) {
  const [title, setTitle] = reactExports.useState("");
  const [kicker, setKicker] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [cover, setCover] = reactExports.useState("");
  const [coverPreview, setCoverPreview] = reactExports.useState("");
  const fileRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!category) return;
    setTitle(category.title);
    setKicker(category.kicker);
    setDescription(category.description);
    setCover(category.cover);
    setCoverPreview(category.cover);
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [category, onClose]);
  if (!category) return null;
  const handleCoverChange = (files) => {
    if (!files || !files[0]) return;
    const url = URL.createObjectURL(files[0]);
    setCover(url);
    setCoverPreview(url);
  };
  const handleSave = () => {
    onSave(category.id, { title, kicker, description, cover });
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/80 backdrop-blur-md", onClick: onClose }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-2xl rounded-3xl bg-paper dark:bg-card border border-border shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-8 py-6 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[10px] uppercase tracking-[0.25em] text-flame mb-1", children: "Edit Section" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-medium", children: category.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-flame hover:text-white hover:rotate-90 transition-all duration-300",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3", children: "Cover Photo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-24 w-24 shrink-0 rounded-xl overflow-hidden border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: coverPreview, alt: "cover", className: "h-full w-full object-cover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => fileRef.current?.click(),
                className: "flex items-center gap-2 rounded-xl border border-dashed border-border px-4 py-3 text-[11px] font-mono-tt uppercase tracking-widest text-muted-foreground hover:border-flame hover:text-flame transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3.5 w-3.5" }),
                  "Change cover"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileRef, type: "file", accept: "image/*", className: "hidden", onChange: (e) => handleCoverChange(e.target.files) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2", children: "Section Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: title,
              onChange: (e) => setTitle(e.target.value),
              className: "w-full rounded-xl border border-border bg-background px-4 py-3 font-display text-2xl focus:outline-none focus:border-flame transition-colors"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2", children: "Short Label (Kicker)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: kicker,
              onChange: (e) => setKicker(e.target.value),
              className: "w-full rounded-xl border border-border bg-background px-4 py-3 font-mono-tt text-sm focus:outline-none focus:border-flame transition-colors",
              placeholder: "e.g. The Hand"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: description,
              onChange: (e) => setDescription(e.target.value),
              rows: 3,
              className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground leading-relaxed resize-none focus:outline-none focus:border-flame transition-colors"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-3 px-8 py-5 border-t border-border bg-cream/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "rounded-full border border-border px-6 py-2.5 text-[11px] font-mono-tt uppercase tracking-widest hover:border-flame hover:text-flame transition-all",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleSave,
            className: "flex items-center gap-2 rounded-full bg-flame text-white px-6 py-2.5 text-[11px] font-mono-tt uppercase tracking-widest hover:bg-foreground transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }),
              "Save changes"
            ]
          }
        )
      ] })
    ] })
  ] });
}
const TINTS = [
  "linear-gradient(135deg, #ff6b35cc, #1e3a8acc)",
  "linear-gradient(135deg, #2563ebcc, #f97316cc)",
  "linear-gradient(135deg, #fb923ccc, #1d4ed8cc)",
  "linear-gradient(135deg, #1e40afcc, #ea580ccc)",
  "linear-gradient(135deg, #ff6b35cc, #3b82f6cc)",
  "linear-gradient(135deg, #7c3aedcc, #db2777cc)"
];
function AddSectionModal({ open, onClose, onAdd }) {
  const [title, setTitle] = reactExports.useState("");
  const [kicker, setKicker] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [cover, setCover] = reactExports.useState("");
  const [tint, setTint] = reactExports.useState(TINTS[0]);
  const fileRef = reactExports.useRef(null);
  if (!open) return null;
  const handleCover = (files) => {
    if (!files?.[0]) return;
    setCover(URL.createObjectURL(files[0]));
  };
  const reset = () => {
    setTitle("");
    setKicker("");
    setDescription("");
    setCover("");
    setTint(TINTS[0]);
  };
  const handleAdd = () => {
    if (!title.trim()) return;
    const id = "section-" + Date.now();
    onAdd({ id, kicker: kicker || title, title, description, cover, tint, photos: [] });
    reset();
    onClose();
  };
  const handleClose = () => {
    reset();
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/80 backdrop-blur-md", onClick: handleClose }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-2xl rounded-3xl bg-paper dark:bg-card border border-border shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-8 py-6 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[10px] uppercase tracking-[0.25em] text-flame mb-1", children: "New Section" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-medium", children: "Add a chapter" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleClose, className: "flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-flame hover:text-white hover:rotate-90 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 space-y-6 max-h-[65vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3", children: "Cover Photo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            cover ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-24 w-24 shrink-0 rounded-xl overflow-hidden border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cover, alt: "cover preview", className: "h-full w-full object-cover" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 w-24 shrink-0 rounded-xl border border-dashed border-border flex items-center justify-center bg-cream/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-5 w-5 text-muted-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => fileRef.current?.click(), className: "flex items-center gap-2 rounded-xl border border-dashed border-border px-4 py-3 text-[11px] font-mono-tt uppercase tracking-widest text-muted-foreground hover:border-flame hover:text-flame transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3.5 w-3.5" }),
              cover ? "Change cover" : "Upload cover"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileRef, type: "file", accept: "image/*", className: "hidden", onChange: (e) => handleCover(e.target.files) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2", children: [
            "Section Title ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-flame", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: title, onChange: (e) => setTitle(e.target.value), placeholder: "e.g. The Voice", className: "w-full rounded-xl border border-border bg-background px-4 py-3 font-display text-2xl focus:outline-none focus:border-flame transition-colors placeholder:text-muted-foreground/40" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2", children: "Short Label (Kicker)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: kicker, onChange: (e) => setKicker(e.target.value), placeholder: "e.g. The Voice", className: "w-full rounded-xl border border-border bg-background px-4 py-3 font-mono-tt text-sm focus:outline-none focus:border-flame transition-colors placeholder:text-muted-foreground/40" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: description, onChange: (e) => setDescription(e.target.value), rows: 3, placeholder: "A short description of this chapter…", className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground leading-relaxed resize-none focus:outline-none focus:border-flame transition-colors placeholder:text-muted-foreground/40" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3", children: "Accent Gradient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: TINTS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTint(t), className: `h-8 w-14 rounded-lg border-2 transition-all ${tint === t ? "border-flame scale-110" : "border-transparent hover:border-flame/40"}`, style: { background: t } }, t)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-3 px-8 py-5 border-t border-border bg-cream/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleClose, className: "rounded-full border border-border px-6 py-2.5 text-[11px] font-mono-tt uppercase tracking-widest hover:border-flame hover:text-flame transition-all", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleAdd, disabled: !title.trim(), className: "flex items-center gap-2 rounded-full bg-flame text-white px-6 py-2.5 text-[11px] font-mono-tt uppercase tracking-widest hover:bg-foreground transition-all disabled:opacity-40 disabled:cursor-not-allowed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }),
          "Create section"
        ] })
      ] })
    ] })
  ] });
}
const OWNER_PASSWORD = "emna2026";
function OwnerLogin({ onSuccess, onClose }) {
  const [pw, setPw] = reactExports.useState("");
  const [show, setShow] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(false);
  const [shake, setShake] = reactExports.useState(false);
  const attempt = () => {
    if (pw === OWNER_PASSWORD) {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setError(false), 2e3);
      setPw("");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[70] flex items-center justify-center p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/80 backdrop-blur-md", onClick: onClose }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative w-full max-w-sm rounded-3xl bg-paper dark:bg-card border border-border shadow-2xl p-8 animate-in zoom-in-95 duration-300 ${shake ? "animate-shake" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-border hover:bg-flame hover:text-white hover:rotate-90 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-flame/10 border border-flame/20 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-6 w-6 text-flame" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-medium", children: "Owner access" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground font-mono-tt", children: "Enter your password to edit the portfolio" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: show ? "text" : "password",
            value: pw,
            onChange: (e) => setPw(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && attempt(),
            placeholder: "Password",
            autoFocus: true,
            className: `w-full rounded-xl border px-4 py-3 pr-12 font-mono-tt text-sm bg-background focus:outline-none transition-colors ${error ? "border-red-400 text-red-400 placeholder:text-red-300" : "border-border focus:border-flame"}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShow((v) => !v), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors", children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[10px] uppercase tracking-widest text-red-400 text-center mb-4", children: "Incorrect password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: attempt,
          className: "w-full rounded-full bg-flame text-white py-3 text-[11px] font-mono-tt uppercase tracking-widest hover:bg-foreground transition-all",
          children: "Enter"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-8px)}
          40%{transform:translateX(8px)}
          60%{transform:translateX(-6px)}
          80%{transform:translateX(6px)}
        }
        .animate-shake { animation: shake 0.45s ease-in-out; }
      ` })
  ] });
}
const drawnGirl = "/assets/drawn-girl-DpgIn1s3.png";
const signature = "/assets/signature-v2-C_Hc0PGX.png";
const pWhereMind = "/assets/proj-where-mind-Ce9rr2MP.jpg";
const pAllYours = "/assets/proj-all-yours-Dtw5LlYx.jpg";
const pCurtain = "/assets/proj-curtain-CBj053Df.jpg";
const pSurob = "/assets/proj-surob-wQw010Xz.jpg";
const pMedbiova = "/assets/proj-medbiova-BRozgnql.jpg";
const pMural = "/assets/proj-mural-C5fkoT-U.jpg";
const pFashion = "/assets/proj-fashion-dV4ygbea.jpg";
const defaultCategories = [{
  id: "the-hand",
  kicker: "The Hand",
  title: "The Hand",
  description: "Where everything starts — sketches, ink, paint and the raw mark of a thought becoming visible.",
  cover: pMural,
  tint: "linear-gradient(135deg, #ff6b35cc, #1e3a8acc)",
  photos: [{
    src: pMural,
    title: "The Mural",
    caption: "Some ideas are too big for a screen — they need a wall. A collaborative portrait built in public space.",
    meta: "Installation · 2025"
  }, {
    src: pWhereMind,
    title: "Blank Page Diary",
    caption: "A drawing made about the silence of not drawing. The loudest page I ever filled.",
    meta: "Ink on paper · 2025"
  }, {
    src: pFashion,
    title: "Studies in Gesture",
    caption: "Quick figure studies — chasing movement before it disappears from memory.",
    meta: "Sketchbook · 2024"
  }, {
    src: pAllYours,
    title: "Red Balloon",
    caption: "A symbol that kept returning to my notebooks until it became a film.",
    meta: "Concept · 2025"
  }]
}, {
  id: "the-world",
  kicker: "The World",
  title: "The World",
  description: "Streets, walls, light and weather — the world as it offers itself when you slow down enough to see it.",
  cover: pAllYours,
  tint: "linear-gradient(135deg, #2563ebcc, #f97316cc)",
  photos: [{
    src: pAllYours,
    title: "All Yours",
    caption: "She sees what others don't. By the time you understand the balloon, it's already too late.",
    meta: "Sensitization spot · 2025"
  }, {
    src: pCurtain,
    title: "Before The Curtain",
    caption: "Theater begins before the lights go down — a teaser built from the weight of waiting.",
    meta: "Teaser · 2025"
  }, {
    src: pMural,
    title: "Public Walls",
    caption: "What the city writes back when you give it a surface and a brush.",
    meta: "Tunis · 2024"
  }, {
    src: pWhereMind,
    title: "Quiet Streets",
    caption: "Walking with a camera, learning that the world performs when no one is watching.",
    meta: "Series · 2024"
  }]
}, {
  id: "the-eye",
  kicker: "The Eye",
  title: "The Eye",
  description: "Photography as training — the discipline of looking, framing, and trusting that a single frame can hold a whole feeling.",
  cover: pFashion,
  tint: "linear-gradient(135deg, #fb923ccc, #1d4ed8cc)",
  photos: [{
    src: pFashion,
    title: "Controlled Chaos",
    caption: "Fashion as tension — between softness and edge. Built around a feeling before a look.",
    meta: "Editorial · 2025"
  }, {
    src: pWhereMind,
    title: "Where Is My Mind",
    caption: "A girl. A blank page. The loudest silence she's ever heard.",
    meta: "Short film still · 2025"
  }, {
    src: pCurtain,
    title: "Stage Light",
    caption: "Studying how light becomes a character before any actor walks in.",
    meta: "Behind the scenes · 2025"
  }, {
    src: pAllYours,
    title: "Red in Frame",
    caption: "The single color allowed in. Everything else negotiates around it.",
    meta: "Color study · 2025"
  }]
}, {
  id: "the-brand",
  kicker: "The Brand",
  title: "The Brand",
  description: "Identity systems with a soul — type, mark, color and packaging built so a brand carries a value, not just a product.",
  cover: pSurob,
  tint: "linear-gradient(135deg, #1e40afcc, #ea580ccc)",
  photos: [{
    src: pSurob,
    title: "Surob — Sucrée Comme Un Secret",
    caption: "Wine identity: serif logotype, floral pattern system, packaging and signage.",
    meta: "Branding · 2024"
  }, {
    src: pMedbiova,
    title: "Medbiova",
    caption: "An identity for a sustainable label — qualité, conformité et durabilité in every touchpoint.",
    meta: "Brand identity · 2024"
  }, {
    src: pCurtain,
    title: "Curtain — Visual System",
    caption: "Posters, motion bumpers and an alphabet built for one season of theater.",
    meta: "Visual system · 2025"
  }, {
    src: pAllYours,
    title: "All Yours — Campaign Marks",
    caption: "Sub-marks and frames that hold the world of the campaign together.",
    meta: "Campaign · 2025"
  }]
}, {
  id: "the-frame",
  kicker: "The Frame",
  title: "The Frame",
  description: "Moving image — the place where everything else converges. Editing, motion, sound and the rhythm of a cut.",
  cover: pWhereMind,
  tint: "linear-gradient(135deg, #ff6b35cc, #3b82f6cc)",
  photos: [{
    src: pWhereMind,
    title: "Where Is My Mind",
    caption: "A film about what it feels like when creativity goes somewhere you can't follow.",
    meta: "Short film · 2025"
  }, {
    src: pCurtain,
    title: "Before The Curtain",
    caption: "Trailer built to make you feel the weight of what's coming.",
    meta: "Teaser · 2025"
  }, {
    src: pAllYours,
    title: "All Yours — Spot",
    caption: "Thirty seconds, one balloon, one warning. Cut to the bone.",
    meta: "Spot · 2025"
  }, {
    src: pMural,
    title: "The Mural — Process Film",
    caption: "Time-lapse and B-roll capturing a wall becoming a portrait.",
    meta: "Process film · 2025"
  }]
}];
const skills = ["Photography", "Videography", "Motion", "Branding", "Illustration", "Art Direction", "Installation", "Editing"];
const timeline = [{
  year: "2026",
  title: "ESSTED — Year 2",
  text: "Design & Audiovisual studies. Second year."
}, {
  year: "2025",
  title: "ESSTED — Year 1",
  text: "Design & Audiovisual studies. First year."
}, {
  year: "2024",
  title: "Bac Mathématiques",
  text: "Baccalauréat — mention mathématiques. Tunis."
}];
const events = [{
  year: "2026",
  title: "RAID 2026",
  text: "Workshop, Glibett."
}, {
  year: "2025",
  title: "Télé-VisionS",
  text: "Lignée Interrompue installation. Tunis — Bruxelles — Kinshasa."
}, {
  year: "2025",
  title: "L'Assiette Infinie",
  text: "Civic City × Designers of Tomorrow workshop, Tunis."
}, {
  year: "2024",
  title: "Workshops & Murals",
  text: "Character design workshop, sketching club, public murals."
}];
const testimonials = [{
  quote: "Emna brings a rare instinct for image — every frame feels deliberate, every choice carries weight.",
  author: "Workshop mentor",
  role: "ESSTED Faculty"
}, {
  quote: "She doesn't just design — she translates ideas into atmospheres. The Surob identity is proof.",
  author: "Brand collaborator",
  role: "Surob"
}, {
  quote: "Working alongside her on the mural was electric. Generous, sharp, and always ten steps ahead.",
  author: "Co-artist",
  role: "DNA Club"
}, {
  quote: "A gaze that observes without revealing. Her photography taught me how to look slower.",
  author: "Studio peer",
  role: "Audiovisual Dept."
}];
function Index() {
  const [categories, setCategories] = reactExports.useState(defaultCategories);
  const [isOwner, setIsOwner] = reactExports.useState(false);
  const [showLogin, setShowLogin] = reactExports.useState(false);
  const [activeAlbum, setActiveAlbum] = reactExports.useState(null);
  const [editingSection, setEditingSection] = reactExports.useState(null);
  const [showAddSection, setShowAddSection] = reactExports.useState(false);
  const orbRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const onMove = (e) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  const handleAddPhotos = (categoryId, files) => {
    const newPhotos = Array.from(files).map((f) => ({
      src: URL.createObjectURL(f),
      title: f.name.replace(/\.[^/.]+$/, ""),
      caption: "",
      meta: "Uploaded"
    }));
    setCategories((prev) => prev.map((c) => c.id === categoryId ? {
      ...c,
      photos: [...c.photos, ...newPhotos]
    } : c));
  };
  const handleUpdatePhoto = (categoryId, photoIndex, patch) => {
    setCategories((prev) => prev.map((c) => {
      if (c.id !== categoryId) return c;
      return {
        ...c,
        photos: c.photos.map((p, i) => i === photoIndex ? {
          ...p,
          ...patch
        } : p)
      };
    }));
  };
  const handleDeletePhoto = (categoryId, photoIndex) => {
    setCategories((prev) => prev.map((c) => {
      if (c.id !== categoryId) return c;
      return {
        ...c,
        photos: c.photos.filter((_, i) => i !== photoIndex)
      };
    }));
  };
  const handleSaveSection = (id, patch) => {
    setCategories((prev) => prev.map((c) => c.id === id ? {
      ...c,
      ...patch
    } : c));
  };
  const handleAddSection = (section) => {
    setCategories((prev) => [...prev, section]);
  };
  const handleDeleteSection = (id) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };
  const liveActiveAlbum = activeAlbum ? categories.find((c) => c.id === activeAlbum.id) ?? null : null;
  const liveEditingSection = editingSection ? categories.find((c) => c.id === editingSection.id) ?? null : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-flame selection:text-paper", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "fixed top-0 inset-x-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-md bg-background/40 border-b border-border/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "font-display text-xl font-semibold tracking-tight", children: [
        "emna",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-flame", children: "." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-8 font-mono-tt text-[11px] uppercase tracking-[0.2em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#work", className: "hover:text-flame transition-colors", children: "Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-flame transition-colors", children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#events", className: "hover:text-flame transition-colors", children: "Events" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-flame transition-colors", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
        isOwner ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsOwner(false), className: "flex items-center gap-1.5 rounded-full border border-flame/40 bg-flame/10 text-flame px-3 py-1.5 font-mono-tt text-[10px] uppercase tracking-widest hover:bg-flame/20 transition-all", title: "Exit owner mode", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-3 w-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Owner mode" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowLogin(true), className: "flex items-center justify-center h-8 w-8 rounded-full border border-border hover:border-flame hover:text-flame transition-all", title: "Owner login", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { id: "top", className: "relative min-h-screen flex items-center px-6 md:px-10 pt-32 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: orbRef, className: "pointer-events-none absolute -top-20 -right-20 w-[600px] h-[600px] glow-orb animate-pulse-glow opacity-70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute top-40 -left-32 w-[500px] h-[500px] glow-orb-azure animate-pulse-glow opacity-60", style: {
        animationDelay: "1.5s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-40 -left-40 w-[700px] h-[700px] aurora animate-blob" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grain-overlay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid lg:grid-cols-12 gap-10 w-full max-w-7xl mx-auto items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-8 font-mono-tt text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-flame opacity-75 animate-ping" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-flame" })
            ] }),
            "ESSTED · Tunis · 2026"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[15vw] md:text-[10vw] lg:text-[8.5rem] leading-[0.85] font-medium tracking-tight text-balance", children: [
            "Welcome",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "to my ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-flame", children: "world" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed text-balance", children: [
            "I'm ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Emna Jeridi" }),
            " — audiovisual designer working between photography, videography, motion and branding. I care about why something looks the way it does, just as much as how it's made."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { onClick: () => document.getElementById("work")?.scrollIntoView({
              behavior: "smooth"
            }), className: "group rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-sm font-mono-tt uppercase tracking-[0.2em] hover:bg-flame hover:text-paper", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "See the work" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-background/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-4 w-4 group-hover:rotate-[-45deg] transition-transform" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { onClick: () => document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth"
            }), className: "rounded-full border border-border px-6 py-3 text-sm font-mono-tt uppercase tracking-[0.2em] hover:border-flame hover:text-flame", children: "Say hello" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 flex flex-wrap gap-x-10 gap-y-4 font-mono-tt text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-flame", children: String(categories.length).padStart(2, "0") }),
              " chapters"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-azure", children: "04" }),
              " disciplines"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-flame", children: "∞" }),
              " ideas brewing"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-tt text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "— signed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: signature, alt: "Emna Jeridi signature", className: "h-16 md:h-20 w-auto object-contain dark:invert opacity-90 hover:opacity-100 transition-opacity" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto aspect-[4/5] max-w-md animate-float-slow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-flame/40 via-azure/30 to-azure-glow/40 blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full overflow-hidden rounded-[2.5rem] border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroPortrait, alt: "Emna Jeridi", className: "h-full w-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/40 via-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-4 -left-6 rounded-2xl bg-paper/90 dark:bg-cream/90 backdrop-blur border border-border px-4 py-2 font-mono-tt text-[10px] uppercase tracking-widest shadow-lg rotate-[-6deg]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "inline h-3 w-3 text-flame mr-1.5" }),
            "photo · video · ink"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-6 -right-4 rounded-2xl bg-gradient-to-br from-flame to-azure text-white px-4 py-3 font-display text-sm shadow-xl rotate-[5deg] max-w-[180px]", children: '"Before everything, I learned to look."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-10 -right-10 h-24 w-24 rounded-full border-2 border-dashed border-azure/50 animate-spin", style: {
            animationDuration: "20s"
          } })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-y border-border py-3 overflow-hidden bg-cream/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap font-mono-tt text-xs md:text-sm uppercase tracking-[0.2em]", children: Array.from({
      length: 2
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center shrink-0", children: ["photography", "videography", "branding", "illustration", "installation", "art direction"].map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mx-6 flex items-center gap-6", children: [
      w,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 text-flame fill-flame shrink-0" })
    ] }, w)) }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "work", className: "relative px-6 md:px-10 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[11px] uppercase tracking-[0.25em] text-flame mb-4", children: "— Portfolio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-7xl font-medium leading-[0.95] text-balance max-w-2xl", children: "Welcome to my world." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:max-w-xs text-muted-foreground", children: "A glimpse into who I am — through the projects, ideas and images that shaped my path." }),
          isOwner && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowAddSection(true), className: "shrink-0 flex items-center gap-2 rounded-full border border-dashed border-flame text-flame px-5 py-2.5 text-[11px] font-mono-tt uppercase tracking-widest hover:bg-flame hover:text-white transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
            "New section"
          ] })
        ] })
      ] }) }),
      isOwner && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center gap-3 rounded-2xl border border-flame/30 bg-flame/5 px-5 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "h-4 w-4 text-flame shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[10px] uppercase tracking-widest text-flame", children: "Owner mode — hover any section card to edit, upload photos, or delete" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-5 md:gap-6", children: categories.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 60, className: i % 5 === 0 || i % 5 === 3 ? "md:col-span-2 md:row-span-2" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group/wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryCard, { category: c, index: i, onOpen: (cat) => setActiveAlbum(cat) }),
        isOwner && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: `upload-${c.id}`, className: "absolute bottom-[5.5rem] right-4 z-10 opacity-0 group-hover/wrap:opacity-100 transition-opacity duration-200 cursor-pointer flex items-center gap-1.5 bg-black/75 backdrop-blur text-white text-[10px] font-mono-tt uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 hover:bg-flame/80 hover:border-flame", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }),
            " Add photos"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: `upload-${c.id}`, type: "file", accept: "image/*", multiple: true, className: "hidden", onChange: (e) => e.target.files && handleAddPhotos(c.id, e.target.files) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            setEditingSection(c);
          }, className: "absolute bottom-14 right-4 z-10 opacity-0 group-hover/wrap:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 bg-black/75 backdrop-blur text-white text-[10px] font-mono-tt uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "h-3 w-3" }),
            " Edit section"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            if (window.confirm(`Delete "${c.title}"? This cannot be undone.`)) handleDeleteSection(c.id);
          }, className: "absolute bottom-4 right-4 z-10 opacity-0 group-hover/wrap:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 bg-red-500/80 backdrop-blur text-white text-[10px] font-mono-tt uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 hover:bg-red-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-3 w-3", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }),
            "Delete"
          ] })
        ] })
      ] }) }, c.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 font-mono-tt text-[11px] uppercase tracking-[0.25em] text-muted-foreground text-center", children: [
        "— ",
        categories.length,
        " chapters · ",
        categories.reduce((n, c) => n + c.photos.length, 0),
        " frames · click any chapter to open the album"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "relative px-6 md:px-10 py-24 md:py-32 bg-cream/40 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 right-10 h-64 w-64 glow-orb opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-10 h-72 w-72 glow-orb-azure opacity-25" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: drawnGirl, alt: "", "aria-hidden": "true", className: "pointer-events-none select-none absolute -right-10 md:right-10 top-10 md:top-16 w-64 md:w-96 opacity-20 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen rotate-[6deg] hover:rotate-0 transition-transform duration-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[11px] uppercase tracking-[0.25em] text-flame mb-4", children: "— About" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-6xl font-medium leading-[0.95] text-balance", children: "Curious by nature." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-5 text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Second-year design and audiovisual student at ESSTED, working across photography, videography, motion and branding — drawn to the space where art direction meets storytelling." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I paint, I vlog, I spend too much time thinking about films and the way a single frame can hold an entire feeling. Music shapes how I edit. Photography trained my eye before anything else did." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-display text-xl", children: `"This is just the beginning of what I'm building."` })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-2", children: skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-background/60 backdrop-blur px-4 py-2 text-xs font-mono-tt uppercase tracking-widest hover:border-flame hover:text-flame transition-colors cursor-default", children: s }, s)) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 lg:pl-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-8", children: "— Education" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative border-l border-border space-y-10 pl-8", children: timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[42px] flex h-5 w-5 items-center justify-center rounded-full bg-flame ring-4 ring-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-paper" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-xs uppercase tracking-[0.2em] text-flame", children: t.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-2xl md:text-3xl font-medium", children: t.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground max-w-lg", children: t.text })
          ] }) }, t.year + i)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "events", className: "relative px-6 md:px-10 py-24 md:py-32 bg-cream/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[11px] uppercase tracking-[0.25em] text-flame mb-4", children: "— Events & Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-7xl font-medium leading-[0.95] text-balance max-w-2xl", children: "What I've done." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-5", children: events.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl border border-border bg-background/60 backdrop-blur p-8 hover:border-flame hover:-translate-y-1 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-xs uppercase tracking-[0.2em] text-flame mb-3", children: e.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl md:text-4xl font-medium", children: e.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: e.text })
      ] }) }, e.title + i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "voices", className: "relative py-24 md:py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 md:px-10 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-6 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[11px] uppercase tracking-[0.25em] text-flame mb-4", children: "— Voices" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-7xl font-medium leading-[0.95] text-balance max-w-2xl", children: "What people say." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hidden md:block font-mono-tt text-xs uppercase tracking-widest text-muted-foreground", children: "scroll →" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none px-6 md:px-10 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6 w-max", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group w-[85vw] sm:w-[420px] shrink-0 rounded-3xl border border-border bg-cream/40 dark:bg-cream/60 p-8 md:p-10 transition-all hover:border-flame hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-6", children: Array.from({
          length: 5
        }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-flame text-flame" }, j)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl md:text-2xl leading-snug text-balance", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-4 pt-6 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-gradient-to-br from-flame to-flame-glow flex items-center justify-center font-display text-paper", children: t.author[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: t.author }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[10px] uppercase tracking-widest text-muted-foreground", children: t.role })
          ] })
        ] })
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative px-6 md:px-10 py-24 md:py-40 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/4 h-[400px] w-[400px] glow-orb animate-pulse-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 h-[500px] w-[500px] aurora animate-blob" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-tt text-[11px] uppercase tracking-[0.25em] text-flame mb-6", children: "— Let's collaborate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-6xl md:text-[10rem] leading-[0.85] font-medium text-balance", children: [
            "Say ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-flame", children: "hello" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl mx-auto text-lg text-muted-foreground", children: "Open to new experiences, new collaborations, and new creative territories." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { onClick: () => window.location.href = "mailto:emnajeridi25@gmail.com", strength: 0.5, className: "group relative rounded-full bg-flame text-paper px-10 py-6 text-base font-mono-tt uppercase tracking-[0.25em] shadow-2xl shadow-flame/30 hover:bg-foreground hover:text-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Start a project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 360, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 flex flex-wrap items-center justify-center gap-4", children: [{
          icon: Mail,
          label: "emnajeridi25@gmail.com",
          href: "mailto:emnajeridi25@gmail.com"
        }, {
          icon: Phone,
          label: "+216 24 838 394",
          href: "tel:+21624838394"
        }, {
          icon: Instagram,
          label: "@emnajeridi",
          href: "#"
        }, {
          icon: Linkedin,
          label: "Emna Jeridi",
          href: "#"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: s.href, className: "group inline-flex items-center gap-3 rounded-full border border-border bg-background/60 backdrop-blur px-5 py-3 text-sm hover:border-flame hover:text-flame transition-all hover:-translate-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4 transition-transform group-hover:rotate-12" }),
          s.label
        ] }, s.label)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono-tt text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2026 Emna Jeridi · ESSTED" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Designed & built with intention" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlbumModal, { category: liveActiveAlbum, onClose: () => setActiveAlbum(null), isOwner, onUpdatePhoto: handleUpdatePhoto, onDeletePhoto: handleDeletePhoto, onAddPhotos: handleAddPhotos }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionEditor, { category: liveEditingSection, onClose: () => setEditingSection(null), onSave: handleSaveSection }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddSectionModal, { open: showAddSection, onClose: () => setShowAddSection(false), onAdd: handleAddSection }),
    showLogin && /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerLogin, { onSuccess: () => {
      setIsOwner(true);
      setShowLogin(false);
    }, onClose: () => setShowLogin(false) })
  ] });
}
export {
  Index as component
};
