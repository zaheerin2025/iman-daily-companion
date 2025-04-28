
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Compass, Clock, Bell, Settings } from 'lucide-react';

const BottomNavigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Prayer", icon: Clock },
    { path: "/qibla", label: "Qibla", icon: Compass },
    { path: "/guides", label: "Guides", icon: Book },
    { path: "/tasbeeh", label: "Tasbeeh", icon: Bell },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 safe-area-bottom">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center py-1 px-3 w-full h-full transition-colors ${
              isActive(item.path)
                ? "text-primary"
                : "text-neutral-darker"
            }`}
          >
            <item.icon 
              size={24} 
              className={`mb-1 ${
                isActive(item.path) 
                  ? "text-primary" 
                  : "text-neutral-darker"
              }`} 
            />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
