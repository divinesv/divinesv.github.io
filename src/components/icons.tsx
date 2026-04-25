import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

function IconWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={`icon-svg${className ? ` ${className}` : ''}`} aria-hidden="true">{children}</span>;
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" role="img">
        <polyline points="15 6 9 12 15 18" />
      </svg>
    </IconWrapper>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" role="img">
        <polyline points="9 6 15 12 9 18" />
      </svg>
    </IconWrapper>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" role="img">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </IconWrapper>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" role="img">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="13 6 19 12 13 18" />
      </svg>
    </IconWrapper>
  );
}
