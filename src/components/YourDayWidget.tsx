import CollapseButton from "./CollapseButton";
import Pill from "./Pill";
import calendarCheck from "../assets/calendar-check.svg";
import listIcon from "../assets/list.svg";

export default function YourDayWidget() {
  return (
    <section
      className="flex h-[340px] flex-1 flex-col items-start overflow-hidden rounded-[32px] border border-white p-6"
      style={{
        backgroundImage:
          "linear-gradient(128deg, rgba(255,255,255,0) 75.6%, #fff 96.8%), linear-gradient(152deg, rgba(248,248,248,0.15) 11.7%, #f8f8f8 46.2%)",
      }}
    >
      <div className="flex w-full flex-col items-start">
        <div className="flex w-full items-center justify-between">
          <h2 className="flex-1 text-xl tracking-[-0.2px] text-black">
            Your Day
          </h2>
          <CollapseButton />
        </div>

        <div className="flex w-full flex-col items-start pt-1.5">
          <p className="text-[56px] leading-none text-black">8</p>
          <p className="pt-1 text-sm text-black">remaining</p>
        </div>

        <div className="flex w-full flex-col items-start gap-2.5 pt-1">
          <Pill tone="green">5/13 completed</Pill>
          <div className="h-[13px] w-full overflow-hidden rounded-full bg-white">
            <div
              className="h-full rounded-full bg-[#7b6ff0]"
              style={{ width: "38%" }}
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-2 pt-5">
          <p className="text-sm text-black">Overall</p>
          <div className="flex w-full flex-col items-start gap-2 py-3">
            <div className="flex w-full items-center justify-between">
              <img src={calendarCheck} alt="" className="size-5" />
              <p className="flex-1 pl-3 text-sm text-[#4d4c4a]">
                1&nbsp; completed ahead of due date
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <img src={listIcon} alt="" className="size-5" />
              <p className="flex-1 pl-3 text-sm text-[#4d4c4a]">
                20&nbsp; total remaining
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
