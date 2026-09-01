import Pill from "./Pill";
import NowIcon from "./NowIcon";
import calendarCheck from "../assets/calendar-check.svg";

export default function YourDayWidget() {
  return (
    <section
      className="flex h-[340px] min-w-0 flex-1 flex-col items-start overflow-hidden rounded-[32px] border border-white p-6 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]"
      style={{
        backgroundImage:
          "linear-gradient(153.07deg, rgba(249, 248, 246, 0.3) 2.41%, #F9F8F6 39.31%)",
      }}
    >
      <div className="flex w-full flex-col items-start">
        <div className="flex w-full items-center justify-between">
          <h2 className="flex-1 text-xl tracking-[-0.2px] text-neutral">
            Today&rsquo;s progress
          </h2>
          <NowIcon icon="arrow-right-outline" size="sm" />
        </div>
        <p className="pt-1 text-sm text-text-tertiary">Due today</p>

        <div className="flex w-full flex-col items-start pt-1.5">
          <p className="text-4xl leading-none tracking-tight text-neutral">
            8
          </p>
          <p className="pt-1 text-sm text-neutral">Remaining</p>
        </div>

        <div className="flex w-full flex-col items-start gap-2.5 pt-1">
          <Pill tone="green">5 of 13 resolved</Pill>
          <div className="h-[13px] w-full overflow-hidden rounded-full bg-background-tertiary">
            <div
              className="h-full rounded-full bg-success"
              style={{ width: "38%" }}
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-2 pt-5">
          <p className="text-sm text-neutral">Overall</p>
          <div className="flex w-full flex-col items-start gap-2 py-3">
            <div className="flex w-full items-center justify-between">
              <img src={calendarCheck} alt="" className="size-5" />
              <p className="flex-1 pl-3 text-sm text-text-tertiary">
                1&nbsp; completed ahead of due date
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <NowIcon icon="list-outline" size="md" />
              <p className="flex-1 pl-3 text-sm text-text-tertiary">
                20&nbsp; total remaining
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
