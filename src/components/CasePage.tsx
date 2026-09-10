import { useEffect, useLayoutEffect, useRef, useState } from "react";
import NowIcon from "./NowIcon";
import SparkleIcon from "./SparkleIcon";
import Button, { HIERARCHIES } from "./Button";
import ButtonSplit from "./ButtonSplit";
import Pill from "./Pill";
import avatarPhoto from "../assets/avatar-photo.png";

function IconButton({
  icon,
  className = "",
  ...props
}: {
  icon: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={`flex size-8 shrink-0 items-center justify-center rounded-full hover:bg-black/5 ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
}


function CaseField({
  label,
  value,
  leadingIcon,
  trailingIcons,
  bgWhite = true,
}: {
  label: string;
  value: string;
  leadingIcon?: React.ReactNode;
  trailingIcons?: React.ReactNode;
  bgWhite?: boolean;
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <p className="w-full truncate text-sm tracking-[-0.14px] text-black">
        {label}
      </p>
      <div
        className={`flex h-10 w-full items-center gap-2 overflow-hidden rounded-xl border border-neutral-400 p-3 ${
          bgWhite ? "bg-white" : ""
        }`}
      >
        {leadingIcon}
        <input
          type="text"
          defaultValue={value}
          className="min-w-0 flex-1 truncate bg-transparent text-sm tracking-[-0.14px] text-black focus:outline-none"
        />
        {trailingIcons}
      </div>
    </div>
  );
}

function useSlidingIndicator(active: string) {
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const measure = () => {
    const el = tabRefs.current[active];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
  };

  useLayoutEffect(measure, [active]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return { tabRefs, indicator };
}

function PillTabs<T extends string>({
  tabs,
  active,
  onChange,
}: {
  tabs: readonly T[];
  active: T;
  onChange: (tab: T) => void;
}) {
  const { tabRefs, indicator } = useSlidingIndicator(active);

  return (
    <div className="relative flex w-full items-center rounded-full bg-[#f0efec] p-1.5">
      <span
        className="absolute top-1.5 h-8 rounded-full bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ left: indicator.left, width: indicator.width }}
        aria-hidden="true"
      />
      {tabs.map((tab) => (
        <button
          key={tab}
          ref={(el) => {
            tabRefs.current[tab] = el;
          }}
          type="button"
          onClick={() => onChange(tab)}
          className={`relative z-10 flex h-8 items-center whitespace-nowrap rounded-full px-3 text-sm tracking-[-0.14px] transition-colors ${
            active === tab ? "text-black" : "text-text-secondary hover:bg-white/60"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function UnderlineTabs<T extends string>({
  tabs,
  active,
  onChange,
}: {
  tabs: readonly T[];
  active: T;
  onChange: (tab: T) => void;
}) {
  const { tabRefs, indicator } = useSlidingIndicator(active);

  return (
    <div className="relative flex w-full items-center gap-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          ref={(el) => {
            tabRefs.current[tab] = el;
          }}
          type="button"
          onClick={() => onChange(tab)}
          className={`flex items-center whitespace-nowrap px-1 py-2 text-sm tracking-[-0.14px] transition-colors ${
            active === tab ? "text-black" : "text-text-secondary"
          }`}
        >
          {tab}
        </button>
      ))}
      <span
        className="absolute bottom-0 h-0.5 rounded-full bg-black transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ left: indicator.left, width: indicator.width }}
        aria-hidden="true"
      />
    </div>
  );
}

const EMAIL_TABS = ["Email", "External comments", "Internal notes"] as const;
const EMAIL_MORE_TABS = ["Propose solution"] as const;

const STREAM_TABS = ["Activity stream", "Attachments", "Knowledge base"] as const;

const PRIORITY_TABS = ["Priority", "All", "Customer"] as const;

