const starPositions = [
  { top: '5%', left: '8%', delay: '-0.4s', scale: 1, opacity: 0.85 },
  { top: '7%', left: '22%', delay: '-1.6s', scale: 0.7, opacity: 0.7 },
  { top: '4%', left: '38%', delay: '-2.7s', scale: 0.9, opacity: 0.8 },
  { top: '11%', left: '52%', delay: '-3.4s', scale: 0.6, opacity: 0.6 },
  { top: '8%', left: '68%', delay: '-4.1s', scale: 1.1, opacity: 0.95 },
  { top: '6%', left: '82%', delay: '-0.9s', scale: 0.75, opacity: 0.7 },
  { top: '14%', left: '14%', delay: '-2.2s', scale: 0.55, opacity: 0.55 },
  { top: '18%', left: '28%', delay: '-5.0s', scale: 0.85, opacity: 0.78 },
  { top: '22%', left: '46%', delay: '-1.2s', scale: 0.6, opacity: 0.6 },
  { top: '20%', left: '64%', delay: '-3.8s', scale: 1, opacity: 0.85 },
  { top: '26%', left: '78%', delay: '-2.4s', scale: 0.7, opacity: 0.7 },
  { top: '32%', left: '12%', delay: '-4.6s', scale: 0.65, opacity: 0.65 },
  { top: '36%', left: '34%', delay: '-1.0s', scale: 0.9, opacity: 0.82 },
  { top: '38%', left: '58%', delay: '-3.2s', scale: 0.55, opacity: 0.55 },
  { top: '42%', left: '74%', delay: '-2.0s', scale: 1, opacity: 0.9 },
  { top: '48%', left: '20%', delay: '-4.4s', scale: 0.75, opacity: 0.7 },
  { top: '52%', left: '42%', delay: '-0.6s', scale: 0.6, opacity: 0.6 },
  { top: '56%', left: '64%', delay: '-2.8s', scale: 0.85, opacity: 0.78 },
  { top: '62%', left: '8%', delay: '-3.6s', scale: 0.7, opacity: 0.7 },
  { top: '66%', left: '32%', delay: '-1.4s', scale: 0.55, opacity: 0.55 },
  { top: '70%', left: '54%', delay: '-4.8s', scale: 0.9, opacity: 0.85 },
  { top: '74%', left: '76%', delay: '-2.6s', scale: 0.65, opacity: 0.62 },
  { top: '82%', left: '18%', delay: '-1.8s', scale: 0.8, opacity: 0.75 },
  { top: '86%', left: '40%', delay: '-3.0s', scale: 0.55, opacity: 0.55 },
  { top: '88%', left: '62%', delay: '-4.2s', scale: 0.7, opacity: 0.68 },
  { top: '92%', left: '82%', delay: '-0.5s', scale: 0.85, opacity: 0.8 },
];

const cloudbanks = [
  { className: 'site-atmosphere-cloudbank-one', top: '7%', side: 'right', sideValue: '18%', width: '16rem' },
  { className: 'site-atmosphere-cloudbank-two', top: '12%', side: 'left', sideValue: '4.5%', width: '12.5rem' },
  { className: 'site-atmosphere-cloudbank-three', top: '18%', side: 'right', sideValue: '35%', width: '11rem' },
  { className: 'site-atmosphere-cloudbank-four', top: '5%', side: 'right', sideValue: '2%', width: '9rem' },
  { className: 'site-atmosphere-cloudbank-five', top: '32%', side: 'left', sideValue: '12%', width: '14rem' },
  { className: 'site-atmosphere-cloudbank-six', top: '44%', side: 'right', sideValue: '8%', width: '13rem' },
  { className: 'site-atmosphere-cloudbank-seven', top: '56%', side: 'left', sideValue: '28%', width: '11rem' },
  { className: 'site-atmosphere-cloudbank-eight', top: '68%', side: 'right', sideValue: '22%', width: '15rem' },
  { className: 'site-atmosphere-cloudbank-nine', top: '78%', side: 'left', sideValue: '6%', width: '12rem' },
  { className: 'site-atmosphere-cloudbank-ten', top: '88%', side: 'right', sideValue: '14%', width: '13.5rem' },
];

const omGlyphs = [
  { top: '6%', left: '6%', size: '7rem', rotate: '-8deg', delay: '-1s' },
  { top: '12%', left: '78%', size: '5.5rem', rotate: '6deg', delay: '-3s' },
  { top: '28%', left: '34%', size: '9rem', rotate: '-3deg', delay: '-5s' },
  { top: '38%', left: '70%', size: '6rem', rotate: '12deg', delay: '-2s' },
  { top: '52%', left: '12%', size: '7.5rem', rotate: '-10deg', delay: '-4s' },
  { top: '60%', left: '52%', size: '6.5rem', rotate: '4deg', delay: '-6s' },
  { top: '74%', left: '24%', size: '8rem', rotate: '-6deg', delay: '-1.5s' },
  { top: '82%', left: '64%', size: '7rem', rotate: '8deg', delay: '-3.5s' },
  { top: '92%', left: '38%', size: '5.5rem', rotate: '-4deg', delay: '-5.5s' },
];

export function SiteAtmosphere() {
  return (
    <div className="site-atmosphere" aria-hidden="true">
      <div className="site-atmosphere-celestial">
        <div className="site-atmosphere-glow" />
        <div className="site-atmosphere-aura site-atmosphere-aura-one" />
        <div className="site-atmosphere-aura site-atmosphere-aura-two" />

        <div className="site-atmosphere-moon-cluster">
          <div className="site-atmosphere-moon-halo" />
          <div className="site-atmosphere-moon-ring" />
          <div className="site-atmosphere-moon">
            <span className="site-atmosphere-moon-crater site-atmosphere-moon-crater-one" />
            <span className="site-atmosphere-moon-crater site-atmosphere-moon-crater-two" />
            <span className="site-atmosphere-moon-crater site-atmosphere-moon-crater-three" />
          </div>
        </div>

        {cloudbanks.map((bank) => (
          <div
            key={bank.className}
            className={`site-atmosphere-cloudbank ${bank.className}`}
            style={{ top: bank.top, [bank.side]: bank.sideValue, width: bank.width } as React.CSSProperties}
          >
            <span className="site-atmosphere-cloud-lobe site-atmosphere-cloud-lobe-one" />
            <span className="site-atmosphere-cloud-lobe site-atmosphere-cloud-lobe-two" />
            <span className="site-atmosphere-cloud-lobe site-atmosphere-cloud-lobe-three" />
          </div>
        ))}

        {starPositions.map((star, i) => (
          <span
            key={`star-${i}`}
            className="site-atmosphere-star"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              transform: `scale(${star.scale})`,
              opacity: star.opacity,
            }}
          />
        ))}

        <span className="site-atmosphere-shooting site-atmosphere-shooting-one" />
        <span className="site-atmosphere-shooting site-atmosphere-shooting-two" />
        <span className="site-atmosphere-shooting site-atmosphere-shooting-three" />
      </div>

      <div className="site-atmosphere-sacred">
        {omGlyphs.map((glyph, i) => (
          <span
            key={`om-${i}`}
            className="site-atmosphere-om"
            style={{
              top: glyph.top,
              left: glyph.left,
              fontSize: glyph.size,
              transform: `rotate(${glyph.rotate})`,
              animationDelay: glyph.delay,
            }}
          >
            ॐ
          </span>
        ))}
        <div className="site-atmosphere-paper-grain" />
      </div>
    </div>
  );
}
