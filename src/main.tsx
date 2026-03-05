import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";
import App from "./App.tsx";
import "./index.css";

document.documentElement.classList.remove("light");
document.documentElement.classList.add("dark");

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </HelmetProvider>
);