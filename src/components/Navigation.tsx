import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Approach', href: '/#how-we-work' },
    { name: 'Audit', href: '/#audit' },
    { name: 'Discovery', href: '/#discovery' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-brand-border py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-container flex justify-between items-center text-sm font-bold tracking-tight">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo className="h-10" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12 text-primary-black">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-brand-gray hover:text-brand-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-blue transition-all group-hover:w-full" />
            </a>
          ))}
          <Link 
            to="/book" 
            className="bg-brand-blue hover:bg-opacity-90 text-white px-6 py-2.5 rounded-md transition-all text-xs uppercase tracking-widest font-bold"
          >
            Book a discovery call →
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-brand-border p-6 flex flex-col gap-6 md:hidden text-primary-black"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-brand-gray text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <Link 
            to="/book" 
            onClick={() => setIsOpen(false)}
            className="bg-brand-blue text-white px-5 py-3 rounded-md text-center font-bold tracking-wide"
          >
            Book a discovery call
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
