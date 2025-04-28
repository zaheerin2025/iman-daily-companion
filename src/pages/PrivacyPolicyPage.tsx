
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-16 islamic-pattern">
      <div className="p-4">
        <button 
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center text-primary"
        >
          <ArrowLeft size={20} className="mr-1" />
          Back
        </button>
        
        <h1 className="text-2xl font-montserrat font-bold text-primary mb-6">Privacy Policy</h1>
        
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="space-y-4 text-neutral-darker">
            <p>Last updated: April 28, 2025</p>
            
            <h2 className="text-lg font-semibold text-primary">Information We Collect</h2>
            <p>
              We only collect the minimum information necessary to provide you with a better prayer experience:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Location (for prayer times and Qibla direction)</li>
              <li>Prayer tracking preferences</li>
              <li>App settings and preferences</li>
            </ul>
            
            <h2 className="text-lg font-semibold text-primary">How We Use Your Information</h2>
            <p>
              Your information is used solely to provide accurate prayer times and Qibla direction. We do not share your data with third parties.
            </p>
            
            <h2 className="text-lg font-semibold text-primary">Data Storage</h2>
            <p>
              All your data is stored locally on your device. You can delete it at any time by clearing the app data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
