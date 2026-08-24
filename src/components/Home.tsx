import NavRail from "./NavRail";
import Header from "./Header";
import TopPriorities from "./TopPriorities";
import PendingTasksWidget from "./PendingTasksWidget";
import YourDayWidget from "./YourDayWidget";
import UnassignedCasesWidget from "./UnassignedCasesWidget";
import blueGlow from "../assets/blue-glow.svg";
import ellipseGlow from "../assets/ellipse-glow.svg";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#dcdbd7] p-10">
      <main className="relative flex h-[819px] w-[1440px] flex-col items-start overflow-hidden border border-black/10 bg-[#edece9] px-6">
        <img
          src={blueGlow}
          alt=""
          className="pointer-events-none absolute left-[125px] top-[-107px] w-[1086px]"
        />
        <img
          src={ellipseGlow}
          alt=""
          className="pointer-events-none absolute left-[14px] top-[-92px] w-[1372px]"
        />

        <NavRail />

        <div className="relative flex w-full flex-col items-start pl-[60px]">
          <Header />

          <div className="flex w-full items-start gap-2.5 pb-6">
            <div className="flex flex-1 flex-col items-start py-2.5 pr-2.5">
              <TopPriorities />
            </div>

            <div className="flex flex-1 flex-col items-start gap-2.5 pt-[50px]">
              <div className="flex w-full items-center gap-2.5">
                <PendingTasksWidget />
                <YourDayWidget />
              </div>
              <UnassignedCasesWidget />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
