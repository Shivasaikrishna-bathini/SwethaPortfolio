export default function FloatingCogs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ opacity: 0.12 }}>
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Large gear with 16 teeth */}
          <g id="gear-large">
            <circle cx="60" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/50"/>
            <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/50"/>
            <circle cx="60" cy="60" r="12" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-orange-500/50"/>
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5 * Math.PI) / 180;
              const x1 = 60 + 45 * Math.cos(angle);
              const y1 = 60 + 45 * Math.sin(angle);
              const x2 = 60 + 55 * Math.cos(angle);
              const y2 = 60 + 55 * Math.sin(angle);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="4" className="text-orange-500/50"/>
              );
            })}
            {[0, 90, 180, 270].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 60 + 12 * Math.cos(rad);
              const y1 = 60 + 12 * Math.sin(rad);
              const x2 = 60 + 30 * Math.cos(rad);
              const y2 = 60 + 30 * Math.sin(rad);
              return (
                <line key={`spoke-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.5" className="text-orange-500/50"/>
              );
            })}
          </g>

          {/* Medium gear with 12 teeth */}
          <g id="gear-medium">
            <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/50"/>
            <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/50"/>
            <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/50"/>
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = 40 + 30 * Math.cos(angle);
              const y1 = 40 + 30 * Math.sin(angle);
              const x2 = 40 + 38 * Math.cos(angle);
              const y2 = 40 + 38 * Math.sin(angle);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="3.5" className="text-orange-500/50"/>
              );
            })}
            {[0, 120, 240].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 40 + 8 * Math.cos(rad);
              const y1 = 40 + 8 * Math.sin(rad);
              const x2 = 40 + 20 * Math.cos(rad);
              const y2 = 40 + 20 * Math.sin(rad);
              return (
                <line key={`spoke-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" className="text-orange-500/50"/>
              );
            })}
          </g>

          {/* Small gear with 8 teeth */}
          <g id="gear-small">
            <circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-500/50"/>
            <circle cx="30" cy="30" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-500/50"/>
            <circle cx="30" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/50"/>
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x1 = 30 + 20 * Math.cos(angle);
              const y1 = 30 + 20 * Math.sin(angle);
              const x2 = 30 + 26 * Math.cos(angle);
              const y2 = 30 + 26 * Math.sin(angle);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="3" className="text-orange-500/50"/>
              );
            })}
          </g>

          {/* Tiny gear with 6 teeth */}
          <g id="gear-tiny">
            <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-500/50"/>
            <circle cx="20" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-500/50"/>
            {[...Array(6)].map((_, i) => {
              const angle = (i * 60 * Math.PI) / 180;
              const x1 = 20 + 12 * Math.cos(angle);
              const y1 = 20 + 12 * Math.sin(angle);
              const x2 = 20 + 16 * Math.cos(angle);
              const y2 = 20 + 16 * Math.sin(angle);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.5" className="text-orange-500/50"/>
              );
            })}
          </g>
        </defs>
        
        {/* Gear mechanism cluster 1 - Top left */}
        <g transform="translate(8%, 10%)">
          <use href="#gear-large" className="animate-spin-slow" style={{ animationDuration: '40s', transformOrigin: '60px 60px' }} />
          <use href="#gear-medium" x="85" y="25" className="animate-spin-reverse" style={{ animationDuration: '30s', transformOrigin: '125px 65px' }} />
          <use href="#gear-small" x="130" y="-15" className="animate-spin-slow" style={{ animationDuration: '20s', transformOrigin: '160px 15px' }} />
        </g>

        {/* Gear mechanism cluster 2 - Top right */}
        <g transform="translate(75%, 8%)">
          <use href="#gear-medium" className="animate-spin-reverse" style={{ animationDuration: '35s', transformOrigin: '40px 40px' }} />
          <use href="#gear-small" x="60" y="15" className="animate-spin-slow" style={{ animationDuration: '22s', transformOrigin: '90px 45px' }} />
          <use href="#gear-tiny" x="88" y="-8" className="animate-spin-reverse" style={{ animationDuration: '15s', transformOrigin: '108px 12px' }} />
        </g>

        {/* Gear mechanism cluster 3 - Middle left */}
        <g transform="translate(5%, 45%)">
          <use href="#gear-medium" className="animate-spin-slow" style={{ animationDuration: '32s', transformOrigin: '40px 40px' }} />
          <use href="#gear-small" x="58" y="20" className="animate-spin-reverse" style={{ animationDuration: '20s', transformOrigin: '88px 50px' }} />
          <use href="#gear-tiny" x="82" y="35" className="animate-spin-slow" style={{ animationDuration: '16s', transformOrigin: '102px 55px' }} />
        </g>

        {/* Gear mechanism cluster 4 - Middle right */}
        <g transform="translate(78%, 48%)">
          <use href="#gear-large" className="animate-spin-reverse" style={{ animationDuration: '45s', transformOrigin: '60px 60px' }} />
          <use href="#gear-medium" x="-55" y="25" className="animate-spin-slow" style={{ animationDuration: '28s', transformOrigin: '-15px 65px' }} />
        </g>

        {/* Gear mechanism cluster 5 - Bottom left */}
        <g transform="translate(12%, 78%)">
          <use href="#gear-small" className="animate-spin-reverse" style={{ animationDuration: '24s', transformOrigin: '30px 30px' }} />
          <use href="#gear-tiny" x="42" y="10" className="animate-spin-slow" style={{ animationDuration: '18s', transformOrigin: '62px 30px' }} />
          <use href="#gear-tiny" x="62" y="-5" className="animate-spin-reverse" style={{ animationDuration: '14s', transformOrigin: '82px 15px' }} />
        </g>

        {/* Gear mechanism cluster 6 - Bottom center */}
        <g transform="translate(45%, 82%)">
          <use href="#gear-medium" className="animate-spin-slow" style={{ animationDuration: '36s', transformOrigin: '40px 40px' }} />
          <use href="#gear-small" x="-48" y="15" className="animate-spin-reverse" style={{ animationDuration: '22s', transformOrigin: '-18px 45px' }} />
          <use href="#gear-small" x="58" y="20" className="animate-spin-reverse" style={{ animationDuration: '26s', transformOrigin: '88px 50px' }} />
        </g>

        {/* Gear mechanism cluster 7 - Bottom right */}
        <g transform="translate(70%, 85%)">
          <use href="#gear-small" className="animate-spin-slow" style={{ animationDuration: '28s', transformOrigin: '30px 30px' }} />
          <use href="#gear-tiny" x="42" y="12" className="animate-spin-reverse" style={{ animationDuration: '16s', transformOrigin: '62px 32px' }} />
        </g>

        {/* Floating individual gears */}
        <use href="#gear-tiny" x="35%" y="25%" className="animate-spin-reverse" style={{ animationDuration: '20s', transformOrigin: '20px 20px' }} />
        <use href="#gear-small" x="55%" y="35%" className="animate-spin-slow" style={{ animationDuration: '30s', transformOrigin: '30px 30px' }} />
        <use href="#gear-tiny" x="25%" y="62%" className="animate-spin-slow" style={{ animationDuration: '18s', transformOrigin: '20px 20px' }} />
      </svg>
    </div>
  );
}
