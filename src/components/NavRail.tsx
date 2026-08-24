import { Package } from "lucide-react";
import NowIcon from "./NowIcon";
import navVector from "../assets/nav-vector.svg";
import divider from "../assets/divider.svg";
import appTile from "../assets/app-tile.svg";
import stopwatch from "../assets/stopwatch.svg";
import chartBar from "../assets/chart-bar.svg";
import ongoing from "../assets/ongoing.svg";

function GlobalItem({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex size-9 items-center justify-center rounded-lg transition-colors hover:bg-black/5 ${
        active ? "bg-black/5" : ""
      }`}
      aria-label="Action"
    >
      {children}
    </button>
  );
}

function L1ModuleIcon({
  children,
  hasSubmenu = false,
}: {
  children: React.ReactNode;
  hasSubmenu?: boolean;
}) {
  return (
    <div className="relative flex size-8 items-center justify-center">
      <button
        type="button"
        className="flex size-8 items-center justify-center rounded-2xl hover:bg-black/5"
        aria-label="Module"
      >
        {children}
      </button>
      {hasSubmenu && (
        <span className="absolute bottom-[3px] right-0 size-[3px] rounded-full bg-[#8a8986]" />
      )}
    </div>
  );
}

export default function NavRail() {
  return (
    <nav
      className="absolute left-0 top-0 z-10 flex h-full w-[60px] items-start justify-center gap-2 bg-white/[0.33] pb-2 pl-1.5 pr-1.5 pt-2.5 backdrop-blur-[20px]"
      aria-label="Primary"
    >
      <div className="isolate flex h-full w-12 flex-col items-center gap-1.5 rounded-3xl">
        {/* Logo */}
        <div className="flex w-full items-center justify-center rounded-2xl py-1">
          <img src={navVector} alt="ServiceNow" className="h-5 w-[22px]" />
        </div>

        {/* Global items */}
        <div className="flex w-full flex-col items-center gap-0.5 rounded-2xl">
          <GlobalItem active>
            <NowIcon icon="home-outline" size="md" className="text-[#2e2e29]" />
          </GlobalItem>
          <GlobalItem>
            <img src={appTile} alt="" className="size-5" />
          </GlobalItem>
          <GlobalItem>
            <NowIcon
              icon="magnifying-glass-outline"
              size="md"
              className="text-[#2e2e29]"
            />
          </GlobalItem>
          <GlobalItem>
            <span className="relative">
              <NowIcon icon="bell-outline" size="md" className="text-[#2e2e29]" />
              <span className="absolute -right-1.5 -top-1.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-red-600 px-0.5 text-[9px] font-medium leading-none text-white">
                12
              </span>
            </span>
          </GlobalItem>
          <GlobalItem>
            <NowIcon icon="compass-outline" size="md" className="text-[#2e2e29]" />
          </GlobalItem>
        </div>

        <img src={divider} alt="" className="h-1 w-[33px]" />

        {/* Active app */}
        <div className="flex min-h-0 flex-1 flex-col items-center gap-1 overflow-y-auto px-2.5">
          <div className="flex flex-col items-center gap-px overflow-hidden rounded-2xl bg-white/60">
            <button
              type="button"
              className="flex h-10 items-center justify-center rounded-xl px-2.5 py-2"
              aria-label="CSM app"
            >
              <span className="flex size-6 items-center justify-center rounded-md bg-gradient-to-b from-[#114598] to-[#2a6edc] text-[8px] font-medium leading-none text-white">
                CSM
              </span>
            </button>
            <div className="flex flex-col items-center gap-1.5 pb-1.5 pl-1 pr-1">
              <L1ModuleIcon hasSubmenu>
                <NowIcon
                  icon="lightning-outline"
                  size="sm"
                  className="text-[#2e2e29]"
                />
              </L1ModuleIcon>
              <L1ModuleIcon hasSubmenu>
                <NowIcon
                  icon="clipboard-lines-outline"
                  size="sm"
                  className="text-[#2e2e29]"
                />
              </L1ModuleIcon>
              <L1ModuleIcon>
                <Package className="size-3 text-[#2e2e29]" strokeWidth={1.75} />
              </L1ModuleIcon>
              <L1ModuleIcon hasSubmenu>
                <NowIcon
                  icon="building-outline"
                  size="sm"
                  className="text-[#2e2e29]"
                />
              </L1ModuleIcon>
              <L1ModuleIcon hasSubmenu>
                <NowIcon
                  icon="lightbulb-outline"
                  size="sm"
                  className="text-[#2e2e29]"
                />
              </L1ModuleIcon>
              <L1ModuleIcon hasSubmenu>
                <NowIcon icon="gear-outline" size="sm" className="text-[#2e2e29]" />
              </L1ModuleIcon>
            </div>
          </div>
          <button
            type="button"
            className="mt-1 flex size-8 items-center justify-center rounded-full border border-[#2e2e29]/20 hover:bg-black/5"
            aria-label="Add app"
          >
            <NowIcon icon="plus-outline" size="sm" className="text-[#2e2e29]" />
          </button>
        </div>

        {/* Sticky footer */}
        <div className="flex w-full flex-col items-center gap-0.5 border-t border-[#edece9] pt-1.5">
          <div className="grid grid-cols-1 gap-0.5">
            <GlobalItem>
              <img src={stopwatch} alt="" className="size-4" />
            </GlobalItem>
            <GlobalItem>
              <img src={chartBar} alt="" className="size-4" />
            </GlobalItem>
            <GlobalItem>
              <NowIcon icon="phone-outline" size="sm" className="text-[#2e2e29]" />
            </GlobalItem>
            <GlobalItem>
              <img src={ongoing} alt="" className="size-4" />
            </GlobalItem>
            <GlobalItem>
              <NowIcon
                icon="circle-question-outline"
                size="sm"
                className="text-[#2e2e29]"
              />
            </GlobalItem>
            <GlobalItem>
              <NowIcon icon="globe-outline" size="sm" className="text-[#2e2e29]" />
            </GlobalItem>
            <GlobalItem>
              <NowIcon
                icon="ellipsis-v-outline"
                size="sm"
                className="text-[#2e2e29]"
              />
            </GlobalItem>
          </div>
          <button
            type="button"
            className="mt-1 flex size-8 items-center justify-center rounded-full bg-gradient-to-b from-[#3a3a36] to-[#232320] text-[11px] font-medium text-white"
            aria-label="Profile"
          >
            SN
          </button>
        </div>
      </div>
    </nav>
  );
}
