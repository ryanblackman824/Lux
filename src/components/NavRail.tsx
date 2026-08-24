import { useState } from "react";
import NowIcon from "./NowIcon";
import navVector from "../assets/nav-vector.svg";
import divider from "../assets/divider.svg";
import sparkleTest from "../assets/sn-sparkmoji-logo-test.svg";
import navFolder from "../assets/nav-folder.svg";
import homeIcon from "../assets/home.svg";
import searchIcon from "../assets/magnifying-glass.svg";
import bellIcon from "../assets/bell.svg";
import compassIcon from "../assets/compass.svg";
import dashboardDialIcon from "../assets/dashboard-dial.svg";
import lightningIcon from "../assets/lightning.svg";
import clipboardIcon from "../assets/clipboard-lines.svg";
import inventoryIcon from "../assets/inventory.svg";
import buildingIcon from "../assets/building.svg";
import gearIcon from "../assets/gear.svg";
import plusIcon from "../assets/plus.svg";
import ellipsisIcon from "../assets/ellipsis-v.svg";
import appTile from "../assets/csm-app-tile.svg";
import avatarPhoto from "../assets/avatar-photo.png";
import wordmark from "../assets/nav-logo-wordmark.svg";
import panelCollapse from "../assets/panel-display-left-collapse.svg";
import gridIcon from "../assets/nav-grid.svg";
import stopwatchIcon from "../assets/nav-stopwatch.svg";
import chartBarIcon from "../assets/nav-chart-bar.svg";
import ongoingIcon from "../assets/nav-ongoing.svg";

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

