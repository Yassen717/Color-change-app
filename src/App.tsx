import React, { useState, useCallback } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('bg-slate-900');
  const [circleColor, setCircleColor] = useState('bg-violet-500');
  const [isActive, setIsActive] = useState(false);

  const getRandomColor = useCallback(() => {
    const colors = [
      'bg-violet-500', 'bg-blue-500', 'bg-emerald-500', 
      'bg-rose-500', 'bg-amber-500', 'bg-cyan-500'
    ];
    const bgColors = [
      'bg-slate-900', 'bg-zinc-900', 'bg-stone-900',
      'bg-gray-900', 'bg-neutral-900'
    ];
    
    setCircleColor(colors[Math.floor(Math.random() * colors.length)]);
    setBgColor(bgColors[Math.floor(Math.random() * bgColors.length)]);
    setIsActive(true);
    setTimeout(() => setIsActive(false), 500);
  }, []);

  return (
    <div className={`min-h-screen ${bgColor} transition-all duration-700 flex items-center justify-center overflow-hidden`}>
      <div 
        onClick={getRandomColor}
        className={`
          relative
          w-48 h-48
          rounded-full
          ${circleColor}
          cursor-pointer
          transition-all duration-500
          shadow-lg
          ${isActive ? 'scale-110' : 'scale-100'}
          hover:scale-105
          transform
        `}
      >
        {/* Outer rotating ring */}
        <div className="
          absolute -inset-8
          rounded-full
          border-2 border-dashed border-white/20
          animate-spin
          transition-all duration-500
        "/>
        
        {/* Middle pulsing ring */}
        <div className="
          absolute -inset-4
          rounded-full
          border-4 border-white/30
          animate-pulse-ring
        "/>
        
        {/* Inner spinning ring */}
        <div className="
          absolute inset-0
          rounded-full
          border-4 border-white/40
          animate-spin-reverse
        "/>
        
        {/* Glowing effect */}
        <div className={`
          absolute inset-0
          rounded-full
          blur-md
          opacity-75
          ${circleColor}
          transition-all duration-500
          ${isActive ? 'scale-125' : 'scale-100'}
        `}/>
      </div>
    </div>
  );
}

export default App;