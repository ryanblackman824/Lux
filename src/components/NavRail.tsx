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
