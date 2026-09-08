import Pill from "./Pill";
import NowIcon from "./NowIcon";
import calendarCheck from "../assets/calendar-check.svg";

export default function YourDayWidget() {
  return (
    <section
      className="flex h-[350px] min-w-0 flex-1 flex-col items-start overflow-hidden rounded-[32px] border border-white"
      style={{
        backgroundImage:
          "linear-gradient(126.11deg, rgba(255, 255, 255, 0) 75.623%, rgb(255, 255, 255) 96.755%), linear-gradient(150.67deg, rgba(248, 248, 248, 0.15) 11.724%, rgb(248, 248, 248) 46.191%)",
      }}
    >
      <div className="flex w-full min-w-0 flex-col items-start p-6">
        <div className="flex w-full items-center justify-between">
          <h2 className="flex-1 text-lg tracking-[-0.18px] text-black">
            Today&rsquo;s progress
          </h2>
          <NowIcon icon="chevron-down-outline" size="sm" className="-rotate-90" />
        </div>
        <p className="pt-2 text-sm text-text-secondary">Due today</p>

        <div className="flex w-full flex-col items-start gap-3 pt-6 text-black">
          <div className="flex w-full items-end justify-between">
            <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-[40px] leading-none tracking-[-0.4px]">8</p>
              <p className="text-sm">Remaining</p>
            </div>
            <Pill tone="green">5 of 13 resolved</Pill>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-background-tertiary">
            <div
              className="h-full rounded-full bg-success"
              style={{ width: "38%" }}
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-2 pt-5">
          <p className="text-sm text-black">Overall</p>
          <div className="flex w-full flex-col items-start gap-2 p-3">
            <div className="flex w-full items-center justify-between">
              <img src={calendarCheck} alt="" className="size-5" />
              <p className="flex-1 pl-3 text-sm text-text-secondary">
                1&nbsp; completed ahead of due date
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <NowIcon icon="list-outline" size="md" />
              <p className="flex-1 pl-3 text-sm text-text-secondary">
                20&nbsp; total remaining
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
