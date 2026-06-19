import React, { ReactNode } from 'react';

interface VoidZeroBorderProps {
  children?: ReactNode;
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
        className={`relative mx-auto w-full md:w-[calc(100%-2rem)] max-w-[1440px] ${topBorderClass} border-x-0 md:border-x ${borderColor} ${tickClass} ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
