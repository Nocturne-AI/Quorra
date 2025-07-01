import React, { useState } from 'react';
import { 
  Plus, Undo, Redo, Save, Eye, Download, Settings, Layers, 
  Type, Image, Square, Circle, Layout, Smartphone, Tablet, Monitor,
  Sparkles, Zap, Palette, AlignLeft, AlignCenter, AlignRight,
  Bold, Italic, Underline, MoreHorizontal, X, ChevronRight,
  MousePointer, Hand, Grid, Ruler
} from 'lucide-react';

const QuorraEditor = () => {
  const [selectedTool, setSelectedTool] = useState('select');
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [viewMode, setViewMode] = useState('desktop'); // desktop, tablet, mobile
  const [showSparky, setShowSparky] = useState(true);
  const [showLayers, setShowLayers] = useState(true);
  const [showComponents, setShowComponents] = useState(true);
  const [showProperties, setShowProperties] = useState(true);
  const [showLeftToolbar, setShowLeftToolbar] = useState(true);

  const tools = [
    { id: 'select', icon: MousePointer, label: 'Select' },
    { id: 'hand', icon: Hand, label: 'Pan' },
    { id: 'text', icon: Type, label: 'Text' },
    { id: 'image', icon: Image, label: 'Image' },
    { id: 'rectangle', icon: Square, label: 'Rectangle' },
    { id: 'circle', icon: Circle, label: 'Circle' }
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
    { id: 4, name: 'Background Fire', type: 'image', visible: true, locked: true },
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

  const propertyPanels = {
    text: {
      font: 'Inter',
      size: '18px',
      weight: '400',
      color: '#ffffff',
      align: 'left'
    },
    button: {
      text: 'Sacred Action',
      style: 'gradient',
      size: 'large',
      color: 'orange-to-red'
    },
    section: {
      background: 'gradient',
      padding: '80px',
      margin: '0px'
    }
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col overflow-hidden">
      {/* Top Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img 
              src="/src/assets/images/logos/quorra-logo-dark.png" 
              alt="QUORRA"
              className="w-8 h-8"
            />
            <span className="text-white font-bold">Divine Dental Practice</span>
          </div>
          
          <div className="flex items-center gap-1 bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode('desktop')}
              className={`p-2 rounded ${viewMode === 'desktop' ? 'bg-orange-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('tablet')}
              className={`p-2 rounded ${viewMode === 'tablet' ? 'bg-orange-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`p-2 rounded ${viewMode === 'mobile' ? 'bg-orange-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowLeftToolbar(!showLeftToolbar)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            title="Toggle Tools"
          >
            <Layout className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setShowProperties(!showProperties)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            title="Toggle Properties"
          >
            <Settings className="w-5 h-5" />
          </button>
          
          <div className="w-px h-6 bg-gray-600 mx-2"></div>
          
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Undo className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Redo className="w-5 h-5" />
          </button>
          
          <div className="w-px h-6 bg-gray-600 mx-2"></div>
          
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save
          </button>
          <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Tools */}
        {showLeftToolbar && (
          <div className="w-16 bg-gray-800 border-r border-gray-700 flex flex-col">
            <div className="p-2 space-y-1">
              {tools.map(tool => (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    selectedTool === tool.id 
                      ? 'bg-orange-600 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                  title={tool.label}
                >
                  <tool.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
            
            <div className="mt-auto p-2 space-y-1">
              <button 
                onClick={() => setShowComponents(!showComponents)}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                  showComponents ? 'bg-orange-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
                title="Components"
              >
                <Layout className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setShowLayers(!showLayers)}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                  showLayers ? 'bg-orange-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
                title="Layers"
              >
                <Layers className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                <Grid className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Components Panel */}
        {showComponents && (
          <div className="w-64 bg-gray-800 border-r border-gray-700 overflow-y-auto">
            <div className="p-4">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Layout className="w-5 h-5 text-orange-400" />
                Divine Components
              </h3>
              
              {components.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-6">
                  <h4 className="text-gray-400 text-sm font-medium mb-3">{category.category}</h4>
                  <div className="space-y-2">
                    {category.items.map(item => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-gray-700 hover:bg-gray-600 rounded-lg cursor-pointer transition-colors group"
                        draggable
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-white text-sm">{item.name}</span>
                        </div>
                        {item.blessed && (
                          <Sparkles className="w-4 h-4 text-orange-400" title="AI Blessed" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Canvas Area */}
        <div className="flex-1 bg-gray-900 relative overflow-hidden">
          {/* Canvas Container */}
          <div className="absolute inset-4 bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Rulers */}
            <div className="absolute top-0 left-6 right-0 h-6 bg-gray-100 border-b border-gray-300 flex items-center text-xs text-gray-600">
              {/* Horizontal ruler marks */}
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="flex-1 relative">
                  <div className="absolute bottom-0 left-0 w-px h-2 bg-gray-400"></div>
                  <span className="absolute bottom-0 left-1 text-xs">{i * 100}</span>
                </div>
              ))}
            </div>
            <div className="absolute top-6 left-0 bottom-0 w-6 bg-gray-100 border-r border-gray-300 flex flex-col items-center text-xs text-gray-600">
              {/* Vertical ruler marks */}
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="flex-1 relative w-full">
                  <div className="absolute right-0 top-0 h-px w-2 bg-gray-400"></div>
                  <span className="absolute right-1 top-1 text-xs transform -rotate-90 origin-center">{i * 100}</span>
                </div>
              ))}
            </div>

            {/* Main Canvas */}
            <div 
              className={`absolute top-6 left-6 bg-white transition-all duration-300 ${
                viewMode === 'desktop' ? 'w-[1200px] h-[800px]' :
                viewMode === 'tablet' ? 'w-[768px] h-[1024px]' :
                'w-[375px] h-[667px]'
              }`}
              style={{ 
                transform: 'scale(0.8)',
                transformOrigin: 'top left'
              }}
            >
              {/* Sample Website Content */}
              <div className="h-full overflow-y-auto">
                {/* Navigation */}
                <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/src/assets/images/icons/industries/healthcare.png" 
                      alt="Healthcare"
                      className="w-8 h-8"
                    />
                    <span className="font-bold">Divine Dental</span>
                  </div>
                  <div className="hidden md:flex gap-6">
                    <a href="#" className="hover:text-orange-400">Services</a>
                    <a href="#" className="hover:text-orange-400">About</a>
                    <a href="#" className="hover:text-orange-400">Contact</a>
                  </div>
                  <button className="bg-gradient-to-r from-orange-600 to-red-600 px-4 py-2 rounded-lg">
                    Book Appointment
                  </button>
                </nav>

                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20 px-8">
                  <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                      Divine Dental Care
                    </h1>
                    <p className="text-xl text-gray-700 mb-8">
                      Compassionate dentistry blessed with modern technology
                    </p>
                    <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold">
                      Schedule Your Visit
                    </button>
                  </div>
                </section>

                {/* Services */}
                <section className="py-16 px-8">
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Sacred Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🦷</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">General Dentistry</h3>
                        <p className="text-gray-600">Comprehensive oral health care</p>
                      </div>
                      <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">✨</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Cosmetic Dentistry</h3>
                        <p className="text-gray-600">Enhance your divine smile</p>
                      </div>
                      <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🔬</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Advanced Care</h3>
                        <p className="text-gray-600">State-of-the-art treatments</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Selection Outline */}
              {selectedComponent && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-20 left-8 right-8 h-32 border-2 border-orange-500 rounded bg-orange-500/10">
                    <div className="absolute -top-6 left-0 bg-orange-500 text-white px-2 py-1 rounded text-xs">
                      Hero Section
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Properties & Sparky */}
        {showProperties && (
          <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
            {/* Sparky Panel */}
            {showSparky && (
              <div className="border-b border-gray-700 p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/src/assets/images/sparky-ai-helpful.png" 
                      alt="Sparky"
                      className="w-6 h-6"
                    />
                    <h3 className="text-white font-semibold">Sparky's Guidance</h3>
                  </div>
                  <button 
                    onClick={() => setShowSparky(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {sparkyTips.map((tip, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg p-3">
                      <p className="text-gray-300 text-sm mb-2">{tip.message}</p>
                      <button className="bg-orange-600 hover:bg-orange-500 text-white px-3 py-1 rounded text-xs transition-colors">
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
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <Settings className="w-5 h-5 text-orange-400" />
                  Divine Properties
                </h3>
                {!showSparky && (
                  <button 
                    onClick={() => setShowSparky(true)}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                    title="Show Sparky"
                  >
                    <Sparkles className="w-4 h-4" />
                  </button>
                )}
              </div>

              {selectedComponent ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">Background</label>
                    <select className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2">
                      <option>Gradient</option>
                      <option>Solid Color</option>
                      <option>Image</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">Padding</label>
                    <input 
                      type="text" 
                      value="80px"
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">Text Align</label>
                    <div className="flex gap-1">
                      <button className="flex-1 p-2 bg-gray-700 hover:bg-orange-600 text-white rounded transition-colors">
                        <AlignLeft className="w-4 h-4 mx-auto" />
                      </button>
                      <button className="flex-1 p-2 bg-orange-600 text-white rounded">
                        <AlignCenter className="w-4 h-4 mx-auto" />
                      </button>
                      <button className="flex-1 p-2 bg-gray-700 hover:bg-orange-600 text-white rounded transition-colors">
                        <AlignRight className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-400 py-8">
                  <Layout className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Select an element to see its divine properties</p>
                </div>
              )}
            </div>

            {/* Layers Panel */}
            {showLayers && (
              <div className="border-t border-gray-700 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold flex items-center gap-2">
                    <Layers className="w-5 h-5 text-orange-400" />
                    Sacred Layers
                  </h3>
                  <button 
                    onClick={() => setShowLayers(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-1">
                  {layers.map(layer => (
                    <div 
                      key={layer.id} 
                      className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition-colors cursor-pointer"
                      onClick={() => setSelectedComponent(layer.id)}
                    >
                      <button className="text-gray-400 hover:text-white">
                        <Eye className="w-4 h-4" />
                      </button>
                      <span className="text-white text-sm flex-1">{layer.name}</span>
                      <span className="text-gray-500 text-xs">{layer.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuorraEditor;