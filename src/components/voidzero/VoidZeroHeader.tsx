'use client';

import React from 'react';
import { VoidZeroBanner } from './VoidZeroBanner';
import { VoidZeroNavbar } from './VoidZeroNavbar';

export function VoidZeroHeader() {
  const [showBanner, setShowBanner] = React.useState(true);

  return (
    <header className={`w-full flex flex-col relative z-50 ${showBanner ? 'lg:pt-10' : ''}`}>
      <VoidZeroBanner showBanner={showBanner} setShowBanner={setShowBanner} />
      <VoidZeroNavbar />
    </header>
  );
}
