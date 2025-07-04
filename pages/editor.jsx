import React, { useState, useEffect } from 'react';
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

const QuorraEditor = () => {
  // Core editor state
  const [selectedTool, setSelectedTool] = useState('select');
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [viewMode, setViewMode] = useState('desktop');
  const [canvasZoom, setCanvasZoom] = useState(80);
  
  // Panel states
  const [showSparky, setShowSparky] = useState(true);
  const [showLayers, setShowLayers] = useState(true);
  const [showComponents, setShowComponents] = useState(true);
  const [showProperties, setShowProperties] = useState(true);
  const [showLeftToolbar, setShowLeftToolbar] = useState(true);
  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(false);
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false);

  // Template and project state
  const [loadedTemplate, setLoadedTemplate] = useState(null);
  const [projectData, setProjectData] = useState({
    name: 'Untitled Project',
    industry: 'general',
    template: null,
    components: [],
    styles: {}
  });

  // Color constants
  const BRONZE = '#CD7F32';
  const BRONZE_DARK = '#B8860B';

  // Template loading effect
  useEffect(() => {
    const storedTemplate = localStorage.getItem('selectedTemplate');
    if (storedTemplate) {
      try {
        const template = JSON.parse(storedTemplate);
        console.log('🔥 Loading template into editor:', template);
        loadTemplateIntoEditor(template);
        localStorage.removeItem('selectedTemplate');
      } catch (error) {
        console.error('Failed to load template:', error);
      }
    }
  }, []);

  // Template loading function
  const loadTemplateIntoEditor = (template) => {
    setLoadedTemplate(template);
    setProjectData(prev => ({
      ...prev,
      name: template.name || 'Divine Website',
      industry: template.industry || 'general',
      template: template
    }));
    console.log('✨ Template loaded successfully!', template);
  };

  // Tools configuration
  const tools = [
    { id: 'select', icon: MousePointer, label: 'Select (V)' },
    { id: 'hand', icon: Hand, label: 'Pan (H)' },
    { id: 'text', icon: Type, label: 'Text (T)' },
    { id: 'image', icon: Image, label: 'Image (I)' },
    { id: 'rectangle', icon: Square, label: 'Rectangle (R)' },
    { id: 'circle', icon: Circle, label: 'Circle (O)' }
  ];

  // Components configuration
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

  // Layers configuration
  const layers = [
    { id: 1, name: 'Hero Section', type: 'section', visible: true, locked: false },
    { id: 2, name: 'Divine Heading', type: 'text', visible: true, locked: false },
    { id: 3, name: 'Sacred CTA Button', type: 'button', visible: true, locked: false },
    { id: 4, name: 'Background Image', type: 'image', visible: true, locked: true },
    { id: 5, name: 'Navigation Bar', type: 'navigation', visible: true, locked: false }
  ];

  // Sparky tips based on loaded template
  const getSparkyTips = () => {
    if (!loadedTemplate) {
      return [
        {
          type: 'welcome',
          message: "Welcome to the divine editor! Start by adding components or load a template from the templates page.",
          action: 'Get Started'
        }
      ];
    }

    const industryTips = {
      healthcare: [
        {
          type: 'color',
          message: `Perfect! I've detected your ${loadedTemplate.industry} template. Shall I apply the healing blue palette that increases patient trust by 23%?`,
          action: 'Apply Healthcare Colors'
        },
        {
          type: 'conversion',
          message: "Your appointment booking button should be more prominent. Healthcare sites perform better with larger, warmer action buttons.",
          action: 'Optimize Booking Button'
        }
      ],
      restaurant: [
        {
          type: 'color',
          message: `Excellent choice! Your ${loadedTemplate.industry} template is ready. Want me to apply appetite-stimulating warm colors?`,
          action: 'Apply Restaurant Palette'
        },
        {
          type: 'conversion',
          message: "Food photos should be larger and more prominent. Restaurant sites need strong visual appetite appeal.",
          action: 'Enhance Food Gallery'
        }
      ],
      technology: [
        {
          type: 'color',
          message: `Your ${loadedTemplate.industry} template is loaded! Shall I apply the innovation-focused blue palette for tech trust?`,
          action: 'Apply Tech Colors'
        },
        {
          type: 'conversion',
          message: "Your 'Start Free Trial' button should be more prominent. SaaS sites need clear trial-to-paid conversion paths.",
          action: 'Optimize Trial Button'
        }
      ]
    };

    return industryTips[loadedTemplate.industry] || industryTips.healthcare;
  };

  // Click handlers with proper navigation
  const handleHome = () => {
    console.log('Navigating to dashboard...');
    window.location.href = '/';
  };

  const handleProjects = () => {
    console.log('Opening projects...');
    window.location.href = '/projects';
  };

  const handleTemplates = () => {
    console.log('Opening templates...');
    window.location.href = '/templatespage';
  };

  const handlePreview = () => {
    console.log('Opening preview...');
    // Generate preview URL and open in new tab
    const previewData = {
      template: loadedTemplate,
      project: projectData,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('previewData', JSON.stringify(previewData));
    window.open('/preview', '_blank');
  };

  const handleSave = () => {
    console.log('Saving project...', projectData);
    // In real app: saveProjectToDatabase(projectData)
    alert('Project saved successfully!');
  };

  const handleExport = () => {
    console.log('Exporting divine code...', projectData);
    // Generate and download clean CSS/HTML
    const cssCode = generateCleanCSS();
    const htmlCode = generateSemanticHTML();
    
    // Create downloadable files
    downloadFile('divine-website.html', htmlCode);
    downloadFile('divine-styles.css', cssCode);
    
    alert('Divine code exported successfully!');
  };

  const handleHelp = () => {
    console.log('Opening help...');
    window.open('/help', '_blank');
  };

  const handleViewCSS = () => {
    console.log('Viewing generated CSS for:', selectedComponent);
    const cssPreview = generateComponentCSS(selectedComponent);
    alert(`Generated CSS:\n\n${cssPreview}`);
  };

  // Tool handlers
  const handleToolSelect = (toolId) => {
    setSelectedTool(toolId);
    console.log('Selected tool:', toolId);
  };

  const handleComponentDrop = (e) => {
    e.preventDefault();
    const componentId = e.dataTransfer.getData('componentId');
    console.log('Adding component to canvas:', componentId);
    
    // Add component to project
    const newComponent = {
      id: Date.now(),
      type: componentId,
      x: e.clientX,
      y: e.clientY,
      properties: getDefaultComponentProperties(componentId)
    };
    
    setProjectData(prev => ({
      ...prev,
      components: [...prev.components, newComponent]
    }));
  };

  const handleComponentSelect = (componentId) => {
    setSelectedComponent(componentId);
    console.log('Selected component:', componentId);
  };

  const handleSparkyAction = (action) => {
    console.log('Sparky action:', action);
    
    switch (action) {
      case 'Apply Healthcare Colors':
        applyHealthcareColors();
        break;
      case 'Apply Restaurant Palette':
        applyRestaurantColors();
        break;
      case 'Apply Tech Colors':
        applyTechColors();
        break;
      case 'Optimize Booking Button':
        optimizeBookingButton();
        break;
      default:
        console.log('Sparky action not implemented:', action);
    }
  };

  // Helper functions
  const getDefaultComponentProperties = (componentType) => {
    const defaults = {
      hero: { background: 'gradient', padding: '80px', textAlign: 'center' },
      navbar: { background: 'white', padding: '16px', sticky: true },
      button: { background: BRONZE, color: 'white', padding: '12px 24px' },
      form: { background: 'white', border: '1px solid #ccc', padding: '24px' }
    };
    return defaults[componentType] || {};
  };

  const applyHealthcareColors = () => {
    console.log('Applying healthcare color palette...');
    setProjectData(prev => ({
      ...prev,
      styles: {
        ...prev.styles,
        primaryColor: '#2563EB',
        secondaryColor: '#FFBE98',
        backgroundColor: '#F8FAFC'
      }
    }));
  };

  const applyRestaurantColors = () => {
    console.log('Applying restaurant color palette...');
    setProjectData(prev => ({
      ...prev,
      styles: {
        ...prev.styles,
        primaryColor: '#92400E',
        secondaryColor: '#F97316',
        backgroundColor: '#FDF4DC'
      }
    }));
  };

  const applyTechColors = () => {
    console.log('Applying technology color palette...');
    setProjectData(prev => ({
      ...prev,
      styles: {
        ...prev.styles,
        primaryColor: '#6366F1',
        secondaryColor: '#06B6D4',
        backgroundColor: '#FFFFFF'
      }
    }));
  };

  const optimizeBookingButton = () => {
    console.log('Optimizing booking button...');
    // Find and update CTA buttons
    setProjectData(prev => ({
      ...prev,
      components: prev.components.map(comp => 
        comp.type === 'button' 
          ? { ...comp, properties: { ...comp.properties, size: 'large', prominence: 'high' }}
          : comp
      )
    }));
  };

  const generateCleanCSS = () => {
    return `/* QUORRA Generated CSS - Blessed by Divine Fire */
.hero-section {
  background: linear-gradient(135deg, ${projectData.styles.primaryColor || BRONZE}, ${projectData.styles.secondaryColor || '#FF8C42'});
  padding: 80px 20px;
  text-align: center;
  color: white;
}

.sacred-button {
  background: linear-gradient(to right, ${BRONZE}, #FF8C42);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sacred-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(205, 127, 50, 0.3);
}

/* Clean, semantic CSS - No framework bloat */`;
  };

  const generateSemanticHTML = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectData.name}</title>
    <link rel="stylesheet" href="divine-styles.css">
