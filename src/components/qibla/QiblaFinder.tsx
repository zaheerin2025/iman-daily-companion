
import React, { useState, useEffect } from 'react';
import { Compass } from 'lucide-react';

const QiblaFinder = () => {
  const [direction, setDirection] = useState(0);
  const [qiblaDirection, setQiblaDirection] = useState(0);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Simulated Qibla calculation (in a real app, would use geolocation and math)
  useEffect(() => {
    // Simulating a Qibla direction relative to north
    // In a real app, would calculate based on user's precise location
    setQiblaDirection(45); // Example: Qibla is at 45 degrees from North
  }, []);

  useEffect(() => {
    // Check if DeviceOrientationEvent is available
    if (window.DeviceOrientationEvent) {
      // Request permission for iOS 13+ devices
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        setHasPermission(false); // Need to request permission
      } else {
        setHasPermission(true); // Permission not needed
        startCompass();
      }
    } else {
      setErrorMessage("Compass not available on this device or browser");
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  const requestPermission = async () => {
    try {
      const permissionState = await (DeviceOrientationEvent as any).requestPermission();
      if (permissionState === 'granted') {
        setHasPermission(true);
        startCompass();
      } else {
        setErrorMessage("Permission to access device orientation was denied");
      }
    } catch (error) {
      console.error("Error requesting device orientation permission:", error);
      setErrorMessage("Error accessing compass. Please check permissions.");
    }
  };

  const startCompass = () => {
    window.addEventListener('deviceorientation', handleOrientation);
  };

  const handleOrientation = (event: DeviceOrientationEvent) => {
    // alpha is the compass direction the device is facing in degrees
    if (event.alpha !== null) {
      setDirection(event.alpha);
    }
  };

  // Calculate the angle to rotate the compass to point to Qibla
  const compassRotation = direction;
  const qiblaRotation = direction + qiblaDirection;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-montserrat font-bold text-primary mb-2">Qibla Finder</h2>
        <p className="text-neutral-darker">Face your phone in different directions to find Qibla</p>
      </div>

      {hasPermission === false && (
        <button 
          className="btn-primary mb-4"
          onClick={requestPermission}
        >
          Enable Compass
        </button>
      )}

      {errorMessage && (
        <div className="text-red-500 mb-4 text-center p-3 bg-red-50 rounded-lg">
          {errorMessage}
        </div>
      )}

      <div className="relative w-64 h-64 mb-6">
        {/* Compass Base */}
        <div 
          className="w-full h-full rounded-full border-4 border-primary bg-white shadow-lg flex items-center justify-center"
          style={{ transform: `rotate(${compassRotation}deg)` }}
        >
          {/* Compass Markings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute top-4 text-primary font-bold">N</div>
            <div className="absolute right-4 text-neutral-darker font-bold">E</div>
            <div className="absolute bottom-4 text-neutral-darker font-bold">S</div>
            <div className="absolute left-4 text-neutral-darker font-bold">W</div>
          </div>
          
          {/* Center Compass Icon */}
          <Compass size={40} className="text-primary" />
        </div>
        
        {/* Qibla Needle */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `rotate(${qiblaRotation}deg)` }}
        >
          <div className="w-1 h-1/2 bg-gradient-to-t from-secondary to-primary rounded-t-full transform -translate-y-4">
            <div className="w-4 h-4 rounded-full bg-primary absolute -top-2 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow text-center w-full max-w-xs">
        <p className="text-neutral-darker mb-1">Direction to Kaaba:</p>
        <p className="text-xl font-bold text-primary">{Math.round(qiblaDirection)}° from North</p>
      </div>
    </div>
  );
};

export default QiblaFinder;
