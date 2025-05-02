
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="archive-container">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-archive-green flex items-center justify-center">
              <span className="text-white font-serif font-bold">LA</span>
            </div>
            <span className="text-xl font-serif font-bold text-archive-navy">Liberation War Archive</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/documents">Documents</NavLink>
            <NavLink to="/interviews">Interviews</NavLink>
            <NavLink to="/gallery">Photographs</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink to="/documents" onClick={toggleMenu}>Documents</MobileNavLink>
              <MobileNavLink to="/interviews" onClick={toggleMenu}>Interviews</MobileNavLink>
              <MobileNavLink to="/gallery" onClick={toggleMenu}>Photographs</MobileNavLink>
              <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ to, children, className }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "text-archive-navy hover:text-archive-green font-medium transition-colors relative",
        "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0",
        "after:bg-archive-green after:origin-bottom-right after:transition-transform after:duration-300",
        "hover:after:scale-x-100 hover:after:origin-bottom-left",
        className
      )}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick?: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => {
  return (
    <Link
      to={to}
      className="text-archive-navy hover:text-archive-green block py-2 px-4 hover:bg-gray-50 rounded-md font-medium transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
