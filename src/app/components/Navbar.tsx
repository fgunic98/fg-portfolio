import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "hero" },
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "About", href: "about" },
  { name: "CV", href: "cv" },
  { name: "Contact", href: "contact" },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const offset = 100; // navbar height

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    const elements = navLinks
      .map((l) => document.getElementById(l.href))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0e1a]/80 backdrop-blur-xl border-b border-[#00d4ff]/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection("hero")}
              // className="text-xl font-bold bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent"
              className="text-xl font-bold bg-[linear-gradient(115deg,#f5f5f5_0%,#e0e0e0_15%,#bdbdbd_30%,#f0f0f0_45%,#a8a8a8_60%,#e8e8e8_75%,#cfcfcf_90%,#f5f5f5_100%)] bg-clip-text text-transparent"
            >
              FG
            </motion.button>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => scrollToSection(link.href)} className="relative group">
                  <span
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      activeSection === link.href ? "text-[#00d4ff]" : "text-[#94a3b8] hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>

                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00d4ff] shadow-lg shadow-[#00d4ff]/50"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#00d4ff] hover:bg-[#00d4ff]/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] right-0 bottom-0 w-64 bg-[#0a0e1a]/95 backdrop-blur-xl border-l border-[#00d4ff]/20 z-40 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === link.href
                      ? "bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30"
                      : "text-[#94a3b8] hover:bg-[#00d4ff]/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};
