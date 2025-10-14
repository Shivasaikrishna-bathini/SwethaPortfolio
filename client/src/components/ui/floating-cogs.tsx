export default function FloatingCogs() {
  // Gear sizes (radius to edge of teeth)
  const gearSizes = {
    xl: 70,   // 20 teeth
    large: 55, // 16 teeth
    medium: 40, // 12 teeth
    small: 28,  // 8 teeth
    tiny: 18    // 6 teeth
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ opacity: 0.15 }}>
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Extra Large Gear - 20 teeth */}
          <g id="gear-xl">
            <circle cx="0" cy="0" r="58" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/60"/>
            <circle cx="0" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/60"/>
            <circle cx="0" cy="0" r="15" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-orange-500/60"/>
            {[...Array(20)].map((_, i) => {
              const angle = (i * 18 * Math.PI) / 180;
              const x1 = 58 * Math.cos(angle);
              const y1 = 58 * Math.sin(angle);
              const x2 = 70 * Math.cos(angle);
              const y2 = 70 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="4" className="text-orange-500/60"/>;
            })}
            {[0, 90, 180, 270].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              return <line key={`s${i}`} x1={15 * Math.cos(rad)} y1={15 * Math.sin(rad)} x2={40 * Math.cos(rad)} y2={40 * Math.sin(rad)} stroke="currentColor" strokeWidth="2.5" className="text-orange-500/60"/>;
            })}
          </g>

          {/* Large Gear - 16 teeth */}
          <g id="gear-large">
            <circle cx="0" cy="0" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/60"/>
            <circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/60"/>
            <circle cx="0" cy="0" r="12" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-orange-500/60"/>
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5 * Math.PI) / 180;
              const x1 = 45 * Math.cos(angle);
              const y1 = 45 * Math.sin(angle);
              const x2 = 55 * Math.cos(angle);
              const y2 = 55 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="4" className="text-orange-500/60"/>;
            })}
            {[0, 90, 180, 270].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              return <line key={`s${i}`} x1={12 * Math.cos(rad)} y1={12 * Math.sin(rad)} x2={30 * Math.cos(rad)} y2={30 * Math.sin(rad)} stroke="currentColor" strokeWidth="2.5" className="text-orange-500/60"/>;
            })}
          </g>

          {/* Medium Gear - 12 teeth */}
          <g id="gear-medium">
            <circle cx="0" cy="0" r="32" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/60"/>
            <circle cx="0" cy="0" r="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/60"/>
            <circle cx="0" cy="0" r="9" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/60"/>
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = 32 * Math.cos(angle);
              const y1 = 32 * Math.sin(angle);
              const x2 = 40 * Math.cos(angle);
              const y2 = 40 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="3.5" className="text-orange-500/60"/>;
            })}
            {[0, 120, 240].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              return <line key={`s${i}`} x1={9 * Math.cos(rad)} y1={9 * Math.sin(rad)} x2={22 * Math.cos(rad)} y2={22 * Math.sin(rad)} stroke="currentColor" strokeWidth="2" className="text-orange-500/60"/>;
            })}
          </g>

          {/* Small Gear - 8 teeth */}
          <g id="gear-small">
            <circle cx="0" cy="0" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-500/60"/>
            <circle cx="0" cy="0" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-500/60"/>
            <circle cx="0" cy="0" r="7" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500/60"/>
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x1 = 22 * Math.cos(angle);
              const y1 = 22 * Math.sin(angle);
              const x2 = 28 * Math.cos(angle);
              const y2 = 28 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="3" className="text-orange-500/60"/>;
            })}
          </g>

          {/* Tiny Gear - 6 teeth */}
          <g id="gear-tiny">
            <circle cx="0" cy="0" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-500/60"/>
            <circle cx="0" cy="0" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-500/60"/>
            {[...Array(6)].map((_, i) => {
              const angle = (i * 60 * Math.PI) / 180;
              const x1 = 14 * Math.cos(angle);
              const y1 = 14 * Math.sin(angle);
              const x2 = 18 * Math.cos(angle);
              const y2 = 18 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.5" className="text-orange-500/60"/>;
            })}
          </g>
        </defs>
        
        {/* Row 1 - Top of page */}
        <use href="#gear-medium" x="8%" y="8%" className="animate-spin-slow" style={{ animationDuration: '48s' }} />
        <use href="#gear-small" x="15%" y="8%" className="animate-spin-reverse" style={{ animationDuration: '36s' }} />
        <use href="#gear-tiny" x="20%" y="8%" className="animate-spin-slow" style={{ animationDuration: '24s' }} />
        
        <use href="#gear-large" x="30%" y="10%" className="animate-spin-reverse" style={{ animationDuration: '64s' }} />
        <use href="#gear-medium" x="40%" y="10%" className="animate-spin-slow" style={{ animationDuration: '48s' }} />
        
        <use href="#gear-xl" x="55%" y="8%" className="animate-spin-slow" style={{ animationDuration: '80s' }} />
        <use href="#gear-large" x="68%" y="8%" className="animate-spin-reverse" style={{ animationDuration: '64s' }} />
        
        <use href="#gear-small" x="82%" y="10%" className="animate-spin-slow" style={{ animationDuration: '32s' }} />
        <use href="#gear-tiny" x="88%" y="10%" className="animate-spin-reverse" style={{ animationDuration: '24s' }} />
        <use href="#gear-tiny" x="92%" y="10%" className="animate-spin-slow" style={{ animationDuration: '20s' }} />

        {/* Row 2 - Upper middle */}
        <use href="#gear-tiny" x="5%" y="22%" className="animate-spin-reverse" style={{ animationDuration: '20s' }} />
        <use href="#gear-small" x="10%" y="24%" className="animate-spin-slow" style={{ animationDuration: '36s' }} />
        
        <use href="#gear-medium" x="22%" y="25%" className="animate-spin-reverse" style={{ animationDuration: '48s' }} />
        <use href="#gear-small" x="30%" y="25%" className="animate-spin-slow" style={{ animationDuration: '32s' }} />
        <use href="#gear-large" x="38%" y="24%" className="animate-spin-reverse" style={{ animationDuration: '64s' }} />
        
        <use href="#gear-medium" x="52%" y="26%" className="animate-spin-slow" style={{ animationDuration: '44s' }} />
        <use href="#gear-tiny" x="60%" y="26%" className="animate-spin-reverse" style={{ animationDuration: '22s' }} />
        
        <use href="#gear-large" x="70%" y="25%" className="animate-spin-slow" style={{ animationDuration: '60s' }} />
        <use href="#gear-medium" x="82%" y="25%" className="animate-spin-reverse" style={{ animationDuration: '48s' }} />
        <use href="#gear-small" x="90%" y="25%" className="animate-spin-slow" style={{ animationDuration: '36s' }} />

        {/* Row 3 - Middle */}
        <use href="#gear-small" x="6%" y="42%" className="animate-spin-slow" style={{ animationDuration: '32s' }} />
        <use href="#gear-medium" x="12%" y="42%" className="animate-spin-reverse" style={{ animationDuration: '48s' }} />
        <use href="#gear-tiny" x="20%" y="42%" className="animate-spin-slow" style={{ animationDuration: '24s' }} />
        
        <use href="#gear-xl" x="30%" y="40%" className="animate-spin-reverse" style={{ animationDuration: '80s' }} />
        <use href="#gear-large" x="44%" y="42%" className="animate-spin-slow" style={{ animationDuration: '64s' }} />
        
        <use href="#gear-medium" x="58%" y="43%" className="animate-spin-reverse" style={{ animationDuration: '48s' }} />
        <use href="#gear-small" x="66%" y="43%" className="animate-spin-slow" style={{ animationDuration: '32s' }} />
        
        <use href="#gear-large" x="76%" y="42%" className="animate-spin-reverse" style={{ animationDuration: '60s' }} />
        <use href="#gear-medium" x="88%" y="42%" className="animate-spin-slow" style={{ animationDuration: '44s' }} />

        {/* Row 4 - Lower middle */}
        <use href="#gear-medium" x="8%" y="60%" className="animate-spin-reverse" style={{ animationDuration: '48s' }} />
        <use href="#gear-small" x="16%" y="60%" className="animate-spin-slow" style={{ animationDuration: '36s' }} />
        <use href="#gear-tiny" x="22%" y="60%" className="animate-spin-reverse" style={{ animationDuration: '24s' }} />
        
        <use href="#gear-large" x="32%" y="58%" className="animate-spin-slow" style={{ animationDuration: '64s' }} />
        <use href="#gear-medium" x="44%" y="60%" className="animate-spin-reverse" style={{ animationDuration: '48s' }} />
        <use href="#gear-small" x="52%" y="60%" className="animate-spin-slow" style={{ animationDuration: '32s' }} />
        
        <use href="#gear-xl" x="64%" y="58%" className="animate-spin-reverse" style={{ animationDuration: '80s' }} />
        <use href="#gear-large" x="78%" y="60%" className="animate-spin-slow" style={{ animationDuration: '64s' }} />
        
        <use href="#gear-tiny" x="92%" y="60%" className="animate-spin-reverse" style={{ animationDuration: '20s' }} />

        {/* Row 5 - Bottom */}
        <use href="#gear-small" x="6%" y="78%" className="animate-spin-slow" style={{ animationDuration: '36s' }} />
        <use href="#gear-tiny" x="12%" y="78%" className="animate-spin-reverse" style={{ animationDuration: '24s' }} />
        
        <use href="#gear-medium" x="20%" y="76%" className="animate-spin-slow" style={{ animationDuration: '48s' }} />
        <use href="#gear-large" x="30%" y="76%" className="animate-spin-reverse" style={{ animationDuration: '64s' }} />
        <use href="#gear-medium" x="42%" y="78%" className="animate-spin-slow" style={{ animationDuration: '44s' }} />
        
        <use href="#gear-small" x="52%" y="78%" className="animate-spin-reverse" style={{ animationDuration: '32s' }} />
        <use href="#gear-medium" x="58%" y="78%" className="animate-spin-slow" style={{ animationDuration: '48s' }} />
        
        <use href="#gear-large" x="68%" y="76%" className="animate-spin-reverse" style={{ animationDuration: '60s' }} />
        <use href="#gear-small" x="80%" y="78%" className="animate-spin-slow" style={{ animationDuration: '36s' }} />
        <use href="#gear-tiny" x="86%" y="78%" className="animate-spin-reverse" style={{ animationDuration: '24s' }} />
        <use href="#gear-tiny" x="90%" y="78%" className="animate-spin-slow" style={{ animationDuration: '20s' }} />

        {/* Row 6 - Very bottom */}
        <use href="#gear-tiny" x="8%" y="92%" className="animate-spin-reverse" style={{ animationDuration: '20s' }} />
        <use href="#gear-small" x="14%" y="92%" className="animate-spin-slow" style={{ animationDuration: '32s' }} />
        <use href="#gear-medium" x="22%" y="92%" className="animate-spin-reverse" style={{ animationDuration: '48s' }} />
        
        <use href="#gear-small" x="36%" y="92%" className="animate-spin-slow" style={{ animationDuration: '36s' }} />
        <use href="#gear-large" x="44%" y="90%" className="animate-spin-reverse" style={{ animationDuration: '64s' }} />
        <use href="#gear-medium" x="56%" y="92%" className="animate-spin-slow" style={{ animationDuration: '48s' }} />
        
        <use href="#gear-small" x="68%" y="92%" className="animate-spin-reverse" style={{ animationDuration: '32s' }} />
        <use href="#gear-tiny" x="74%" y="92%" className="animate-spin-slow" style={{ animationDuration: '24s' }} />
        <use href="#gear-medium" x="82%" y="92%" className="animate-spin-reverse" style={{ animationDuration: '48s' }} />
      </svg>
    </div>
  );
}
