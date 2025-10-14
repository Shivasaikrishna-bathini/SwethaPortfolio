import gearsGif from '@assets/Idea Maker Sticker by Johnson County Library_1760459228938.gif';

export default function FloatingCogs() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `url(${gearsGif})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.08,
        mixBlendMode: 'screen'
      }}
    />
  );
}
