import CollapseButton from "./CollapseButton";
import Pill, { type PillTone } from "./Pill";
import Button from "./Button";
import NowIcon from "./NowIcon";

const CASES: {
  id: string;
  pills: { tone: PillTone; label: string }[];
  title: string;
  description: string;
}[] = [
  {
    id: "TASK000428",
    pills: [
      { tone: "red", label: "Due Tomorrow" },
      { tone: "amber", label: "2 - High" },
    ],
    title: "Executive laptop replacement request",
    description:
      "Response time has exceeded threshold for 2 days and may need your escalation.",
  },
  {
    id: "TASK000428",
    pills: [{ tone: "red", label: "2 - High" }],
    title: "Executive laptop replacement request",
    description:
      "Response time has exceeded threshold for 2 days and may need your escalation.",
  },
  {
    id: "TASK000428",
    pills: [{ tone: "red", label: "2 - High" }],
    title: "Executive laptop replacement request",
    description:
      "Response time has exceeded threshold for 2 days and may need your escalation.",
  },
  {
    id: "TASK000428",
    pills: [{ tone: "red", label: "2 - High" }],
    title: "Executive laptop replacement request",
    description:
      "Response time has exceeded threshold for 2 days and may need your escalation.",
  },
];

export default function UnassignedCasesWidget() {
  return (
    <section
      className="flex h-[556px] w-full flex-col items-start overflow-hidden rounded-[32px] border border-white p-2"
      style={{
        backgroundImage:
          "linear-gradient(134deg, rgba(255,255,255,0) 75.6%, var(--color-bg-primary) 96.8%), linear-gradient(157deg, rgba(248,248,248,0.15) 11.7%, #f8f8f8 46.2%)",
      }}
    >
      <div className="flex w-full items-start gap-2.5 px-4 pt-4">
        <h2 className="text-[36px] tracking-[-0.36px] text-neutral">
          Unassigned Cases
        </h2>
        <span className="flex size-6 items-center justify-center rounded-full bg-white text-sm tracking-[-0.14px] text-[#535353]">
          3
        </span>
        <div className="flex flex-1 items-center justify-end">
          <CollapseButton />
        </div>
      </div>

      <div className="flex w-full min-h-0 flex-1 flex-col items-start gap-4 overflow-y-auto p-4">
        {CASES.map((c, i) => (
          <div key={i} className="flex w-full flex-col items-start gap-2">
            <div className="flex w-full items-center gap-2">
              {c.pills.map((pill, j) => (
                <Pill key={j} tone={pill.tone}>
                  {pill.label}
                </Pill>
              ))}
              <span className="whitespace-nowrap text-xs text-text-tertiary">
                {c.id}
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-1.5">
              <p className="w-full font-serif text-lg text-neutral">
                {c.title}
              </p>
              <div className="flex w-full items-center gap-[15px]">
                <p className="flex-1 truncate text-sm text-text-tertiary">
                  {c.description}
                </p>
                <Button variant="primary" className="shrink-0 !bg-neutral">
                  Assign
                  <NowIcon icon="chevron-down-outline" size="sm" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
