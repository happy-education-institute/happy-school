/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  COMING SOON MODE — ACTIVE                              ║
 * ║                                                          ║
 * ║  To launch the actual website:                           ║
 * ║   1. Uncomment the REAL APP section below.               ║
 * ║   2. Comment-out or delete the COMING SOON section.      ║
 * ║   3. Delete the  src/coming-soon/  folder entirely.      ║
 * ╚══════════════════════════════════════════════════════════╝
 */

// ─── COMING SOON (remove this block when launching) ───────
// import ComingSoon from "./coming-soon/ComingSoon.tsx";

// const App = () => <ComingSoon />;

// export default App;
// ──────────────────────────────────────────────────────────

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Careers from "./pages/Careers.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

