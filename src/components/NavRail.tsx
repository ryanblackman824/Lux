import { useState } from "react";
import NowIcon from "./NowIcon";
import SparkleIcon from "./SparkleIcon";
import navVector from "../assets/nav-vector.svg";
import avatarPhoto from "../assets/avatar-photo.png";
import wordmark from "../assets/nav-logo-wordmark.svg";
import panelCollapse from "../assets/panel-display-left-collapse.svg";
import tabsetIcon from "../assets/nav-tabset.svg";
import type { Page } from "../App";

/**
 * One row, one DOM tree for both collapsed and expanded nav — the icon slot
 * never moves or resizes between states, only the trailing label grows in.
 * This avoids the icon "jump" that two separate crossfading layouts caused.
 */
function NavRow({
  icon,
  label,
  trailing,
  active = false,
  expanded,
  small = false,
  compact = false,
  onClick,
  className = "",
}: {
  icon: React.ReactNode;
  label?: string;
  trailing?: React.ReactNode;
  active?: boolean;
  expanded: boolean;
  small?: boolean;
  compact?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const slotSize = small ? "size-8" : "size-9";
  const restingWidth = small ? "w-8" : "w-9";
  const resting = compact || !expanded;
  // Fixed inset applied unconditionally (never toggled between states) so
  // the icon's own x-position can never move — only the row's width
  // animates, growing away from a stationary left edge. For non-small rows
  // this 6px inset matches the centered logo/tile icons; the expanded width
  // subtracts it back out so the row's right edge still lands flush.
  const restInset = small ? "" : "ml-1.5";
  const widthClass = resting
    ? restingWidth
    : small
      ? "w-full pr-2.5"
      : "w-[calc(100%-0.375rem)] pr-2.5";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center rounded-full transition-[width,background-color] duration-300 ${
        small ? "h-8" : "h-9"
      } ${restInset} ${widthClass} ${
        active ? "bg-white" : "hover:bg-black/5"
      } ${className}`}
    >
      <span className={`flex shrink-0 items-center justify-center ${slotSize}`}>
        {icon}
      </span>
      {label && (
        <span
          className={`flex min-w-0 flex-1 items-center gap-1 overflow-hidden whitespace-nowrap text-left text-sm text-ink transition-opacity duration-300 ${
            expanded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="min-w-0 flex-1 truncate">{label}</span>
          {trailing}
        </span>
      )}
    </button>
  );
}

function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex size-8 shrink-0 items-center justify-center rounded-lg hover:bg-black/5"
      aria-label="Action"
    >
      {icon}
    </button>
  );
}

