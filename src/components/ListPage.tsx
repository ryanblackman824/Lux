import { useState } from "react";
import NowIcon from "./NowIcon";
import Button from "./Button";
import ButtonIconic from "./ButtonIconic";
import ButtonSplit from "./ButtonSplit";
import Pill, { type PillTone } from "./Pill";

type Priority = "1 - Critical" | "2 - High" | "3 - Moderate" | "4 - Low";
type State = "In progress" | "Resolved" | "On hold" | "New";

// Matches the same red/orange/indigo/gray "highlighted value" tones used
// for priority pills across the rest of the app (TopPriorities,
// UnassignedCasesWidget), confirmed against the real table pill instances.
const PRIORITY_TONE: Record<Priority, PillTone> = {
  "1 - Critical": "red",
  "2 - High": "orange",
  "3 - Moderate": "indigo",
  "4 - Low": "gray",
};

const STATE_STYLE: Record<State, string> = {
  "In progress": "border-[#d2d1ce] text-green-600",
  Resolved: "border-[#d2d1ce] text-neutral-600",
  "On hold": "border-[#d2d1ce] text-yellow-600",
  New: "border-[#d2d1ce] text-blue-700",
};

const PRIORITY_ORDER: Record<Priority, number> = {
  "1 - Critical": 1,
  "2 - High": 2,
  "3 - Moderate": 3,
  "4 - Low": 4,
};

type SortKey = "opened" | "description" | "priority" | "assignee" | "state";
type SortDir = "asc" | "desc";

function compareRows(a: CaseRow, b: CaseRow, key: SortKey): number {
  if (key === "priority") {
    return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority];
  }
  return a[key].localeCompare(b[key]);
}

type CaseRow = {
  number: string;
  opened: string;
  description: string;
  priority: Priority;
  assignee: string;
  initials: string;
  state: State;
};

type Group = {
  assignee: string;
  count: number;
  rows: CaseRow[];
};

const GROUPS: Group[] = [
  {
    assignee: "Beth Anglin",
    count: 20,
    rows: [
      {
        number: "INC0012345",
        opened: "2026-01-03 15:24",
        description: "Need help, laptop not working properly",
        priority: "1 - Critical",
        assignee: "Beth Anglin",
        initials: "BA",
        state: "In progress",
      },
      {
        number: "INC0012346",
        opened: "2026-01-03 12:08",
        description: "Internet is slow and not loading implementation",
        priority: "2 - High",
        assignee: "Beth Anglin",
        initials: "BA",
        state: "In progress",
      },
      {
        number: "INC0012347",
        opened: "2026-01-04 09:41",
        description: "Can't connect to server",
        priority: "1 - Critical",
        assignee: "Beth Anglin",
        initials: "BA",
        state: "New",
      },
      {
        number: "INC0012348",
        opened: "2026-01-04 16:52",
        description: "Requesting tools for new hire",
        priority: "4 - Low",
        assignee: "Beth Anglin",
        initials: "BA",
        state: "On hold",
      },
      {
        number: "INC0012349",
        opened: "2026-01-05 08:15",
        description: "Laptop gets really hot when in use",
        priority: "3 - Moderate",
        assignee: "Beth Anglin",
        initials: "BA",
        state: "In progress",
      },
      {
        number: "INC0012350",
        opened: "2026-01-05 11:37",
        description: "Emails aren't sending",
        priority: "2 - High",
        assignee: "Beth Anglin",
        initials: "BA",
        state: "Resolved",
      },
      {
        number: "INC0012355",
        opened: "2026-01-05 14:02",
        description: "VPN keeps disconnecting throughout the day",
        priority: "3 - Moderate",
        assignee: "Beth Anglin",
        initials: "BA",
        state: "New",
      },
      {
        number: "INC0012356",
        opened: "2026-01-06 08:47",
        description: "Monitor not detected after docking",
        priority: "4 - Low",
        assignee: "Beth Anglin",
        initials: "BA",
        state: "On hold",
      },
      {
        number: "INC0012357",
        opened: "2026-01-06 13:19",
        description: "Shared drive permissions need updating",
        priority: "2 - High",
        assignee: "Beth Anglin",
        initials: "BA",
        state: "In progress",
      },
    ],
  },
  {
    assignee: "David Lou",
    count: 12,
    rows: [
      {
        number: "INC0012351",
        opened: "2026-01-06 10:02",
        description: "Can't log in with SSO and okta not working",
        priority: "1 - Critical",
        assignee: "David Lou",
        initials: "DL",
        state: "In progress",
      },
      {
        number: "INC0012352",
        opened: "2026-01-06 14:19",
        description: "Internet is lagging",
        priority: "3 - Moderate",
        assignee: "David Lou",
        initials: "DL",
        state: "New",
      },
      {
        number: "INC0012353",
        opened: "2026-01-07 09:03",
        description: "Printer not working in the community center",
        priority: "4 - Low",
        assignee: "David Lou",
        initials: "DL",
        state: "On hold",
      },
      {
        number: "INC0012354",
        opened: "2026-01-07 17:44",
        description: "Server is down",
        priority: "1 - Critical",
        assignee: "David Lou",
        initials: "DL",
        state: "Resolved",
      },
      {
        number: "INC0012358",
        opened: "2026-01-08 09:21",
        description: "Second monitor flickering intermittently",
        priority: "3 - Moderate",
        assignee: "David Lou",
        initials: "DL",
        state: "In progress",
      },
    ],
  },
];

