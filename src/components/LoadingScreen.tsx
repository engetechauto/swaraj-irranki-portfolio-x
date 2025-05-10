
import { useEffect, useState } from 'react';

const greetings = [
  "Hello",
  "नमस्ते", // Hindi
  "你好", // Chinese
  "こんにちは", // Japanese
  "안녕하세요", // Korean
  "Bonjour", // French
  "Hola", // Spanish
  "Ciao", // Italian
  "Olá", // Portuguese
  "Hallo", // German
  "Привет", // Russian
  "مرحبا", // Arabic
  "Γεια σας", // Greek
  "Merhaba", // Turkish
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  
  useEffect(() => {
    let timeout: number;
    let greetingInterval: number;
    
    // Change greeting every 300ms
    greetingInterval = window.setInterval(() => {
      setCurrentGreeting(prev => (prev + 1) % greetings.length);
    }, 300);
    
    // Complete loading after 3 seconds
    timeout = window.setTimeout(() => {
      setFadeOut(true);
      
      // Wait for fade out animation to complete
      setTimeout(() => {
        clearInterval(greetingInterval);
        onComplete();
      }, 500);
    }, 3000);
    
    return () => {
      clearInterval(greetingInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);
  
  return (
    <div 
      className={`loading-wrapper flex items-center justify-center ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      aria-hidden={fadeOut}
    >
      <div className="loading-content text-center w-full px-4">
        <div className="loading-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
          <span className="text-secondary">{greetings[currentGreeting]}</span>
          <span className="ml-1 animate-blink">_</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
