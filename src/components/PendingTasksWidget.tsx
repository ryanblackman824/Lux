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
      className="flex h-[340px] flex-1 flex-col items-start gap-[9px] overflow-hidden rounded-[32px] border border-white p-6"
      style={{
        backgroundImage:
          "linear-gradient(128deg, rgba(255,255,255,0) 75.6%, #fff 96.8%), linear-gradient(152deg, rgba(248,248,248,0.15) 11.7%, #f8f8f8 46.2%)",
      }}
    >
      <div className="flex w-full items-center gap-1.5 pb-3">
        <h2 className="text-xl tracking-[-0.2px] text-black">
          Pending Tasks
        </h2>
        <Tag>2</Tag>
      </div>

      <div className="flex w-full flex-col items-start gap-2.5">
        <div className="flex w-full items-center gap-2">
          <Pill tone="blue">Requested 2 days ago</Pill>
          <span className="text-xs tracking-[-0.12px] text-[#4d4c4a]">
            Approval
          </span>
        </div>
        <p className="w-full pt-2.5 text-base text-black">
          CHG0000088: Upgrade NY NAC to Oracle 12C
        </p>
        <p className="w-full pb-4 pt-1.5 text-sm text-[#4d4c4a]">
          The change window begins tomorrow and all required reviews are
          complete.
        </p>
        <Button variant="secondary" className="w-full">
          Approve
        </Button>
      </div>

      <div className="flex w-full flex-col items-center gap-2.5 pt-2.5">
        <div className="flex w-full items-start gap-2 opacity-30">
          <Pill tone="blue">Requested 2 days ago</Pill>
          <span className="text-xs tracking-[-0.12px] text-[#4d4c4a]">
            Approval
          </span>
        </div>
        <button
          type="button"
          className="w-full text-center text-sm tracking-[-0.14px] text-[#4831af] hover:underline"
        >
          Show more
        </button>
      </div>
    </section>
  );
}
