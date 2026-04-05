import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MessengerButton } from "@/components/ui/MessengerButton";
import { BackToTop } from "@/components/ui/BackToTop";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import ServicesPage from "./pages/ServicesPage";
import ServiceLavage from "./pages/ServiceLavage";
import ServicePPF from "./pages/ServicePPF";
import ServicePolissage from "./pages/ServicePolissage";
import ServiceParPierre from "./pages/ServiceParPierre";
import GaleriePage from "./pages/GaleriePage";
import RendezVous from "./pages/RendezVous";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/a-propos" component={APropos} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/lavage" component={ServiceLavage} />
      <Route path="/services/ppf" component={ServicePPF} />
      <Route path="/services/polissage" component={ServicePolissage} />
      <Route path="/services/par-pierre" component={ServiceParPierre} />
      <Route path="/galerie" component={GaleriePage} />
      <Route path="/rendez-vous" component={RendezVous} />
      <Route path="/politique-de-confidentialite" component={PolitiqueConfidentialite} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
      <MessengerButton />
      <BackToTop />
    </QueryClientProvider>
  );
}

export default App;
