export default function FloatingCogs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.03]">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <g id="cog" fill="currentColor" className="text-orange-500">
            <path d="M12 2l1.5 4.5h4.5l-3.5 2.5 1.5 4.5-3.5-2.5-3.5 2.5 1.5-4.5-3.5-2.5h4.5z" 
                  transform="translate(-12, -12)" />
            <circle cx="0" cy="0" r="3" />
          </g>
        </defs>
        
        <use href="#cog" x="10%" y="15%" className="animate-spin-slow" style={{ animationDuration: '45s' }} />
        <use href="#cog" x="85%" y="25%" className="animate-spin-reverse" style={{ animationDuration: '60s' }} />
        <use href="#cog" x="20%" y="60%" className="animate-spin-slow" style={{ animationDuration: '50s' }} />
        <use href="#cog" x="75%" y="70%" className="animate-spin-reverse" style={{ animationDuration: '55s' }} />
        <use href="#cog" x="45%" y="40%" className="animate-spin-slow" style={{ animationDuration: '40s' }} />
        <use href="#cog" x="60%" y="85%" className="animate-spin-reverse" style={{ animationDuration: '65s' }} />
        <use href="#cog" x="30%" y="88%" className="animate-spin-slow" style={{ animationDuration: '48s' }} />
      </svg>
    </div>
  );
}
