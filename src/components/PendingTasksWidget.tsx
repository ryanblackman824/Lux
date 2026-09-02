import Button from "./Button";
import Pill from "./Pill";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-6 items-center justify-center rounded-full bg-white text-sm tracking-[-0.14px] text-[#535353]">
      {children}
    </span>
  );
}

export default function PendingTasksWidget() {
  return (
    <section
      className="flex h-[350px] min-w-0 flex-1 flex-col items-start gap-[9px] overflow-y-auto rounded-[32px] border border-white p-6 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]"
      style={{
        backgroundImage:
          "linear-gradient(153.07deg, rgba(249, 248, 246, 0.3) 2.41%, #F9F8F6 39.31%)",
      }}
    >
      <div className="flex w-full items-center gap-1.5 pb-3">
        <h2 className="text-lg tracking-[-0.18px] text-black">
          Pending tasks
        </h2>
        <Tag>3</Tag>
      </div>

      <div className="flex w-full flex-col items-start gap-2.5">
        <div className="flex w-full items-center gap-2">
          <Pill tone="blue">Requested 2 days ago</Pill>
          <span className="text-sm tracking-[-0.14px] text-text-tertiary">
            Approval
          </span>
        </div>
        <p className="w-full pt-2.5 text-lg tracking-[-0.18px] text-black">
          CHG0000088: Upgrade NY NAC to Oracle 12C
        </p>
        <p className="w-full pb-4 pt-1.5 text-sm text-text-secondary">
          The change window begins tomorrow and all required reviews are
          complete.
        </p>
        <Button variant="secondary" className="w-full">
          Approve
        </Button>
      </div>

      <div className="flex w-full flex-col items-start gap-2.5 pt-2.5">
        <div className="flex w-full items-center gap-2">
          <Pill tone="indigo">Due in 5 days</Pill>
          <span className="text-sm tracking-[-0.14px] text-text-tertiary">
            KB Draft
          </span>
        </div>
        <p className="w-full text-lg tracking-[-0.18px] text-black">
          KB0010001: Need Oracle 10GR2 installed
        </p>
        <p className="w-full pb-4 text-sm text-text-secondary">
          The draft is missing final technical guidance and is due this week.
        </p>
        <Button variant="secondary" className="w-full">
          Approve
        </Button>
        <button
          type="button"
          className="w-full text-center text-sm tracking-[-0.14px] text-blue-700 hover:underline"
        >
          Show more
        </button>
      </div>
    </section>
  );
}
