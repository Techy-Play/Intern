"use client";

import React, { useState } from "react";
import { VoidZeroBanner } from "@/components/voidzero/VoidZeroBanner";
import { VoidZeroNavbar } from "@/components/voidzero/VoidZeroNavbar";
import { VoidZeroTrustedTeams } from "@/components/voidzero/VoidZeroTrustedTeams";
import { VoidZeroOpenSource } from "@/components/voidzero/VoidZeroOpenSource";
import { VoidZeroDeveloperStats } from "@/components/voidzero/VoidZeroDeveloperStats";
import { VoidZeroMission } from "@/components/voidzero/VoidZeroMission";
import { VoidZeroInvestors } from "@/components/voidzero/VoidZeroInvestors";
import { VoidZeroFeaturedResources } from "@/components/voidzero/VoidZeroFeaturedResources";

function VoidZeroHeaderWrapper() {
  const [showBanner, setShowBanner] = useState(true);
  
  return (
    <>
      <VoidZeroBanner showBanner={showBanner} setShowBanner={setShowBanner} />
      <VoidZeroNavbar />
    </>
  );
}

export default function VoidZeroOtherComponentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-primary selection:bg-electric selection:text-white">
      <VoidZeroHeaderWrapper />
      
      <main className="flex flex-col w-full pt-16 md:pt-24 pb-20">
        <VoidZeroTrustedTeams />
        <VoidZeroOpenSource />
        <VoidZeroDeveloperStats />
        <VoidZeroMission />
        <VoidZeroInvestors />
        <VoidZeroFeaturedResources />
      </main>
    </div>
  );
}

