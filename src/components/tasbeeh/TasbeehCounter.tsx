
import React, { useState, useEffect } from 'react';

const TasbeehCounter = () => {
  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [target, setTarget] = useState(33);
  const [selectedDhikr, setSelectedDhikr] = useState('SubhanAllah');

  const dhikrList = [
    { name: 'SubhanAllah', arabic: 'سبحان الله', translation: 'Glory be to Allah' },
    { name: 'Alhamdulillah', arabic: 'الحمد لله', translation: 'All praise is due to Allah' },
    { name: 'AllahuAkbar', arabic: 'الله أكبر', translation: 'Allah is the Greatest' },
    { name: 'LailahaillaAllah', arabic: 'لا إله إلا الله', translation: 'There is no god but Allah' }
  ];

  const targetOptions = [33, 99, 100, 500, 1000];

  useEffect(() => {
    // Check if count has reached target
    if (count >= target) {
      // Simulate vibration if available
      if (navigator.vibrate) {
        navigator.vibrate(200);
      }
      
      // Could add a notification or sound here in a full implementation
    }
  }, [count, target]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
    setTotalCount(prevTotal => prevTotal + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const resetAll = () => {
    setCount(0);
    setTotalCount(0);
  };

  // Find the current dhikr object
  const currentDhikr = dhikrList.find(d => d.name === selectedDhikr) || dhikrList[0];

  // Calculate progress percentage
  const progressPercentage = Math.min((count / target) * 100, 100);

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-2xl font-montserrat font-bold text-primary mb-6">Digital Tasbeeh</h2>

      {/* Dhikr Selection */}
      <div className="w-full mb-6">
        <label className="block text-sm font-medium text-neutral-darker mb-2">Select Dhikr</label>
        <select 
          className="input-field w-full"
          value={selectedDhikr}
          onChange={(e) => {
            setSelectedDhikr(e.target.value);
            reset();
          }}
        >
          {dhikrList.map(dhikr => (
            <option key={dhikr.name} value={dhikr.name}>
              {dhikr.name}
            </option>
          ))}
        </select>
      </div>

      {/* Target Selection */}
      <div className="w-full mb-8">
        <label className="block text-sm font-medium text-neutral-darker mb-2">Target Count</label>
        <select 
          className="input-field w-full"
          value={target}
          onChange={(e) => setTarget(Number(e.target.value))}
        >
          {targetOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Arabic Text Display */}
      <div className="text-center mb-6">
        <h3 className="font-amiri text-4xl mb-2">{currentDhikr.arabic}</h3>
        <p className="text-neutral-darker">{currentDhikr.translation}</p>
      </div>

      {/* Progress Ring */}
      <div className="relative mb-8">
        <svg width="200" height="200" viewBox="0 0 100 100" className="transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#E5DEFF"
            strokeWidth="8"
          />
          
          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#6E59A5"
            strokeWidth="8"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - progressPercentage / 100)}`}
            strokeLinecap="round"
          />
        </svg>
        
        {/* Counter Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-bold text-primary">{count}</span>
          <span className="text-sm text-neutral-darker">of {target}</span>
        </div>
      </div>

      {/* Counter Button */}
      <button
        onClick={increment}
        className="w-28 h-28 rounded-full bg-gradient-to-r from-primary to-primary-light text-white shadow-lg flex items-center justify-center text-2xl font-bold hover:shadow-xl transition-all transform active:scale-95 mb-8"
      >
        TAP
      </button>

      {/* Stats */}
      <div className="bg-white rounded-xl shadow-md p-4 w-full">
        <div className="flex justify-between items-center mb-4">
          <span className="text-neutral-darker">Total count today:</span>
          <span className="font-semibold">{totalCount}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button 
            onClick={reset} 
            className="flex-1 py-2 bg-accent text-primary rounded-lg font-medium"
          >
            Reset Current
          </button>
          <button 
            onClick={resetAll} 
            className="flex-1 py-2 bg-neutral-dark text-neutral-foreground rounded-lg font-medium"
          >
            Reset All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasbeehCounter;
