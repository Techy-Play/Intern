"use client";

import "./spade.css";
import SpadeHeader from "@/components/spade/SpadeHeader";
import HeroSection from "@/components/spade/HeroSection";
import LogoCloud from "@/components/spade/LogoCloud";
import ScrollReveal from "@/components/spade/ScrollReveal";
import RiskAuth from "@/components/spade/RiskAuth";
import RewardsSection from "@/components/spade/RewardsSection";
import AnalyticsAI from "@/components/spade/AnalyticsAI";
import UserExperience from "@/components/spade/UserExperience";
import IndustrySection from "@/components/spade/IndustrySection";
import Testimonials from "@/components/spade/Testimonials";
import DeveloperSection from "@/components/spade/DeveloperSection";
import SpadeFooter from "@/components/spade/SpadeFooter";

export default function SpadePage() {
  return (
    <div className="spade-page">
      <SpadeHeader />
      <main>
        <HeroSection />
        <LogoCloud />
        <ScrollReveal />
        <RiskAuth />
        <RewardsSection />
        <AnalyticsAI />
        <UserExperience />
        <IndustrySection />
        <Testimonials />
        <DeveloperSection />
      </main>
      <SpadeFooter />
    </div>
  );
}
