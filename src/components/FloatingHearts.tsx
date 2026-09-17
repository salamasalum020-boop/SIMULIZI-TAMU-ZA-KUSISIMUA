import React from 'react';

export const FloatingHearts: React.FC = () => {
  // Pre-configured floating heart particles
  const hearts = [
    { id: 1, left: '8%', top: '15%', size: 'text-2xl', delay: '0s', duration: '7s', opacity: 'opacity-40' },
    { id: 2, left: '88%', top: '22%', size: 'text-xl', delay: '1.5s', duration: '8s', opacity: 'opacity-30' },
    { id: 3, left: '22%', top: '65%', size: 'text-lg', delay: '2s', duration: '6s', opacity: 'opacity-35' },
    { id: 4, left: '75%', top: '75%', size: 'text-3xl', delay: '0.8s', duration: '9s', opacity: 'opacity-25' },
    { id: 5, left: '50%', top: '10%', size: 'text-xl', delay: '3s', duration: '7.5s', opacity: 'opacity-30' },
    { id: 6, left: '92%', top: '80%', size: 'text-2xl', delay: '2.5s', duration: '8.5s', opacity: 'opacity-35' },
    { id: 7, left: '5%', top: '85%', size: 'text-xl', delay: '1s', duration: '6.5s', opacity: 'opacity-25' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {hearts.map((h) => (
        <div
          key={h.id}
          className={`absolute ${h.size} ${h.opacity} animate-float-gentle text-pink-400 select-none drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]`}
          style={{
            left: h.left,
            top: h.top,
            animationDelay: h.delay,
            animationDuration: h.duration,
          }}
        >
          {h.id % 2 === 0 ? '💕' : h.id % 3 === 0 ? '✨' : '❤️'}
        </div>
      ))}
    </div>
  );
};