function FilterChip({ children }: { children: React.ReactNode }) {
  return (
    <ButtonSplit hierarchy="tertiary">
      {children}
    </ButtonSplit>
  );
}

function GroupHeaderRow({
  group,
  onOpenRecord,
}: {
  group: Group;
  onOpenRecord: () => void;
}) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="px-3">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-full items-center gap-3 rounded-full bg-white px-3 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
        >
          <NowIcon
            icon="caret-down-outline"
            size="sm"
            className={open ? "" : "-rotate-90"}
          />
          <span className="text-sm text-black">
            Assigned to: {group.assignee}
          </span>
          <span className="flex h-6 items-center justify-center rounded-full bg-neutral-200 px-2 text-xs text-text-secondary">
            {group.count}
          </span>
        </button>
      </div>
      {open &&
        group.rows.map((row, i) => (
          <CaseTableRow
            key={row.number}
            row={row}
            isLastInGroup={i === group.rows.length - 1}
            onOpenRecord={
              row.number === "INC0012345" ? onOpenRecord : undefined
            }
          />
        ))}
    </>
  );
}

function CaseTableRow({
  row,
  isLastInGroup = false,
  onOpenRecord,
}: {
  row: CaseRow;
  isLastInGroup?: boolean;
  onOpenRecord?: () => void;
}) {
  return (
    <div
      className={`flex w-full items-stretch hover:bg-black/5 ${
        isLastInGroup ? "" : "border-b border-base-300"
      }`}
    >
      <div className="flex w-[112px] shrink-0 items-center gap-2 px-3 py-2">
        <span className="size-6 shrink-0" />
        <button
          type="button"
          className="flex size-6 shrink-0 items-center justify-center rounded-lg hover:bg-black/5"
          aria-label="Edit"
        >
          <NowIcon icon="pencil-outline" size="sm" />
        </button>
        <span className="flex size-6 shrink-0 items-center justify-center">
          <span className="size-4 rounded-[4px] border border-neutral-500 bg-neutral-100" />
        </span>
      </div>
      <div className="flex min-w-0 flex-1 items-center px-3 py-2.5">
        {onOpenRecord ? (
          <button
            type="button"
            onClick={onOpenRecord}
            className="min-w-0 truncate text-sm text-blue-700 underline"
          >
            {row.number}
          </button>
        ) : (
          <a href="#" className="min-w-0 truncate text-sm text-blue-700 underline">
            {row.number}
          </a>
        )}
      </div>
      <div className="flex min-w-0 flex-1 items-center px-3 py-2.5">
        <p className="min-w-0 truncate text-sm tracking-[-0.14px] text-black">
          {row.opened}
        </p>
      </div>
      <div className="flex min-w-0 flex-1 items-center px-3 py-2.5">
        <p className="min-w-0 truncate text-sm tracking-[-0.14px] text-black">
          {row.description}
        </p>
      </div>
      <div className="flex min-w-0 flex-1 items-center px-3 py-2.5">
        <Pill tone={PRIORITY_TONE[row.priority]} surface="off-white">
          {row.priority}
        </Pill>
      </div>
      <div className="flex min-w-0 flex-1 items-center gap-2 px-3 py-2.5">
        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-neutral-600 text-[8px] text-white">
          {row.initials}
        </span>
        <p className="min-w-0 truncate text-xs text-blue-700">{row.assignee}</p>
      </div>
      <div className="flex min-w-0 flex-1 items-center px-3 py-2.5">
        <span
          className={`flex h-6 items-center justify-center rounded-[4px] border bg-white px-2 text-xs tracking-[-0.12px] ${STATE_STYLE[row.state]}`}
        >
          {row.state}
        </span>
      </div>
    </div>
  );
}

