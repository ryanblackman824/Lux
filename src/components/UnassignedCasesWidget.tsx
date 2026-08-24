import CollapseButton from "./CollapseButton";
import Pill, { type PillTone } from "./Pill";

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
          "linear-gradient(134deg, rgba(255,255,255,0) 75.6%, #fff 96.8%), linear-gradient(157deg, rgba(248,248,248,0.15) 11.7%, #f8f8f8 46.2%)",
      }}
    >
      <div className="flex w-full items-start gap-2.5 px-4 pt-4">
        <h2 className="text-xl tracking-[-0.2px] text-black">
          Unassigned Cases
        </h2>
        <span className="flex size-6 items-center justify-center rounded-full bg-white text-sm tracking-[-0.14px] text-[#535353]">
          2
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
              <span className="whitespace-nowrap text-xs text-[#656462]">
                {c.id}
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-1.5">
              <p className="w-full text-base text-black">{c.title}</p>
              <p className="w-full truncate text-sm text-[#4d4c4a]">
                {c.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
