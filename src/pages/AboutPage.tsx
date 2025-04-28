
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
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
        
        <h1 className="text-2xl font-montserrat font-bold text-primary mb-6">About Iman</h1>
        
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="mb-4 text-neutral-darker">
            Iman is your comprehensive Islamic prayer companion, designed to help Muslims maintain their daily prayers and strengthen their connection with Allah.
          </p>
          
          <h2 className="text-lg font-semibold mb-2 text-primary">Features</h2>
          <ul className="list-disc list-inside mb-4 text-neutral-darker">
            <li>Accurate prayer times</li>
            <li>Qibla direction finder</li>
            <li>Prayer tracking</li>
            <li>Digital Tasbeeh counter</li>
            <li>Prayer guides</li>
          </ul>
          
          <p className="text-neutral-darker">
            Version 1.0.0<br />
            Made with ❤️ for the Ummah
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
