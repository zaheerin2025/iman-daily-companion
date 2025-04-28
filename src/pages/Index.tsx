
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { formatTimeIn12Hour, getNextPrayer } from '../utils/prayerTimes';
import BottomNavigation from '../components/layout/BottomNavigation';
import PrayerTimeCard from '../components/prayer/PrayerTimeCard';
import DailyQuote from '../components/home/DailyQuote';
import PrayerTracker from '../components/prayer/PrayerTracker';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerData, setPrayerData] = useState(getNextPrayer());

  // Update the time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setPrayerData(getNextPrayer(now));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Format the current date nicely
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(currentTime);

  // Format the current time
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  // Calculate time until next prayer
  const nextPrayerTime = prayerData.nextPrayer?.time || "00:00";
  const [nextHours, nextMinutes] = nextPrayerTime.split(':').map(Number);
  const nextTotalMinutes = nextHours * 60 + nextMinutes;
  
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentTotalMinutes = currentHours * 60 + currentMinutes;
  
  let minutesUntilNextPrayer = nextTotalMinutes - currentTotalMinutes;
  if (minutesUntilNextPrayer < 0) {
    minutesUntilNextPrayer += 24 * 60; // Add a full day if next prayer is tomorrow
  }
  
  const hoursUntil = Math.floor(minutesUntilNextPrayer / 60);
  const minutesUntil = minutesUntilNextPrayer % 60;
  
  return (
    <div className="min-h-screen pb-16 islamic-pattern">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-montserrat font-bold text-primary">Iman</h1>
            <p className="text-sm text-neutral-darker">{formattedDate}</p>
          </div>
          <div className="bg-white rounded-full py-1 px-3 shadow-sm flex items-center">
            <Clock size={16} className="text-primary mr-2" />
            <span className="font-medium">{formattedTime}</span>
          </div>
        </div>
        
        {/* Next Prayer Time Banner */}
        <div className="gradient-primary p-4 rounded-xl shadow-md mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white/90 text-sm">Next Prayer</p>
              <h2 className="text-xl font-bold">{prayerData.nextPrayer?.name}</h2>
            </div>
            <div className="text-right">
              <p className="text-white/90 text-sm">Time Remaining</p>
              <p className="text-xl font-bold">
                {hoursUntil > 0 ? `${hoursUntil}h ${minutesUntil}m` : `${minutesUntil}m`}
              </p>
            </div>
          </div>
        </div>
        
        {/* Prayer Tracker */}
        <PrayerTracker />
        
        {/* Daily Quote */}
        <DailyQuote />
        
        {/* Prayer Time Cards */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-3">Prayer Times</h2>
          <div className="space-y-2">
            {prayerData.allPrayers.map((prayer) => (
              <PrayerTimeCard
                key={prayer.name}
                name={prayer.name}
                time={formatTimeIn12Hour(prayer.time)}
                isNext={prayer.isNext}
                isPast={prayer.isPast}
                arabicName={prayer.arabicName}
              />
            ))}
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
