import { useEffect, useState } from "react";
import NowIcon from "./NowIcon";
import SparkleIcon from "./SparkleIcon";
import Button from "./Button";
import Pill from "./Pill";

const TABS = ["Mission brief", "Next best action"] as const;

function MetricCard({
  label,
  elevated = false,
  className = "",
  children,
}: {
  label: string;
  elevated?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  // The entrance animation's `both` fill-mode holds box-shadow/transform
  // forever (CSS animations win over regular rules for the properties they
  // touch), which silently blocks the hover shadow/translate below. Once
  // it's done playing, swap to a plain static class so hover can take over.
  const [entering, setEntering] = useState(elevated);
  useEffect(() => {
    if (!elevated) return;
    const timer = setTimeout(() => setEntering(false), 950);
    return () => clearTimeout(timer);
  }, [elevated]);

  return (
    <div
      className={`flex h-[177px] flex-col items-start justify-between overflow-hidden rounded-3xl bg-white p-6 transition-[box-shadow,transform] duration-200 ${
        elevated
          ? entering
            ? "animate-shadow-in"
            : "shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)] hover:translate-y-1 hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
          : "shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
      } ${className}`}
    >
      <p className="text-lg leading-[1.2] tracking-[-0.18px] text-black">
        {label}
      </p>
      {children}
    </div>
  );
}

function MetricValue({ value, caption }: { value: string; caption: string }) {
  return (
    <div className="flex flex-col items-start whitespace-nowrap leading-[1.4]">
      <p className="text-[32px] tracking-[-0.32px] text-[#171614]">{value}</p>
      <p className="text-xs text-text-secondary">{caption}</p>
    </div>
  );
}

function Sparkline() {
  return (
    <div className="flex shrink-0 flex-col items-start">
      <svg width="145" height="66" viewBox="0 0 146 66" className="shrink-0">
        <defs>
          <linearGradient id="sparkline-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#00834F" stopOpacity="0.55" />
            <stop offset="1" stopColor="#00834F" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="0.5" x2="146" y2="0.5" stroke="#e3e2df" />
        <line x1="0" y1="33.5" x2="146" y2="33.5" stroke="#e3e2df" />
        <line x1="0" y1="65.5" x2="146" y2="65.5" stroke="#e3e2df" />
        <line
          x1="73"
          y1="39"
          x2="73"
          y2="66"
          stroke="#c2c1be"
          strokeDasharray="2 2"
        />
        <path
          d="M146,34.75356 L146,65 L72.7202,64.9999 H0 V61.675 L29,57 L62.5,42.9998 C82.2534,33.86624 113,27.49984 146,34.75356 Z"
          fill="url(#sparkline-fade)"
        />
        <path
          d="M1,62.0003 C40.8397,62.0003 55.6106,36.3015 92,34.36704 C111.395,33.33598 128.664,31.24912 146,34.36723"
          fill="none"
          stroke="#00834f"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="73"
          cy="39"
          r="5"
          fill="#00834f"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
      <div className="flex w-[145px] items-center justify-between pt-2 text-xs text-text-secondary">
        <span>9:00AM</span>
        <span>Now</span>
        <span>2:00PM</span>
      </div>
    </div>
  );
}

const AFFECTED_SERVICES = [
  { label: "VPN", color: "#00af9f" },
  { label: "Email, SSO, CRM", color: "#2a6edc" },
];

function DonutLegend() {
  return (
    <div className="flex shrink-0 items-center gap-4">
      <svg width="92" height="92" viewBox="0 0 93 93" className="shrink-0">
        <path
          d="M92.5 46.5C92.5 71.9051 71.9051 92.5 46.5 92.5C21.0949 92.5 0.5 71.9051 0.5 46.5C0.5 21.0949 21.0949 0.5 46.5 0.5C71.9051 0.5 92.5 21.0949 92.5 46.5ZM12 46.5C12 65.5538 27.4462 81 46.5 81C65.5538 81 81 65.5538 81 46.5C81 27.4462 65.5538 12 46.5 12C27.4462 12 12 27.4462 12 46.5Z"
          fill="#00AF9F"
          stroke="white"
        />
        <path
          d="M46.5 0.5C40.4592 0.5 34.4775 1.68983 28.8966 4.00154C23.3156 6.31326 18.2446 9.70159 13.9731 13.9731C9.70159 18.2446 6.31326 23.3156 4.00154 28.8966C1.68982 34.4775 0.5 40.4592 0.5 46.5C0.5 52.5408 1.68983 58.5225 4.00154 64.1034C6.31326 69.6844 9.70159 74.7554 13.9731 79.0269C18.2446 83.2984 23.3156 86.6867 28.8966 88.9985C34.4775 91.3102 40.4592 92.5 46.5 92.5L46.5 81C41.9694 81 37.4832 80.1076 33.2974 78.3738C29.1117 76.6401 25.3084 74.0988 22.1048 70.8952C18.9012 67.6916 16.3599 63.8883 14.6262 59.7026C12.8924 55.5168 12 51.0306 12 46.5C12 41.9694 12.8924 37.4832 14.6262 33.2974C16.3599 29.1117 18.9012 25.3084 22.1048 22.1048C25.3084 18.9012 29.1117 16.3599 33.2974 14.6262C37.4832 12.8924 41.9694 12 46.5 12L46.5 0.5Z"
          fill="#2A6EDC"
          stroke="white"
        />
      </svg>
      <div className="flex flex-col items-start gap-1">
        {AFFECTED_SERVICES.map((s) => (
          <span
            key={s.label}
            className="flex items-center gap-1 rounded-[4px] p-1 text-[10px] leading-4 text-text-secondary"
          >
            <span
              className="size-3 shrink-0 rounded-full"
              style={{ background: s.color }}
            />
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProgressBar({ fraction }: { fraction: string }) {
  const [done, total] = fraction.split("/").map(Number);
  const percent = (done / total) * 100;
  return (
    <div className="h-3 w-[139px] shrink-0 overflow-hidden bg-[#e3e2df]">
      <div className="h-full bg-[#00834f]" style={{ width: `${percent}%` }} />
    </div>
  );
}

function ArcGauge({ percent }: { percent: number }) {
  const r = 40;
  const circumference = 2 * Math.PI * r;
  const halfLength = circumference * 0.5;
  return (
    <svg width="92" height="92" viewBox="0 0 92 92" className="shrink-0 rotate-180">
      <circle
        cx="46"
        cy="46"
        r={r}
        fill="none"
        stroke="#e3e2df"
        strokeWidth="8"
        strokeDasharray={`${halfLength} ${circumference}`}
      />
      <circle
        cx="46"
        cy="46"
        r={r}
        fill="none"
        stroke="#2a6edc"
        strokeWidth="8"
        strokeDasharray={`${halfLength * (percent / 100)} ${circumference}`}
      />
    </svg>
  );
}

type ActionSuggestion = { label: string };

const SUGGESTIONS: ActionSuggestion[] = [
  { label: "What if rollback fails?" },
  { label: "Show 7 cases" },
  { label: "How does rollback work?" },
];

type TimelineItem = {
  time: string;
  actor: string;
  title: string;
  description: string;
  done?: boolean;
};

const TIMELINE: TimelineItem[] = [
  {
    time: "09:38",
    actor: "AI",
    title: "Affected users identified",
    description: "14 Finance users, all on Windows 11 22H2",
  },
  {
    time: "09:42",
    actor: "System",
    title: "Root cause analysis completed",
    description: "Network configuration issue in subnet 192.168.1.0/24",
  },
  {
    time: "09:55",
    actor: "AI",
    title: "Remediation plan generated",
    description: "3 step automated fix with rollback capability",
  },
  {
    time: "10:12",
    actor: "Agent",
    title: "Fix deployed successfully",
    description: "All affected users can now access the system",
  },
  {
    time: "10:25",
    actor: "Agent",
    title: "Incident resolved",
    description: "Total resolution time: 47 minutes",
    done: true,
  },
];

export default function RecordPage({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]>("Mission brief");
  const [detailsOpen, setDetailsOpen] = useState(true);

  return (
    <main className="relative isolate mx-auto flex min-h-screen w-full max-w-[1380px] flex-col items-start px-8 pb-8 pt-8">
      <div
        className="pointer-events-none absolute -z-10 h-[304px] w-[1149px]"
        style={{
          left: "708px",
          top: "-272px",
          background: "#CBE4FF",
          filter: "blur(200px)",
        }}
      />

      {/* Platform header */}
      <div className="flex w-full flex-col gap-3">
        <div className="flex w-full items-start justify-between">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-violet-500 to-violet-600 text-base font-medium text-white [text-shadow:0px_1px_2px_rgba(0,0,0,0.4)]">
                ITS
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <button
                  type="button"
                  onClick={onBack}
                  className="flex items-center gap-1 text-xs tracking-[-0.12px] text-blue-700 hover:underline"
                >
                  Inventory
                  <NowIcon icon="chevron-down-outline" size="xs" className="-rotate-90" />
                </button>
                <div className="flex items-center gap-3">
                  <p className="text-lg tracking-[-0.18px] text-black">
                    VPN disconnecting after Windows update
                  </p>
                  <button
                    type="button"
                    className="flex size-8 items-center justify-center rounded-full hover:bg-black/5"
                    aria-label="Pin"
                  >
                    <NowIcon icon="thumbtack-outline" size="sm" className="text-neutral-700" />
                  </button>
                  <button
                    type="button"
                    className="flex size-8 items-center justify-center rounded-full hover:bg-black/5"
                    aria-label="More"
                  >
                    <NowIcon icon="ellipsis-v-outline" size="sm" className="text-neutral-700" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setDetailsOpen((o) => !o)}
                    className="flex size-8 items-center justify-center rounded-full hover:bg-black/5"
                    aria-label={detailsOpen ? "Collapse details" : "Expand details"}
                  >
                    <NowIcon
                      icon={detailsOpen ? "caret-up-outline" : "caret-down-outline"}
                      size="sm"
                      className="text-neutral-700"
                    />
                  </button>
                </div>
              </div>
            </div>

            {detailsOpen && (
            <div className="flex h-12 items-start gap-8 pl-3">
              <div className="flex flex-col gap-1 text-sm text-black">
                <p>Number</p>
                <p>INC0100567</p>
              </div>
              <div className="flex flex-col gap-1 text-sm text-black">
                <p>Priority</p>
                <p>3 - Low</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-black">Customer mood</p>
                <Pill tone="red" surface="off-white">
                  <NowIcon icon="emoji-slightly-negative-outline" size="xs" />
                  Frustrated
                </Pill>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-black">AI Agents</p>
                <div className="flex items-center">
                  <span className="-mr-1 flex size-5 items-center justify-center rounded-full border border-[#f0efec] bg-blue-700 text-[10px] text-white">
                    CS
                  </span>
                  <span className="-mr-1 flex size-5 items-center justify-center rounded-full border border-[#f0efec] bg-green-700 text-[10px] text-white">
                    SN
                  </span>
                  <span className="flex size-5 items-center justify-center rounded-full border border-[#f0efec] bg-white text-[10px] text-text-secondary">
                    +2
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-black">Collaborators</p>
                <div className="flex items-center">
                  <span className="-mr-1 flex size-5 items-center justify-center rounded-full border border-[#f0efec] bg-neutral-600 text-[10px] text-white">
                    RB
                  </span>
                  <span className="-mr-1 flex size-5 items-center justify-center rounded-full border border-[#f0efec] bg-neutral-500 text-[10px] text-white">
                    AK
                  </span>
                  <span className="flex size-5 items-center justify-center rounded-full border border-[#f0efec] bg-white text-[10px] text-text-secondary">
                    +2
                  </span>
                </div>
              </div>
            </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex size-8 items-center justify-center rounded-full bg-neutral-50 hover:bg-neutral-400/30"
              aria-label="Attach"
            >
              <NowIcon icon="plus-outline" size="sm" />
            </button>
            <button
              type="button"
              className="flex size-8 items-center justify-center rounded-full bg-neutral-50 hover:bg-neutral-400/30"
              aria-label="Edit"
            >
              <NowIcon icon="pencil-outline" size="sm" />
            </button>
            <Button hierarchy="tertiary">Dismiss</Button>
            <Button hierarchy="tertiary">Save</Button>
            <Button hierarchy="primary">Resolve</Button>
            <button
              type="button"
              className="flex size-8 items-center justify-center rounded-full bg-neutral-50 hover:bg-neutral-400/30"
              aria-label="More actions"
            >
              <NowIcon icon="ellipsis-v-outline" size="sm" />
            </button>
          </div>
        </div>
      </div>

      {/* Mission brief card */}
      <div className="mt-6 flex w-full flex-col items-start rounded-[32px] border border-white bg-white/30">
        <div className="flex w-full items-center justify-between px-6 pt-6">
          <div className="relative flex items-center rounded-full bg-background-tertiary p-1.5">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 flex h-8 items-center rounded-full px-3 text-sm tracking-[-0.14px] transition-colors ${
                  activeTab === tab
                    ? "bg-white text-black shadow-[0px_1px_1px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]"
                    : "text-text-secondary hover:bg-white/60"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex w-full items-start gap-3 px-6 py-6">
          <MetricCard label="Users impacted" elevated className="w-[310px]">
            <div className="flex w-full items-center justify-between gap-4">
              <MetricValue value="14" caption="Finance dept" />
              <Sparkline />
            </div>
          </MetricCard>
          <MetricCard label="Affected services" className="min-w-0 flex-1">
            <div className="flex items-end gap-4">
              <MetricValue value="3" caption="Services" />
              <DonutLegend />
            </div>
          </MetricCard>
          <MetricCard label="Rollback progress" className="min-w-0 flex-1">
            <div className="flex items-end gap-5">
              <MetricValue value="2/3" caption="Devices" />
              <ProgressBar fraction="2/3" />
            </div>
          </MetricCard>
          <MetricCard label="Active duration" className="min-w-0 flex-1">
            <div className="flex w-full items-end justify-between">
              <MetricValue value="47 min" caption="Since 09:38" />
              <ArcGauge percent={70} />
            </div>
          </MetricCard>
        </div>

        <div className="flex w-full items-start justify-between gap-8 px-6 pb-6">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
            <p className="text-sm text-text-secondary">
              Overnight, an automatic Windows 11 update rolled out to Finance
              laptops. When the team logged on at 07:52, 14 people found they
              could no longer connect to the VPN — so they were locked out of
              the internal apps they need to do their jobs.
            </p>
            <button
              type="button"
              className="text-sm tracking-[-0.14px] text-blue-700 hover:underline"
            >
              Show more
            </button>
          </div>
          <div className="flex shrink-0 items-center gap-2 pt-6 text-sm text-text-tertiary">
            <SparkleIcon className="size-4 text-text-tertiary" />
            Generated by AI. Check for accuracy.
          </div>
        </div>
      </div>

      {/* Two-column bottom section */}
      <div className="mt-5 flex w-full items-start gap-5 pb-6">
        {/* Next best action */}
        <div className="flex min-w-0 flex-1 flex-col items-start rounded-[32px] border border-white bg-white/30">
          <div className="flex w-full items-center justify-between px-8 py-6">
            <div className="relative flex items-center rounded-full bg-background-tertiary p-1.5">
              <span className="relative z-10 flex h-8 items-center gap-2 rounded-full bg-white px-3 text-sm text-black shadow-[0px_1px_1px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]">
                Next best action
                <SparkleIcon className="size-3 text-accent" />
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="flex size-8 items-center justify-center rounded-full hover:bg-black/5"
                aria-label="Thumbs up"
              >
                <NowIcon icon="circle-question-outline" size="sm" className="text-neutral-700" />
              </button>
              <button
                type="button"
                className="flex size-8 items-center justify-center rounded-full hover:bg-black/5"
                aria-label="More"
              >
                <NowIcon icon="ellipsis-v-outline" size="sm" className="text-neutral-700" />
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-8 px-6 pb-6">
            <div className="flex w-full flex-col items-start gap-6 rounded-3xl bg-white p-6 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]">
              <div className="flex w-full items-start gap-3">
                <div className="flex w-10 flex-col items-center gap-0.5 self-stretch">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm text-text-secondary">
                    1
                  </span>
                  <span className="w-0.5 flex-1 rounded-full bg-[#00834f]" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
                  <div className="flex w-full flex-col items-start gap-2">
                    <p className="text-lg tracking-[-0.18px] text-black">
                      Roll back last Windows update on affected devices
                    </p>
                    <p className="text-sm text-text-secondary">
                      Removing the update restored VPN for all 3 tested users.
                      Matches 7 similar incidents in the last 90 days, same fix
                      worked in 6 of 7.{" "}
                      <button type="button" className="text-text-secondary">
                        Show evidence
                      </button>
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s.label}
                        type="button"
                        className="flex h-8 items-center gap-2 rounded-full border border-neutral-900 px-3 text-xs text-neutral-900 hover:bg-neutral-900 hover:text-white"
                      >
                        {s.label}
                        <SparkleIcon className="size-3 text-accent" />
                      </button>
                    ))}
                  </div>
                  <div className="flex w-full items-center justify-end gap-3">
                    <Button hierarchy="secondary">Skip</Button>
                    <Button hierarchy="primary" className="gap-2">
                      Mark as complete
                      <NowIcon icon="circle-check-outline" size="xs" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm text-text-secondary">
                2
              </span>
              <p className="text-lg tracking-[-0.18px] text-black">
                Verify VPN reconnects
              </p>
            </div>
            <div className="flex w-full items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm text-text-secondary">
                3
              </span>
              <p className="text-lg tracking-[-0.18px] text-black">
                Confirm resolution with 14 users
              </p>
            </div>
          </div>
        </div>

        {/* Resolution progress */}
        <div className="flex min-w-0 flex-1 flex-col items-start rounded-[32px] border border-white bg-white/30">
          <div className="flex w-full items-center px-8 py-6">
            <p className="text-lg tracking-[-0.18px] text-black">
              Resolution Progress
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-6 px-8 pb-6">
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full items-end justify-between">
                <div className="flex flex-col items-start">
                  <p className="text-[40px] leading-none tracking-[-0.4px] text-black">
                    4 of 5
                  </p>
                  <p className="text-sm text-text-secondary">Completed</p>
                </div>
                <Pill tone="green" surface="white">
                  ~ 17m - 25m to resolution
                </Pill>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-background-tertiary">
                <div
                  className="h-full rounded-full bg-success"
                  style={{ width: "80%" }}
                />
              </div>
            </div>

            <div className="flex w-full flex-col items-start">
              {TIMELINE.map((item, i) => (
                <div key={item.time} className="flex w-full items-start gap-4">
                  <div className="flex w-10 shrink-0 flex-col items-end pr-1 text-right">
                    <p className="text-sm text-black">{item.time}</p>
                    <p className="text-xs text-text-tertiary">{item.actor}</p>
                  </div>
                  <div className="flex w-6 shrink-0 flex-col items-center">
                    <span
                      className={`flex size-6 shrink-0 items-center justify-center rounded-full ${
                        item.done
                          ? "bg-success text-white"
                          : "border-2 border-neutral-400 bg-white"
                      }`}
                    >
                      {item.done && (
                        <NowIcon icon="chevron-down-outline" size="xs" />
                      )}
                    </span>
                    {i < TIMELINE.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-neutral-300" />
                    )}
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col items-start gap-1 pb-6">
                    <p className="text-sm text-black">{item.title}</p>
                    <p className="text-sm text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mx-auto text-sm tracking-[-0.14px] text-blue-700 hover:underline"
            >
              All resolution steps
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
