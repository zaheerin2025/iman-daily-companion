
import React, { useEffect, useState } from 'react';
import { Sun } from 'lucide-react';

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-primary z-50">
      <div className="animate-float">
        <Sun size={64} className="text-white mb-4" />
      </div>
      <h1 className="text-3xl font-montserrat font-bold text-white mb-2">Iman</h1>
      <p className="text-white/80 text-sm">Your Daily Prayer Companion</p>
    </div>
  );
};

export default SplashScreen;
