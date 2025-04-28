
import React from 'react';
import BottomNavigation from '../components/layout/BottomNavigation';
import TasbeehCounter from '../components/tasbeeh/TasbeehCounter';

const TasbeehPage = () => {
  return (
    <div className="min-h-screen pb-16 islamic-pattern">
      <TasbeehCounter />
      <BottomNavigation />
    </div>
  );
};

export default TasbeehPage;
