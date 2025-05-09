
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }}></div>
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm py-4 px-6 md:px-10 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl text-primary" onClick={() => setIsOpen(false)}>
          SI
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/expertise" className="nav-link">Expertise</Link>
            <Link to="/research" className="nav-link">Research</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild className="btn-primary">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        
        <div className="flex md:hidden items-center">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2"
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col pt-24 px-8`}
      >
        <nav className="flex flex-col space-y-8 text-xl">
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/portfolio" className="nav-link" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link to="/expertise" className="nav-link" onClick={() => setIsOpen(false)}>Expertise</Link>
          <Link to="/research" className="nav-link" onClick={() => setIsOpen(false)}>Research</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
          
          <Button asChild className="btn-primary w-full mt-8">
            <a href="/contact" onClick={() => setIsOpen(false)}>Get in Touch</a>
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
