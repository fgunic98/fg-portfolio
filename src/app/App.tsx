
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { DownloadCVSection } from './components/DownloadCVSection';
import { ContactSection } from './components/ContactSection';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  return (
    <div className="dark min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <DownloadCVSection />
      <ContactSection />
    </div>
  );
}