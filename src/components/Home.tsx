import Header, { GREETING_DONE_MS } from "./Header";
import TopPriorities from "./TopPriorities";
import PendingTasksWidget from "./PendingTasksWidget";
import YourDayWidget from "./YourDayWidget";
import UnassignedCasesWidget from "./UnassignedCasesWidget";

// Cards start right after the greeting text finishes (not waiting for the
// omni-bar), then reveal quickly in top-left-to-bottom-right order. Order
// reads: header text, then body, then the omni-bar's own colored flash on
// top of the header last.
const CARD_STAGGER_MS = 80;
// Top Priorities (and its AI glow) leads in a little ahead of the other
// cards — waiting the full stagger made the eye bounce header -> card ->
// back up to the omni-bar's flash instead of reading as one continuous beat.
const TOP_PRIORITIES_LEAD_MS = 200;

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
          <TopPriorities delay={GREETING_DONE_MS - TOP_PRIORITIES_LEAD_MS} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start gap-5">
          <div className="flex w-full items-start gap-5">
            <PendingTasksWidget delay={GREETING_DONE_MS + CARD_STAGGER_MS} />
            <YourDayWidget delay={GREETING_DONE_MS + CARD_STAGGER_MS * 2} />
          </div>
          <UnassignedCasesWidget delay={GREETING_DONE_MS + CARD_STAGGER_MS * 3} />
        </div>
      </div>
    </main>
  );
}
