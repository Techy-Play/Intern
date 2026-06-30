import React, { ReactNode, useId } from 'react';

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
  /**
   * The size of the border ticks in pixels (default: 4)
   */
  tickSize?: number;
}

export function VoidZeroBorder({
  children,
  theme = 'dark',
  className = '',
  containerClassName = '',
  showTopBorder = true,
  tickSize = 5
}: VoidZeroBorderProps) {
  const isDark = theme === 'dark';
  const id = useId().replace(/:/g, '');

  // Automatically select the correct tick marker class and border colors
  let tickClass = showTopBorder ? (isDark ? 'ticks' : 'ticks-light') : '';
  const isCustomTickSize = showTopBorder && tickSize !== 4;

  if (isCustomTickSize) {
    tickClass += ` custom-ticks-${id}`;
  }

  const borderColor = isDark ? 'border-nickel' : 'border-stroke';
  const topBorderClass = showTopBorder ? `border-t ${borderColor}` : '';

  return (
    <section className={`w-full ${className}`}>
      {isCustomTickSize && (
        <style dangerouslySetInnerHTML={{
          __html: `
            .custom-ticks-${id}::before,
            .custom-ticks-${id}::after {
              top: -${tickSize + 0.5}px !important;
              border-top-width: ${tickSize}px !important;
              border-bottom-width: ${tickSize}px !important;
            }
            .custom-ticks-${id}::before { border-left-width: ${tickSize}px !important; }
            .custom-ticks-${id}::after { border-right-width: ${tickSize}px !important; }
          `
        }} />
      )}
      <div
        className={`relative mx-auto w-full md:w-[calc(100%-3.75rem)] max-w-[1440px] ${topBorderClass} border-x-0 md:border-x ${borderColor} ${tickClass} ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
