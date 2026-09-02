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
    id: "INC0000126",
    pills: [
      { tone: "red", label: "SLA breach in 8 hrs" },
      { tone: "orange", label: "2 - High" },
    ],
    title: "Executive laptop replacement request",
    description:
      "12 users have been unable to connect since 8am. A resolution is ready for your review and approval.",
  },
  {
    id: "INC0012861",
    pills: [{ tone: "orange", label: "2 - High" }],
    title: "Email delivery delays in EMEA",
    description:
      "Mail delivery is improving after recent remediation, but affected users should be updated before further escalations are submitted.",
  },
  {
    id: "INC0012861",
    pills: [{ tone: "orange", label: "2 - High" }],
    title: "Email delivery delays in EMEA",
    description:
      "Mail delivery is improving after recent remediation, but affected users should be updated before further escalations are submitted.",
  },
];

export default function UnassignedCasesWidget() {
  return (
    <section
      className="flex h-[511px] w-full min-w-0 flex-col items-start overflow-hidden rounded-[32px] border border-white p-2 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]"
      style={{
        backgroundImage:
          "linear-gradient(153.07deg, rgba(249, 248, 246, 0.3) 2.41%, #F9F8F6 39.31%)",
      }}
    >
      <div className="flex w-full items-start gap-2.5 px-4 pt-4">
        <h2 className="text-lg tracking-[-0.18px] text-black">
          Unassigned cases
        </h2>
        <span className="flex size-6 items-center justify-center rounded-full bg-white text-sm tracking-[-0.14px] text-[#535353]">
          3
        </span>
        <div className="flex flex-1 items-center justify-end">
          <NowIcon icon="chevron-down-outline" size="sm" className="-rotate-90" />
        </div>
      </div>

      <div className="flex w-full min-w-0 min-h-0 flex-1 flex-col items-start gap-4 overflow-y-auto p-4">
        {CASES.map((c, i) => (
          <div key={i} className="flex w-full min-w-0 flex-col items-start gap-2">
            <div className="flex w-full items-center gap-2">
              {c.pills.map((pill, j) => (
                <Pill key={j} tone={pill.tone}>
                  {pill.label}
                </Pill>
              ))}
              <span className="whitespace-nowrap text-sm text-text-tertiary">
                {c.id}
              </span>
            </div>
            <div className="flex w-full min-w-0 flex-col items-start gap-1.5">
              <p className="w-full text-lg tracking-[-0.18px] text-black">
                {c.title}
              </p>
              <div className="flex w-full min-w-0 items-center gap-[15px]">
                <p className="min-w-0 flex-1 truncate text-sm text-text-secondary">
                  {c.description}
                </p>
                <Button hierarchy="secondary" className="shrink-0">
                  Assign
                  <NowIcon icon="caret-down-outline" size="sm" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
