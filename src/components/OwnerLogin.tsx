import { useState } from "react";
import { X, Lock, Eye, EyeOff } from "lucide-react";

// ── Change this to your real password ──────────────────────────────────────
const OWNER_PASSWORD = "emna2026";
// ───────────────────────────────────────────────────────────────────────────

interface Props {
  onSuccess: () => void;
  onClose: () => void;
}

export function OwnerLogin({ onSuccess, onClose }: Props) {
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const attempt = () => {
    if (pw === OWNER_PASSWORD) {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setError(false), 2000);
      setPw("");
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className={`relative w-full max-w-sm rounded-3xl bg-paper dark:bg-card border border-border shadow-2xl p-8 animate-in zoom-in-95 duration-300 ${shake ? "animate-shake" : ""}`}>
        <button onClick={onClose} className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-border hover:bg-flame hover:text-white hover:rotate-90 transition-all duration-300">
          <X className="h-3.5 w-3.5" />
        </button>

        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-flame/10 border border-flame/20 mb-4">
            <Lock className="h-6 w-6 text-flame" />
          </div>
          <h2 className="font-display text-3xl font-medium">Owner access</h2>
          <p className="mt-2 text-sm text-muted-foreground font-mono-tt">Enter your password to edit the portfolio</p>
        </div>

        <div className="relative mb-4">
          <input
            type={show ? "text" : "password"}
            value={pw}
            onChange={e => setPw(e.target.value)}
            onKeyDown={e => e.key === "Enter" && attempt()}
            placeholder="Password"
            autoFocus
            className={`w-full rounded-xl border px-4 py-3 pr-12 font-mono-tt text-sm bg-background focus:outline-none transition-colors ${error ? "border-red-400 text-red-400 placeholder:text-red-300" : "border-border focus:border-flame"}`}
          />
          <button onClick={() => setShow(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>

        {error && <p className="font-mono-tt text-[10px] uppercase tracking-widest text-red-400 text-center mb-4">Incorrect password</p>}

        <button
          onClick={attempt}
          className="w-full rounded-full bg-flame text-white py-3 text-[11px] font-mono-tt uppercase tracking-widest hover:bg-foreground transition-all"
        >
          Enter
        </button>
      </div>

      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-8px)}
          40%{transform:translateX(8px)}
          60%{transform:translateX(-6px)}
          80%{transform:translateX(6px)}
        }
        .animate-shake { animation: shake 0.45s ease-in-out; }
      `}</style>
    </div>
  );
}
