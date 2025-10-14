import gearsGif from '@assets/Idea Maker Sticker by Johnson County Library_1760459228938.gif';

export default function FloatingCogs() {
  return (
    <>
      {/* Dark mode - screen blend with low opacity for subtle glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 dark:block hidden"
        style={{
          backgroundImage: `url(${gearsGif})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.08,
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Light mode - multiply blend with higher opacity for visibility */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 dark:hidden block"
        style={{
          backgroundImage: `url(${gearsGif})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.12,
          mixBlendMode: 'multiply'
        }}
      />
    </>
  );
}
