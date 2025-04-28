
import React from 'react';
import { ArrowLeft, Star, Share, Info, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Iman - Prayer Companion',
        text: 'Check out Iman, your complete Islamic prayer companion!',
        url: window.location.origin,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const handleRate = () => {
    window.open('https://play.google.com/store/apps', '_blank');
  };

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
        
        <h1 className="text-2xl font-montserrat font-bold text-primary mb-6">Settings</h1>
        
        <div className="space-y-2">
          <button
            onClick={handleRate}
            className="w-full bg-white p-4 rounded-xl flex items-center text-neutral-darker hover:bg-neutral/5"
          >
            <Star className="text-primary mr-3" size={20} />
            Rate App
          </button>
          
          <button
            onClick={handleShare}
            className="w-full bg-white p-4 rounded-xl flex items-center text-neutral-darker hover:bg-neutral/5"
          >
            <Share className="text-primary mr-3" size={20} />
            Share App
          </button>
          
          <Link
            to="/about"
            className="w-full bg-white p-4 rounded-xl flex items-center text-neutral-darker hover:bg-neutral/5"
          >
            <Info className="text-primary mr-3" size={20} />
            About
          </Link>
          
          <Link
            to="/privacy"
            className="w-full bg-white p-4 rounded-xl flex items-center text-neutral-darker hover:bg-neutral/5"
          >
            <Shield className="text-primary mr-3" size={20} />
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
