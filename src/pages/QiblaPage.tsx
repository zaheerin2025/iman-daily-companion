
import React from 'react';
import BottomNavigation from '../components/layout/BottomNavigation';
import QiblaFinder from '../components/qibla/QiblaFinder';

const QiblaPage = () => {
  return (
    <div className="min-h-screen pb-16 islamic-pattern">
      <QiblaFinder />
      <BottomNavigation />
    </div>
  );
};

export default QiblaPage;
