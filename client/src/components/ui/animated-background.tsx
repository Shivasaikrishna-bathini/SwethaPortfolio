import milkyWayGif from '@assets/Milky Way Art GIF_1760013129245.gif';

export default function AnimatedBackground() {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${milkyWayGif})`,
        backgroundColor: '#000000'
      }}
    />
  );
}
