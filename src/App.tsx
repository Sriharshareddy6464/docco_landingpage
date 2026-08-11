import React from 'react';
import { HeroSection } from './components/HeroSection';
import { WhatIsDoccoSection } from './components/WhatIsDoccoSection';
import { ProductInActionSection } from './components/ProductInActionSection';
import { MyRoleSection } from './components/MyRoleSection';
import { SystemArchitectureSection } from './components/SystemArchitectureSection';
import { AwsArchitectureSection } from './components/AwsArchitectureSection';
import { FlowsSection } from './components/FlowsSection';
import { EngineeringWorkSection } from './components/EngineeringWorkSection';
import { EvolutionSection } from './components/EvolutionSection';
import { GallerySection } from './components/GallerySection';
import { TechnicalDeepDiveSection } from './components/TechnicalDeepDiveSection';
import { ContactFooterSection } from './components/ContactFooterSection';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E0E0E0] font-sans antialiased selection:bg-[#FF9900] selection:text-black">
      {/* SECTION 01: HERO */}
      <HeroSection
        onWatchClick={() => scrollToSection('demo')}
        onExploreArchitectureClick={() => scrollToSection('architecture')}
      />

      {/* SECTION 02: WHAT IS DOCCO? */}
      <WhatIsDoccoSection />

      {/* SECTION 03: THE PRODUCT IN ACTION */}
      <ProductInActionSection />

      {/* SECTION 04: MY ROLE */}
      <MyRoleSection />

      {/* SECTION 05: HOW THE SYSTEM WORKS */}
      <SystemArchitectureSection />

      {/* SECTION 06: AWS ARCHITECTURE */}
      <AwsArchitectureSection />

      {/* SECTION 07: USER / DATA / VIDEO FLOWS */}
      <FlowsSection />

      {/* SECTION 08: ENGINEERING WORK */}
      <EngineeringWorkSection />

      {/* SECTION 09: PROGRESS / EVOLUTION */}
      <EvolutionSection />

      {/* SECTION 10: GALLERY */}
      <GallerySection />

      {/* SECTION 11: TECHNICAL DEEP DIVE */}
      <TechnicalDeepDiveSection />

      {/* SECTION 12: LINKS / CONTACT & FOOTER */}
      <ContactFooterSection />
    </div>
  );
}
