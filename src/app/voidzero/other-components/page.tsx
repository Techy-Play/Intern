"use client";

import React, { useState } from "react";
import { VoidZeroBanner } from "@/components/voidzero/VoidZeroBanner";
import { VoidZeroNavbar } from "@/components/voidzero/VoidZeroNavbar";
import { VoidZeroOpenSource } from "@/components/voidzero/VoidZeroOpenSource";
import { VoidZeroMission } from "@/components/voidzero/VoidZeroMission";

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

      <main className="flex flex-col w-full pt-16 md:pt-0 pb-20">
        <VoidZeroOpenSource />
        <VoidZeroMission />

        <VoidZeroFeaturedResources />
      </main>
    </div>
  );
}

