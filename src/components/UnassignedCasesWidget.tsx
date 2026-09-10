import Pill, { type PillTone } from "./Pill";
import ButtonSplit from "./ButtonSplit";
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

export default function UnassignedCasesWidget({
  delay = 0,
}: {
  delay?: number;
}) {
  return (
    <section
      className="flex h-[511px] w-full min-w-0 animate-card-in flex-col items-start overflow-hidden rounded-[32px] border border-white opacity-0"
      style={{
        backgroundImage:
          "linear-gradient(135.87deg, rgba(255, 255, 255, 0) 75.623%, rgb(255, 255, 255) 96.755%), linear-gradient(158.32deg, rgba(248, 248, 248, 0.15) 11.724%, rgb(248, 248, 248) 46.191%)",
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="flex w-full items-center gap-3 px-8 py-6">
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

      <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col items-start overflow-y-auto px-6 pb-2">
        <div className="flex w-full min-w-0 flex-col items-start gap-6 rounded-3xl bg-white p-6 shadow-[0px_1px_1px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]">
          {CASES.map((c, i) => (
            <div key={i} className="flex w-full min-w-0 flex-col items-start gap-4">
              <div className="flex w-full items-center gap-2">
                {c.pills.map((pill, j) => (
                  <Pill key={j} tone={pill.tone} surface="off-white">
                    {pill.label}
                  </Pill>
                ))}
                <span className="whitespace-nowrap text-sm text-text-tertiary">
                  {c.id}
                </span>
              </div>
              <div className="flex w-full min-w-0 items-end gap-8">
                <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
                  <p className="w-full text-lg tracking-[-0.18px] text-black">
                    {c.title}
                  </p>
                  <p className="line-clamp-2 w-full text-sm text-text-secondary">
                    {c.description}
                  </p>
                </div>
                <ButtonSplit hierarchy="primary" className="shrink-0" caretLabel="Assign options">
                  Assign
                </ButtonSplit>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