export default function CasePage() {
  const [emailTab, setEmailTab] = useState<
    (typeof EMAIL_TABS)[number] | (typeof EMAIL_MORE_TABS)[number]
  >("Email");
  const [emailMoreOpen, setEmailMoreOpen] = useState(false);
  const { tabRefs: emailTabRefs, indicator: emailIndicator } =
    useSlidingIndicator(emailTab);
  const [streamTab, setStreamTab] =
    useState<(typeof STREAM_TABS)[number]>("Activity stream");
  const [priorityTab, setPriorityTab] =
    useState<(typeof PRIORITY_TABS)[number]>("Priority");
  const [ottoQuery, setOttoQuery] = useState("");

  return (
    <main className="relative isolate mx-auto flex min-h-screen w-full max-w-[1380px] flex-col gap-8 px-8 pb-8 pt-8">
      <div
        className="pointer-events-none absolute -z-10 h-[325px] w-[365px]"
        style={{
          left: "1104px",
          top: "66px",
          background: "#CBE4FF",
          filter: "blur(160px)",
        }}
      />

      {/* Breadcrumb + title row */}
      <div className="flex w-full flex-col gap-3">
        <div className="flex items-center self-start rounded-full bg-neutral-300 p-1.5">
          <div className="flex h-8 items-center gap-2 rounded-full bg-white pl-1 pr-3 shadow-[0px_1px_1px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]">
            <span className="flex size-6 items-center justify-center rounded-full bg-blue-50">
              <NowIcon icon="briefcase-outline" size="sm" className="text-[#2a6edc]" />
            </span>
            <p className="text-sm tracking-[-0.14px] text-black">
              Robert Valdez
            </p>
            <span className="h-full w-px bg-[#e8e7e4]" />
            <p className="w-44 truncate text-xs tracking-[-0.12px] text-text-secondary">
              DK00012410 | Bonus bet not showi..
            </p>
          </div>
          <IconButton icon={<NowIcon icon="plus-outline" size="sm" />} />
        </div>

        <div className="flex w-full items-start justify-between">
          <div className="flex items-center gap-3 pl-3">
            <p className="text-lg tracking-[-0.18px] text-black">
              Bonus bet not showing up [support@jackpocket.com]
            </p>
            <div className="flex items-center">
              <IconButton icon={<NowIcon icon="tags-outline" size="sm" />} />
              <IconButton
                icon={<NowIcon icon="circle-info-outline" size="sm" />}
              />
              <IconButton
                icon={<NowIcon icon="clipboard-lines-outline" size="sm" />}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ButtonSplit hierarchy="tertiary" caretLabel="Macros options">
              <NowIcon icon="lightning-outline" size="sm" />
              Macros
            </ButtonSplit>
            <ButtonSplit hierarchy="tertiary" caretLabel="Actions options">
              Actions
            </ButtonSplit>
            <span className="mx-1 h-6 w-px bg-neutral-300" />
            <ButtonSplit hierarchy="tertiary" caretLabel="Assign to me options">
              Assign to me
            </ButtonSplit>
            <Button hierarchy="tertiary">Save</Button>
            <Button hierarchy="primary">Assign to me</Button>
          </div>
        </div>
      </div>

      {/* Two-column workspace */}
      <div className="flex w-full items-start gap-2.5">
        {/* Otto AI panel */}
        <div className="sticky top-8 flex h-[calc(100vh-12rem)] w-[420px] shrink-0 flex-col items-start px-4 pt-5">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <SparkleIcon className="size-4 text-black" />
              <p className="text-lg tracking-[-0.18px] text-black">Otto</p>
            </div>
            <div className="flex items-center gap-2">
              <IconButton
                icon={<NowIcon icon="pencil-page-outline" size="sm" />}
              />
              <IconButton icon={<NowIcon icon="expand-outline" size="sm" />} />
              <IconButton
                icon={<NowIcon icon="ellipsis-v-outline" size="sm" />}
              />
              <IconButton
                icon={<NowIcon icon="chevron-down-outline" size="sm" />}
              />
            </div>
          </div>

          <div className="flex min-h-0 w-full flex-1 flex-col items-start justify-end gap-[18px] overflow-y-auto pt-10">
            <div className="flex items-end gap-2 p-1">
              <p className="text-xs tracking-[-0.12px] text-[#767676]">
                AI Steps
              </p>
              <NowIcon icon="chevron-down-outline" size="sm" className="text-[#767676]" />
            </div>
            <div className="w-full text-sm tracking-[-0.14px] text-black">
              <p>Hi Jason,</p>
              <p>Here&rsquo;s what your AI agents found:</p>
              <p>
                Customer SlickGuy1241325 signed up for a new account on
                April 5, 2026 with an initial deposit of $50. He placed a
                bet of $25 bet id (RLI128754987) on April 6, 2026, and did
                not receive the matching bonus.
              </p>
              <p>&nbsp;</p>
              <p>Based on recent checks (4 hours ago)</p>
              <ul className="list-disc pl-[21px]">
                <li>Account is verified</li>
                <li>Bonus has not been credited</li>
              </ul>
            </div>
            <div className="flex w-full items-center gap-2">
              <IconButton
                icon={<NowIcon icon="thumbs-up-outline" size="sm" />}
              />
              <IconButton
                icon={<NowIcon icon="thumbs-down-outline" size="sm" />}
              />
              <IconButton icon={<NowIcon icon="clone-outline" size="sm" />} />
              <IconButton
                icon={<NowIcon icon="download-outline" size="sm" />}
              />
              <button
                type="button"
                className={`inline-flex h-8 items-center gap-2 whitespace-nowrap rounded-full px-3 text-xs tracking-[-0.14px] transition-colors ${HIERARCHIES.secondary}`}
              >
                <span className="flex items-center">
                  <span className="-mr-1 size-4 rounded-full border border-white bg-green-600" />
                  <span className="-mr-1 size-4 rounded-full border border-white bg-neutral-900" />
                  <span className="size-4 rounded-full border border-white bg-blue-500" />
                </span>
                Sources and more
              </button>
            </div>
          </div>

          {/* Reserves space so AI content doesn't render under the fixed omni-bar below */}
          <div className="h-[108px] w-full shrink-0" aria-hidden="true" />
        </div>

        {/* Details */}
        <div
          className="flex min-w-0 flex-1 flex-col items-start rounded-[32px] border border-white"
          style={{
            backgroundImage:
              "linear-gradient(129.66deg, rgba(255,255,255,0) 75.62%, rgb(255,255,255) 96.76%), linear-gradient(153.69deg, rgba(248,248,248,0.15) 11.72%, rgb(248,248,248) 46.19%)",
          }}
        >
          <div className="w-full px-6 pt-6">
            <p className="text-lg tracking-[-0.18px] text-black">Details</p>
          </div>

          <div className="flex w-full items-start gap-5 p-6">
            {/* Contact + case fields */}
            <div className="flex w-[331px] shrink-0 flex-col gap-3">
              <div className="flex w-full flex-col gap-3 rounded-3xl bg-white p-5 shadow-[0px_1px_1px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]">
                <div className="flex w-full items-center gap-3">
                  <img
                    src={avatarPhoto}
                    alt="Robert Valdez"
                    className="size-10 shrink-0 rounded-full object-cover"
                  />
                  <div className="flex min-w-0 flex-1 items-start gap-3">
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <div className="flex w-full items-start gap-2">
                        <p className="text-lg tracking-[-0.18px] text-black">
                          Robert Valdez
                        </p>
                        <Pill tone="green" surface="white">
                          Verified
                        </Pill>
                      </div>
                      <p className="w-full text-xs tracking-[-0.12px] text-[#767676]">
                        Head of Operations | Alectri
                      </p>
                    </div>
                    <NowIcon icon="chevron-down-outline" size="sm" className="mt-1 shrink-0 text-neutral-700" />
                  </div>
                </div>
                <div className="flex w-full items-start">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <NowIcon icon="phone-outline" size="xs" className="text-[#2a6edc]" />
                      <p className="whitespace-nowrap text-xs tracking-[-0.12px] text-[#2a6edc]">
                        +1 444 123 4567
                      </p>
                    </div>
                    <span className="h-4 w-px bg-[#e8e7e4]" />
                    <div className="flex items-center gap-2">
                      <NowIcon icon="envelope-outline" size="xs" className="text-[#2a6edc]" />
                      <p className="whitespace-nowrap text-xs tracking-[-0.12px] text-[#2a6edc]">
                        slickrob@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 rounded-3xl bg-white p-5 shadow-[0px_1px_1px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]">
                <div className="flex w-full items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-xs tracking-[-0.12px] text-[#767676]">
                      Case - Priority 3-4 resolution
                    </p>
                    <p className="text-sm tracking-[-0.14px] text-black">
                      4h 12m Left
                    </p>
                  </div>
                  <Pill tone="yellow" surface="white">
                    At risk
                  </Pill>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-[#f0efec]">
                  <div
                    className="h-full rounded-full bg-[#8d6e00]"
                    style={{ width: "73%" }}
                  />
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 rounded-3xl bg-white p-5 shadow-[0px_1px_1px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]">
                <p className="w-full text-lg tracking-[-0.18px] text-black">
                  Case
                </p>
                <div className="flex w-full flex-col gap-2">
                  <CaseField label="Number" value="CS000001345" />
                  <CaseField label="Priority" value="Critical" />
                  <CaseField
                    label="State"
                    value="Open"
                    trailingIcons={
                      <>
                        <NowIcon icon="close-outline" size="sm" className="text-neutral-700" />
                        <NowIcon icon="caret-down-outline" size="sm" className="text-neutral-700" />
                      </>
                    }
                  />
                  <CaseField
                    label="Account"
                    value="Alectri"
                    leadingIcon={
                      <NowIcon icon="magnifying-glass-outline" size="sm" className="shrink-0 text-neutral-700" />
                    }
                    trailingIcons={
                      <NowIcon icon="circle-info-outline" size="sm" className="shrink-0 text-neutral-700" />
                    }
                  />
                  <CaseField
                    label="Contact"
                    value="Catherine Brown"
                    leadingIcon={
                      <NowIcon icon="magnifying-glass-outline" size="sm" className="shrink-0 text-neutral-700" />
                    }
                  />
                  <CaseField
                    label="Consumer"
                    value="Catherine Brown"
                    bgWhite={false}
                    leadingIcon={
                      <NowIcon icon="magnifying-glass-outline" size="sm" className="shrink-0 text-neutral-700" />
                    }
                  />
                </div>
              </div>
            </div>

            {/* Email + activity */}
            <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-3">
              <div className="flex w-full flex-col items-start gap-3 rounded-3xl bg-white p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
                <div className="relative flex w-full items-center rounded-full bg-[#f0efec] p-1.5">
                  <span
                    className="absolute top-1.5 h-8 rounded-full bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ left: emailIndicator.left, width: emailIndicator.width }}
                    aria-hidden="true"
                  />
                  {EMAIL_TABS.map((tab) => (
                    <button
                      key={tab}
                      ref={(el) => {
                        emailTabRefs.current[tab] = el;
                      }}
                      type="button"
                      onClick={() => setEmailTab(tab)}
                      className={`relative z-10 flex h-8 items-center whitespace-nowrap rounded-full px-3 text-sm tracking-[-0.14px] transition-colors ${
                        emailTab === tab
                          ? "text-black"
                          : "text-text-secondary hover:bg-white/60"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                  <div className="relative">
                    <button
                      ref={(el) => {
                        for (const tab of EMAIL_MORE_TABS) {
                          emailTabRefs.current[tab] = el;
                        }
                      }}
                      type="button"
                      onClick={() => setEmailMoreOpen((o) => !o)}
                      className={`relative z-10 flex h-8 items-center gap-1 whitespace-nowrap rounded-full px-3 text-sm tracking-[-0.14px] transition-colors ${
                        EMAIL_MORE_TABS.includes(
                          emailTab as (typeof EMAIL_MORE_TABS)[number],
                        )
                          ? "text-black"
                          : "text-text-secondary hover:bg-white/60"
                      }`}
                    >
                      More
                      <NowIcon
                        icon={
                          emailMoreOpen ? "chevron-up-outline" : "chevron-down-outline"
                        }
                        size="sm"
                      />
                    </button>
                    {emailMoreOpen && (
                      <div className="absolute right-0 top-[calc(100%+4px)] z-10 flex min-w-[160px] flex-col gap-0.5 rounded-xl bg-white p-1.5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
                        {EMAIL_MORE_TABS.map((tab) => (
                          <button
                            key={tab}
                            type="button"
                            onClick={() => {
                              setEmailTab(tab);
                              setEmailMoreOpen(false);
                            }}
                            className={`flex h-8 items-center whitespace-nowrap rounded-lg px-3 text-left text-sm tracking-[-0.14px] ${
                              emailTab === tab
                                ? "bg-neutral-50 text-black"
                                : "text-text-secondary hover:bg-neutral-50"
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex h-10 w-full items-center rounded-xl border border-neutral-400 bg-white p-3">
                  <p className="min-w-0 flex-1 truncate text-sm tracking-[-0.14px] text-text-secondary">
                    Click to write email
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col items-start gap-6 rounded-3xl bg-white p-6 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
                <PillTabs tabs={STREAM_TABS} active={streamTab} onChange={setStreamTab} />

                <div className="flex w-full flex-col gap-3">
                  <div className="flex w-full items-center justify-between">
                    <p className="text-lg tracking-[-0.18px] text-black">
                      Activity stream
                    </p>
                    <div className="flex items-center gap-2">
                      <IconButton
                        className="bg-white"
                        icon={<NowIcon icon="filter-outline" size="sm" />}
                      />
                      <IconButton
                        className="bg-white"
                        icon={<NowIcon icon="magnifying-glass-outline" size="sm" />}
                      />
                      <IconButton
                        className="bg-white"
                        icon={<NowIcon icon="sort-descending-outline" size="sm" />}
                      />
                      <IconButton
                        className="bg-white"
                        icon={<NowIcon icon="expand-outline" size="sm" />}
                      />
                    </div>
                  </div>
                  <UnderlineTabs
                    tabs={PRIORITY_TABS}
                    active={priorityTab}
                    onChange={setPriorityTab}
                  />
                </div>

                <div className="flex w-full flex-col gap-3">
                  <div className="flex w-full items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-50">
                        <NowIcon icon="envelope-arrow-outline" size="sm" className="text-[#2a6edc]" />
                      </span>
                      <p className="text-lg tracking-[-0.18px] text-black">
                        George Warren
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Pill tone="green" surface="white">
                          Customer
                        </Pill>
                        <p className="whitespace-nowrap text-xs tracking-[-0.12px] text-text-secondary">
                          1 day ago
                        </p>
                        <NowIcon icon="caret-up-outline" size="sm" className="text-neutral-700" />
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 text-sm tracking-[-0.14px] text-text-secondary">
                    <p>Hi,</p>
                    <p>&nbsp;</p>
                    <p>
                      This morning, during the spinning class, 2 of our
                      clients had issues with their Peloton bikes. It looks
                      like one of the pedals broke while they were spinning
                      which caught them by surprise and almost made them
                      fall off their bikes.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      The issue happened in our San Francisco branch on
                      Chestnut street. I cc&rsquo;d my team so they can
                      follow up with you. I want this issue solved ASAP as I
                      can&rsquo;t take risks to have the same thing happen
                      again.
                    </p>
                    <p>&nbsp;</p>
                    <p>Here is an image of the pedal FYI.</p>
                    <p>Thanks,</p>
                    <p>Uma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed to the viewport bottom (not sticky) so it never scrolls away;
          this wrapper mirrors main's own pl-[60px]/mx-auto/max-w/px-8 math
          so it lands exactly under the Otto column regardless of viewport width. */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 pl-[60px]">
        <div className="mx-auto flex w-full max-w-[1380px] px-8">
          <div className="pointer-events-auto flex w-[420px] shrink-0 flex-col items-center px-4 pb-5">
            <form
              className="flex h-16 w-full flex-col items-start rounded-full p-1 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
              style={{
                border: "1px solid transparent",
                backgroundImage:
                  "linear-gradient(var(--color-background-tertiary), var(--color-background-tertiary)), linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex w-full flex-col items-start overflow-hidden rounded-full bg-white">
                <div className="flex w-full items-center justify-between gap-3 p-2">
                  <div className="flex flex-1 items-center gap-3">
                    <button
                      type="button"
                      className="flex size-10 items-center justify-center rounded-full text-[#2e2e29] hover:bg-black/5"
                      aria-label="Add"
                    >
                      <NowIcon icon="plus-outline" size="sm" />
                    </button>
                    <input
                      value={ottoQuery}
                      onChange={(e) => setOttoQuery(e.target.value)}
                      placeholder="Ask Otto or search for anything"
                      className="w-full flex-1 bg-transparent text-base text-text-tertiary placeholder:text-text-tertiary focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    className="flex size-10 items-center justify-center rounded-full bg-accent text-[#2e2e29] hover:brightness-95"
                    aria-label="Voice input"
                  >
                    <NowIcon icon="microphone-fill" size="md" />
                  </button>
                </div>
              </div>
            </form>
            <p className="flex h-6 w-full items-center justify-center text-center text-[10px] text-text-tertiary">
              Be sure to check AI-generated content for accuracy
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
