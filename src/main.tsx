import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if (typeof window !== "undefined") {
  const hostname = window.location.hostname;
  if (hostname === "khelo24admin.live") {
    window.location.href = `https://www.khelo24admin.live${window.location.pathname}${window.location.search}${window.location.hash}`;
  }
}

createRoot(document.getElementById("root")!).render(<App />);
