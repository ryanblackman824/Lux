import {
  Home,
  Search,
  Bell,
  Plus,
  Zap,
  ClipboardList,
  Package,
  Building2,
  Lightbulb,
  Settings,
  Phone,
  HelpCircle,
  Globe,
  MoreVertical,
} from "lucide-react";
import navVector from "../assets/nav-vector.svg";
import divider from "../assets/divider.svg";
import appTile from "../assets/app-tile.svg";
import l1Icon from "../assets/l1-icon.svg";
import l1Icon2 from "../assets/l1-icon2.svg";
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
      className="absolute left-0 top-0 z-10 flex h-full w-12 flex-col items-center gap-1.5 rounded-3xl border border-white bg-white/30 px-1.5 py-2.5 backdrop-blur-xl"
      aria-label="Primary"
    >
      {/* Logo */}
      <div className="flex w-full items-center justify-center rounded-2xl py-1">
        <img src={navVector} alt="ServiceNow" className="h-5 w-[22px]" />
      </div>

      {/* Global items */}
      <div className="flex w-full flex-col items-center gap-0.5 rounded-2xl">
        <GlobalItem active>
          <Home className="size-5 text-[#2e2e29]" strokeWidth={1.75} />
        </GlobalItem>
        <GlobalItem>
          <img src={appTile} alt="" className="size-5" />
        </GlobalItem>
        <GlobalItem>
          <Search className="size-5 text-[#2e2e29]" strokeWidth={1.75} />
        </GlobalItem>
        <GlobalItem>
          <span className="relative">
            <Bell className="size-5 text-[#2e2e29]" strokeWidth={1.75} />
            <span className="absolute -right-1.5 -top-1.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-red-600 px-0.5 text-[9px] font-medium leading-none text-white">
              12
            </span>
          </span>
        </GlobalItem>
        <GlobalItem>
          <img src={l1Icon} alt="" className="size-5" />
        </GlobalItem>
      </div>

      <img src={divider} alt="" className="h-1 w-[33px]" />

      {/* Active app */}
      <div className="flex flex-1 min-h-0 flex-col items-center gap-1 overflow-y-auto px-2.5">
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
              <img src={l1Icon2} alt="" className="size-4" />
            </L1ModuleIcon>
            <L1ModuleIcon hasSubmenu>
              <Zap className="size-3 text-[#2e2e29]" strokeWidth={1.75} />
            </L1ModuleIcon>
            <L1ModuleIcon hasSubmenu>
              <ClipboardList
                className="size-3 text-[#2e2e29]"
                strokeWidth={1.75}
              />
            </L1ModuleIcon>
            <L1ModuleIcon>
              <Package className="size-3 text-[#2e2e29]" strokeWidth={1.75} />
            </L1ModuleIcon>
            <L1ModuleIcon hasSubmenu>
              <Building2
                className="size-3 text-[#2e2e29]"
                strokeWidth={1.75}
              />
            </L1ModuleIcon>
            <L1ModuleIcon hasSubmenu>
              <Lightbulb
                className="size-3 text-[#2e2e29]"
                strokeWidth={1.75}
              />
            </L1ModuleIcon>
            <L1ModuleIcon hasSubmenu>
              <Settings
                className="size-3 text-[#2e2e29]"
                strokeWidth={1.75}
              />
            </L1ModuleIcon>
          </div>
        </div>
        <button
          type="button"
          className="mt-1 flex size-8 items-center justify-center rounded-full border border-[#2e2e29]/20 hover:bg-black/5"
          aria-label="Add app"
        >
          <Plus className="size-4 text-[#2e2e29]" strokeWidth={1.75} />
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
            <Phone className="size-4 text-[#2e2e29]" strokeWidth={1.75} />
          </GlobalItem>
          <GlobalItem>
            <img src={ongoing} alt="" className="size-4" />
          </GlobalItem>
          <GlobalItem>
            <HelpCircle className="size-4 text-[#2e2e29]" strokeWidth={1.75} />
          </GlobalItem>
          <GlobalItem>
            <Globe className="size-4 text-[#2e2e29]" strokeWidth={1.75} />
          </GlobalItem>
          <GlobalItem>
            <MoreVertical
              className="size-4 text-[#2e2e29]"
              strokeWidth={1.75}
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
    </nav>
  );
}
