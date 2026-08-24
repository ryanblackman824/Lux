import { useState } from "react";
import NowIcon from "./NowIcon";
import SparkleIcon from "./SparkleIcon";
import CollapseButton from "./CollapseButton";
import Button from "./Button";

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

const ROWS = [
  {
    id: "TASK000428",
    title: "Server performance degradation",
    description:
      "Response time has exceeded threshold for 2 days and may need your escalation.",
  },
  {
    id: "TASK000428",
    title: "Server performance degradation",
    description:
      "Response time has exceeded threshold for 2 days and may need your escalation.",
  },
  {
    id: "TASK000428",
    title: "Server performance degradation",
    description:
      "Response time has exceeded threshold for 2 days and may need your escalation.",
  },
  {
    id: "TASK000428",
    title: "Server performance degradation",
    description:
      "Response time has exceeded threshold for 2 days and may need your escalation.",
  },
];

function SeverityPill() {
  return (
    <span className="whitespace-nowrap rounded-[4px] border border-[#ffb8ad] bg-[#ffd8d0] px-2 py-0.5 text-xs tracking-[-0.12px] text-[#750000]">
      2 - High
    </span>
  );
}

export default function TopPriorities() {
  const [active, setActive] = useState<string>("all");

  return (
    <section className="flex h-[793px] w-full flex-col items-center overflow-hidden rounded-[32px] bg-white/[0.33] px-2.5 py-6">
      <div className="flex w-full flex-col items-start px-3.5">
        <div className="flex h-10 w-full items-center justify-between gap-8">
          <h2 className="text-xl tracking-[-0.2px] text-[#2e2e29]">
            Top Priorities
          </h2>
          <CollapseButton bg="#f6f5f3" />
        </div>

        <div className="flex w-full flex-col items-center">
          <div className="mb-1 flex w-full flex-col items-start pb-4 pr-2.5">
            <div className="flex items-center gap-2 text-xs text-[#656462]">
              <span>Curated by AI every 2 hours</span>
              <span>&bull;</span>
              <span>Refreshed just now</span>
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-center pb-4 pr-2.5">
            <div className="flex items-center gap-1.5 rounded-full border border-white p-1.5">
              {TABS.map((tab) => {
                const isActive = active === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActive(tab.id)}
                    className={`flex h-8 items-center gap-1 rounded-full pl-3 pr-1 text-xs tracking-[-0.12px] transition-colors ${
                      isActive
                        ? "bg-white pr-1 text-black shadow-[0px_1px_1px_rgba(0,0,0,0.1)]"
                        : "text-[#4d4c4a] hover:bg-white/60"
                    }`}
                  >
                    {tab.icon === "sparkle" && (
                      <SparkleIcon className="size-3.5 text-[#68e353]" />
                    )}
                    {tab.icon === "lightning" && (
                      <NowIcon icon="lightning-outline" size="sm" />
                    )}
                    <span>{tab.label}</span>
                    <span
                      className={`flex size-6 items-center justify-center rounded-full text-xs tracking-[-0.12px] ${
                        isActive ? "bg-[#f4f3f0] text-black" : "text-[#4d4c4a]"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 w-full flex-1 flex-col items-start overflow-y-auto rounded-3xl">
        {ROWS.map((row, i) => (
          <div
            key={i}
            className={`flex w-full flex-col items-start border-b border-[#edece9] bg-white p-6 ${
              i === 0 ? "rounded-t-3xl" : ""
            } ${i === ROWS.length - 1 ? "rounded-b-3xl" : ""}`}
          >
            <div className="flex w-full flex-col items-start gap-3">
              <div className="flex w-full items-center gap-2">
                <SeverityPill />
                <span className="whitespace-nowrap text-xs text-[#656462]">
                  {row.id}
                </span>
              </div>
              <div className="flex w-full flex-col items-start">
                <p className="w-full text-base text-black">{row.title}</p>
                <div className="flex w-full items-center gap-[30px]">
                  <p className="flex-1 text-sm text-[#4d4c4a]">
                    {row.description}
                  </p>
                  <Button variant="primary" className="shrink-0">
                    Assigned to me
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
