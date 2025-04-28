
// This is a simplified implementation of prayer time calculations
// In a real app, we would use more precise algorithms

// Function to calculate prayer times (simplified demo version)
export function getPrayerTimes(date: Date = new Date(), latitude: number = 21.4225, longitude: number = 39.8262) {
  // This is just a demo function that returns hardcoded times
  // In a real app, this would use proper calculation methods
  
  // Times are being returned in 24-hour format
  return {
    fajr: '04:35',
    sunrise: '06:03',
    dhuhr: '12:15',
    asr: '15:40',
    maghrib: '18:27',
    isha: '19:57'
  };
}

// Function to determine the next prayer
export function getNextPrayer(date: Date = new Date()) {
  const times = getPrayerTimes(date);
  const now = date;
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes; // convert to minutes since midnight
  
  // Convert prayer times to minutes since midnight
  const prayers = [
    { name: 'Fajr', time: times.fajr, arabicName: 'الفجر' },
    { name: 'Dhuhr', time: times.dhuhr, arabicName: 'الظهر' },
    { name: 'Asr', time: times.asr, arabicName: 'العصر' },
    { name: 'Maghrib', time: times.maghrib, arabicName: 'المغرب' },
    { name: 'Isha', time: times.isha, arabicName: 'العشاء' }
  ];
  
  // Calculate minutes since midnight for each prayer time
  const prayerMinutes = prayers.map(prayer => {
    const [hours, minutes] = prayer.time.split(':').map(Number);
    return {
      ...prayer,
      minutesSinceMidnight: hours * 60 + minutes
    };
  });
  
  // Find the next prayer
  let nextPrayer = prayerMinutes.find(prayer => prayer.minutesSinceMidnight > currentTime);
  
  // If no next prayer today, return Fajr of next day
  if (!nextPrayer) {
    nextPrayer = { ...prayerMinutes[0] };
  }
  
  // Determine if each prayer is past
  const prayerStatus = prayerMinutes.map(prayer => ({
    ...prayer,
    isNext: prayer.minutesSinceMidnight === nextPrayer?.minutesSinceMidnight,
    isPast: prayer.minutesSinceMidnight < currentTime
  }));
  
  return {
    nextPrayer,
    allPrayers: prayerStatus
  };
}

export function formatTimeIn12Hour(time24h: string): string {
  const [hours, minutes] = time24h.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12; // Convert 0 to 12 for 12 AM
  
  return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
}
