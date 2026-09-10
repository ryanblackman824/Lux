import { useEffect, useRef, useState } from "react";
import NowIcon from "./NowIcon";
import SparkleIcon from "./SparkleIcon";

// Ported from the "omnibar-entrance" motion prototype (Home v2 greeting +
// omni-bar). Timings/easings match the prototype's default control values.
const GREETING = "Let’s get started on your day, Alex";

const STAGGER_LOOSE = 100;
const WORD_FADE = 300;
const ICON_DURATION = 450;
const WORDS_LEAD = 100;
const OUTLINE_LEAD = 100;
const OUTLINE_HOLD = 600;
const BOX_APPEAR = 600;
const SETTLE_AFTER = 1000;

const SABER_DURATION = 1750;
const SABER_STROKE = 4;
const SABER_LENGTH_PCT = 50;
const SABER_RESOLUTION = 25;
// Matches --color-accent, but Canvas 2D's strokeStyle can't resolve CSS
// custom properties (it silently falls back to black), so this is hardcoded.
const SABER_COLOR = "#68e353";

const WORDS = GREETING.split(" ");
const WORDS_START_AT = ICON_DURATION - WORDS_LEAD;
const TITLE_MS = WORDS_START_AT + (WORDS.length - 1) * STAGGER_LOOSE + WORD_FADE;
const OMNI_START_DELAY = TITLE_MS - OUTLINE_LEAD;

// The moment the greeting text finishes fading in — other page content
// times its own entrance off of this, so the order reads as: greeting text,
// then the page body, then the omni-bar's own outline/box/settle (with its
// colored "flash") plays out last, on top of the header.
export const GREETING_DONE_MS = TITLE_MS;

type Phase = "idle" | "outline" | "box" | "settled";

function OmniSweep({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !active) return;

    let w = 0;
    let h = 0;

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    function drawRoundedRect(x: number, y: number, rw: number, rh: number, r: number) {
      ctx!.beginPath();
      ctx!.moveTo(x + r, y);
      ctx!.lineTo(x + rw - r, y);
      ctx!.arcTo(x + rw, y, x + rw, y + r, r);
      ctx!.lineTo(x + rw, y + rh - r);
      ctx!.arcTo(x + rw, y + rh, x + rw - r, y + rh, r);
      ctx!.lineTo(x + r, y + rh);
      ctx!.arcTo(x, y + rh, x, y + rh - r, r);
      ctx!.lineTo(x, y + r);
      ctx!.arcTo(x, y, x + r, y, r);
    }

    const start = Date.now();
    let raf = 0;

    function draw() {
      raf = requestAnimationFrame(draw);
      if (!w || !h) return;

      const radius = Math.min(w, h) / 2;
      const inset = SABER_STROKE / 2;
      const bx = inset;
      const by = inset;
      const bw = w - SABER_STROKE;
      const bh = h - SABER_STROKE;
      const r = Math.max(0, radius - inset);
      const perimeter = 2 * (bw - 2 * r) + 2 * (bh - 2 * r) + 2 * Math.PI * r;
      const progress = ((Date.now() - start) / SABER_DURATION) % 1;
      const offset = progress * perimeter;
      const highlightLen = perimeter * (SABER_LENGTH_PCT / 100);
      const layerOpacity = 1 / SABER_RESOLUTION;

      ctx!.clearRect(0, 0, w, h);
      ctx!.lineWidth = SABER_STROKE;
      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";
      ctx!.strokeStyle = SABER_COLOR;

      function strokeLayer(lengthFactor: number) {
        const layerLen = highlightLen * lengthFactor;
        drawRoundedRect(bx, by, bw, bh, r);
        // Dash patterns are binary (on/off) — without this, the longest
        // (tail-reaching) layer still ends in a hard edge. Scaling alpha
        // down as reach grows tapers the tail's outer edge to ~0 instead.
        ctx!.globalAlpha = layerOpacity * (1.05 - lengthFactor);
        ctx!.setLineDash([layerLen, perimeter - layerLen]);
        ctx!.lineDashOffset = -offset;
        ctx!.stroke();
      }

      strokeLayer(1.0);
      for (let i = 0; i < SABER_RESOLUTION; i++) {
        const centerDist = Math.abs(i - (SABER_RESOLUTION - 1) / 2);
        const maxDist = Math.max(1, (SABER_RESOLUTION - 1) / 2);
        strokeLayer(0.15 + (1 - centerDist / (maxDist + 1)) * 0.55);
      }
      strokeLayer(0.05);
      ctx!.globalAlpha = 1;
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
      ctx!.clearRect(0, 0, w, h);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-[250ms] ease-linear"
      style={{ opacity: active ? 1 : 0 }}
      aria-hidden="true"
    />
  );
}

export default function Header() {
  const [query, setQuery] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("outline"), OMNI_START_DELAY),
      setTimeout(() => setPhase("box"), OMNI_START_DELAY + OUTLINE_HOLD),
      setTimeout(
        () => setPhase("settled"),
        OMNI_START_DELAY + OUTLINE_HOLD + BOX_APPEAR + SETTLE_AFTER,
      ),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const sweepActive = phase === "outline" || phase === "box";
  const boxOrSettled = phase === "box" || phase === "settled";

  return (
    <header className="flex w-full flex-col items-center pb-8 pt-8">
      <div className="flex w-full max-w-[768px] flex-col items-center gap-6">
        <div className="flex items-center justify-center gap-3">
          <SparkleIcon className="size-8 shrink-0 origin-center animate-icon-spin-in text-accent-hover" />
          <p className="text-center text-[32px] tracking-[-1.28px] text-black">
            {WORDS.map((word, i) => (
              <span
                key={i}
                className="inline animate-word-in opacity-0"
                style={{ animationDelay: `${WORDS_START_AT + i * STAGGER_LOOSE}ms` }}
              >
                {word}
                {i < WORDS.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        </div>

        <form
          className={`relative flex h-16 w-full flex-col items-start rounded-full p-1 transition-[opacity,box-shadow] duration-200 ${
            phase === "idle" ? "opacity-0" : "opacity-100"
          }`}
          style={{
            border: "1px solid transparent",
            ...(boxOrSettled
              ? {
                  backgroundImage:
                    "linear-gradient(var(--color-background-tertiary), var(--color-background-tertiary)), linear-gradient(var(--color-border-subtle), var(--color-border-subtle))",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }
              : {}),
            boxShadow:
              phase === "box"
                ? "0px 10px 15px -3px rgba(104,227,83,0.45), 0px 4px 6px -4px rgba(104,227,83,0.35)"
                : phase === "settled"
                  ? "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)"
                  : "none",
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <OmniSweep active={sweepActive} />
          <div
            className="relative z-[1] flex w-full flex-col items-start overflow-hidden rounded-full bg-white transition-opacity duration-[600ms] ease-linear"
            style={{ opacity: boxOrSettled ? 1 : 0 }}
          >
            <div className="flex w-full items-center justify-between gap-3 p-2">
              <div className="flex flex-1 items-center gap-3">
                <button
                  type="button"
                  className="flex size-10 items-center justify-center rounded-full text-[#2e2e29] hover:bg-black/5"
                  aria-label="Add"
                >
                  <NowIcon icon="plus-outline" size="sm" />
                </button>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask Otto anything or search"
                  className="w-full flex-1 bg-transparent text-base text-text-tertiary placeholder:text-text-tertiary focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="flex size-10 items-center justify-center rounded-full bg-accent text-[#2e2e29] hover:brightness-95"
                aria-label="Voice input"
              >
                <NowIcon icon="microphone-fill" size="md" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
}
