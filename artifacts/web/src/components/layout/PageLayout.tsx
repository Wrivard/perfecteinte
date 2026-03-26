import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Contact } from "../sections/Contact";

interface PageLayoutProps {
  children: React.ReactNode;
  showContact?: boolean;
}

export function PageLayout({ children, showContact = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[120px] md:pt-[120px]">
        {children}
        {showContact && <Contact />}
      </main>
      <Footer />
    </div>
  );
}
