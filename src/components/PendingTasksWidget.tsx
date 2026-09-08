import { useEffect, useRef, useState } from "react";
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
  const [secondTaskRevealed, setSecondTaskRevealed] = useState(false);
  const secondTaskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = secondTaskRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSecondTaskRevealed(true);
      },
      { root: target.closest("[data-scroll-region]"), threshold: 0.6 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="flex h-[350px] min-w-0 flex-1 flex-col items-start overflow-hidden rounded-[32px] border border-white"
      style={{
        backgroundImage:
          "linear-gradient(126.11deg, rgba(255, 255, 255, 0) 75.623%, rgb(255, 255, 255) 96.755%), linear-gradient(150.67deg, rgba(248, 248, 248, 0.15) 11.724%, rgb(248, 248, 248) 46.191%)",
      }}
    >
      <div className="flex w-full items-center gap-3 px-6 pt-6">
        <h2 className="text-lg tracking-[-0.18px] text-black">
          Pending tasks
        </h2>
        <Tag>3</Tag>
      </div>

      <div
        data-scroll-region
        className="flex h-[236px] w-full flex-col items-start gap-6 overflow-y-auto px-6 py-6"
      >
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full items-center gap-2">
            <Pill tone="blue">Requested 2 days ago</Pill>
            <span className="text-sm tracking-[-0.14px] text-text-tertiary">
              Approval
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <p className="w-full text-lg tracking-[-0.18px] text-black">
              CHG0000088: Upgrade NY NAC to Oracle 12C
            </p>
            <p className="line-clamp-2 w-full text-sm text-text-secondary">
              The change window begins tomorrow and all required reviews are
              complete.
            </p>
          </div>
          <Button hierarchy="secondary" className="w-full">
            Approve
          </Button>
        </div>

        <div
          ref={secondTaskRef}
          className={`flex w-full flex-col items-start gap-4 transition-opacity duration-300 ${
            secondTaskRevealed ? "opacity-100" : "opacity-40"
          }`}
        >
          <div className="flex w-full items-center gap-2">
            <Pill tone="indigo">Due in 5 days</Pill>
            <span className="text-sm tracking-[-0.14px] text-text-tertiary">
              KB Draft
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <p className="w-full text-lg tracking-[-0.18px] text-black">
              KB0010001: Need Oracle 10GR2 installed
            </p>
            <p className="line-clamp-2 w-full text-sm text-text-secondary">
              The draft is missing final technical guidance and is due this
              week.
            </p>
          </div>
          <Button hierarchy="secondary" className="w-full">
            Approve
          </Button>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-6 px-6 py-4">
        <button
          type="button"
          className="flex h-8 w-full items-center justify-center text-sm tracking-[-0.14px] text-blue-700 hover:underline"
        >
          Show more
        </button>
      </div>
    </section>
  );
}