</head>
<body>
    <header>
        <nav class="sacred-navigation">
            <!-- Navigation blessed by QUORRA -->
        </nav>
    </header>
    
    <main>
        <section class="hero-section">
            <h1>Divine Website</h1>
            <button class="sacred-button">Get Started</button>
        </section>
    </main>
    
    <!-- Generated by QUORRA - Channel the Divine Fire -->
</body>
</html>`;
  };

  const generateComponentCSS = (componentId) => {
    return `.component-${componentId} {
  /* Divine CSS for component ${componentId} */
  background: ${projectData.styles.primaryColor || BRONZE};
  padding: 16px;
  border-radius: 8px;
}`;
  };

  const downloadFile = (filename, content) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-300">
      {/* Top Header */}
      <header 
        className="border-b shadow-sm px-4 py-3 flex items-center justify-between bg-gray-200 border-gray-400"
      >
        <div className="flex items-center gap-4">
          {/* Navigation */}
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
            <button 
              onClick={handleTemplates}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-colors"
              title="Templates"
            >
              <Layout className="w-5 h-5" />
            </button>
          </div>

          <div className="w-px h-6 bg-gray-400"></div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">Q</span>
            </div>
            <div>
              <h1 className="text-gray-900 font-semibold text-sm">
                {loadedTemplate ? loadedTemplate.name : projectData.name}
              </h1>
              <p className="text-gray-600 text-xs">
                {loadedTemplate ? `${loadedTemplate.industry} Website` : 'Divine Website'}
              </p>
            </div>
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 rounded-lg p-1 bg-gray-300">
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

        {/* Header Actions */}
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
          
          <div className="w-px h-6 mx-2 bg-gray-400"></div>
          
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
          
          <div className="w-px h-6 mx-2 bg-gray-400"></div>

          <button 
            onClick={handleHelp}
            className="p-2 text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-colors"
            title="Help"
          >
            <HelpCircle className="w-5 h-5" />
          </button>
          
          <div className="w-px h-6 mx-2 bg-gray-400"></div>
          
          <button 
            onClick={handlePreview}
            className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium shadow-sm"
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button 
            onClick={handleSave}
            className="text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium shadow-sm hover:opacity-90"
            style={{ backgroundColor: BRONZE }}
          >
            <Save className="w-4 h-4" />
            Save
          </button>
          <button 
            onClick={handleExport}
            className="bg-gradient-to-r text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium shadow-sm hover:scale-105"
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
          <div className="w-16 border-r flex flex-col shadow-sm bg-gray-200 border-gray-400">
            <div className="p-2 space-y-1">
              {tools.map(tool => (
                <button
                  key={tool.id}
                  onClick={() => handleToolSelect(tool.id)}
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
            
            <div className="mt-auto p-2 space-y-1 border-t border-gray-400">
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
            </div>
          </div>
        )}

        {/* Components Panel */}
        {showComponents && (
          <div className={`${leftPanelCollapsed ? 'w-12' : 'w-64'} border-r transition-all duration-300 flex flex-col shadow-sm bg-gray-200 border-gray-400`}>
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
                            onClick={() => console.log('Adding component:', item.id)}
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
              </div>
            )}
          </div>
        )}

        {/* Canvas Area */}
        <div className="flex-1 relative overflow-hidden bg-gray-300">
          <div className="absolute inset-4 rounded-lg shadow-xl overflow-hidden bg-gray-400">
            {/* Canvas */}
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
              onDrop={handleComponentDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              {/* Website Content */}
              <div className="h-full overflow-y-auto">
                {/* Navigation */}
                <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {loadedTemplate ? loadedTemplate.industry.charAt(0).toUpperCase() : 'Q'}
                    </div>
                    <span className="font-semibold text-gray-900">
                      {loadedTemplate ? loadedTemplate.name : 'Divine Website'}
                    </span>
                  </div>
                  <div className="hidden md:flex gap-8">
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Services</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
                  </div>
                  <button 
                    className="text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
                    style={{ backgroundColor: projectData.styles?.primaryColor || BRONZE }}
                  >
                    {loadedTemplate?.industry === 'healthcare' ? 'Book Appointment' :
                     loadedTemplate?.industry === 'restaurant' ? 'Make Reservation' :
                     loadedTemplate?.industry === 'technology' ? 'Start Free Trial' :
                     'Get Started'}
                  </button>
                </nav>

                {/* Hero Section */}
                <section 
                  className="py-20 px-8"
                  style={{ 
                    background: `linear-gradient(135deg, ${projectData.styles?.primaryColor || BRONZE}, ${projectData.styles?.secondaryColor || '#FF8C42'})` 
                  }}
                  onClick={() => handleComponentSelect('hero')}
                >
                  <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-5xl font-bold mb-6">
                      {loadedTemplate ? loadedTemplate.name : 'Divine Website'}
                    </h1>
                    <p className="text-xl mb-8">
                      {loadedTemplate ? `${loadedTemplate.style} blessed with divine intelligence` : 'Blessed by the divine fire'}
                    </p>
                    <button 
                      className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
                    >
                      {loadedTemplate?.industry === 'healthcare' ? 'Schedule Your Visit' :
                       loadedTemplate?.industry === 'restaurant' ? 'View Our Menu' :
                       loadedTemplate?.industry === 'technology' ? 'Start Your Trial' :
                       'Get Started'}
                    </button>
                  </div>
                </section>

                {/* Content Section */}
                <section className="py-16 px-8 bg-gray-50">
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                      {loadedTemplate?.industry === 'healthcare' ? 'Our Sacred Services' :
                       loadedTemplate?.industry === 'restaurant' ? 'Divine Cuisine' :
                       loadedTemplate?.industry === 'technology' ? 'Powerful Features' :
                       'Divine Features'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {Array.from({length: 3}).map((_, i) => (
                        <div key={i} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
                          <div 
                            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                            style={{ backgroundColor: `${projectData.styles?.primaryColor || BRONZE}20` }}
                          >
                            <span className="text-2xl">
                              {loadedTemplate?.industry === 'healthcare' ? ['🦷', '✨', '🔬'][i] :
                               loadedTemplate?.industry === 'restaurant' ? ['🍽️', '👨‍🍳', '🍷'][i] :
                               loadedTemplate?.industry === 'technology' ? ['💻', '⚡', '🔒'][i] :
                               ['🔥', '⚡', '✨'][i]}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900">Divine Feature {i + 1}</h3>
                          <p className="text-gray-600">Blessed by divine intelligence</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              {/* Selection Outline */}
              {selectedComponent && (
                <div className="absolute inset-0 pointer-events-none">
                  <div 
                    className="absolute top-32 left-8 right-8 h-64 border-2 rounded-lg"
                    style={{ 
                      borderColor: BRONZE, 
                      backgroundColor: `${BRONZE}10` 
                    }}
                  >
                    <div 
                      className="absolute -top-6 left-0 text-white px-2 py-1 rounded text-xs font-medium"
                      style={{ backgroundColor: BRONZE }}
                    >
                      {selectedComponent}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Canvas Controls */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center gap-2 border border-gray-400">
            <button 
              onClick={() => setCanvasZoom(Math.max(25, canvasZoom - 10))}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded transition-all"
              title="Zoom Out"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
            <span className="text-sm text-gray-700 font-medium px-2 min-w-[50px] text-center">{canvasZoom}%</span>
            <button 
              onClick={() => setCanvasZoom(Math.min(200, canvasZoom + 10))}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded transition-all"
              title="Zoom In"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Sidebar - Properties & Sparky */}
        {showProperties && (
          <div className={`${rightPanelCollapsed ? 'w-12' : 'w-80'} border-l transition-all duration-300 flex flex-col shadow-sm bg-gray-200 border-gray-400`}>
            {!rightPanelCollapsed ? (
              <>
                {/* Sparky Panel */}
                {showSparky && (
                  <div className="border-b p-4 border-gray-400 bg-gray-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✨</span>
                        </div>
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
                      {getSparkyTips().map((tip, index) => (
                        <div key={index} className="bg-white/70 rounded-lg p-3 shadow-sm">
                          <p className="text-gray-700 text-sm mb-2">{tip.message}</p>
                          <button 
                            onClick={() => handleSparkyAction(tip.action)}
                            className="text-white px-3 py-1 rounded text-xs transition-colors hover:opacity-90"
                            style={{ backgroundColor: BRONZE }}
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
                    <button
                      onClick={() => setRightPanelCollapsed(true)}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      title="Collapse Panel"
                    >
                      <PanelRightClose className="w-4 h-4" />
                    </button>
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
                          defaultValue="80px"
                          className="w-full bg-white border border-gray-400 text-gray-900 rounded-lg px-3 py-2"
                        />
                      </div>
                      <div className="pt-4 border-t border-gray-400">
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
                  <div className="border-t p-4 border-gray-400">
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
                          className={`flex items-center gap-2 p-2 rounded hover:bg-white/50 transition-colors cursor-pointer`}
                          style={{
                            backgroundColor: selectedComponent === layer.id ? `${BRONZE}20` : 'transparent'
                          }}
                          onClick={() => handleComponentSelect(layer.id)}
                        >
                          <button 
                            className={`text-gray-600 hover:text-gray-900 transition-colors ${
                              !layer.visible && 'text-gray-400'
                            }`}
                          >
                            {layer.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          </button>
                          <span className={`text-gray-900 text-sm flex-1 ${
                            !layer.visible && 'opacity-50'
                          }`}>
                            {layer.name}
                          </span>
                          <span className="text-gray-600 text-xs">{layer.type}</span>
                          <button className="text-gray-600 hover:text-gray-900">
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
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuorraEditor;