import React, { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, Eye, Edit, Download, Trash2, Sparkles, Zap, Clock, Users, Star, ArrowRight, Bell, Settings, LogOut, Folder, Grid, List } from 'lucide-react';
import { QuorraLayout } from '../src/components/QuorraNavigation';
const QuorraDashboard = () => {
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      name: 'Divine Dental Practice',
      industry: 'Healthcare',
      tier: 'Hammer',
      status: 'Published',
      lastModified: '2 hours ago',
      thumbnail: '/api/placeholder/300/200',
      visits: '1.2K',
      conversions: '12.4%',
      sparkyTips: 3,
      industryIcon: '/src/assets/images/icons/industries/healthcare.png'
    },
    {
      id: 2,
      name: 'Artisan Bistro',
      industry: 'Restaurant',
      tier: 'Anvil',
      status: 'Draft',
      lastModified: '1 day ago',
      thumbnail: '/api/placeholder/300/200',
      visits: '890',
      conversions: '18.7%',
      sparkyTips: 1,
      industryIcon: '/src/assets/images/icons/industries/restaurant.png'
    },
    {
      id: 3,
      name: 'FlowMetrics SaaS',
      industry: 'Technology',
      tier: 'Foundry',
      status: 'Published',
      lastModified: '3 days ago',
      thumbnail: '/api/placeholder/300/200',
      visits: '3.4K',
      conversions: '8.9%',
      sparkyTips: 0,
      industryIcon: '/src/assets/images/icons/industries/technology.png'
    },
    {
      id: 4,
      name: 'Luxury Boutique',
      industry: 'E-commerce',
      tier: 'Hammer',
      status: 'Published',
      lastModified: '1 week ago',
      thumbnail: '/api/placeholder/300/200',
      visits: '2.1K',
      conversions: '15.3%',
      sparkyTips: 2,
      industryIcon: '/src/assets/images/icons/industries/ecommerce.png'
    },
    {
      id: 5,
      name: 'Elite Financial',
      industry: 'Finance',
      tier: 'Anvil',
      status: 'Draft',
      lastModified: '2 weeks ago',
      thumbnail: '/api/placeholder/300/200',
      visits: '456',
      conversions: '22.1%',
      sparkyTips: 4,
      industryIcon: '/src/assets/images/icons/industries/finance.png'
    },
    {
      id: 6,
      name: 'Creative Portfolio',
      industry: 'Creative',
      tier: 'Ember',
      status: 'Published',
      lastModified: '3 weeks ago',
      thumbnail: '/api/placeholder/300/200',
      visits: '678',
      conversions: '5.2%',
      sparkyTips: 1,
      industryIcon: '/src/assets/images/icons/industries/creative.png'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'creation',
      project: 'Divine Dental Practice',
      action: 'Page published',
      time: '2 hours ago',
      icon: <Zap className="w-4 h-4 text-green-400" />
    },
    {
      id: 2,
      type: 'sparky',
      project: 'Artisan Bistro',
      action: 'Sparky suggested color improvements',
      time: '5 hours ago',
      icon: <Sparkles className="w-4 h-4 text-amber-400" />
    },
    {
      id: 3,
      type: 'analytics',
      project: 'FlowMetrics SaaS',
      action: 'Conversion rate increased to 8.9%',
      time: '1 day ago',
      icon: <Star className="w-4 h-4 text-yellow-400" />
    },
    {
      id: 4,
      type: 'creation',
      project: 'Luxury Boutique',
      action: 'New template applied',
      time: '2 days ago',
      icon: <Edit className="w-4 h-4 text-blue-400" />
    }
  ];

  // Sacred Bronze/Amber Tier Colors
  const tierColors = {
    'Ember': 'bg-zinc-100 text-zinc-700',
    'Hammer': 'bg-amber-100 text-amber-700 border border-amber-200',
    'Anvil': 'bg-yellow-100 text-yellow-700 border border-yellow-200',
    'Foundry': 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white border border-amber-400'
  };

  const statusColors = {
    'Published': 'bg-green-100 text-green-700 border border-green-200',
    'Draft': 'bg-amber-100 text-amber-700 border border-amber-200',
    'Archived': 'bg-zinc-100 text-zinc-700 border border-zinc-200'
  };

  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === 'all' || project.status.toLowerCase() === selectedFilter;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.industry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(to bottom right, #71717a, #27272a, #3f3f46)'
    }}>
      {/* Header with Sacred Bronze Accents */}
      <header style={{
        background: 'rgba(39, 39, 42, 0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(202, 138, 4, 0.2)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logos/quorra-logo.png" 
                alt="QUORRA - Goddess of Smithing"
                className="w-10 h-10"
              />
              <span 
                className="text-2xl font-bold"
                style={{
                  background: 'linear-gradient(to right, #CA8A04, #92400E)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                QUORRA
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="w-6 h-6" />
                <span 
                  className="absolute top-0 right-0 w-2 h-2 rounded-full"
                  style={{ background: '#CA8A04' }}
                ></span>
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Settings className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-700">
                <img 
                  src="/api/placeholder/32/32" 
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-white font-medium">Sarah</span>
                <button className="p-1 text-gray-400 hover:text-white transition-colors">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="/images/characters/sparky-helpful.png" 
              alt="Sparky - Your Divine AI Guide"
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">Welcome back, Divine Craftsperson</h1>
              <p className="text-gray-300">Sparky has been tending the sacred forge in your absence</p>
            </div>
          </div>

          {/* Quick Stats with Bronze Styling */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div 
              className="rounded-xl p-6 border"
              style={{
                background: 'linear-gradient(to bottom right, rgba(63, 63, 70, 0.8), rgba(39, 39, 42, 0.8))',
                borderColor: 'rgba(202, 138, 4, 0.3)'
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active Projects</p>
                  <p className="text-2xl font-bold text-white">6</p>
                </div>
                <Folder className="w-8 h-8" style={{ color: '#FBBF24' }} />
              </div>
            </div>
            <div 
              className="rounded-xl p-6 border"
              style={{
                background: 'linear-gradient(to bottom right, rgba(63, 63, 70, 0.8), rgba(39, 39, 42, 0.8))',
                borderColor: 'rgba(202, 138, 4, 0.3)'
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Visits</p>
                  <p className="text-2xl font-bold text-white">8.7K</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <div 
              className="rounded-xl p-6 border"
              style={{
                background: 'linear-gradient(to bottom right, rgba(63, 63, 70, 0.8), rgba(39, 39, 42, 0.8))',
                borderColor: 'rgba(202, 138, 4, 0.3)'
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Avg Conversion</p>
                  <p className="text-2xl font-bold text-white">13.6%</p>
                </div>
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            <div 
              className="rounded-xl p-6 border"
              style={{
                background: 'linear-gradient(to bottom right, rgba(63, 63, 70, 0.8), rgba(39, 39, 42, 0.8))',
                borderColor: 'rgba(202, 138, 4, 0.3)'
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Sparky Tips</p>
                  <p className="text-2xl font-bold text-white">11</p>
                </div>
                <Sparkles className="w-8 h-8" style={{ color: '#CA8A04' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Projects Area */}
          <div className="lg:col-span-3">
            {/* Projects Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-white">Your Divine Creations</h2>
              
              <button 
                className="text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 shadow-lg"
                style={{
                  background: 'linear-gradient(to right, #CA8A04, #92400E)',
                  border: '1px solid #B45309'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #B45309, #78350F)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #CA8A04, #92400E)';
                }}
              >
                <Plus className="w-5 h-5" />
                Forge New Creation
              </button>
            </div>

            {/* Filters and Search */}
            <div 
              className="rounded-xl p-6 mb-6 border"
              style={{
                background: 'linear-gradient(to right, rgba(63, 63, 70, 0.8), rgba(39, 39, 42, 0.8))',
                borderColor: 'rgba(202, 138, 4, 0.3)'
              }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search your divine works..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none text-white placeholder-gray-400"
                      style={{
                        focusRing: '2px solid #CA8A04',
                        borderColor: '#4B5563'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#CA8A04';
                        e.target.style.boxShadow = '0 0 0 2px rgba(202, 138, 4, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#4B5563';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none text-white"
                    style={{
                      focusRing: '2px solid #CA8A04'
                    }}
                  >
                    <option value="all">All Projects</option>
                    <option value="published">Published</option>
                    <option value="draft">Drafts</option>
                  </select>
                  
                  <div className="flex bg-gray-700 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                      style={{
                        backgroundColor: viewMode === 'grid' ? '#CA8A04' : 'transparent'
                      }}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                      style={{
                        backgroundColor: viewMode === 'list' ? '#CA8A04' : 'transparent'
                      }}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <div 
                    key={project.id} 
                    className="rounded-xl overflow-hidden border transition-all duration-300 group"
                    style={{
                      background: 'linear-gradient(to bottom right, rgba(63, 63, 70, 0.8), rgba(39, 39, 42, 0.8))',
                      borderColor: 'rgba(202, 138, 4, 0.3)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(202, 138, 4, 0.5)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(202, 138, 4, 0.3)';
                    }}
                  >
                    {/* Project Thumbnail */}
                    <div className="relative h-48 bg-gray-700">
                      <img 
                        src={project.thumbnail} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                          {project.status}
                        </span>
                      </div>
                      
                      {/* Tier Badge */}
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${tierColors[project.tier]}`}>
                          {project.tier}
                        </span>
                      </div>

                      {/* Sparky Tips */}
                      {project.sparkyTips > 0 && (
                        <div 
                          className="absolute bottom-3 right-3 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1"
                          style={{ background: '#CA8A04' }}
                        >
                          <Sparkles className="w-3 h-3" />
                          {project.sparkyTips}
                        </div>
                      )}

                      {/* Hover Actions */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <img 
                          src={project.industryIcon} 
                          alt={project.industry}
                          className="w-5 h-5"
                        />
                        <h3 
                          className="font-bold text-white group-hover:transition-colors"
                          style={{
                            color: 'white'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.color = '#FBBF24';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.color = 'white';
                          }}
                        >
                          {project.name}
                        </h3>
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-3">{project.industry}</p>
                      
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex gap-4">
                          <span className="text-gray-400">
                            <Users className="w-4 h-4 inline mr-1" />
                            {project.visits}
                          </span>
                          <span className="text-green-400">
                            {project.conversions}
                          </span>
                        </div>
                        <span className="text-gray-500">{project.lastModified}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProjects.map(project => (
                  <div 
                    key={project.id} 
                    className="rounded-xl p-6 border transition-all duration-300"
                    style={{
                      background: 'linear-gradient(to right, rgba(63, 63, 70, 0.8), rgba(39, 39, 42, 0.8))',
                      borderColor: 'rgba(202, 138, 4, 0.3)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(202, 138, 4, 0.5)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(202, 138, 4, 0.3)';
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img 
                          src={project.industryIcon} 
                          alt={project.industry}
                          className="w-8 h-8"
                        />
                        <div>
                          <h3 className="font-bold text-white">{project.name}</h3>
                          <p className="text-gray-400 text-sm">{project.industry}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
                          {project.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${tierColors[project.tier]}`}>
                          {project.tier}
                        </span>
                        <div className="flex gap-4 text-sm">
                          <span className="text-gray-400">
                            <Users className="w-4 h-4 inline mr-1" />
                            {project.visits}
                          </span>
                          <span className="text-green-400">{project.conversions}</span>
                        </div>
                        <span className="text-gray-500">{project.lastModified}</span>
                        
                        <div className="flex gap-2">
                          <button className="p-2 text-gray-400 hover:text-white transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-white transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-white transition-colors">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sparky Assistant */}
            <div 
              className="rounded-xl p-6 border"
              style={{
                background: 'linear-gradient(to bottom right, rgba(63, 63, 70, 0.8), rgba(39, 39, 42, 0.8))',
                borderColor: 'rgba(202, 138, 4, 0.3)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/images/characters/sparky-helpful.png" 
                  alt="Sparky"
                  className="w-8 h-8"
                />
                <h3 className="font-bold text-white">Sparky's Guidance</h3>
              </div>
              
              <div className="space-y-3">
                <div 
                  className="border rounded-lg p-3"
                  style={{
                    background: 'rgba(202, 138, 4, 0.1)',
                    borderColor: 'rgba(202, 138, 4, 0.3)'
                  }}
                >
                  <p style={{ color: '#FBBF24' }} className="text-sm">
                    💡 Your Artisan Bistro could benefit from warmer color tones to increase appetite appeal
                  </p>
                </div>
                <div className="bg-blue-900/30 border border-blue-800/50 rounded-lg p-3">
                  <p className="text-blue-300 text-sm">
                    📊 FlowMetrics SaaS is performing well - consider A/B testing the CTA placement
                  </p>
                </div>
              </div>
              
              <button 
                className="w-full mt-4 text-white py-2 rounded-lg transition-all duration-200 text-sm font-medium"
                style={{
                  background: 'linear-gradient(to right, #CA8A04, #92400E)'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #B45309, #78350F)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #CA8A04, #92400E)';
                }}
              >
                Chat with Sparky
              </button>
            </div>

            {/* Recent Activity */}
            <div 
              className="rounded-xl p-6 border"
              style={{
                background: 'linear-gradient(to bottom right, rgba(63, 63, 70, 0.8), rgba(39, 39, 42, 0.8))',
                borderColor: 'rgba(202, 138, 4, 0.3)'
              }}
            >
              <h3 className="font-bold text-white mb-4">Divine Activity</h3>
              
              <div className="space-y-3">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="mt-1">{activity.icon}</div>
                    <div>
                      <p className="text-white text-sm">{activity.action}</p>
                      <p className="text-gray-400 text-xs">{activity.project}</p>
                      <p className="text-gray-500 text-xs">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div 
              className="rounded-xl p-6 border"
              style={{
                background: 'linear-gradient(to bottom right, rgba(63, 63, 70, 0.8), rgba(39, 39, 42, 0.8))',
                borderColor: 'rgba(202, 138, 4, 0.3)'
              }}
            >
              <h3 className="font-bold text-white mb-4">Sacred Tools</h3>
              
              <div className="space-y-3">
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition-colors flex items-center gap-2 justify-center">
                  <Sparkles className="w-4 h-4" />
                  AI Templates
                </button>
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition-colors flex items-center gap-2 justify-center">
                  <Zap className="w-4 h-4" />
                  Performance Analytics
                </button>
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition-colors flex items-center gap-2 justify-center">
                  <Download className="w-4 h-4" />
                  Export Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuorraDashboard;