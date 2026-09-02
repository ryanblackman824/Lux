import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SparkleIcon from "./SparkleIcon";
import Button from "./Button";
import Pill, { type PillTone } from "./Pill";
import NowIcon from "./NowIcon";

const TABS: {
  id: string;
  label: string;
  count: number;
  icon?: "sparkle" | "lightning";
}[] = [
  { id: "all", label: "All", count: 25 },
  { id: "top", label: "Top priorities", count: 5, icon: "sparkle" },
  { id: "quick", label: "Quick resolutions", count: 2, icon: "lightning" },
];

const AI_BANNER_TEXT =
  "A new P0 database incident has been reassigned to you. Tackle this first then, move on to the high priority incident that has exceeded its threshold for 2 days. ";

const FILTERS = ["Type", "Department"];

type Row = {
  id: string;
  pills: { tone: PillTone; label: string }[];
  title: string;
  description: string;
  button: { label: string; hierarchy: "primary" | "secondary"; chevron?: boolean };
};

const ROWS: Row[] = [
  {
    id: "TASK000428",
    pills: [
      { tone: "red", label: "SLA Breach in 1 hr" },
      { tone: "red", label: "1 - Critical" },
    ],
    title: "Server performance degradation",
    description:
      "Response time has exceeded threshold for 2 days and may need your escalation.",
    button: { label: "Follow-up", hierarchy: "primary", chevron: true },
  },
  {
    id: "INC0012861",
    pills: [
      { tone: "yellow", label: "Threshold exceeded for 2 days" },
      { tone: "orange", label: "2 - High" },
    ],
    title: "Email delivery delays in EMEA",
    description:
      "Mail delivery is improving after recent remediation, but affected users should be updated before further escalations are submitted.",
    button: { label: "Follow-up", hierarchy: "primary", chevron: true },
  },
  {
    id: "INC0012993",
    pills: [
      { tone: "red", label: "SLA breach in 8 hrs" },
      { tone: "red", label: "1 - Critical" },
    ],
    title: "Exchange server down, no inbound/outbound mail",
    description: "Critical server down, escalate mail server restart",
    button: { label: "Follow-up", hierarchy: "primary", chevron: true },
  },
];

export default function TopPriorities() {
  const [active, setActive] = useState<string>("all");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const measure = () => {
    const el = tabRefs.current[active];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
  };

  useLayoutEffect(measure, [active]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section
      className="flex h-[890px] w-full flex-col items-start overflow-hidden rounded-[32px] border border-white p-6"
      style={{
        backgroundImage:
          "linear-gradient(153.07deg, rgba(249, 248, 246, 0.3) 2.41%, #F9F8F6 39.31%)",
      }}
    >
      <div className="flex h-10 w-full items-center justify-between gap-8">
        <h2 className="text-[24px] tracking-[-0.24px] text-black">
          Top priorities
        </h2>
        <NowIcon icon="chevron-down-outline" size="sm" className="-rotate-90" />
      </div>

      <div className="flex w-full items-center gap-2 pt-2 text-xs text-text-tertiary">
        <span>Curated by AI every 2 hours</span>
        <span>&bull;</span>
        <span>Refreshed just now</span>
      </div>

      <div className="flex w-full flex-col items-start gap-3 pt-6">
        <div className="relative flex items-center gap-1.5 rounded-full border border-white p-1.5">
          <span
            className="absolute top-1.5 h-8 rounded-full bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ left: indicator.left, width: indicator.width }}
            aria-hidden="true"
          />
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el;
                }}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`relative z-10 flex h-8 items-center gap-1 rounded-full pl-3 pr-1 text-xs tracking-[-0.12px] transition-colors ${
                  isActive ? "text-black" : "text-text-secondary hover:bg-white/60"
                }`}
              >
                {tab.icon === "sparkle" && (
                  <SparkleIcon className="size-4 text-accent" />
                )}
                {tab.icon === "lightning" && (
                  <NowIcon icon="lightning-outline" size="sm" />
                )}
                <span>{tab.label}</span>
                <span
                  className={`flex size-6 items-center justify-center rounded-full text-xs tracking-[-0.12px] transition-colors ${
                    isActive ? "bg-base-200 text-black" : "text-text-secondary"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="flex w-full items-center gap-3 rounded-2xl border border-white px-[15px] py-[11px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.45) 2.5%, rgba(255,255,255,0) 95.8%)",
          }}
        >
          <SparkleIcon className="size-5 shrink-0 text-text-tertiary" />
          <p className="text-xs text-text-tertiary">{AI_BANNER_TEXT}</p>
        </div>
      </div>

      <div className="mt-6 flex min-h-0 w-full flex-1 flex-col items-start overflow-y-auto rounded-3xl bg-white shadow-[0px_20px_12.5px_rgba(0,0,0,0.1),0px_8px_5px_rgba(0,0,0,0.1)]">
        <div className="flex w-full items-center gap-2 px-6 pt-6">
          <div className="flex flex-1 items-center gap-2">
            {FILTERS.map((filter) => (
              <span
                key={filter}
                className="flex h-6 items-center gap-2 rounded-full border border-base-300-active pl-3 pr-2.5 text-xs tracking-[-0.12px] text-text-secondary"
              >
                {filter}
                <NowIcon icon="close-outline" size="xs" />
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <NowIcon
              icon="arrow-up-down-outline"
              size="xs"
              className="text-text-tertiary"
            />
            <span className="text-sm tracking-[-0.14px] text-text-tertiary">
              AI Ranking
            </span>
            <NowIcon
              icon="caret-down-outline"
              size="xs"
              className="text-text-tertiary"
            />
          </div>
        </div>

        {ROWS.map((row, i) => (
          <div
            key={i}
            className={`flex w-full flex-col items-start border-b border-background-tertiary p-6 ${
              i === ROWS.length - 1 ? "rounded-b-3xl" : ""
            }`}
          >
            <div className="flex w-full flex-col items-start gap-3">
              <div className="flex w-full items-center gap-2">
                {row.pills.map((pill, j) => (
                  <Pill key={j} tone={pill.tone} surface="white">
                    {pill.label}
                  </Pill>
                ))}
                <span className="whitespace-nowrap text-sm text-text-tertiary">
                  {row.id}
                </span>
              </div>
              <div className="flex w-full flex-col items-start">
                <p className="w-full text-lg tracking-[-0.18px] text-black">
                  {row.title}
                </p>
                <div className="flex w-full items-center gap-[30px]">
                  <p className="flex-1 text-sm text-text-secondary">
                    {row.description}
                  </p>
                  <Button hierarchy={row.button.hierarchy} className="shrink-0">
                    {row.button.label}
                    {row.button.chevron && (
                      <NowIcon icon="caret-down-outline" size="sm" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
