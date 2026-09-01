import { useState } from "react";
import NowIcon from "./NowIcon";
import SparkleIcon from "./SparkleIcon";
import pencilIcon from "../assets/pencil.svg";
import plusIcon from "../assets/plus.svg";

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
          <img src={pencilIcon} alt="" className="size-4" />
        </button>
      </div>

      <div className="flex w-full flex-col items-center justify-center px-2.5 pb-[50px]">
        <div className="flex w-full flex-col items-center gap-[34px]">
          <div className="flex items-center justify-center gap-3">
            <SparkleIcon className="size-8 shrink-0 text-accent" />
            <p className="text-[64px] tracking-[-1.28px] text-neutral">
              Let&rsquo;s get started on your day, Alex
            </p>
          </div>

          <form
            className="flex w-full max-w-[768px] flex-col items-start rounded-full p-1 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
            style={{
              border: "1px solid transparent",
              backgroundImage:
                "linear-gradient(var(--color-bg-tertiary), var(--color-bg-tertiary)), linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 100%)",
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
                    <img src={plusIcon} alt="" className="size-4" />
                  </button>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask Otto anything or search"
                    className="w-full flex-1 bg-transparent text-base text-text-tertiary placeholder:text-text-tertiary focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  className="flex size-10 items-center justify-center rounded-full bg-accent px-3 text-[#2e2e29] hover:brightness-95"
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
