import { useState } from "react";
import NowIcon from "./NowIcon";
import SparkleIcon from "./SparkleIcon";

export default function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className="flex w-full flex-col items-center pl-2.5 pt-6">
      <div className="flex w-full justify-end">
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-lg bg-[#f9f8f6] hover:bg-white"
          aria-label="Edit"
        >
          <NowIcon icon="pencil-outline" size="sm" className="text-[#535353]" />
        </button>
      </div>

      <div className="flex w-full flex-col items-center justify-center px-2.5 pb-[50px]">
        <div className="flex w-full max-w-[789px] flex-col items-center gap-1.5 p-2.5">
          <div className="flex w-full items-start justify-between pb-3 pl-2.5 pr-2.5">
            <div className="flex flex-1 items-center justify-end pt-[3px]">
              <SparkleIcon className="size-8 text-[#68e353]" />
            </div>
            <div className="flex flex-1 min-w-[440px] items-center justify-center pl-2.5">
              <p className="text-[28px] tracking-[-0.28px] text-[#2e2e29]">
                Let&rsquo;s get started on your day, Alex
              </p>
            </div>
          </div>

          <form
            className="flex w-full max-w-[768px] flex-col items-start rounded-full border border-white bg-[#edece9] p-1 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
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
                    <NowIcon icon="plus-outline" size="md" />
                  </button>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask Otto anything or search"
                    className="w-full flex-1 bg-transparent text-base text-[#656462] placeholder:text-[#656462] focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  className="flex size-10 items-center justify-center rounded-full bg-[#68e353] px-3 text-[#2e2e29] hover:brightness-95"
                  aria-label="Voice input"
                >
                  <NowIcon icon="microphone-fill" size="md" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
