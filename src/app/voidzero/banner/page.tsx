'use client';

import React, { useState } from 'react';
import { VoidZeroBanner } from '@/components/voidzero/VoidZeroBanner';

export default function BannerPage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <VoidZeroBanner showBanner={showBanner} setShowBanner={setShowBanner} />
      
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center font-sans">
        <h1 className="text-4xl font-bold text-[#08060d] mb-4 font-apk tracking-tight">Task 3: VoidZero Banner</h1>
        <p className="text-lg text-gray-500 mb-8">This route is dedicated to testing the Task 3 hero banner.</p>
        
        {!showBanner && (
          <button 
            onClick={() => setShowBanner(true)}
            className="px-6 py-2 bg-[#08060d] text-white rounded font-medium hover:bg-gray-800 transition-colors"
          >
            Show Banner Again
          </button>
        )}
      </div>
    </div>
  );
}
