
import { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Check if hovering over button, link or any interactive element
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || 
                            target.tagName === 'BUTTON' || 
                            target.classList.contains('interactive');
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className={`cursor-follower ${isHovering ? 'scale-150' : ''}`} 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        width: isHovering ? '48px' : '32px',
        height: isHovering ? '48px' : '32px'
      }}
    ></div>
  );
};

export default CursorFollower;
