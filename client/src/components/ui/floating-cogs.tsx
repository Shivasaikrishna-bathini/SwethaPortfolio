export default function FloatingCogs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ opacity: 0.08 }}>
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Proper gear/cog shape with 8 teeth */}
          <g id="cog" className="text-orange-500" fill="currentColor">
            <path d="M50,20 L55,25 L60,20 L65,25 L70,20 L75,25 L80,20 L85,30 L80,40 L85,50 L80,60 L85,70 L80,80 L75,75 L70,80 L65,75 L60,80 L55,75 L50,80 L45,75 L40,80 L35,75 L30,80 L25,75 L20,80 L15,70 L20,60 L15,50 L20,40 L15,30 L20,20 L25,25 L30,20 L35,25 L40,20 L45,25 Z" transform="translate(-50, -50)" />
            <circle cx="0" cy="0" r="15" />
          </g>
        </defs>
        
        {/* Scatter cogs across the page with different sizes and speeds */}
        <use href="#cog" x="8%" y="12%" width="80" height="80" className="animate-spin-slow" style={{ animationDuration: '50s' }} />
        <use href="#cog" x="88%" y="20%" width="60" height="60" className="animate-spin-reverse" style={{ animationDuration: '65s' }} />
        <use href="#cog" x="15%" y="55%" width="70" height="70" className="animate-spin-slow" style={{ animationDuration: '45s' }} />
        <use href="#cog" x="82%" y="68%" width="55" height="55" className="animate-spin-reverse" style={{ animationDuration: '58s' }} />
        <use href="#cog" x="45%" y="35%" width="65" height="65" className="animate-spin-slow" style={{ animationDuration: '42s' }} />
        <use href="#cog" x="65%" y="82%" width="75" height="75" className="animate-spin-reverse" style={{ animationDuration: '70s' }} />
        <use href="#cog" x="25%" y="88%" width="50" height="50" className="animate-spin-slow" style={{ animationDuration: '55s' }} />
        <use href="#cog" x="92%" y="45%" width="58" height="58" className="animate-spin-reverse" style={{ animationDuration: '48s' }} />
      </svg>
    </div>
  );
}
