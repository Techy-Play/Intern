import React, { ReactNode } from 'react';

interface VoidZeroBorderProps {
  children: ReactNode;
  /**
   * The theme controls the border color and the tick color.
   * 'dark' uses nickel (#3b3440)
   * 'light' uses stroke/gray (#e5e4e7)
   */
  theme?: 'dark' | 'light';
  /**
   * Class applied to the outer full-width section element
   */
  className?: string;
  /**
   * Class applied to the inner constrained container
   */
  containerClassName?: string;
  /**
   * Whether to include the top border and ticks (default: true)
   */
  showTopBorder?: boolean;
}

export function VoidZeroBorder({ 
  children, 
  theme = 'dark', 
  className = '', 
  containerClassName = '',
  showTopBorder = true
}: VoidZeroBorderProps) {
  const isDark = theme === 'dark';
  
  // Automatically select the correct tick marker class and border colors
  const tickClass = showTopBorder ? (isDark ? 'ticks' : 'ticks-light') : '';
  const borderColor = isDark ? 'border-[#3b3440]' : 'border-[#e5e4e7]';
  const topBorderClass = showTopBorder ? `border-t ${borderColor}` : '';

  return (
    <section className={`w-full ${className}`}>
      <div 
        className={`relative mx-auto w-full ${topBorderClass} border-x-0 md:border-x ${borderColor} ${tickClass} ${containerClassName}`}
        style={{
          // Matches the vz-wrapper behavior: max 1440px, with 1rem margin on each side for md screens
          maxWidth: 'min(1440px, calc(100vw - 2rem))'
        }}
      >
        {children}
      </div>
    </section>
  );
}
