import React, { useState } from 'react';
import { Settings, Shield, User, Palette, Sparkles, Save, Crown } from 'lucide-react';
import { QuorraLayout } from '../src/components/QuorraNavigation';
const QuorraSettingsPage = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [forgeTemp, setForgeTemp] = useState('divine'); // New state for forge temperature
  // Dynamic color schemes based on forge temperature
  const getColorScheme = () => {
    switch (forgeTemp) {
      case 'cool':
        return {
          headerBg: 'from-slate-600 to-blue-700',
          mainBg: 'from-slate-900 via-gray-900 to-blue-900',
          cardBg: 'from-slate-800 to-gray-900',
          accentColor: '#0EA5E9', // sky-500
          darkAccent: '#0C4A6E', // sky-900
          textAccent: 'text-sky-400',
          borderColor: 'border-sky-500/30',
          buttonStyle: 'linear-gradient(to right, #0EA5E9, #0C4A6E)'
        };
      case 'molten':
        return {
          headerBg: 'from-red-600 to-orange-700',
          mainBg: 'from-red-900 via-orange-900 to-yellow-900',
          cardBg: 'from-red-800 to-orange-900',
          accentColor: '#EF4444', // red-500
          darkAccent: '#DC2626', // red-600
          textAccent: 'text-red-400',
          borderColor: 'border-red-500/30',
          buttonStyle: 'linear-gradient(to right, #EF4444, #DC2626)'
        };
      default: // divine
        return {
          headerBg: 'from-yellow-600 to-[#391700]',
          mainBg: 'from-zinc-900 via-stone-900 to-amber-900',
          cardBg: 'from-stone-800 to-zinc-900',
          accentColor: '#CA8A04', // yellow-600
          darkAccent: '#391700', // bronze
          textAccent: 'text-amber-400',
          borderColor: 'border-[#391700]/30',
          buttonStyle: 'linear-gradient(to right, #CA8A04, #391700)'
        };
    }
  };

  const colors = getColorScheme();
  return (
    <QuorraLayout>
      {/* Divine Header */}
      <header className={`bg-gradient-to-r ${colors.headerBg} shadow-2xl`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg" style={{background: colors.buttonStyle}}>
                <span className="text-2xl">🔥</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">QUORRA</h1>
                <p className="text-yellow-100 text-sm">Channel the Goddess of Smithing</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white hover:text-yellow-200 transition-colors">Dashboard</a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors">Projects</a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors">Templates</a>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors">Help</a>
            </nav>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-yellow-600/30 px-3 py-1 rounded-full">
                <Crown size={16} className="text-yellow-300" />
                <span className="text-white text-sm font-medium">Hammer Tier</span>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: colors.buttonStyle}}>
                <span className="text-white font-bold">🔨</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sacred Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-2xl" style={{background: colors.buttonStyle}}>
            <img 
              src="/images/icons/settings.png" 
              alt="Divine Settings" 
              className="w-8 h-8"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Divine <span className={colors.textAccent}>Settings</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Configure your sacred tools and divine preferences blessed by the Goddess of Smithing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sacred Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className={`bg-gradient-to-br ${colors.cardBg} rounded-2xl p-6 shadow-2xl border ${colors.borderColor}`}>
              <h3 className={`text-lg font-semibold ${colors.textAccent} mb-6 flex items-center gap-2`}>
                <img 
                  src="/images/icons/settings.png" 
                  alt="Settings" 
                  className="w-5 h-5"
                />
                Sacred Configuration
              </h3>
              
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveSection('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeSection === 'profile'
                      ? 'text-white shadow-lg'
                      : 'text-stone-300 hover:text-white hover:bg-stone-700'
                  }`}
                  style={activeSection === 'profile' ? {
                    background: colors.buttonStyle
                  } : {}}
                >
                  <User size={18} />
                  Divine Profile
                </button>
                
                <button
                  onClick={() => setActiveSection('preferences')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeSection === 'preferences'
                      ? 'text-white shadow-lg'
                      : 'text-stone-300 hover:text-white hover:bg-stone-700'
                  }`}
                  style={activeSection === 'preferences' ? {
                    background: colors.buttonStyle
                  } : {}}
                >
                  <Palette size={18} />
                  Sacred Preferences
                </button>
                
                <button
                  onClick={() => setActiveSection('sparky')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeSection === 'sparky'
                      ? 'text-white shadow-lg'
                      : 'text-stone-300 hover:text-white hover:bg-stone-700'
                  }`}
                  style={activeSection === 'sparky' ? {
                    background: colors.buttonStyle
                  } : {}}
                >
                  <Sparkles size={18} />
                  Sparky Memory
                </button>
              </nav>
            </div>
          </div>

          {/* Main Settings Content */}
          <div className="lg:col-span-3">
            {/* Sacred Protection Card */}
            <div className={`bg-gradient-to-br ${colors.cardBg} rounded-2xl p-8 shadow-2xl border ${colors.borderColor} mb-8`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background: colors.buttonStyle}}>
                  <img 
                    src="/images/icons/protection.png" 
                    alt="Sacred Protection" 
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Sacred Protection</h2>
                  <p className="text-gray-400">Your divine forge is secured by celestial shields</p>
                </div>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-green-400 font-semibold">Account Protected</h3>
                    <p className="text-green-300 text-sm">Your divine account is secured with sacred protections</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Content Based on Active Section */}
            {activeSection === 'profile' && (
              <div className={`bg-gradient-to-br ${colors.cardBg} rounded-2xl p-8 shadow-2xl border ${colors.borderColor}`}>
                <h2 className="text-2xl font-bold text-white mb-6">Divine Profile</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className={`block ${colors.textAccent} font-medium mb-2`}>Sacred Name</label>
                    <input
                      type="text"
                      className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-white transition-all"
                      style={{
                        '--tw-ring-color': colors.accentColor + '50'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = colors.accentColor;
                        e.target.style.boxShadow = `0 0 0 2px ${colors.accentColor}30`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#57534e';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Your divine craftsman name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-amber-400 font-medium mb-2">Divine Email</label>
                    <input
                      type="email"
                      className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-white focus:border-yellow-600 focus:ring-2 focus:ring-yellow-500/30 transition-all"
                      placeholder="your.email@divine.forge"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-amber-400 font-medium mb-2">Crafting Specialty</label>
                    <select className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-white focus:border-yellow-600 focus:ring-2 focus:ring-yellow-500/30 transition-all">
                      <option>Web Design</option>
                      <option>E-commerce</option>
                      <option>Portfolio Sites</option>
                      <option>Business Websites</option>
                      <option>Creative Projects</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'preferences' && (
              <div className="bg-gradient-to-br from-stone-800 to-zinc-900 rounded-2xl p-8 shadow-2xl border border-[#391700]/30">
                <h2 className="text-2xl font-bold text-white mb-6">Sacred Preferences</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-amber-400 mb-4">Divine Fire Intensity</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input type="radio" name="fire" className="text-yellow-600 focus:ring-yellow-500 accent-yellow-600" />
                        <span className="text-white">Gentle Ember (Subtle animations)</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="radio" name="fire" className="text-yellow-600 focus:ring-yellow-500 accent-yellow-600" defaultChecked />
                        <span className="text-white">Sacred Flame (Balanced effects)</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="radio" name="fire" className="text-yellow-600 focus:ring-yellow-500 accent-yellow-600" />
                        <span className="text-white">Divine Inferno (Maximum drama)</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-semibold ${colors.textAccent} mb-4`}>Forge Temperature</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <button
                        onClick={() => setForgeTemp('cool')}
                        className={`bg-blue-500/20 border rounded-xl p-4 text-center cursor-pointer hover:bg-blue-500/30 transition-all ${
                          forgeTemp === 'cool' ? 'border-blue-500 border-2' : 'border-blue-500/30'
                        }`}
                      >
                        <div className="text-2xl mb-2">❄️</div>
                        <div className="text-blue-300 font-medium">Cool Forge</div>
                      </button>
                      <button
                        onClick={() => setForgeTemp('divine')}
                        className={`rounded-xl p-4 text-center cursor-pointer transition-all border-2`}
                        style={{
                          backgroundColor: `${colors.accentColor}20`,
                          borderColor: forgeTemp === 'divine' ? colors.accentColor : `${colors.accentColor}30`
                        }}
                      >
                        <div className="text-2xl mb-2">🔥</div>
                        <div className={`${colors.textAccent} font-medium`}>Divine Fire</div>
                      </button>
                      <button
                        onClick={() => setForgeTemp('molten')}
                        className={`bg-red-500/20 border rounded-xl p-4 text-center cursor-pointer hover:bg-red-500/30 transition-all ${
                          forgeTemp === 'molten' ? 'border-red-500 border-2' : 'border-red-500/30'
                        }`}
                      >
                        <div className="text-2xl mb-2">🌋</div>
                        <div className="text-red-300 font-medium">Molten Core</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'sparky' && (
              <div className="bg-gradient-to-br from-stone-800 to-zinc-900 rounded-2xl p-8 shadow-2xl border border-[#391700]/30">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Sparkles className="text-purple-400" />
                  Sparky's Divine Memory
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-purple-400 font-semibold mb-3">Memory Intelligence Level</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white">Design Patterns Learned</span>
                        <span className="text-purple-400 font-bold">47 Sacred Insights</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white">User Preferences Stored</span>
                        <span className="text-purple-400 font-bold">23 Divine Preferences</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white">Breakthrough Moments</span>
                        <span className="text-purple-400 font-bold">5 Divine Revelations</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-amber-400 mb-4">Memory Sharing Preferences</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="text-yellow-600 focus:ring-yellow-500 accent-yellow-600" defaultChecked />
                        <span className="text-white">Share anonymous insights to improve divine wisdom</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="text-yellow-600 focus:ring-yellow-500 accent-yellow-600" defaultChecked />
                        <span className="text-white">Allow Sparky to learn from my design patterns</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="text-yellow-600 focus:ring-yellow-500 accent-yellow-600" />
                        <span className="text-white">Enable predictive design suggestions</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sacred Save Button */}
            <div className="mt-8 flex justify-end">
              <button 
                className="flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                style={{
                  background: colors.buttonStyle
                }}
              >
                <Save size={20} />
                Bless & Save Sacred Settings
              </button>
            </div>
          </div>
        </div>
      </div>
   </QuorraLayout>
  );
};

export default QuorraSettingsPage;