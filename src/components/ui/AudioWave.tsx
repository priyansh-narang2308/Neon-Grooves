
export default function AudioWave() {
  return (
    <div className="audio-wave">
      {[...Array(5)].map((_, index) => (
        <div 
          key={index} 
          className="audio-wave-bar animate-wave" 
          style={{ 
            height: Math.floor(Math.random() * 12) + 4 + 'px',
            animationDelay: `${index * 0.1}s`
          }}
        ></div>
      ))}
    </div>
  );
}
