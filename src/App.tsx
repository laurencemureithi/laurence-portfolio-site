import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { SelectedWork } from './components/SelectedWork';
import { OperationsCaseStudies } from './components/OperationsCaseStudies';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
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

  // Apply theme attributes and classes to html and body
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);

    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'work', 'operations', 'pricing', 'process', 'faq', 'contact'];
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
    <div className="min-h-screen architectural-grid transition-colors duration-300">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onStartProject={() => scrollToContact()}
      />

      <main>
        <Hero
          onExploreWork={scrollToWork}
          onStartProject={() => scrollToContact()}
        />

        <About />

        <Services
          onSelectService={(serviceTitle, startingPrice) =>
            scrollToContact(serviceTitle, startingPrice)
          }
        />

        <SelectedWork />

        <OperationsCaseStudies
          onDiscussOperations={(savings) =>
            scrollToContact('Operations & Reporting Audit', `Est. Annual Impact: ${savings}`)
          }
        />

        <Pricing
          onSelectPackage={(pkgName, price) => scrollToContact(pkgName, price)}
          onRequestCustomQuote={() => scrollToContact('Custom Multi-Disciplinary Scope')}
        />

        <Process />

        <WhyWorkWithMe onStartProject={() => scrollToContact()} />

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
