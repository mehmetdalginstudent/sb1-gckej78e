import React, { useState } from 'react';
import { Home, User, Users, School, Briefcase, Menu, X } from 'lucide-react';
import { CaseCategory } from '../types';

interface NavbarProps {
  onNavigate: (category: CaseCategory | null) => void;
  currentCategory: CaseCategory | null;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Anasayfa', value: null },
    { icon: <User className="w-5 h-5" />, label: 'Bireysel Danışmanlık', value: 'bireysel' as CaseCategory },
    { icon: <Users className="w-5 h-5" />, label: 'Aile Danışmanlığı', value: 'aile' as CaseCategory },
    { icon: <School className="w-5 h-5" />, label: 'Okul Psikolojik Danışmanlığı', value: 'okul' as CaseCategory },
    { icon: <Briefcase className="w-5 h-5" />, label: 'Kariyer Danışmanlığı', value: 'kariyer' as CaseCategory },
  ];

  const handleNavigation = (category: CaseCategory | null) => {
    onNavigate(category);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end py-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.value)}
              className={`flex items-center px-4 py-4 text-sm font-medium transition-all duration-300
                ${currentCategory === item.value 
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
            >
              <span className="mr-2">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-2 pb-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.value)}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300
                  ${currentCategory === item.value 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};