export default function NavRail({
  currentPage,
  onNavigate,
}: {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [browseOpen, setBrowseOpen] = useState(false);
  const [activeAppsOpen, setActiveAppsOpen] = useState(true);

  function handleNavigate(page: Page) {
    onNavigate(page);
    setExpanded(false);
  }

  return (
    <nav
      className={`fixed left-0 top-0 z-10 h-screen overflow-hidden bg-white/30 backdrop-blur-[20px] transition-[width] duration-[420ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        expanded ? "w-[260px] border-r border-neutral-300" : "w-[60px]"
      }`}
      aria-label="Primary"
    >
      <div className="flex h-full w-full flex-col items-center pb-1 pl-1.5 pr-1.5 pt-2.5">
        {/* Logo / collapse toggle */}
        <div className="flex h-9 w-full items-center">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="ml-1.5 flex size-9 shrink-0 items-center justify-center rounded-full hover:bg-black/5"
            aria-label={expanded ? "Collapse navigation" : "Expand navigation"}
          >
            <img
              src={expanded ? panelCollapse : navVector}
              alt="ServiceNow"
              className={expanded ? "size-4" : "h-5 w-[22px]"}
            />
          </button>
          <div
            className={`flex min-w-0 flex-1 items-center overflow-hidden transition-[max-width,opacity] duration-300 ${
              expanded ? "ml-1 max-w-[160px] opacity-100" : "max-w-0 opacity-0"
            }`}
          >
            <img src={wordmark} alt="" className="h-6 w-[137px]" />
          </div>
        </div>

        {/* Main nav items */}
        <div className="flex w-full flex-col gap-1 pt-3">
          <NavRow
            expanded={expanded}
            active={currentPage === "home"}
            onClick={() => handleNavigate("home")}
            icon={
              <NowIcon
                icon={currentPage === "home" ? "home-fill" : "home-outline"}
                size="md"
              />
            }
            label="Home"
          />
          <NavRow
            expanded={expanded}
            icon={<SparkleIcon className="size-5 text-black" />}
            label="Ask Otto"
          />
          <NavRow
            expanded={expanded}
            icon={<NowIcon icon="magnifying-glass-outline" size="md" />}
            label="Search"
          />
          <NavRow
            expanded={expanded}
            icon={
              <span className="relative">
                <NowIcon icon="bell-outline" size="md" />
                <span className="absolute -bottom-1 -right-1.5 flex size-[18px] items-center justify-center rounded-full bg-red-600 text-[10px] font-bold leading-none text-white">
                  12
                </span>
              </span>
            }
            label="Notifications"
          />
          <NavRow
            expanded={expanded}
            onClick={() => setBrowseOpen((o) => !o)}
            icon={<NowIcon icon="compass-outline" size="md" />}
            label="Browse"
            trailing={
              <NowIcon
                icon={browseOpen ? "chevron-up-outline" : "chevron-down-outline"}
                size="xs"
                className="text-ink"
              />
            }
          />
          {expanded && browseOpen && (
            <div className="flex w-full flex-col gap-1 pl-8 pr-2">
              <NavRow
                expanded
                icon={<NowIcon icon="list-search-outline" size="md" />}
                label="Navigate to"
              />
              <NavRow
                expanded
                icon={<NowIcon icon="change-outline" size="md" />}
                label="History"
              />
              <NavRow
                expanded
                icon={<NowIcon icon="star-outline" size="md" />}
                label="Favorites"
              />
            </div>
          )}
        </div>

        {/* Scrollable middle */}
        <div className="flex w-full min-h-0 flex-1 flex-col items-center overflow-y-auto pt-4">
          <div
            className={`grid w-full transition-[grid-template-rows] duration-300 ease-out ${
              expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div
              className={`flex min-h-0 flex-col overflow-hidden transition-opacity duration-300 ${
                expanded ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-full border-b border-border-subtle pb-0.5">
                <button
                  type="button"
                  className="flex h-7 w-full items-center gap-2 rounded-lg px-2.5 hover:bg-black/5"
                >
                  <img src={tabsetIcon} alt="" className="size-5" />
                  <span className="flex-1 text-left text-sm text-ink">
                    Your pinned
                  </span>
                  <NowIcon icon="chevron-down-outline" size="xs" className="text-ink" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => setActiveAppsOpen((o) => !o)}
                className="mt-3 flex h-7 w-full items-center gap-2 rounded-lg px-2.5 hover:bg-black/5"
              >
                <img src={tabsetIcon} alt="" className="size-5" />
                <span className="flex-1 text-left text-sm text-ink">
                  Active apps
                </span>
                <NowIcon
                  icon={
                    activeAppsOpen ? "chevron-up-outline" : "chevron-down-outline"
                  }
                  size="xs"
                  className="text-ink"
                />
              </button>
            </div>
          </div>

          <div
            className={`grid w-full transition-[grid-template-rows] duration-300 ease-out ${
              !expanded || activeAppsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div
              className={`min-h-0 overflow-hidden transition-opacity duration-300 ${
                !expanded || activeAppsOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="mt-3 flex w-full flex-col gap-2 rounded-xl bg-[#f9f8f6] px-2 pb-2 pt-3 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
                <NavRow
                  expanded={expanded}
                  small
                  icon={
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-b from-violet-500 to-violet-600 text-[8px] font-medium leading-none text-white ring-1 ring-violet-500 ring-offset-2 ring-offset-[#f9f8f6]">
                      ITS
                    </span>
                  }
                  label="ITS"
                />
                <NavRow
                  expanded={expanded}
                  small
                  icon={
                    <NowIcon icon="dashboard-dial" size="sm" className="text-neutral-700" />
                  }
                  label="Overview"
                />
                <NavRow
                  expanded={expanded}
                  small
                  icon={
                    <NowIcon icon="inbox-outline" size="sm" className="text-neutral-700" />
                  }
                  label="Inbox"
                />
                <NavRow
                  expanded={expanded}
                  small
                  active={currentPage === "list"}
                  onClick={() => handleNavigate("list")}
                  icon={
                    <NowIcon icon="list-outline" size="sm" className="text-neutral-700" />
                  }
                  label="List"
                />
                <NavRow
                  expanded={expanded}
                  small
                  icon={
                    <NowIcon icon="user-group-outline" size="sm" className="text-neutral-700" />
                  }
                  label="Teams"
                />
                <NavRow
                  expanded={expanded}
                  small
                  active={currentPage === "case"}
                  onClick={() => handleNavigate("case")}
                  icon={
                    <NowIcon icon="briefcase-outline" size="sm" className="text-neutral-700" />
                  }
                  label="Case page"
                />
              </div>
            </div>
          </div>

          {expanded ? (
            activeAppsOpen && (
              <button
                type="button"
                className="mt-1 flex h-8 w-full items-center justify-center rounded-full text-sm tracking-[-0.14px] text-ink hover:bg-black/5"
              >
                Manage apps
              </button>
            )
          ) : (
            <button
              type="button"
              className="mt-1 flex size-8 items-center justify-center rounded-full border border-[#2e2e29]/20 hover:bg-black/5"
              aria-label="Add app"
            >
              <NowIcon icon="plus-outline" size="sm" />
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="flex w-full items-center gap-2 border-t border-border-subtle pt-1.5">
          <span className="relative shrink-0">
            <img
              src={avatarPhoto}
              alt="Profile"
              className="size-8 rounded-full object-cover"
            />
            <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-white bg-[#4fd15c]" />
          </span>
          <span
            className={`overflow-hidden whitespace-nowrap text-sm text-ink transition-[max-width,opacity] duration-300 ${
              expanded ? "max-w-[80px] opacity-100" : "max-w-0 opacity-0"
            }`}
          >
            Renee
          </span>
          {expanded ? (
            <div className="flex items-center gap-0.5">
              <IconButton
                icon={<NowIcon icon="globe-outline" size="sm" className="text-neutral-700" />}
              />
              <IconButton
                icon={
                  <NowIcon
                    icon="circle-question-outline"
                    size="sm"
                    className="text-neutral-700"
                  />
                }
              />
              <IconButton
                icon={
                  <span className="relative">
                    <NowIcon icon="ongoing-outline" size="sm" className="text-neutral-700" />
                    <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-red-600" />
                  </span>
                }
              />
              <IconButton
                icon={
                  <NowIcon icon="ellipsis-v-outline" size="sm" className="text-neutral-700" />
                }
              />
            </div>
          ) : (
            <IconButton icon={<NowIcon icon="ellipsis-v-outline" size="sm" />} />
          )}
        </div>
      </div>
    </nav>
  );
}
