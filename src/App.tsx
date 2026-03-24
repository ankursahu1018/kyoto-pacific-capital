import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Company from "@/pages/Company";
import Founder from "./pages/Founder";
import Experience from "./pages/Experience";
import Strategy from "./pages/Strategy";
import Investments from "./pages/Investments";
import Contact from "./pages/Contact";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Disclaimer from "./pages/legal/Disclaimer";
import UniversalStudiosJapan from "./pages/case-studies/UniversalStudiosJapan";
import ReNewPower from "./pages/case-studies/ReNewPower";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ankur-sahu" element={<Founder />} />
          <Route path="/founder" element={<Navigate to="/ankur-sahu" replace />} />
          <Route path="/bio" element={<Navigate to="/ankur-sahu" replace />} />
          <Route path="/company" element={<Company />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/investment-experience" element={<Experience />} />
          <Route path="/case-studies/usj" element={<UniversalStudiosJapan />} />
          <Route path="/case-studies/renew" element={<ReNewPower />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