function ExpandedItem({
  icon,
  label,
  badge,
  active = false,
}: {
  icon: string;
  label: string;
  badge?: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex h-9 w-full items-center gap-1.5 rounded-lg px-2.5 transition-colors hover:bg-black/5 ${
        active ? "bg-black/5" : ""
      }`}
    >
      <img src={icon} alt="" className="size-5" />
      <span className="flex-1 text-left text-sm text-black">{label}</span>
      {badge && (
        <span className="flex size-[18px] items-center justify-center rounded-full bg-[#ffd8d0] text-[10px] font-bold leading-none text-[#750000]">
          {badge}
        </span>
      )}
    </button>
  );
}

function ChildItem({ icon, label }: { icon: string; label: string }) {
  return (
    <button
      type="button"
      className="flex h-8 w-full items-center gap-3 rounded-2xl px-2 text-left hover:bg-black/5"
    >
      <img src={icon} alt="" className="size-4" />
      <span className="flex-1 text-sm text-black">{label}</span>
    </button>
  );
}

function ModuleRow({
  icon,
  label,
  chevron = false,
}: {
  icon: string;
  label: string;
  chevron?: boolean;
}) {
  return (
    <button
      type="button"
      className="flex h-[34px] w-full items-center gap-3 rounded-2xl px-2 text-left hover:bg-black/5"
    >
      <img src={icon} alt="" className="size-4" />
      <span className="flex-1 text-sm text-black">{label}</span>
      {chevron && (
        <NowIcon icon="chevron-down-outline" size="xs" className="text-[#2e2e29]" />
      )}
    </button>
  );
}

function ExpandedNav({ onCollapse }: { onCollapse: () => void }) {
  return (
    <nav
      className="absolute left-0 top-0 z-10 flex h-full w-[260px] flex-col border-r border-white bg-white/[0.33] pb-1 pl-1.5 pr-1.5 pt-2.5 backdrop-blur-[20px]"
      aria-label="Primary expanded"
    >
      <div className="flex h-full w-full flex-1 flex-col rounded-[24px]">
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center gap-1 pl-1">
            <div className="flex flex-1 items-center overflow-hidden px-1.5">
              <img src={wordmark} alt="ServiceNow" className="h-6 w-[137px]" />
            </div>
            <button
              type="button"
              onClick={onCollapse}
              className="flex size-8 items-center justify-center rounded-full hover:bg-black/5"
              aria-label="Collapse navigation"
            >
              <img src={panelCollapse} alt="" className="size-4" />
            </button>
          </div>

          <div className="flex w-full flex-col gap-0.5">
            <ExpandedItem icon={homeIcon} label="Home" active />
            <ExpandedItem icon={sparkleTest} label="Ask Otto" />
            <ExpandedItem icon={searchIcon} label="Search" />
            <ExpandedItem icon={bellIcon} label="Notifications" badge="12" />
            <div className="flex w-full flex-col">
              <button
                type="button"
                className="flex h-9 w-full items-center gap-1.5 rounded-lg px-2.5 hover:bg-black/5"
              >
                <img src={compassIcon} alt="" className="size-5" />
                <span className="flex-1 text-left text-sm text-black">
                  Browse
                </span>
                <NowIcon icon="chevron-up-outline" size="xs" className="text-[#2e2e29]" />
              </button>
              <div className="flex w-full flex-col gap-0 pb-1.5 pl-7">
                <ChildItem icon={gridIcon} label="Navigate to" />
                <div className="flex h-8 w-full items-center gap-3 px-2 text-left">
                  <NowIcon icon="star-outline" size="xs" className="text-[#2e2e29]" />
                  <span className="flex-1 text-sm text-black">Favourites</span>
                </div>
                <div className="flex h-8 w-full items-center gap-3 px-2 text-left">
                  <NowIcon icon="change-outline" size="xs" className="text-[#2e2e29]" />
                  <span className="flex-1 text-sm text-black">History</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto pt-4">
          <p className="px-2.5 pb-0.5 text-xs text-[#656462]">Your pinned</p>

          <div className="flex flex-col gap-2 pt-3">
            <p className="px-2.5 text-xs text-[#656462]">Active apps</p>
            <div className="px-2">
              <div className="w-full overflow-hidden rounded-2xl bg-white">
                <div className="flex items-center gap-2 px-2.5 py-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-b from-[#114598] to-[#2a6edc] text-[8px] font-medium leading-none text-white">
                    CSM
                  </span>
                  <span className="flex-1 text-sm text-[#343331]">CSM</span>
                </div>
                <div className="flex flex-col gap-0 px-2 pb-1.5">
                  <ModuleRow icon={dashboardDialIcon} label="Overview" />
                  <ModuleRow icon={lightningIcon} label="Activity Center" chevron />
                  <ModuleRow icon={clipboardIcon} label="Plan" chevron />
                  <ModuleRow icon={inventoryIcon} label="Inventory" />
                  <ModuleRow icon={buildingIcon} label="Govern" chevron />
                  <div className="flex h-[34px] w-full items-center gap-3 px-2">
                    <NowIcon icon="lightbulb-outline" size="sm" className="text-[#2e2e29]" />
                    <span className="flex-1 text-sm text-black">Insights</span>
                    <NowIcon icon="chevron-down-outline" size="xs" className="text-[#2e2e29]" />
                  </div>
                  <ModuleRow icon={gearIcon} label="Settings" chevron />
                </div>
              </div>
            </div>
            <div className="px-2">
              <button
                type="button"
                className="flex h-8 w-full items-center justify-center gap-1 rounded-full border border-[#2e2e29] text-xs text-black hover:bg-black/5"
              >
                <img src={plusIcon} alt="" className="size-3.5" />
                Add app or workspace
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center gap-2 border-t border-[#e3e2df] px-1.5 py-1.5">
          <img
            src={avatarPhoto}
            alt="Profile"
            className="size-[30px] shrink-0 rounded-full object-cover"
          />
          <span className="flex-1 text-sm text-[#343331]">Renee</span>
          <div className="flex items-center gap-0.5">
            <GlobalItem>
              <img src={stopwatchIcon} alt="" className="size-4" />
            </GlobalItem>
            <GlobalItem>
              <img src={chartBarIcon} alt="" className="size-4" />
            </GlobalItem>
            <GlobalItem>
              <NowIcon icon="phone-outline" size="sm" className="text-[#2e2e29]" />
            </GlobalItem>
            <GlobalItem>
              <img src={ongoingIcon} alt="" className="size-4" />
            </GlobalItem>
            <GlobalItem>
              <NowIcon icon="circle-question-outline" size="sm" className="text-[#2e2e29]" />
            </GlobalItem>
            <GlobalItem>
              <NowIcon icon="globe-outline" size="sm" className="text-[#2e2e29]" />
            </GlobalItem>
            <GlobalItem>
              <NowIcon icon="ellipsis-v-outline" size="sm" className="text-[#2e2e29]" />
            </GlobalItem>
          </div>
        </div>
      </div>
    </nav>
  );
}

function CollapsedNav({ onExpand }: { onExpand: () => void }) {
  return (
    <nav
      className="absolute left-0 top-0 z-10 flex h-full w-[60px] items-start justify-center gap-2 bg-white/[0.33] pb-2 pl-1.5 pr-1.5 pt-2.5 backdrop-blur-[20px]"
      aria-label="Primary"
    >
      <div className="isolate flex h-full w-12 flex-col items-center gap-1.5 rounded-3xl">
        {/* Logo */}
        <button
          type="button"
          onClick={onExpand}
          className="flex w-full items-center justify-center rounded-2xl py-1 hover:bg-black/5"
          aria-label="Expand navigation"
        >
          <img src={navVector} alt="ServiceNow" className="h-5 w-[22px]" />
        </button>

        {/* Global items */}
        <div className="flex w-full flex-col items-center gap-0.5 rounded-2xl">
          <GlobalItem active>
            <img src={homeIcon} alt="" className="size-5" />
          </GlobalItem>
          <GlobalItem>
            <img src={sparkleTest} alt="" className="size-5" />
          </GlobalItem>
          <GlobalItem>
            <img src={searchIcon} alt="" className="size-5" />
          </GlobalItem>
          <GlobalItem>
            <span className="relative">
              <img src={bellIcon} alt="" className="size-5" />
              <span className="absolute -right-2.5 -top-1.5 flex size-[18px] items-center justify-center rounded-full bg-[#ffd8d0] text-[10px] font-bold leading-none text-[#750000]">
                12
              </span>
            </span>
          </GlobalItem>
          <GlobalItem>
            <img src={compassIcon} alt="" className="size-5" />
          </GlobalItem>
        </div>

        <img src={divider} alt="" className="h-1 w-[33px]" />

        {/* Standalone folder item */}
        <GlobalItem>
          <img src={navFolder} alt="" className="size-5" />
        </GlobalItem>

        <img src={divider} alt="" className="h-1 w-[33px]" />

        {/* Active app */}
        <div className="flex min-h-0 flex-1 flex-col items-center gap-1 overflow-y-auto px-2.5">
          <div className="flex flex-col items-center gap-px overflow-hidden rounded-2xl bg-white/60">
            <button
              type="button"
              className="flex h-10 items-center justify-center rounded-xl px-2.5 py-2"
              aria-label="CSM app"
            >
              <img src={appTile} alt="CSM" className="size-6" />
            </button>
            <div className="flex flex-col items-center gap-1.5 pb-1.5 pl-1 pr-1">
              <L1ModuleIcon>
                <img src={dashboardDialIcon} alt="" className="size-4" />
              </L1ModuleIcon>
              <L1ModuleIcon hasSubmenu>
                <img src={lightningIcon} alt="" className="size-4" />
              </L1ModuleIcon>
              <L1ModuleIcon hasSubmenu>
                <img src={clipboardIcon} alt="" className="size-4" />
              </L1ModuleIcon>
              <L1ModuleIcon>
                <img src={inventoryIcon} alt="" className="size-4" />
              </L1ModuleIcon>
              <L1ModuleIcon hasSubmenu>
                <img src={buildingIcon} alt="" className="size-4" />
              </L1ModuleIcon>
              <L1ModuleIcon hasSubmenu>
                <NowIcon
                  icon="lightbulb-outline"
                  size="sm"
                  className="text-[#2e2e29]"
                />
              </L1ModuleIcon>
              <L1ModuleIcon hasSubmenu>
                <img src={gearIcon} alt="" className="size-4" />
              </L1ModuleIcon>
            </div>
          </div>
          <button
            type="button"
            className="mt-1 flex size-8 items-center justify-center rounded-full border border-[#2e2e29]/20 hover:bg-black/5"
            aria-label="Add app"
          >
            <img src={plusIcon} alt="" className="size-4" />
          </button>
        </div>

        {/* Sticky footer */}
        <div className="flex w-full flex-col items-center gap-2 border-t border-[#edece9] pt-2">
          <GlobalItem>
            <img src={ellipsisIcon} alt="" className="size-4" />
          </GlobalItem>
          <span className="relative">
            <img
              src={avatarPhoto}
              alt="Profile"
              className="size-8 rounded-full object-cover"
            />
            <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-white bg-[#4fd15c]" />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default function NavRail() {
  const [expanded, setExpanded] = useState(false);

  return expanded ? (
    <ExpandedNav onCollapse={() => setExpanded(false)} />
  ) : (
    <CollapsedNav onExpand={() => setExpanded(true)} />
  );
}
