import React, { useState } from 'react';
import { Save, User, Bell, Palette, Shield, Download, Trash2, Crown, Flame, Hammer, Anvil, Building, Check, Settings, Sparkles } from 'lucide-react';

const QuorraSettingsPage = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [settings, setSettings] = useState({
    profile: {
      name: 'Sarah Chen',
      email: 'sarah@example.com',
      tier: 'hammer',
      avatar: '/api/placeholder/120/120'
    },
    preferences: {
      theme: 'divine-fire',
      autoSave: true,
      gridSnap: true,
      notifications: true,
      sparkyGuidance: true
    },
    export: {
      format: 'clean-css',
      compression: true,
      comments: false
    }
  });

  const updateSetting = (section, key, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  const tierInfo = {
    ember: { 
      name: 'Ember', 
      subtitle: 'The Divine Spark', 
      icon: Flame, 
      bg: 'from-gray-800 to-gray-900',
      border: 'border-gray-600',
      button: 'from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600',
      accent: 'text-gray-400'
    },
    hammer: { 
      name: 'Hammer', 
      subtitle: "Quorra's Sacred Tool", 
      icon: Hammer, 
      bg: 'from-orange-800 to-red-900',
      border: 'border-orange-500',
      button: 'from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500',
      accent: 'text-orange-400'
    },
    anvil: { 
      name: 'Anvil', 
      subtitle: 'Her Blessed Workspace', 
      icon: Anvil, 
      bg: 'from-amber-800 to-orange-900',
      border: 'border-amber-500',
      button: 'from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500',
      accent: 'text-amber-400'
    },
    foundry: { 
      name: 'Foundry', 
      subtitle: 'Her Divine Realm', 
      icon: Building, 
      bg: 'from-orange-700 to-red-800',
      border: 'border-red-500',
      button: 'from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500',
      accent: 'text-red-400'
    }
  };

  const currentTier = tierInfo[settings.profile.tier];

  const sections = [
    { id: 'profile', name: 'Divine Profile', icon: User },
    { id: 'preferences', name: 'Sacred Preferences', icon: Palette },
    { id: 'notifications', name: 'Divine Messages', icon: Bell },
    { id: 'export', name: 'Code Blessing', icon: Download },
    { id: 'security', name: 'Sacred Protection', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-lg border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img 
                src="/src/assets/images/logos/quorra-logo-dark.png" 
                alt="QUORRA - Goddess of Smithing"
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-white">QUORRA</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#dashboard" className="text-gray-300 hover:text-orange-400 transition-colors">Dashboard</a>
              <a href="#projects" className="text-gray-300 hover:text-orange-400 transition-colors">Projects</a>
              <a href="#templates" className="text-gray-300 hover:text-orange-400 transition-colors">Templates</a>
              <a href="#help" className="text-gray-300 hover:text-orange-400 transition-colors">Help</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-gray-300 text-sm">
                {currentTier.name} Tier
              </div>
              <img 
                src={settings.profile.avatar} 
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-orange-500/50"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Divine Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <img 
              src="/src/assets/images/logos/quorra-logo-dark.png" 
              alt="QUORRA - Goddess of Smithing"
              className="w-16 h-16 mx-auto mb-4"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Divine <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Settings</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Configure your sacred tools and divine preferences blessed by the Goddess of Smithing.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sacred Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6 sticky top-8">
              <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
                <Settings className="w-5 h-5 text-orange-400" />
                Sacred Configuration
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                          : 'text-gray-300 hover:bg-gray-700/50 hover:text-orange-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {section.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Sacred Content */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
              
              {/* Profile Section */}
              {activeSection === 'profile' && (
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <User className="w-6 h-6 text-orange-400" />
                    <h2 className="text-2xl font-bold text-white">Divine Profile</h2>
                  </div>

                  {/* Current Tier Display */}
                  <div className={`bg-gradient-to-br ${currentTier.bg} rounded-2xl p-6 mb-8 border-2 ${currentTier.border}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                          <currentTier.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{currentTier.name}</h3>
                          <p className={`${currentTier.accent} font-medium`}>{currentTier.subtitle}</p>
                        </div>
                      </div>
                      <button className={`px-6 py-2 bg-gradient-to-r ${currentTier.button} text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg`}>
                        Upgrade Blessing
                      </button>
                    </div>
                  </div>

                  {/* Profile Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Craftsperson Name
                      </label>
                      <input
                        type="text"
                        value={settings.profile.name}
                        onChange={(e) => updateSetting('profile', 'name', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Divine Email
                      </label>
                      <input
                        type="email"
                        value={settings.profile.email}
                        onChange={(e) => updateSetting('profile', 'email', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Avatar Section */}
                  <div className="mt-8">
                    <label className="block text-sm font-medium text-gray-300 mb-4">
                      Divine Avatar
                    </label>
                    <div className="flex items-center gap-6">
                      <img
                        src={settings.profile.avatar}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover border-4 border-orange-500/50"
                      />
                      <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-medium hover:from-orange-500 hover:to-red-500 transition-all duration-200">
                        Upload Sacred Image
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Preferences Section */}
              {activeSection === 'preferences' && (
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <Palette className="w-6 h-6 text-orange-400" />
                    <h2 className="text-2xl font-bold text-white">Sacred Preferences</h2>
                  </div>

                  <div className="space-y-8">
                    {/* Theme Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-4">
                        Divine Theme
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: 'divine-fire', name: 'Divine Fire', description: 'Sacred orange flames', bg: 'from-orange-600 to-red-600' },
                          { id: 'celestial-blue', name: 'Celestial Blue', description: 'Heavenly blues', bg: 'from-blue-600 to-indigo-600' },
                          { id: 'earthen-bronze', name: 'Earthen Bronze', description: 'Forged metals', bg: 'from-amber-600 to-orange-600' }
                        ].map((theme) => (
                          <button
                            key={theme.id}
                            onClick={() => updateSetting('preferences', 'theme', theme.id)}
                            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                              settings.preferences.theme === theme.id
                                ? 'border-orange-500 bg-orange-500/10'
                                : 'border-gray-600 bg-gray-700/50 hover:border-gray-500'
                            }`}
                          >
                            <div className="text-left">
                              <div className={`w-full h-8 rounded mb-2 bg-gradient-to-r ${theme.bg}`}></div>
                              <div className="font-medium text-white">{theme.name}</div>
                              <div className="text-sm text-gray-400">{theme.description}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Toggle Settings */}
                    <div className="space-y-4">
                      {[
                        { key: 'autoSave', label: 'Divine Auto-Save', description: 'Automatically save your sacred work' },
                        { key: 'gridSnap', label: 'Sacred Grid Snap', description: 'Snap elements to divine grid' },
                        { key: 'sparkyGuidance', label: "Sparky's Divine Guidance", description: 'Receive helpful tips from Sparky' }
                      ].map((setting) => (
                        <div key={setting.key} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                          <div>
                            <div className="font-medium text-white">{setting.label}</div>
                            <div className="text-sm text-gray-400">{setting.description}</div>
                          </div>
                          <button
                            onClick={() => updateSetting('preferences', setting.key, !settings.preferences[setting.key])}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                              settings.preferences[setting.key] ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gray-600'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                                settings.preferences[setting.key] ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Section */}
              {activeSection === 'notifications' && (
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <Bell className="w-6 h-6 text-orange-400" />
                    <h2 className="text-2xl font-bold text-white">Divine Messages</h2>
                  </div>

                  <div className="space-y-4">
                    {[
                      { id: 'sparky-tips', name: "Sparky's Tips", description: 'Receive divine guidance and tips' },
                      { id: 'project-updates', name: 'Project Updates', description: 'Updates about your sacred projects' },
                      { id: 'new-features', name: 'New Divine Features', description: 'Be first to know about new sacred tools' },
                      { id: 'community', name: 'Divine Community', description: 'Updates from fellow craftspeople' }
                    ].map((notification) => (
                      <div key={notification.id} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                        <div>
                          <div className="font-medium text-white">{notification.name}</div>
                          <div className="text-sm text-gray-400">{notification.description}</div>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                          <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Export Section */}
              {activeSection === 'export' && (
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <Download className="w-6 h-6 text-orange-400" />
                    <h2 className="text-2xl font-bold text-white">Code Blessing</h2>
                  </div>

                  <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 mb-8 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <Crown className="w-6 h-6" />
                      <h3 className="text-xl font-bold">Divine Code Generation</h3>
                    </div>
                    <p className="text-orange-100">
                      Your code is blessed by Quorra herself - clean, semantic, and 87% smaller than framework alternatives.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-4">
                        Sacred Export Format
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: 'clean-css', name: 'Clean CSS', description: 'Pure, semantic CSS blessed by Quorra' },
                          { id: 'styled-components', name: 'Styled Components', description: 'React styled-components format' }
                        ].map((format) => (
                          <button
                            key={format.id}
                            onClick={() => updateSetting('export', 'format', format.id)}
                            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                              settings.export.format === format.id
                                ? 'border-orange-500 bg-orange-500/10'
                                : 'border-gray-600 bg-gray-700/50 hover:border-gray-500'
                            }`}
                          >
                            <div className="text-left">
                              <div className="font-medium text-white">{format.name}</div>
                              <div className="text-sm text-gray-400">{format.description}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        { key: 'compression', label: 'Divine Compression', description: 'Optimize code for performance' },
                        { key: 'comments', label: 'Sacred Comments', description: 'Include helpful code comments' }
                      ].map((setting) => (
                        <div key={setting.key} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                          <div>
                            <div className="font-medium text-white">{setting.label}</div>
                            <div className="text-sm text-gray-400">{setting.description}</div>
                          </div>
                          <button
                            onClick={() => updateSetting('export', setting.key, !settings.export[setting.key])}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                              settings.export[setting.key] ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gray-600'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                                settings.export[setting.key] ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Security Section */}
              {activeSection === 'security' && (
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <Shield className="w-6 h-6 text-orange-400" />
                    <h2 className="text-2xl font-bold text-white">Sacred Protection</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-green-900/50 border border-green-600 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-green-300">Account Protected</div>
                          <div className="text-sm text-green-400">Your divine account is secured with sacred protections</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <button className="p-6 border border-gray-600 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 text-left">
                        <div className="font-medium text-white mb-2">Change Sacred Password</div>
                        <div className="text-sm text-gray-400">Update your divine authentication</div>
                      </button>
                      
                      <button className="p-6 border border-gray-600 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 text-left">
                        <div className="font-medium text-white mb-2">Two-Factor Blessing</div>
                        <div className="text-sm text-gray-400">Add extra protection to your account</div>
                      </button>
                    </div>

                    {/* Danger Zone */}
                    <div className="border-t border-gray-600 pt-8 mt-8">
                      <h3 className="text-lg font-bold text-red-400 mb-4">Danger Zone</h3>
                      <div className="bg-red-900/20 border border-red-600/50 rounded-xl p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-medium text-red-300">Delete Divine Account</div>
                            <div className="text-sm text-red-400 mt-1">
                              Permanently remove your account and all sacred projects. This cannot be undone.
                            </div>
                          </div>
                          <button className="ml-4 px-4 py-2 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-all duration-300 flex items-center gap-2">
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Save Button */}
              <div className="border-t border-gray-600 px-8 py-6 bg-gray-800/50 rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Settings are blessed automatically by Quorra's divine fire
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-medium hover:from-orange-500 hover:to-red-500 transition-all duration-200 flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save Sacred Settings
                  </button>
                </div>
              </div>
            </div>

            {/* Sparky Help Section */}
            <div className="mt-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15">
                <img src="/src/assets/images/sparky-ai-helpful.png" alt="Sparky AI" className="h-full w-full object-cover object-left" />
              </div>
              <div className="max-w-3xl relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/src/assets/images/sparky-ai-helpful.png" alt="Sparky" className="w-12 h-12" />
                  <h3 className="text-xl font-semibold text-white">Need Divine Guidance?</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  I'm here to help you configure your sacred settings! Whether you need help with export formats, 
                  divine themes, or understanding your tier benefits, just ask.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-medium hover:from-orange-500 hover:to-red-500 transition-all duration-200 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Chat with Sparky
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src="/src/assets/images/logos/quorra-logo-dark.png" 
                alt="QUORRA"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white">QUORRA</span>
            </div>
            <p className="text-gray-400">
              © 2025 QUORRA. Blessed by the Goddess of Smithing. Forge the Future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuorraSettingsPage;