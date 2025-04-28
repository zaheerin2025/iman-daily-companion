
import React, { useState } from 'react';

// Interface for prayer tracking data
interface PrayerTrack {
  name: string;
  performed: boolean;
  arabicName: string;
  timestamp?: Date;
}

const PrayerTracker = () => {
  const [prayers, setPrayers] = useState<PrayerTrack[]>([
    { name: 'Fajr', arabicName: 'الفجر', performed: false },
    { name: 'Dhuhr', arabicName: 'الظهر', performed: false },
    { name: 'Asr', arabicName: 'العصر', performed: false },
    { name: 'Maghrib', arabicName: 'المغرب', performed: false },
    { name: 'Isha', arabicName: 'العشاء', performed: false },
  ]);

  const [streak, setStreak] = useState(3); // Example streak count

  // Toggle prayer performed status
  const togglePrayer = (index: number) => {
    const updatedPrayers = [...prayers];
    updatedPrayers[index].performed = !updatedPrayers[index].performed;
    
    // If marking as performed, add timestamp
    if (updatedPrayers[index].performed) {
      updatedPrayers[index].timestamp = new Date();
    } else {
      updatedPrayers[index].timestamp = undefined;
    }
    
    setPrayers(updatedPrayers);
  };

  // Calculate completion percentage
  const completionPercentage = 
    (prayers.filter(prayer => prayer.performed).length / prayers.length) * 100;

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-neutral-foreground">Today's Prayers</h3>
        <div className="flex items-center">
          <div className="text-xs bg-accent px-3 py-1 rounded-full text-primary font-medium">
            {streak} Day Streak 🔥
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-neutral h-2 rounded-full mb-4">
        <div
          className="bg-primary h-2 rounded-full"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>

      {/* Prayer Toggles */}
      <div className="space-y-3">
        {prayers.map((prayer, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <span className="font-medium">{prayer.name}</span>
              <span className="ml-2 text-xs text-neutral-darker font-amiri">
                {prayer.arabicName}
              </span>
            </div>
            <button
              onClick={() => togglePrayer(index)}
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                prayer.performed
                  ? "bg-primary text-white"
                  : "bg-neutral border border-primary/20"
              }`}
            >
              {prayer.performed && (
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                  <path
                    d="M1 4L4.5 7.5L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerTracker;
