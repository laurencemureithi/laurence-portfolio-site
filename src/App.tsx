import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { TrustApproach } from './components/TrustApproach';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  const [activeSection, setActiveSection] = useState<string>('');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');
  const [selectedBudgetForContact, setSelectedBudgetForContact] = useState<string>('');

  // Apply theme class to body
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      document.body.classList.remove('bg-[#0b0f17]', 'text-[#e2e8f0]');
      document.body.classList.add('bg-[#fafafa]', 'text-[#09090b]');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.remove('bg-[#fafafa]', 'text-[#09090b]');
      document.body.classList.add('bg-[#0b0f17]', 'text-[#e2e8f0]');
      localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'services', 'about', 'pricing', 'process', 'faq', 'contact'];
      const scrollPos = window.scrollY + 240;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const scrollToContact = (service?: string, budget?: string) => {
    if (service) setSelectedServiceForContact(service);
    if (budget) setSelectedBudgetForContact(budget);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen subtle-grid transition-colors duration-300">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onDiscussProject={() => scrollToContact()}
      />

      <main>
        <Hero
          onViewWork={scrollToWork}
          onDiscussProject={() => scrollToContact()}
        />

        <SelectedWork />

        <Services
          onSelectService={(serviceTitle) => scrollToContact(serviceTitle)}
        />

        <About />

        <Pricing
          onSelectPackage={(pkgName, price) => scrollToContact(pkgName, price)}
          onCustomProject={() => scrollToContact('Custom Project Scope')}
        />

        <Process />

        <TrustApproach />

        <FAQ />

        <Contact
          initialService={selectedServiceForContact}
          initialBudget={selectedBudgetForContact}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
