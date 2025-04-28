
import React from 'react';
import { Clock } from 'lucide-react';

interface PrayerTimeCardProps {
  name: string;
  time: string;
  isNext: boolean;
  isPast: boolean;
  arabicName?: string;
}

const PrayerTimeCard: React.FC<PrayerTimeCardProps> = ({
  name,
  time,
  isNext,
  isPast,
  arabicName,
}) => {
  return (
    <div className={`prayer-card flex items-center p-4 mb-3 ${
      isNext ? 'border-l-4 border-l-primary' : ''
    }`}>
      <div className={`rounded-full p-3 mr-4 ${
        isNext ? 'bg-primary text-white' : 'bg-accent text-primary'
      }`}>
        <Clock size={24} />
      </div>

      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <div>
            <h3 className={`font-semibold ${isPast ? 'text-neutral-darker' : 'text-neutral-foreground'}`}>
              {name}
            </h3>
            {arabicName && (
              <p className="text-sm font-amiri text-neutral-darker">{arabicName}</p>
            )}
          </div>
          <div className={`text-lg font-semibold ${
            isNext ? 'text-primary' : isPast ? 'text-neutral-darker' : 'text-neutral-foreground'
          }`}>
            {time}
          </div>
        </div>
        {isNext && (
          <div className="mt-2 px-3 py-1 bg-accent rounded-full inline-block text-xs font-medium text-primary">
            Next prayer
          </div>
        )}
      </div>
    </div>
  );
};

export default PrayerTimeCard;
