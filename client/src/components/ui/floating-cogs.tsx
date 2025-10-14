export default function FloatingCogs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ opacity: 0.15 }}>
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gear 1: Classic toothed gear with center circle */}
          <g id="gear1">
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/40"/>
            <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/40"/>
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = 50 + 15 * Math.cos(angle);
              const y1 = 50 + 15 * Math.sin(angle);
              const x2 = 50 + 22 * Math.cos(angle);
              const y2 = 50 + 22 * Math.sin(angle);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="3" className="text-orange-500/40"/>
              );
            })}
          </g>

          {/* Gear 2: Gear with internal circles pattern */}
          <g id="gear2">
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/40"/>
            <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/40"/>
            <circle cx="50" cy="35" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-500/40"/>
            <circle cx="63" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-500/40"/>
            <circle cx="50" cy="65" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-500/40"/>
            <circle cx="37" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-500/40"/>
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5 * Math.PI) / 180;
              const x1 = 50 + 20 * Math.cos(angle);
              const y1 = 50 + 20 * Math.sin(angle);
              const x2 = 50 + 26 * Math.cos(angle);
              const y2 = 50 + 26 * Math.sin(angle);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.5" className="text-orange-500/40"/>
              );
            })}
          </g>

          {/* Gear 3: Gear with spokes/wedges */}
          <g id="gear3">
            <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/40"/>
            <circle cx="50" cy="50" r="7" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/40"/>
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 50 + 7 * Math.cos(rad);
              const y1 = 50 + 7 * Math.sin(rad);
              const x2 = 50 + 18 * Math.cos(rad);
              const y2 = 50 + 18 * Math.sin(rad);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" className="text-orange-500/40"/>
              );
            })}
            {[...Array(10)].map((_, i) => {
              const angle = (i * 36 * Math.PI) / 180;
              const x1 = 50 + 18 * Math.cos(angle);
              const y1 = 50 + 18 * Math.sin(angle);
              const x2 = 50 + 24 * Math.cos(angle);
              const y2 = 50 + 24 * Math.sin(angle);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="3" className="text-orange-500/40"/>
              );
            })}
          </g>

          {/* Gear 4: Cross/plus shaped gear */}
          <g id="gear4">
            <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/40"/>
            <rect x="44" y="28" width="12" height="44" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/40"/>
            <rect x="28" y="44" width="44" height="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/40"/>
            {[0, 90, 180, 270].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 50 + 20 * Math.cos(rad);
              const y1 = 50 + 20 * Math.sin(rad);
              const x2 = 50 + 26 * Math.cos(rad);
              const y2 = 50 + 26 * Math.sin(rad);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="4" className="text-orange-500/40"/>
              );
            })}
          </g>

          {/* Gear 5: Small simple gear */}
          <g id="gear5">
            <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-500/40"/>
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x1 = 50 + 8 * Math.cos(angle);
              const y1 = 50 + 8 * Math.sin(angle);
              const x2 = 50 + 12 * Math.cos(angle);
              const y2 = 50 + 12 * Math.sin(angle);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" className="text-orange-500/40"/>
              );
            })}
          </g>
        </defs>
        
        {/* Scatter different gears across the screen with slow rotation */}
        <use href="#gear1" x="5%" y="8%" className="animate-spin-slow" style={{ animationDuration: '80s', transformOrigin: '50px 50px' }} />
        <use href="#gear2" x="75%" y="12%" className="animate-spin-reverse" style={{ animationDuration: '100s', transformOrigin: '50px 50px' }} />
        <use href="#gear3" x="15%" y="40%" className="animate-spin-slow" style={{ animationDuration: '90s', transformOrigin: '50px 50px' }} />
        <use href="#gear1" x="85%" y="35%" className="animate-spin-reverse" style={{ animationDuration: '95s', transformOrigin: '50px 50px' }} />
        <use href="#gear4" x="45%" y="20%" className="animate-spin-slow" style={{ animationDuration: '75s', transformOrigin: '50px 50px' }} />
        <use href="#gear2" x="60%" y="55%" className="animate-spin-reverse" style={{ animationDuration: '85s', transformOrigin: '50px 50px' }} />
        <use href="#gear5" x="25%" y="70%" className="animate-spin-slow" style={{ animationDuration: '60s', transformOrigin: '50px 50px' }} />
        <use href="#gear3" x="88%" y="68%" className="animate-spin-reverse" style={{ animationDuration: '110s', transformOrigin: '50px 50px' }} />
        <use href="#gear1" x="50%" y="82%" className="animate-spin-slow" style={{ animationDuration: '70s', transformOrigin: '50px 50px' }} />
        <use href="#gear4" x="10%" y="92%" className="animate-spin-reverse" style={{ animationDuration: '88s', transformOrigin: '50px 50px' }} />
        <use href="#gear2" x="70%" y="88%" className="animate-spin-slow" style={{ animationDuration: '105s', transformOrigin: '50px 50px' }} />
        <use href="#gear5" x="92%" y="18%" className="animate-spin-reverse" style={{ animationDuration: '65s', transformOrigin: '50px 50px' }} />
        <use href="#gear3" x="33%" y="25%" className="animate-spin-slow" style={{ animationDuration: '92s', transformOrigin: '50px 50px' }} />
        <use href="#gear5" x="55%" y="45%" className="animate-spin-reverse" style={{ animationDuration: '68s', transformOrigin: '50px 50px' }} />
      </svg>
    </div>
  );
}
