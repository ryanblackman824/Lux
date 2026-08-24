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
    <div className="min-h-screen w-full bg-[#edece9]">
      <NavRail />

      <div className="pl-[60px]">
        <main className="relative isolate mx-auto flex min-h-screen w-full max-w-[1380px] flex-col items-start overflow-x-hidden px-6">
          <img
            src={blueGlow}
            alt=""
            className="pointer-events-none absolute left-[125px] top-[-107px] -z-10 w-[1086px]"
          />
          <img
            src={ellipseGlow}
            alt=""
            className="pointer-events-none absolute left-[14px] top-[-92px] -z-10 w-[1372px]"
          />

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
        </main>
      </div>
    </div>
  );
}
