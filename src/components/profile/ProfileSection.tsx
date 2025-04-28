
import React from 'react';
import { User, Settings, Moon, Flag, Bell } from 'lucide-react';

const ProfileSection = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-montserrat font-bold text-primary">Profile</h2>
        <button className="p-2 rounded-full bg-neutral">
          <Settings size={20} className="text-neutral-darker" />
        </button>
      </div>
      
      {/* Profile Header */}
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white">
          <User size={28} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">Guest User</h3>
          <p className="text-sm text-neutral-darker">Sign in to sync your data</p>
        </div>
      </div>
      
      {/* Prayer Stats */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <h4 className="font-medium mb-3">Prayer Statistics</h4>
        
        <div className="grid grid-cols-3 gap-3 mb-3">
          <div className="bg-accent p-3 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">3</p>
            <p className="text-xs text-neutral-darker">Day Streak</p>
          </div>
          <div className="bg-accent p-3 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-xs text-neutral-darker">This Week</p>
          </div>
          <div className="bg-accent p-3 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">78%</p>
            <p className="text-xs text-neutral-darker">Completion</p>
          </div>
        </div>
        
        <button className="w-full py-2 bg-primary text-white rounded-lg font-medium mt-2">
          View Detailed Stats
        </button>
      </div>
      
      {/* Settings List */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="divide-y divide-neutral-dark">
          <div className="flex items-center p-4">
            <Moon size={20} className="text-primary mr-3" />
            <span>Dark Mode</span>
            <div className="ml-auto">
              <div className="w-10 h-6 bg-neutral-dark rounded-full p-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center p-4">
            <Flag size={20} className="text-primary mr-3" />
            <span>Language</span>
            <span className="ml-auto text-sm text-neutral-darker">English</span>
          </div>
          
          <div className="flex items-center p-4">
            <Bell size={20} className="text-primary mr-3" />
            <span>Notifications</span>
            <div className="ml-auto">
              <div className="w-10 h-6 bg-primary rounded-full p-1">
                <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
              </div>
            </div>
          </div>
          
          <div className="p-4 text-center">
            <button className="btn-secondary w-full">Sign In / Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
