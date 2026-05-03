import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  strength?: number;
}

export function MagneticButton({ children, strength = 0.35, className = "", ...rest }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  const handleMove = (e: React.MouseEvent) => {
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

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`inline-flex items-center justify-center transition-transform duration-300 ease-out will-change-transform ${className}`}
      {...rest}
    >
      <span ref={inner} className="inline-flex items-center gap-3 transition-transform duration-300 ease-out">
        {children}
      </span>
    </button>
  );
}
