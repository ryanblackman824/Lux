import { useState } from "react";
import NavRail from "./components/NavRail";
import Home from "./components/Home";
import ListPage from "./components/ListPage";
import RecordPage from "./components/RecordPage";
import CasePage from "./components/CasePage";

export type Page = "home" | "list" | "record" | "case";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-neutral-200">
      <NavRail currentPage={page} onNavigate={setPage} />
      <div className="pl-[60px]">
        {page === "home" && <Home />}
        {page === "list" && <ListPage onOpenRecord={() => setPage("record")} />}
        {page === "record" && (
          <RecordPage onBack={() => setPage("list")} />
        )}
        {page === "case" && <CasePage />}
      </div>
    </div>
  );
}
