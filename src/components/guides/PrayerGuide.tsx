
import React, { useState } from 'react';

interface PrayerStep {
  id: number;
  title: string;
  arabicText?: string;
  transliteration?: string;
  translation?: string;
  image?: string; // In a full app, this would be an actual image path
}

const prayerSteps: PrayerStep[] = [
  {
    id: 1,
    title: "Intention (Niyyah)",
    arabicText: "نويت أصلي",
    transliteration: "Nawaitu usalli",
    translation: "I intend to pray",
  },
  {
    id: 2,
    title: "Takbir",
    arabicText: "الله أكبر",
    transliteration: "Allahu Akbar",
    translation: "Allah is the Greatest",
  },
  {
    id: 3,
    title: "Recite Surah Al-Fatiha",
    arabicText: "بسم الله الرحمن الرحيم...",
    transliteration: "Bismillah ir-Rahman ir-Raheem...",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful...",
  },
  {
    id: 4,
    title: "Bow (Ruku)",
    arabicText: "سبحان ربي العظيم",
    transliteration: "Subhana Rabbiyal Adheem",
    translation: "Glory to my Lord, the Most Great",
  },
  {
    id: 5, 
    title: "Standing after Ruku",
    arabicText: "سمع الله لمن حمده، ربنا لك الحمد",
    transliteration: "Sami Allahu liman hamidah, Rabbana wa lakal hamd",
    translation: "Allah hears those who praise Him. Our Lord, praise be to You",
  }
];

const PrayerGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < prayerSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = prayerSteps[currentStep];

  return (
    <div className="p-4 flex flex-col h-full">
      <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">Prayer Guide</h2>
      
      {/* Progress Indicator */}
      <div className="w-full bg-neutral h-2 rounded-full mb-6">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${((currentStep + 1) / prayerSteps.length) * 100}%` }}
        ></div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-5 mb-6 flex-grow">
        {/* Step Title */}
        <div className="mb-4">
          <span className="text-xs font-medium text-neutral-darker">STEP {currentStep + 1} OF {prayerSteps.length}</span>
          <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
        </div>
        
        {/* Placeholder for an image in a real app */}
        <div className="bg-neutral rounded-lg h-48 flex items-center justify-center mb-6">
          <p className="text-neutral-darker font-medium">Prayer position illustration</p>
        </div>
        
        {/* Arabic Text */}
        {step.arabicText && (
          <div className="text-center mb-4">
            <p className="font-amiri text-2xl leading-relaxed text-neutral-foreground">{step.arabicText}</p>
          </div>
        )}
        
        {/* Transliteration */}
        {step.transliteration && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-neutral-darker mb-1">TRANSLITERATION</h4>
            <p className="italic text-primary-dark">{step.transliteration}</p>
          </div>
        )}
        
        {/* Translation */}
        {step.translation && (
          <div>
            <h4 className="text-sm font-medium text-neutral-darker mb-1">TRANSLATION</h4>
            <p className="text-neutral-foreground">{step.translation}</p>
          </div>
        )}
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-between mt-auto">
        <button 
          onClick={prevStep} 
          className={`px-6 py-3 rounded-full font-medium ${
            currentStep > 0 
              ? "bg-neutral-dark text-neutral-foreground" 
              : "bg-neutral-dark/50 text-neutral-darker cursor-not-allowed"
          }`}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        
        <button 
          onClick={nextStep} 
          className={`px-6 py-3 rounded-full font-medium ${
            currentStep < prayerSteps.length - 1 
              ? "bg-primary text-white" 
              : "bg-primary/50 text-white cursor-not-allowed"
          }`}
          disabled={currentStep === prayerSteps.length - 1}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PrayerGuide;
