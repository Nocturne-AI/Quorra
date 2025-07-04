import React, { useState } from 'react';
import { 
  Plus, Undo, Redo, Save, Eye, Download, Settings, Layers, 
  Type, Image, Square, Circle, Layout, Smartphone, Tablet, Monitor,
  Sparkles, Zap, Palette, AlignLeft, AlignCenter, AlignRight,
  Bold, Italic, Underline, MoreHorizontal, X, ChevronRight,
  MousePointer, Hand, Grid, Ruler, Code, Maximize2, Copy,
  RefreshCw, Lock, Unlock, EyeOff, ChevronLeft, PanelLeftClose,
  PanelRightClose, Menu, Home, FolderOpen, HelpCircle, LogOut,
  Play, ExternalLink, Minimize2
} from 'lucide-react';
import { QuorraLayout } from '../components/QuorraNavigation';
const QuorraEditorLight = () => {
  const [selectedTool, setSelectedTool] = useState('select');
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [viewMode, setViewMode] = useState('desktop');
  const [showSparky, setShowSparky] = useState(true);
  const [showLayers, setShowLayers] = useState(true);
  const [showComponents, setShowComponents] = useState(true);
  const [showProperties, setShowProperties] = useState(true);
  const [showLeftToolbar, setShowLeftToolbar] = useState(true);
  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(false);
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false);
  const [canvasZoom, setCanvasZoom] = useState(80);

  const tools = [
    { id: 'select', icon: MousePointer, label: 'Select (V)' },
    { id: 'hand', icon: Hand, label: 'Pan (H)' },
    { id: 'text', icon: Type, label: 'Text (T)' },
    { id: 'image', icon: Image, label: 'Image (I)' },
    { id: 'rectangle', icon: Square, label: 'Rectangle (R)' },
    { id: 'circle', icon: Circle, label: 'Circle (O)' }
  ];

  const components = [
    {
      category: 'Divine Layouts',
      items: [
        { id: 'hero', name: 'Hero Section', icon: '🔥', blessed: true },
        { id: 'navbar', name: 'Sacred Navigation', icon: '⚡', blessed: true },
        { id: 'footer', name: 'Foundation', icon: '🗿', blessed: false },
        { id: 'grid', name: 'Divine Grid', icon: '◻️', blessed: true }
      ]
    },
    {
      category: 'Sacred Elements',
      items: [
        { id: 'button', name: 'Call-to-Action', icon: '🎯', blessed: true },
        { id: 'form', name: 'Lead Capture', icon: '📝', blessed: true },
        { id: 'testimonial', name: 'Social Proof', icon: '⭐', blessed: false },
        { id: 'pricing', name: 'Sacred Tiers', icon: '💎', blessed: true }
      ]
    },
    {
      category: 'Industry Blessed',
      items: [
        { id: 'appointment', name: 'Healthcare Booking', icon: '🏥', blessed: true },
        { id: 'menu', name: 'Restaurant Menu', icon: '🍽️', blessed: true },
        { id: 'portfolio', name: 'Creative Gallery', icon: '🎨', blessed: false },
        { id: 'ecommerce', name: 'Product Grid', icon: '🛍️', blessed: true }
      ]
    }
  ];

  const layers = [
    { id: 1, name: 'Hero Section', type: 'section', visible: true, locked: false },
    { id: 2, name: 'Divine Heading', type: 'text', visible: true, locked: false },
    { id: 3, name: 'Sacred CTA Button', type: 'button', visible: true, locked: false },
    { id: 4, name: 'Background Image', type: 'image', visible: true, locked: true },
    { id: 5, name: 'Navigation Bar', type: 'navigation', visible: true, locked: false }
  ];

  const sparkyTips = [
    {
      type: 'color',
      message: "I notice you're using healthcare colors. Shall I apply the healing blue palette that increases patient trust by 23%?",
      action: 'Apply Divine Colors'
    },
    {
      type: 'conversion',
      message: "Your CTA button could be more prominent. Healthcare sites perform better with larger, warmer action buttons.",
      action: 'Optimize Button'
    },
    {
      type: 'typography',
      message: "The font hierarchy could be improved for medical accessibility. Want me to apply the blessed typography scales?",
      action: 'Apply Sacred Fonts'
    }
  ];

  // Button click handlers
  const handlePreview = () => {
    console.log('Opening preview...');
    // In real app: window.open('/preview/' + projectId, '_blank');
  };

  const handleSave = () => {
    console.log('Saving project...');
    // In real app: saveProject(projectData);
  };

  const handleExport = () => {
    console.log('Exporting divine code...');
    // In real app: exportProject(projectData);
  };

  const handleHome = () => {
    console.log('Going to dashboard...');
    // In real app: router.push('/dashboard');
  };

  const handleProjects = () => {
    console.log('Opening projects...');
    // In real app: router.push('/projects');
  };

  const handleHelp = () => {
    console.log('Opening help...');
    // In real app: openHelpModal();
  };

  const handleViewCSS = () => {
    console.log('Viewing generated CSS...');
    // In real app: openCSSModal(selectedComponent);
  };

  // Bronze color constant
  const BRONZE = '#CD7F32';
  const BRONZE_DARK = '#B8860B';

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#BABABA' }}>
      {/* Top Header - Light silver theme */}
      <header className="border-b shadow-sm px-4 py-3 flex items-center justify-between" style={{ backgroundColor: '#C8C8C8', borderColor: '#A8A8A8' }}>
        <div className="flex items-center gap-4">
          {/* Menu and navigation */}
          <div className="flex items-center gap-2">
            <button 
              onClick={handleHome}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-colors"
              title="Dashboard"
            >
              <Home className="w-5 h-5" />
            </button>
            <button 
              onClick={handleProjects}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-colors"
              title="Projects"
            >
              <FolderOpen className="w-5 h-5" />
            </button>
          </div>

          <div className="w-px h-6" style={{ backgroundColor: '#A8A8A8' }}></div>

          <div className="flex items-center gap-3">
            <img 
              src="/images/logos/quorra-logo-light.png" 
              alt="QUORRA"
              className="w-8 h-8"
            />
            <div>
              <h1 className="text-gray-900 font-semibold text-sm">Divine Dental Practice</h1>
              <p className="text-gray-600 text-xs">Healthcare Website</p>
            </div>
          </div>
          
          <div className="flex items-center gap-1 rounded-lg p-1" style={{ backgroundColor: '#B0B0B0' }}>
            <button
              onClick={() => setViewMode('desktop')}
              className={`p-2 rounded transition-all ${
                viewMode === 'desktop' 
                  ? 'text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              style={{
                backgroundColor: viewMode === 'desktop' ? BRONZE : 'transparent'
              }}
              title="Desktop View"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('tablet')}
              className={`p-2 rounded transition-all ${
                viewMode === 'tablet' 
                  ? 'text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              style={{
                backgroundColor: viewMode === 'tablet' ? BRONZE : 'transparent'
              }}
              title="Tablet View"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`p-2 rounded transition-all ${
                viewMode === 'mobile' 
                  ? 'text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              style={{
                backgroundColor: viewMode === 'mobile' ? BRONZE : 'transparent'
              }}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowLeftToolbar(!showLeftToolbar)}
            className="p-2 text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-colors"
            title="Toggle Tools"
          >
            <Layout className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setShowProperties(!showProperties)}
            className="p-2 text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-colors"
            title="Toggle Properties"
          >
            <Settings className="w-5 h-5" />
          </button>
          
          <div className="w-px h-6 mx-2" style={{ backgroundColor: '#A8A8A8' }}></div>
          
          <button 
            className="p-2 text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-colors"
            title="Undo (Ctrl+Z)"
          >
            <Undo className="w-5 h-5" />
          </button>
          <button 
            className="p-2 text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-colors"
            title="Redo (Ctrl+Y)"
          >
            <Redo className="w-5 h-5" />
          </button>
          
          <div className="w-px h-6 mx-2" style={{ backgroundColor: '#A8A8A8' }}></div>

          <button 
            onClick={handleHelp}
            className="p-2 text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-colors"
            title="Help"
          >
            <HelpCircle className="w-5 h-5" />
          </button>
          
          <div className="w-px h-6 mx-2" style={{ backgroundColor: '#A8A8A8' }}></div>
          
          <button 
            onClick={handlePreview}
            className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium shadow-sm"
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button 
            onClick={handleSave}
            className="text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium shadow-sm"
            style={{ backgroundColor: BRONZE }}
            onMouseEnter={(e) => e.target.style.backgroundColor = BRONZE_DARK}
            onMouseLeave={(e) => e.target.style.backgroundColor = BRONZE}
          >
            <Save className="w-4 h-4" />
            Save
          </button>
          <button 
            onClick={handleExport}
            className="bg-gradient-to-r text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium shadow-sm"
            style={{ backgroundImage: `linear-gradient(to right, ${BRONZE}, #FF8C42)` }}
          >
            <Download className="w-4 h-4" />
            Export Divine Code
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Tools */}
        {showLeftToolbar && (
          <div className="w-16 border-r flex flex-col shadow-sm" style={{ backgroundColor: '#C8C8C8', borderColor: '#A8A8A8' }}>
            <div className="p-2 space-y-1">
              {tools.map(tool => (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    selectedTool === tool.id 
                      ? 'text-white' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-white/50'
                  }`}
                  style={{
                    backgroundColor: selectedTool === tool.id ? BRONZE : 'transparent'
                  }}
                  title={tool.label}
                >
                  <tool.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
            
            <div className="mt-auto p-2 space-y-1 border-t" style={{ borderColor: '#A8A8A8' }}>
              <button 
                onClick={() => setShowComponents(!showComponents)}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                  showComponents ? 'text-white' : 'text-gray-700 hover:text-gray-900 hover:bg-white/50'
                }`}
                style={{
                  backgroundColor: showComponents ? BRONZE : 'transparent'
                }}
                title="Components Panel"
              >
                <Layout className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setShowLayers(!showLayers)}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                  showLayers ? 'text-white' : 'text-gray-700 hover:text-gray-900 hover:bg-white/50'
                }`}
                style={{
                  backgroundColor: showLayers ? BRONZE : 'transparent'
                }}
                title="Layers Panel"
              >
                <Layers className="w-5 h-5" />
              </button>
              <button 
                className="w-12 h-12 rounded-lg flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-white/50 transition-colors"
                title="Toggle Grid"
              >
                <Grid className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Components Panel - Collapsible */}
        {showComponents && (
          <div className={`${leftPanelCollapsed ? 'w-12' : 'w-64'} border-r transition-all duration-300 flex flex-col shadow-sm`} style={{ backgroundColor: '#C8C8C8', borderColor: '#A8A8A8' }}>
            {!leftPanelCollapsed ? (
              <div className="flex-1 overflow-y-auto">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-900 font-semibold flex items-center gap-2">
                      <Layout className="w-5 h-5" style={{ color: BRONZE }} />
                      Divine Components
                    </h3>
                    <button
                      onClick={() => setLeftPanelCollapsed(true)}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      title="Collapse Panel"
                    >
                      <PanelLeftClose className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {components.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-6">
                      <h4 className="text-gray-700 text-sm font-medium mb-3">{category.category}</h4>
                      <div className="space-y-2">
                        {category.items.map(item => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between p-3 bg-white/50 hover:bg-white rounded-lg cursor-pointer transition-colors group shadow-sm"
                            draggable
                            onDragStart={(e) => {
                              e.dataTransfer.setData('componentId', item.id);
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-lg">{item.icon}</span>
                              <span className="text-gray-900 text-sm">{item.name}</span>
                            </div>
                            {item.blessed && (
                              <Sparkles className="w-4 h-4" style={{ color: BRONZE }} title="AI Blessed" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center py-4">
                <button
                  onClick={() => setLeftPanelCollapsed(false)}
                  className="text-gray-600 hover:text-gray-900 transition-colors mb-4"
                  title="Expand Panel"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="writing-mode-vertical text-gray-600 text-sm" style={{ writingMode: 'vertical-rl' }}>
                  Components
                </div>
              </div>
            )}
          </div>
        )}

        {/* Canvas Area */}
        <div className="flex-1 relative overflow-hidden" style={{ backgroundColor: '#B0B0B0' }}>
          {/* Canvas Container */}
          <div className="absolute inset-4 rounded-lg shadow-xl overflow-hidden" style={{ backgroundColor: '#D0D0D0' }}>
            {/* Rulers */}
            <div className="absolute top-0 left-6 right-0 h-6 border-b flex items-center text-xs text-gray-700" style={{ backgroundColor: '#D8D8D8', borderColor: '#B0B0B0' }}>
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="flex-1 relative">
                  <div className="absolute bottom-0 left-0 w-px h-2" style={{ backgroundColor: '#A8A8A8' }}></div>
                  {i % 2 === 0 && <span className="absolute bottom-0 left-1 text-[10px]">{i * 100}</span>}
                </div>
              ))}
            </div>
            <div className="absolute top-6 left-0 bottom-0 w-6 border-r flex flex-col items-center text-xs text-gray-700" style={{ backgroundColor: '#D8D8D8', borderColor: '#B0B0B0' }}>
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="flex-1 relative w-full">
                  <div className="absolute right-0 top-0 h-px w-2" style={{ backgroundColor: '#A8A8A8' }}></div>
                </div>
              ))}
            </div>

            {/* Main Canvas */}
            <div 
              className={`absolute top-6 left-6 bg-white overflow-hidden transition-all duration-300 rounded-lg ${
                viewMode === 'desktop' ? 'w-[1200px] h-[800px]' :
                viewMode === 'tablet' ? 'w-[768px] h-[1024px]' :
                'w-[375px] h-[667px]'
              }`}
              style={{ 
                transform: `scale(${canvasZoom / 100})`,
                transformOrigin: 'top left',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.08)'
              }}
              onDrop={(e) => {
                e.preventDefault();
                const componentId = e.dataTransfer.getData('componentId');
                console.log('Dropped component:', componentId);
                // Handle component drop
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              {/* Sample Website Content */}
              <div className="h-full overflow-y-auto">
                {/* Navigation */}
                <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                      DD
                    </div>
                    <span className="font-semibold text-gray-900">Divine Dental</span>
                  </div>
                  <div className="hidden md:flex gap-8">
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Services</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
                  </div>
                  <button className="bg-gradient-to-r text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all" style={{ backgroundImage: `linear-gradient(to right, ${BRONZE}, #FF8C42)` }}>
                    Book Appointment
                  </button>
                </nav>

                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 px-8">
                  <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                      Divine Dental Care
                    </h1>
                    <p className="text-xl text-gray-700 mb-8">
                      Compassionate dentistry blessed with modern technology
                    </p>
                    <button className="bg-gradient-to-r text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105" style={{ backgroundImage: `linear-gradient(to right, ${BRONZE}, #FF8C42)` }}>
                      Schedule Your Visit
                    </button>
                  </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 px-8 bg-gray-50">
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Sacred Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${BRONZE}20` }}>
                          <span className="text-2xl">🦷</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">General Dentistry</h3>
                        <p className="text-gray-600">Comprehensive oral health care</p>
                      </div>
                      <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${BRONZE}20` }}>
                          <span className="text-2xl">✨</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Cosmetic Dentistry</h3>
                        <p className="text-gray-600">Enhance your divine smile</p>
                      </div>
                      <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${BRONZE}20` }}>
                          <span className="text-2xl">🔬</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">Advanced Care</h3>
                        <p className="text-gray-600">State-of-the-art treatments</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Selection Outline */}
              {selectedComponent && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-32 left-8 right-8 h-64 border-2 rounded-lg" style={{ borderColor: BRONZE, backgroundColor: `${BRONZE}10` }}>
                    <div className="absolute -top-6 left-0 text-white px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: BRONZE }}>
                      Hero Section
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-white border-2 rounded-full cursor-nwse-resize" style={{ borderColor: BRONZE }}></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white border-2 rounded-full cursor-nwse-resize" style={{ borderColor: BRONZE }}></div>
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-white border-2 rounded-full cursor-nwse-resize" style={{ borderColor: BRONZE }}></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white border-2 rounded-full cursor-nwse-resize" style={{ borderColor: BRONZE }}></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Canvas Tools - Floating */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center gap-2 border" style={{ borderColor: '#A8A8A8' }}>
            <button 
              onClick={() => setCanvasZoom(Math.max(25, canvasZoom - 10))}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded transition-all"
              title="Zoom Out"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
            <div className="w-px h-6" style={{ backgroundColor: '#D0D0D0' }}></div>
            <span className="text-sm text-gray-700 font-medium px-2 min-w-[50px] text-center">{canvasZoom}%</span>
            <div className="w-px h-6" style={{ backgroundColor: '#D0D0D0' }}></div>
            <button 
              onClick={() => setCanvasZoom(Math.min(200, canvasZoom + 10))}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded transition-all"
              title="Zoom In"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <div className="w-px h-6" style={{ backgroundColor: '#D0D0D0' }}></div>
            <button 
              onClick={() => setCanvasZoom(100)}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded transition-all"
              title="Reset Zoom"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Sidebar - Properties & Sparky - Collapsible */}
        {showProperties && (
          <div className={`${rightPanelCollapsed ? 'w-12' : 'w-80'} border-l transition-all duration-300 flex flex-col shadow-sm`} style={{ backgroundColor: '#C8C8C8', borderColor: '#A8A8A8' }}>
            {!rightPanelCollapsed ? (
              <>
                {/* Sparky Panel */}
                {showSparky && (
                  <div className="border-b p-4" style={{ borderColor: '#A8A8A8', backgroundColor: '#D0D0D0' }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <img 
                          src="/images/sparky-ai-helpful.png" 
                          alt="Sparky"
                          className="w-6 h-6"
                        />
                        <h3 className="text-gray-900 font-semibold">Sparky's Guidance</h3>
                      </div>
                      <button 
                        onClick={() => setShowSparky(false)}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        title="Hide Sparky"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-3">
                      {sparkyTips.map((tip, index) => (
                        <div key={index} className="bg-white/70 rounded-lg p-3 shadow-sm">
                          <p className="text-gray-700 text-sm mb-2">{tip.message}</p>
                          <button 
                            className="text-white px-3 py-1 rounded text-xs transition-colors"
                            style={{ backgroundColor: BRONZE }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = BRONZE_DARK}
                            onMouseLeave={(e) => e.target.style.backgroundColor = BRONZE}
                          >
                            {tip.action}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Properties Panel */}
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-900 font-semibold flex items-center gap-2">
                      <Settings className="w-5 h-5" style={{ color: BRONZE }} />
                      Divine Properties
                    </h3>
                    <div className="flex items-center gap-2">
                      {!showSparky && (
                        <button 
                          onClick={() => setShowSparky(true)}
                          className="text-gray-600 transition-colors"
                          style={{ hover: { color: BRONZE } }}
                          title="Show Sparky"
                        >
                          <Sparkles className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => setRightPanelCollapsed(true)}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        title="Collapse Panel"
                      >
                        <PanelRightClose className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {selectedComponent ? (
                    <div className="space-y-4">
                      <div>
                        <label className="text-gray-700 text-sm block mb-2">Background</label>
                        <select className="w-full bg-white border border-gray-400 text-gray-900 rounded-lg px-3 py-2">
                          <option>Gradient</option>
                          <option>Solid Color</option>
                          <option>Image</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-gray-700 text-sm block mb-2">Padding</label>
                        <input 
                          type="text" 
                          value="80px"
                          className="w-full bg-white border border-gray-400 text-gray-900 rounded-lg px-3 py-2"
                        />
                      </div>
                      <div>
                        <label className="text-gray-700 text-sm block mb-2">Text Align</label>
                        <div className="flex gap-1">
                          <button className="flex-1 p-2 bg-white text-gray-700 rounded transition-colors border border-gray-400" style={{ ':hover': { backgroundColor: `${BRONZE}20` } }}>
                            <AlignLeft className="w-4 h-4 mx-auto" />
                          </button>
                          <button className="flex-1 p-2 text-white rounded" style={{ backgroundColor: BRONZE }}>
                            <AlignCenter className="w-4 h-4 mx-auto" />
                          </button>
                          <button className="flex-1 p-2 bg-white text-gray-700 rounded transition-colors border border-gray-400" style={{ ':hover': { backgroundColor: `${BRONZE}20` } }}>
                            <AlignRight className="w-4 h-4 mx-auto" />
                          </button>
                        </div>
                      </div>
                      <div className="pt-4 border-t" style={{ borderColor: '#A8A8A8' }}>
                        <button 
                          onClick={handleViewCSS}
                          className="w-full bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm border border-gray-400"
                        >
                          <Code className="w-4 h-4" />
                          View Generated CSS
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-600 py-8">
                      <Layout className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Select an element to see its divine properties</p>
                    </div>
                  )}
                </div>

                {/* Layers Panel */}
                {showLayers && (
                  <div className="border-t p-4" style={{ borderColor: '#A8A8A8' }}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-gray-900 font-semibold flex items-center gap-2">
                        <Layers className="w-5 h-5" style={{ color: BRONZE }} />
                        Sacred Layers
                      </h3>
                      <button 
                        onClick={() => setShowLayers(false)}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        title="Hide Layers"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-1">
                      {layers.map(layer => (
                        <div 
                          key={layer.id} 
                          className={`flex items-center gap-2 p-2 rounded hover:bg-white/50 transition-colors cursor-pointer ${
                            selectedComponent === layer.id ? '' : ''
                          }`}
                          style={{
                            backgroundColor: selectedComponent === layer.id ? `${BRONZE}20` : 'transparent'
                          }}
                          onClick={() => setSelectedComponent(layer.id)}
                        >
                          <button 
                            className={`text-gray-600 hover:text-gray-900 transition-colors ${
                              !layer.visible && 'text-gray-400'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              // Toggle layer visibility
                            }}
                          >
                            {layer.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          </button>
                          <span className={`text-gray-900 text-sm flex-1 ${
                            !layer.visible && 'opacity-50'
                          }`}>
                            {layer.name}
                          </span>
                          <span className="text-gray-600 text-xs">{layer.type}</span>
                          <button 
                            className="text-gray-600 hover:text-gray-900"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Toggle layer lock
                            }}
                          >
                            {layer.locked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center py-4">
                <button
                  onClick={() => setRightPanelCollapsed(false)}
                  className="text-gray-600 hover:text-gray-900 transition-colors mb-4"
                  title="Expand Panel"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="writing-mode-vertical text-gray-600 text-sm" style={{ writingMode: 'vertical-rl' }}>
                  Properties
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuorraEditorLight;