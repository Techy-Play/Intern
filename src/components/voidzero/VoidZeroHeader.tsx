'use client';

import React from 'react';
import { VoidZeroBanner } from './VoidZeroBanner';
import { VoidZeroNavbar } from './VoidZeroNavbar';

export function VoidZeroHeader() {
  const [showBanner, setShowBanner] = React.useState(true);

  return (
    <header>
      <VoidZeroNavbar />
    </header>
  );
}
