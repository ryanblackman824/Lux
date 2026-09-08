import Header from "./Header";
import TopPriorities from "./TopPriorities";
import PendingTasksWidget from "./PendingTasksWidget";
import YourDayWidget from "./YourDayWidget";
import UnassignedCasesWidget from "./UnassignedCasesWidget";

export default function Home() {
  return (
    <main className="relative isolate mx-auto flex min-h-screen w-full max-w-[1380px] flex-col items-start px-8">
      <div
        className="pointer-events-none absolute -z-10 h-[499px] w-[1093px]"
        style={{
          left: "calc(50% - 546.5px)",
          top: "-401px",
          background: "#CBE4FF",
          filter: "blur(200px)",
        }}
      />

      <Header />

      <div className="flex w-full items-start gap-5 pb-6">
        <div className="flex min-w-0 flex-1 flex-col items-start">
          <TopPriorities />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start gap-5">
          <div className="flex w-full items-start gap-5">
            <PendingTasksWidget />
            <YourDayWidget />
          </div>
          <UnassignedCasesWidget />
        </div>
      </div>
    </main>
  );
}
