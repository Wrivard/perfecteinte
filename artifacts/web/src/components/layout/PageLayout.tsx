import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Partners } from "../sections/Partners";
import { Contact } from "../sections/Contact";

interface PageLayoutProps {
  children: React.ReactNode;
  showContact?: boolean;
  showPartners?: boolean;
}

export function PageLayout({ children, showContact = true, showPartners = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[120px] md:pt-[120px]">
        {children}
        {showPartners && <Partners />}
        {showContact && <Contact />}
      </main>
      <Footer />
    </div>
  );
}
