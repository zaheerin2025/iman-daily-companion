
import React from 'react';
import BottomNavigation from '../components/layout/BottomNavigation';
import ProfileSection from '../components/profile/ProfileSection';

const ProfilePage = () => {
  return (
    <div className="min-h-screen pb-16 islamic-pattern">
      <ProfileSection />
      <BottomNavigation />
    </div>
  );
};

export default ProfilePage;