const SORTABLE_COLUMNS: { label: string; key: SortKey }[] = [
  { label: "Opened", key: "opened" },
  { label: "Short description", key: "description" },
  { label: "Priority", key: "priority" },
  { label: "Assigned to", key: "assignee" },
  { label: "State", key: "state" },
];

function ColumnHeader({
  label,
  sortKey,
  activeSort,
  onClick,
  trailing,
}: {
  label: string;
  sortKey: SortKey;
  activeSort: { key: SortKey; dir: SortDir } | null;
  onClick: (key: SortKey) => void;
  trailing?: React.ReactNode;
}) {
  const isActive = activeSort?.key === sortKey;
  return (
    <button
      type="button"
      onClick={() => onClick(sortKey)}
      className="flex min-w-0 flex-1 items-center gap-2 px-3 py-2.5 text-left hover:bg-black/5"
    >
      <p className="min-w-0 truncate text-sm text-black">{label}</p>
      <NowIcon
        icon={
          isActive && activeSort.dir === "asc"
            ? "chevron-up-outline"
            : "sort-descending-outline"
        }
        size="sm"
        className={isActive ? "text-black" : "text-text-tertiary"}
      />
      {trailing}
    </button>
  );
}

export default function ListPage({
  onOpenRecord,
}: {
  onOpenRecord: () => void;
}) {
  const [sort, setSort] = useState<{ key: SortKey; dir: SortDir } | null>(
    null,
  );
  const totalCount = GROUPS.reduce((sum, g) => sum + g.rows.length, 0);

  const sortedGroups = sort
    ? GROUPS.map((group) => ({
        ...group,
        rows: [...group.rows].sort((a, b) => {
          const cmp = compareRows(a, b, sort.key);
          return sort.dir === "asc" ? cmp : -cmp;
        }),
      }))
    : GROUPS;

  function handleSort(key: SortKey) {
    setSort((prev) =>
      prev?.key === key
        ? { key, dir: prev.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "asc" },
    );
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1380px] flex-col items-start overflow-x-hidden px-8 pb-8 pt-8">
      <div className="flex w-full items-start justify-between">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <p className="text-sm tracking-[-0.14px] text-black">
              Open cases
            </p>
            <span className="flex h-6 items-center justify-center rounded-full bg-[#fbfbfb] px-2 text-sm tracking-[-0.14px] text-[#535353]">
              {totalCount}
            </span>
            <p className="text-sm tracking-[-0.14px] text-text-secondary">
              Last updated 2m ago
            </p>
          </div>
          <p className="text-lg tracking-[-0.18px] text-black">
            Heads up, one item needs some attention
          </p>
        </div>

        <div className="flex items-center gap-2">
          <ButtonIconic hierarchy="tertiary" aria-label="Search">
            <NowIcon icon="magnifying-glass-outline" size="sm" />
          </ButtonIconic>
          <ButtonIconic hierarchy="tertiary" aria-label="Filter">
            <NowIcon icon="filter-outline" size="sm" />
          </ButtonIconic>
          <ButtonIconic hierarchy="tertiary" aria-label="Preferences">
            <NowIcon icon="sliders-vertical-outline" size="sm" />
          </ButtonIconic>
          <ButtonSplit hierarchy="tertiary">
            <NowIcon icon="grid-four-outline" size="sm" />
            Grid
          </ButtonSplit>
          <Button hierarchy="primary">New</Button>
          <ButtonIconic hierarchy="tertiary" aria-label="More actions">
            <NowIcon icon="ellipsis-v-outline" size="sm" />
          </ButtonIconic>
        </div>
      </div>

      <div className="flex w-full items-start justify-between pt-6">
        <div className="flex flex-wrap items-center gap-2">
          <FilterChip>Priority: 1 - Critical, 3 - Moderate</FilterChip>
          <FilterChip>Opened: 2026-01-03 - 2026-01-18</FilterChip>
          <FilterChip>State: In progress, Resolved</FilterChip>
          <Button hierarchy="ghost" className="gap-2 pl-3 pr-4">
            <NowIcon icon="plus-outline" size="sm" />
            Add filter
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <ButtonSplit hierarchy="ghost">
            <NowIcon icon="arrow-up-down-outline" size="sm" />
            2 sorts
          </ButtonSplit>
          <ButtonSplit hierarchy="tertiary" caretLabel="Assigned to options">
            <NowIcon icon="group-lines-outline" size="sm" />
            Assigned to
          </ButtonSplit>
        </div>
      </div>

      <div className="mt-3 flex w-full min-w-0 flex-1 flex-col overflow-hidden rounded-[32px] border border-white bg-white/30">
        <div className="flex w-full items-stretch">
          <div className="flex w-[112px] shrink-0 items-center gap-2 px-3 py-2">
            <span className="flex size-6 shrink-0 items-center justify-center">
              <NowIcon icon="caret-right-outline" size="sm" />
            </span>
            <span className="flex size-6 shrink-0 items-center justify-center">
              <NowIcon icon="magnifying-glass-filter-outline" size="sm" />
            </span>
            <span className="flex size-6 shrink-0 items-center justify-center">
              <span className="size-4 rounded-[4px] border border-neutral-500 bg-neutral-100" />
            </span>
          </div>
          <div className="flex min-w-0 flex-1 items-center px-3 py-2.5">
            <p className="min-w-0 truncate text-sm text-black">Number</p>
          </div>
          {SORTABLE_COLUMNS.map(({ label, key }) => (
            <ColumnHeader
              key={key}
              label={label}
              sortKey={key}
              activeSort={sort}
              onClick={handleSort}
              trailing={
                key === "assignee" ? (
                  <NowIcon icon="folder-open-outline" size="sm" />
                ) : undefined
              }
            />
          ))}
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          {sortedGroups.map((group) => (
            <GroupHeaderRow
              key={group.assignee}
              group={group}
              onOpenRecord={onOpenRecord}
            />
          ))}
        </div>

        <div className="flex w-full flex-col items-start gap-2.5 px-3 pb-3">
          <div className="h-1 w-[298px] rounded-full bg-neutral-500" />
          <div className="flex w-full items-center justify-center rounded-full bg-white px-3 shadow-[0px_1px_1px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]">
            <div className="flex w-full items-center justify-between px-3 py-2">
              <p className="text-sm tracking-[-0.14px] text-[#767676]">
                Showing 1-{totalCount} of {totalCount}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex size-8 items-center justify-center rounded-lg hover:bg-black/5"
                  aria-label="First page"
                >
                  <NowIcon icon="arrow-left-most-outline" size="sm" />
                </button>
                <button
                  type="button"
                  className="flex size-8 items-center justify-center rounded-lg hover:bg-black/5"
                  aria-label="Previous page"
                >
                  <NowIcon icon="arrow-left-outline" size="sm" />
                </button>
                <button
                  type="button"
                  className="flex size-8 items-center justify-center rounded-full bg-black text-sm text-white"
                >
                  1
                </button>
                <button
                  type="button"
                  className="flex size-8 items-center justify-center rounded-lg text-sm text-black hover:bg-black/5"
                  aria-label="Next page"
                >
                  <NowIcon icon="arrow-right-outline" size="sm" />
                </button>
                <button
                  type="button"
                  className="flex size-8 items-center justify-center rounded-lg hover:bg-black/5"
                  aria-label="Last page"
                >
                  <NowIcon icon="arrow-right-most-outline" size="sm" />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-sm tracking-[-0.14px] text-[#767676]">
                  Records per page
                </p>
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm tracking-[-0.14px] text-black hover:opacity-70"
                >
                  15
                  <NowIcon icon="chevron-down-outline" size="sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
