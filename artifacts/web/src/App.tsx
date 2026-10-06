import { Switch, Route, Redirect, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MessengerButton } from "@/components/ui/MessengerButton";
import { BackToTop } from "@/components/ui/BackToTop";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import ServicesPage from "./pages/ServicesPage";
import { ServiceDetails } from "./pages/ServiceDetails";
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
      <Route path="/services/ppf">{() => <ServiceDetails service="ppf" />}</Route>
      <Route path="/services/vitres-teintees">{() => <ServiceDetails service="tint" />}</Route>
      <Route path="/services/lavage"><Redirect to="/services" /></Route>
      <Route path="/services/scellant"><Redirect to="/services/vitres-teintees" /></Route>
      <Route path="/services/nano-ceramique"><Redirect to="/services/ppf" /></Route>
      <Route path="/galerie" component={GaleriePage} />
      <Route path="/rendez-vous" component={RendezVous} />
      <Route path="/politique-de-confidentialite" component={PolitiqueConfidentialite} />
      <Route component={NotFound} />
    </Switch>
  );
}

interface AppProps {
  ssrPath?: string;
}

function App({ ssrPath }: AppProps = {}) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")} ssrPath={ssrPath}>
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
