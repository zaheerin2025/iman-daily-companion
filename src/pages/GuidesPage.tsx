
import React from 'react';
import BottomNavigation from '../components/layout/BottomNavigation';
import PrayerGuide from '../components/guides/PrayerGuide';

const GuidesPage = () => {
  return (
    <div className="min-h-screen pb-16 islamic-pattern">
      <PrayerGuide />
      <BottomNavigation />
    </div>
  );
};

export default GuidesPage;
