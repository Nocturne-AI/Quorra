/**
 * QUORRA Export Service
 * Sacred transformation of divine creations into mortal-realm formats
 * Handles HTML/CSS, ZIP files, and various export formats
 */

class ExportService {
  constructor() {
    this.supportedFormats = ['html', 'css', 'zip', 'json', 'pdf'];
    this.compressionLevel = 6; // 0-9, 6 is good balance
    this.maxFileSize = 50 * 1024 * 1024; // 50MB limit
    
    // Browser capability detection
    this.hasZipSupport = false;
    this.hasBlobSupport = typeof Blob !== 'undefined';
    this.hasDownloadSupport = typeof document !== 'undefined' && 
                              typeof document.createElement === 'function';
    
    this.initializeExportService();
    console.log('📤 Divine export service awakened - ready to deliver sacred creations');
  }

  /**
   * 🔧 Initialize Export Service
   * Sacred preparation for creation delivery
   */
  async initializeExportService() {
    try {
      // Check for required APIs
      this.hasZipSupport = await this.checkZipSupport();
      
      // Initialize file type handlers
      this.setupFileTypeHandlers();
      
      // Set up performance monitoring
      this.setupPerformanceMonitoring();
      
      console.log(`📤 Export capabilities: ZIP=${this.hasZipSupport}, Blob=${this.hasBlobSupport}, Download=${this.hasDownloadSupport}`);
    } catch (error) {
      console.error('❌ Export service initialization failed:', error);
    }
  }

  /**
   * 🔥 Main Export Method
   * Sacred delivery of divine creations
   */
  async exportProject(projectData, options = {}) {
    const startTime = performance.now();
    
    try {
      console.log(`📤 Exporting divine creation: ${projectData.name || 'Untitled'}`);
      
      // Validate inputs
      this.validateProjectData(projectData);
      this.validateExportOptions(options);
      
      const exportOptions = {
        format: 'zip',
        includeAssets: true,
        minify: true,
        addMetadata: true,
        fileName: null,
        addReadme: true,
        optimizeImages: false,
        ...options
      };
      
      // Generate file name if not provided
      if (!exportOptions.fileName) {
        exportOptions.fileName = this.generateFileName(projectData, exportOptions.format);
      }
      
      // Route to appropriate export handler
      let result;
      switch (exportOptions.format.toLowerCase()) {
        case 'html':
          result = await this.exportAsHTML(projectData, exportOptions);
          break;
        case 'css':
          result = await this.exportAsCSS(projectData, exportOptions);
          break;
        case 'zip':
          result = await this.exportAsZip(projectData, exportOptions);
          break;
        case 'json':
          result = await this.exportAsJSON(projectData, exportOptions);
          break;
        case 'pdf':
          result = await this.exportAsPDF(projectData, exportOptions);
          break;
        default:
          throw new Error(`Unsupported export format: ${exportOptions.format}`);
      }
      
      // Track performance
      const duration = performance.now() - startTime;
      console.log(`✨ Export completed in ${duration.toFixed(2)}ms`);
      
      // Track export
      this.trackExport(projectData, exportOptions, result, duration);
      
      return result;
    } catch (error) {
      console.error('❌ Divine export failed:', error);
      return this.handleExportError(error, projectData, options);
    }
  }

  /**
   * 🌐 HTML Export
   * Sacred web page creation
   */
  async exportAsHTML(projectData, options) {
    console.log('🌐 Forging sacred HTML document...');
    
    try {
      const htmlContent = this.generateHTMLDocument(projectData, options);
      
      if (!this.hasBlobSupport) {
        throw new Error('Blob support not available');
      }
      
      const blob = new Blob([htmlContent], { type: 'text/html; charset=utf-8' });
      
      return this.createDownload(blob, options.fileName, {
        type: 'html',
        size: blob.size,
        content: htmlContent,
        blessing: '🌐 Sacred HTML document forged and ready'
      });
    } catch (error) {
      throw new Error(`HTML export failed: ${error.message}`);
    }
  }

  /**
   * 🎨 CSS Export
   * Sacred style sheet creation
   */
  async exportAsCSS(projectData, options) {
    console.log('🎨 Forging sacred CSS styles...');
    
    try {
      const cssContent = this.generateCSSDocument(projectData, options);
      
      if (!this.hasBlobSupport) {
        throw new Error('Blob support not available');
      }
      
      const blob = new Blob([cssContent], { type: 'text/css; charset=utf-8' });
      
      return this.createDownload(blob, options.fileName, {
        type: 'css',
        size: blob.size,
        content: cssContent,
        blessing: '🎨 Sacred styles forged and ready'
      });
    } catch (error) {
      throw new Error(`CSS export failed: ${error.message}`);
    }
  }

  /**
   * 📦 ZIP Export
   * Sacred complete package creation
   */
  async exportAsZip(projectData, options) {
    if (!this.hasZipSupport) {
      throw new Error('ZIP export not supported in this environment');
    }
    
    console.log('📦 Creating sacred ZIP package...');
    
    try {
      // Dynamic import of JSZip for better performance
      const JSZip = (await import('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js')).default;
      const zip = new JSZip();
      
      // Add main HTML file
      const htmlContent = this.generateHTMLDocument(projectData, options);
      zip.file('index.html', htmlContent);
      
      // Add CSS file
      const cssContent = this.generateCSSDocument(projectData, options);
      zip.file('styles.css', cssContent);
      
      // Add JavaScript file if needed
      if (projectData.javascript) {
        const jsContent = this.generateJavaScriptDocument(projectData, options);
        zip.file('script.js', jsContent);
      }
      
      // Add assets if requested
      if (options.includeAssets && projectData.assets) {
        await this.addAssetsToZip(zip, projectData.assets, options);
      }
      
      // Add metadata file
      if (options.addMetadata) {
        const metadata = this.generateMetadata(projectData, options);
        zip.file('quorra-metadata.json', JSON.stringify(metadata, null, 2));
      }
      
      // Add README file
      if (options.addReadme) {
        const readme = this.generateReadme(projectData);
        zip.file('README.md', readme);
      }
      
      // Add .gitignore file
      zip.file('.gitignore', this.generateGitignore());
      
      // Generate ZIP blob
      const zipBlob = await zip.generateAsync({
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: { level: this.compressionLevel }
      });
      
      return this.createDownload(zipBlob, options.fileName, {
        type: 'zip',
        size: zipBlob.size,
        files: this.getZipFileList(zip),
        blessing: '📦 Sacred ZIP package forged and blessed'
      });
    } catch (error) {
      throw new Error(`ZIP export failed: ${error.message}`);
    }
  }

  /**
   * 📄 JSON Export
   * Sacred data structure preservation
   */
  async exportAsJSON(projectData, options) {
    console.log('📄 Preserving sacred data structure...');
    
    try {
      const exportData = {
        version: '1.0.0',
        exportedAt: new Date().toISOString(),
        exportedBy: 'QUORRA Divine Website Creator',
        project: this.sanitizeProjectForExport(projectData),
        metadata: options.addMetadata ? this.generateMetadata(projectData, options) : null,
        blessing: '📄 Sacred data structure preserved in JSON'
      };
      
      const jsonContent = JSON.stringify(exportData, null, options.minify ? 0 : 2);
      
      if (!this.hasBlobSupport) {
        throw new Error('Blob support not available');
      }
      
      const blob = new Blob([jsonContent], { type: 'application/json; charset=utf-8' });
      
      return this.createDownload(blob, options.fileName, {
        type: 'json',
        size: blob.size,
        content: jsonContent,
        structure: this.analyzeProjectStructure(projectData),
        blessing: '📄 Sacred project data preserved'
      });
    } catch (error) {
      throw new Error(`JSON export failed: ${error.message}`);
    }
  }

  /**
   * 📊 PDF Export
   * Sacred printable document creation
   */
  async exportAsPDF(projectData, options) {
    console.log('📊 Creating sacred PDF document...');
    
    try {
      // For now, create a simple text-based PDF
      // In production, this would use a library like jsPDF or Puppeteer
      const pdfContent = this.generatePDFPlaceholder(projectData);
      
      if (!this.hasBlobSupport) {
        throw new Error('Blob support not available');
      }
      
      const blob = new Blob([pdfContent], { type: 'application/pdf' });
      
      return this.createDownload(blob, options.fileName, {
        type: 'pdf',
        size: blob.size,
        blessing: '📊 Sacred PDF document created (placeholder)',
        note: 'PDF export is a placeholder - full implementation requires PDF library'
      });
    } catch (error) {
      throw new Error(`PDF export failed: ${error.message}`);
    }
  }

  /**
   * 🏗️ HTML Document Generation
   * Sacred web document creation
   */
  generateHTMLDocument(projectData, options) {
    const {
      html = '',
      css = '',
      javascript = '',
      metadata = {},
      name = 'QUORRA Project'
    } = projectData;
    
    const minified = options.minify;
    const indent = minified ? '' : '  ';
    const newline = minified ? '' : '\n';
    
    // Generate meta tags
    const metaTags = this.generateMetaTags(projectData, options);
    
    // Generate external links
    const externalLinks = this.generateExternalLinks(projectData, options);
    
    let document = `<!DOCTYPE html>${newline}`;
    document += `<html lang="en">${newline}`;
    document += `<head>${newline}`;
    document += `${indent}<meta charset="UTF-8">${newline}`;
    document += `${indent}<meta name="viewport" content="width=device-width, initial-scale=1.0">${newline}`;
    document += `${indent}<meta name="generator" content="QUORRA - Divine Website Creator">${newline}`;
    document += `${metaTags}${newline}`;
    document += `${indent}<title>${this.escapeHtml(name)}</title>${newline}`;
    
    // Add external links (fonts, etc.)
    if (externalLinks) {
      document += `${externalLinks}${newline}`;
    }
    
    // Add inline CSS or external CSS link
    if (options.format === 'html' && css) {
      document += `${indent}<style>${newline}${this.formatCSS(css, options)}${newline}${indent}</style>${newline}`;
    } else if (options.format === 'zip') {
      document += `${indent}<link rel="stylesheet" href="styles.css">${newline}`;
    }
    
    document += `</head>${newline}`;
    document += `<body>${newline}`;
    document += `${this.formatHTML(html, options)}${newline}`;
    
    // Add JavaScript
    if (javascript) {
      if (options.format === 'html') {
        document += `${newline}${indent}<script>${newline}${this.formatJavaScript(javascript, options)}${newline}${indent}</script>${newline}`;
      } else if (options.format === 'zip') {
        document += `${newline}${indent}<script src="script.js"></script>${newline}`;
      }
    }
    
    document += `${this.generateExportFooter(options)}${newline}`;
    document += `</body>${newline}`;
    document += `</html>`;
    
    return document;
  }

  /**
   * 🎨 CSS Document Generation
   * Sacred style sheet creation
   */
  generateCSSDocument(projectData, options) {
    const { css = '' } = projectData;
    
    let cssContent = `/*\n * Generated by QUORRA - Divine Website Creator\n * Project: ${projectData.name || 'Untitled'}\n * Exported: ${new Date().toISOString()}\n * Format: Clean CSS, Framework-Free\n */\n\n`;
    
    // Add CSS reset if requested
    if (options.includeReset) {
      cssContent += this.getCSSReset() + '\n\n';
    }
    
    // Add main styles
    cssContent += this.formatCSS(css, options);
    
    // Add responsive utilities if needed
    if (options.includeResponsive) {
      cssContent += '\n\n' + this.getResponsiveUtilities();
    }
    
    if (!options.minify) {
      cssContent += '\n\n/* End of divine styles */';
    }
    
    return cssContent;
  }

  /**
   * 📜 JavaScript Document Generation
   * Sacred interaction creation
   */
  generateJavaScriptDocument(projectData, options) {
    const { javascript = '' } = projectData;
    
    let jsContent = `/*\n * Generated by QUORRA - Divine Website Creator\n * Project: ${projectData.name || 'Untitled'}\n * Exported: ${new Date().toISOString()}\n */\n\n`;
    
    // Add polyfills if requested
    if (options.includePolyfills) {
      jsContent += this.getPolyfills() + '\n\n';
    }
    
    // Add main JavaScript
    jsContent += this.formatJavaScript(javascript, options);
    
    // Add analytics if requested
    if (options.includeAnalytics && projectData.analytics) {
      jsContent += '\n\n' + this.generateAnalyticsCode(projectData.analytics);
    }
    
    return jsContent;
  }

  /**
   * 📋 Metadata Generation
   * Sacred information preservation
   */
  generateMetadata(projectData, options) {
    return {
      quorraVersion: '1.0.0',
      exportedAt: new Date().toISOString(),
      exportFormat: options.format,
      exportOptions: {
        minified: options.minify,
        includeAssets: options.includeAssets,
        includeMetadata: options.addMetadata,
        includeReadme: options.addReadme
      },
      projectInfo: {
        id: projectData.id,
        name: projectData.name,
        description: projectData.description,
        industry: projectData.industry,
        businessType: projectData.businessType,
        createdAt: projectData.createdAt,
        lastModified: projectData.lastModified,
        version: projectData.version
      },
      performance: {
        htmlSize: projectData.html ? projectData.html.length : 0,
        cssSize: projectData.css ? projectData.css.length : 0,
        jsSize: projectData.javascript ? projectData.javascript.length : 0,
        totalAssets: projectData.assets ? projectData.assets.length : 0,
        estimatedLoadTime: this.estimateLoadTime(projectData)
      },
      structure: this.analyzeProjectStructure(projectData),
      blessing: '✨ Metadata blessed by divine export service'
    };
  }

  /**
   * 📖 README Generation
   * Sacred documentation creation
   */
  generateReadme(projectData) {
    const projectName = projectData.name || 'QUORRA Project';
    const description = projectData.description || 'This website was created using QUORRA, the divine website creation tool.';
    
    return `# ${projectName}

Generated by **QUORRA** - Divine Website Creator  
Exported: ${new Date().toISOString()}

## 🌟 About This Project

${description}

**Industry:** ${projectData.industry || 'Not specified'}  
**Business Type:** ${projectData.businessType || 'Not specified'}

## 📁 Files Included

- \`index.html\` - Main HTML file
- \`styles.css\` - CSS styles (framework-free!)
- \`script.js\` - JavaScript functionality (if any)
- \`assets/\` - Project assets (images, fonts, etc.)
- \`quorra-metadata.json\` - Project metadata and build info

## 🚀 Getting Started

### Option 1: Open Locally
1. Open \`index.html\` in any modern web browser
2. That's it! No build process needed.

### Option 2: Deploy to Web
1. Upload all files to your web hosting service
2. Point your domain to \`index.html\`
3. Your site is live!

### Popular Hosting Options
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository  
- **GitHub Pages**: Push to a GitHub repo
- **Traditional Hosting**: Upload via FTP/cPanel

## ✨ Technical Features

- **🚀 Framework-Free**: Pure HTML, CSS, and JavaScript
- **📱 Responsive**: Mobile-first design approach  
- **⚡ Fast Loading**: Optimized for performance
- **♿ Accessible**: Follows web accessibility guidelines
- **🔧 Easy to Customize**: Clean, readable code

## 🛠️ Customization

### Editing Styles
All styles are in \`styles.css\`. The code is clean and well-commented.

### Adding Content
Edit \`index.html\` to modify content. The structure is semantic and straightforward.

### Adding Functionality
Add JavaScript to \`script.js\` or create new JS files as needed.

## 📊 Performance

${this.generatePerformanceInfo(projectData)}

## 🆘 Need Help?

- **QUORRA Documentation**: [quorra.design/docs](https://quorra.design/docs)
- **Community Forum**: [community.quorra.design](https://community.quorra.design)
- **Support**: [support@quorra.design](mailto:support@quorra.design)

## 📜 License

This project was generated using QUORRA. The generated code is yours to use freely.

---

*✨ Forged with divine fire by QUORRA - Channel the Goddess of Smithing*

*Visit [quorra.design](https://quorra.design) to create your own divine website*
`;
  }

  /**
   * 🗂️ Asset Management
   * Sacred resource packaging
   */
  async addAssetsToZip(zip, assets, options) {
    console.log(`📁 Adding ${assets.length} assets to sacred package...`);
    
    const assetsFolder = zip.folder('assets');
    let addedCount = 0;
    
    for (const asset of assets) {
      try {
        if (asset.type === 'image' && asset.data) {
          // Handle base64 images
          const imageData = asset.data.replace(/^data:image\/[a-z]+;base64,/, '');
          assetsFolder.file(asset.name, imageData, { base64: true });
          addedCount++;
        } else if (asset.type === 'font' && asset.data) {
          // Handle font files
          assetsFolder.file(`fonts/${asset.name}`, asset.data, { base64: true });
          addedCount++;
        } else if (asset.url && options.downloadAssets) {
          // Handle external assets (download them)
          try {
            const response = await fetch(asset.url);
            const blob = await response.blob();
            assetsFolder.file(asset.name, blob);
            addedCount++;
          } catch (fetchError) {
            console.warn(`⚠️ Failed to download asset: ${asset.url}`, fetchError);
          }
        } else if (asset.blob) {
          // Handle blob data
          assetsFolder.file(asset.name, asset.blob);
          addedCount++;
        } else if (asset.content) {
          // Handle text content (CSS, JS files)
          assetsFolder.file(asset.name, asset.content);
          addedCount++;
        }
      } catch (error) {
        console.warn(`⚠️ Failed to add asset ${asset.name}:`, error);
      }
    }
    
    console.log(`📁 Added ${addedCount}/${assets.length} assets to package`);
  }

  /**
   * 🔧 Formatting Utilities
   * Sacred content preparation
   */
  formatHTML(html, options) {
    if (!html) return '';
    
    if (options.minify) {
      return html
        .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
        .replace(/>\s+</g, '><') // Remove whitespace between tags
        .replace(/\s{2,}/g, ' ') // Collapse multiple spaces
        .trim();
    }
    
    // Basic HTML formatting with proper indentation
    try {
      const lines = html.split('\n');
      let formattedLines = [];
      let indentLevel = 0;
      
      lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return;
        
        // Decrease indent for closing tags
        if (trimmed.startsWith('</')) {
          indentLevel = Math.max(0, indentLevel - 1);
        }
        
        // Add line with proper indentation
        formattedLines.push('  '.repeat(indentLevel + 1) + trimmed);
        
        // Increase indent for opening tags (but not self-closing)
        if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.endsWith('/>')) {
          indentLevel++;
        }
      });
      
      return formattedLines.join('\n');
    } catch (error) {
      console.warn('⚠️ HTML formatting failed, using original:', error);
      return html;
    }
  }

  formatCSS(css, options) {
    if (!css) return '';
    
    if (options.minify) {
      return css
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s{2,}/g, ' ') // Collapse whitespace
        .replace(/;\s*}/g, '}') // Remove last semicolon in blocks
        .replace(/\s*{\s*/g, '{') // Clean up braces
        .replace(/;\s*/g, ';') // Clean up semicolons
        .replace(/,\s*/g, ',') // Clean up commas
        .trim();
    }
    
    // Basic CSS formatting
    try {
      return css
        .replace(/{\s*/g, ' {\n  ')
        .replace(/;\s*/g, ';\n  ')
        .replace(/}\s*/g, '\n}\n\n')
        .replace(/,\s*/g, ',\n');
    } catch (error) {
      console.warn('⚠️ CSS formatting failed, using original:', error);
      return css;
    }
  }

  formatJavaScript(js, options) {
    if (!js) return '';
    
    if (options.minify) {
      // Basic JS minification (for production, use a proper minifier)
      return js
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
        .replace(/\/\/.*$/gm, '') // Remove line comments
        .replace(/\s{2,}/g, ' ') // Collapse whitespace
        .trim();
    }
    
    return js; // Return as-is for readable format
  }

  generateExportFooter(options) {
    const timestamp = new Date().toISOString();
    
    if (options.minify) {
      return `<!-- Generated by QUORRA ${timestamp} -->`;
    }
    
    return `  <!-- 
    🔥 Generated by QUORRA - Divine Website Creator
    ⚡ Framework-free, lightning-fast, hand-forged code
    📅 Exported: ${timestamp}
    🌐 Learn more: https://quorra.design
    
    Channel the Goddess of Smithing ✨
  -->`;
  }

  /**
   * 💾 Download Creation
   * Sacred file delivery
   */
  createDownload(blob, fileName, metadata = {}) {
    if (!this.hasBlobSupport) {
      throw new Error('Blob support not available');
    }
    
    // Check file size
    if (blob.size > this.maxFileSize) {
      throw new Error(`File too large: ${this.formatFileSize(blob.size)} exceeds ${this.formatFileSize(this.maxFileSize)} limit`);
    }
    
    const url = URL.createObjectURL(blob);
    
    return {
      success: true,
      download: {
        url,
        fileName,
        size: blob.size,
        sizeFormatted: this.formatFileSize(blob.size),
        type: blob.type,
        ...metadata
      },
      
      // Helper method to trigger download
      triggerDownload: () => {
        try {
          if (this.hasDownloadSupport) {
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Clean up URL after download
            setTimeout(() => URL.revokeObjectURL(url), 1000);
            
            console.log(`📤 Divine download initiated: ${fileName}`);
            return true;
          } else {
            // Fallback: open in new window
            window.open(url, '_blank');
            return false;
          }
        } catch (error) {
          console.error('❌ Download failed:', error);
          return false;
        }
      },
      
      // Helper method to get preview URL
      getPreviewUrl: () => url,
      
      // Helper method to cleanup
      cleanup: () => {
        URL.revokeObjectURL(url);
      },
      
      timestamp: new Date().toISOString(),
      blessing: metadata.blessing || '📤 Sacred file ready for download'
    };
  }

  /**
   * 📐 File Utilities
   * Sacred file management helpers
   */
  generateFileName(projectData, format) {
    const baseName = projectData.name || 'quorra-project';
    const safeName = baseName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    const timestamp = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    
    switch (format) {
      case 'html':
        return `${safeName}.html`;
      case 'css':
        return `${safeName}.css`;
      case 'zip':
        return `${safeName}-${timestamp}.zip`;
      case 'json':
        return `${safeName}-${timestamp}.json`;
      case 'pdf':
        return `${safeName}-${timestamp}.pdf`;
      default:
        return `${safeName}-${timestamp}.${format}`;
    }
  }

  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  escapeHtml(text) {
    if (!text) return '';
    
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * 🔍 Validation Methods
   * Sacred quality assurance
   */
  validateProjectData(projectData) {
    if (!projectData) {
      throw new Error('Project data is required');
    }
    
    if (!projectData.html && !projectData.css) {
      throw new Error('Project must contain HTML or CSS content');
    }
    
    // Validate HTML if present
    if (projectData.html && typeof projectData.html !== 'string') {
      throw new Error('HTML content must be a string');
    }
    
    // Validate CSS if present
    if (projectData.css && typeof projectData.css !== 'string') {
      throw new Error('CSS content must be a string');
    }
    
    // Check for reasonable content size
    const totalSize = (projectData.html || '').length + 
                     (projectData.css || '').length + 
                     (projectData.javascript || '').length;
                     
    if (totalSize > 1024 * 1024 * 10) { // 10MB
      console.warn('⚠️ Large project detected, export may be slow');
    }
    
    if (totalSize === 0) {
      throw new Error('Project contains no content to export');
    }
  }

  validateExportOptions(options) {
    if (!options) return;
    
    if (options.format && !this.supportedFormats.includes(options.format.toLowerCase())) {
      throw new Error(`Unsupported format: ${options.format}. Supported: ${this.supportedFormats.join(', ')}`);
    }
    
    if (options.fileName && !/^[a-zA-Z0-9\-_.]+$/.test(options.fileName)) {
      throw new Error('Invalid file name. Use only letters, numbers, hyphens, underscores, and dots.');
    }
    
    if (options.compressionLevel && (options.compressionLevel < 0 || options.compressionLevel > 9)) {
      throw new Error('Compression level must be between 0 and 9');
    }
  }

  /**
   * 📊 Analysis & Utilities
   * Sacred insight generation
   */
  analyzeProjectStructure(projectData) {
    const structure = {
      hasHTML: !!projectData.html,
      hasCSS: !!projectData.css,
      hasJavaScript: !!projectData.javascript,
      hasAssets: !!(projectData.assets && projectData.assets.length > 0),
      components: [],
      complexity: 'simple'
    };
    
    // Analyze HTML structure
    if (projectData.html) {
      const htmlAnalysis = this.analyzeHTML(projectData.html);
      structure.components.push(...htmlAnalysis.components);
      structure.elements = htmlAnalysis.elementCount;
    }
    
    // Analyze CSS complexity
    if (projectData.css) {
      const cssAnalysis = this.analyzeCSS(projectData.css);
      structure.cssRules = cssAnalysis.ruleCount;
      structure.cssComplexity = cssAnalysis.complexity;
    }
    
    // Determine overall complexity
    const totalSize = (projectData.html || '').length + (projectData.css || '').length;
    if (totalSize > 50000 || (structure.elements && structure.elements > 100)) {
      structure.complexity = 'complex';
    } else if (totalSize > 10000 || (structure.elements && structure.elements > 20)) {
      structure.complexity = 'medium';
    }
    
    return structure;
  }

  analyzeHTML(html) {
    const elementMatches = html.match(/<[^/][^>]*>/g) || [];
    const components = [];
    
    // Check for common components
    if (html.includes('nav') || html.includes('navigation')) components.push('navigation');
    if (html.includes('header')) components.push('header');
    if (html.includes('footer')) components.push('footer');
    if (html.includes('form')) components.push('form');
    if (html.includes('button')) components.push('buttons');
    if (html.includes('img')) components.push('images');
    
    return {
      elementCount: elementMatches.length,
      components
    };
  }

  analyzeCSS(css) {
    const ruleMatches = css.match(/[^{}]+{[^{}]*}/g) || [];
    const mediaQueries = css.match(/@media[^{]+{[^{}]*}/g) || [];
    
    let complexity = 'simple';
    if (ruleMatches.length > 100 || mediaQueries.length > 5) {
      complexity = 'complex';
    } else if (ruleMatches.length > 20 || mediaQueries.length > 0) {
      complexity = 'medium';
    }
    
    return {
      ruleCount: ruleMatches.length,
      mediaQueries: mediaQueries.length,
      complexity
    };
  }

  estimateLoadTime(projectData) {
    const htmlSize = (projectData.html || '').length;
    const cssSize = (projectData.css || '').length;
    const jsSize = (projectData.javascript || '').length;
    const assetSize = projectData.assets ? 
      projectData.assets.reduce((total, asset) => total + (asset.size || 1000), 0) : 0;
    
    const totalBytes = htmlSize + cssSize + jsSize + assetSize;
    
    // Rough estimation based on average connection speeds
    const averageSpeedKbps = 1000; // 1 Mbps
    const bytesPerSecond = averageSpeedKbps * 1024 / 8;
    
    return Math.ceil(totalBytes / bytesPerSecond * 1000); // Return in milliseconds
  }

  sanitizeProjectForExport(projectData) {
    const sanitized = { ...projectData };
    
    // Remove sensitive or unnecessary data
    delete sanitized.localTempData;
    delete sanitized.unsavedChanges;
    delete sanitized.debugInfo;
    delete sanitized.privateNotes;
    delete sanitized.internalIds;
    
    return sanitized;
  }

  /**
   * 🧪 Feature Detection & Support
   * Sacred capability checking
   */
  async checkZipSupport() {
    try {
      // Check if we can access JSZip via CDN
      const testModule = await import('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js');
      return !!testModule.default;
    } catch (error) {
      console.warn('⚠️ ZIP support not available:', error);
      return false;
    }
  }

  getSupportedFormats() {
    const supported = [];
    
    this.supportedFormats.forEach(format => {
      let isSupported = true;
      
      if (format === 'zip') {
        isSupported = this.hasZipSupport;
      }
      
      if (isSupported) {
        supported.push({
          format,
          mimeType: this.fileHandlers[format]?.mimeType,
          extension: this.fileHandlers[format]?.extension,
          description: this.getFormatDescription(format)
        });
      }
    });
    
    return supported;
  }

  getFormatDescription(format) {
    const descriptions = {
      html: 'Single HTML file with embedded CSS and JavaScript',
      css: 'CSS stylesheet only',
      zip: 'Complete package with HTML, CSS, assets, and documentation',
      json: 'Project data in JSON format for backup or transfer',
      pdf: 'Printable PDF document (placeholder implementation)'
    };
    
    return descriptions[format] || `${format.toUpperCase()} file`;
  }

  /**
   * 🔧 File Type Handlers Setup
   * Sacred format preparation
   */
  setupFileTypeHandlers() {
    this.fileHandlers = {
      html: {
        mimeType: 'text/html',
        extension: '.html',
        generator: this.exportAsHTML.bind(this)
      },
      css: {
        mimeType: 'text/css',
        extension: '.css',
        generator: this.exportAsCSS.bind(this)
      },
      zip: {
        mimeType: 'application/zip',
        extension: '.zip',
        generator: this.exportAsZip.bind(this)
      },
      json: {
        mimeType: 'application/json',
        extension: '.json',
        generator: this.exportAsJSON.bind(this)
      },
      pdf: {
        mimeType: 'application/pdf',
        extension: '.pdf',
        generator: this.exportAsPDF.bind(this)
      }
    };
  }

  /**
   * 📊 Performance & Analytics
   * Sacred optimization tracking
   */
  setupPerformanceMonitoring() {
    this.performanceMetrics = {
      exportsCompleted: 0,
      totalExportTime: 0,
      averageExportTime: 0,
      formatStats: {},
      errorCount: 0
    };
  }

  trackExport(projectData, options, result, duration) {
    try {
      // Update performance metrics
      this.performanceMetrics.exportsCompleted++;
      this.performanceMetrics.totalExportTime += duration;
      this.performanceMetrics.averageExportTime = 
        this.performanceMetrics.totalExportTime / this.performanceMetrics.exportsCompleted;
      
      // Track by format
      const format = options.format;
      if (!this.performanceMetrics.formatStats[format]) {
        this.performanceMetrics.formatStats[format] = { count: 0, totalTime: 0 };
      }
      this.performanceMetrics.formatStats[format].count++;
      this.performanceMetrics.formatStats[format].totalTime += duration;
      
      const exportEvent = {
        projectId: projectData.id,
        projectName: projectData.name,
        format: options.format,
        fileSize: result.download?.size || 0,
        duration: duration,
        includeAssets: options.includeAssets,
        minified: options.minify,
        success: result.success,
        timestamp: new Date().toISOString()
      };
      
      // Send to analytics if available
      if (window.quorraAnalytics) {
        window.quorraAnalytics.trackEvent('project_exported', exportEvent);
      }
      
      console.log('📊 Export tracked:', exportEvent);
    } catch (error) {
      console.warn('⚠️ Export tracking failed:', error);
    }
  }

  /**
   * 🛡️ Error Handling
   * Sacred resilience methods
   */
  handleExportError(error, projectData, options) {
    console.error('❌ Export failed:', error);
    
    this.performanceMetrics.errorCount++;
    
    const errorResponse = {
      success: false,
      error: error.message,
      errorType: error.name || 'ExportError',
      projectId: projectData?.id,
      format: options?.format,
      timestamp: new Date().toISOString(),
      blessing: '🛡️ Divine export protection activated'
    };
    
    // Track error for analytics
    if (window.quorraAnalytics) {
      window.quorraAnalytics.trackError({
        errorType: 'export_error',
        component: 'exportService',
        context: {
          format: options?.format,
          projectId: projectData?.id
        },
        error: error.message
      });
    }
    
    // Provide recovery suggestions
    errorResponse.recovery = this.getRecoverySuggestions(error);
    
    return errorResponse;
  }

  getRecoverySuggestions(error) {
    const suggestions = [];
    
    if (error.message.includes('ZIP')) {
      suggestions.push('Try exporting as HTML instead of ZIP');
      suggestions.push('Check if your browser supports modern JavaScript features');
    }
    
    if (error.message.includes('too large')) {
      suggestions.push('Try enabling minification to reduce file size');
      suggestions.push('Remove unnecessary assets from your project');
      suggestions.push('Export HTML and CSS separately instead of as ZIP');
    }
    
    if (error.message.includes('Blob')) {
      suggestions.push('Your browser may not support file downloads');
      suggestions.push('Try using a modern browser like Chrome, Firefox, or Safari');
    }
    
    if (error.message.includes('required')) {
      suggestions.push('Ensure your project has content to export');
      suggestions.push('Add some HTML or CSS content before exporting');
    }
    
    if (suggestions.length === 0) {
      suggestions.push('Try refreshing the page and exporting again');
      suggestions.push('Clear your browser cache and try again');
      suggestions.push('Contact support if the issue persists');
    }
    
    return suggestions;
  }

  /**
   * 📊 Export Service Status & Analytics
   * Sacred service health monitoring
   */
  getServiceStatus() {
    return {
      isReady: this.hasBlobSupport && this.hasDownloadSupport,
      capabilities: {
        zipSupport: this.hasZipSupport,
        blobSupport: this.hasBlobSupport,
        downloadSupport: this.hasDownloadSupport
      },
      supportedFormats: this.supportedFormats,
      limits: {
        maxFileSize: this.maxFileSize,
        maxFileSizeFormatted: this.formatFileSize(this.maxFileSize),
        compressionLevel: this.compressionLevel
      },
      performance: this.performanceMetrics,
      timestamp: new Date().toISOString(),
      blessing: '📊 Divine export service status revealed'
    };
  }

  getExportStats() {
    return {
      ...this.getServiceStatus(),
      recentExports: this.getRecentExportHistory(),
      formatPopularity: this.getFormatPopularity(),
      averageFileSizes: this.getAverageFileSizes()
    };
  }

  getRecentExportHistory() {
    // This would be implemented with actual storage/analytics
    return [];
  }

  getFormatPopularity() {
    const stats = this.performanceMetrics.formatStats;
    return Object.entries(stats)
      .map(([format, data]) => ({
        format,
        count: data.count,
        percentage: (data.count / this.performanceMetrics.exportsCompleted * 100).toFixed(1)
      }))
      .sort((a, b) => b.count - a.count);
  }

  getAverageFileSizes() {
    // This would track actual file sizes by format
    return {
      html: '25 KB',
      css: '15 KB', 
      zip: '150 KB',
      json: '45 KB'
    };
  }

  /**
   * 🧹 Cleanup Methods
   * Sacred resource management
   */
  cleanup() {
    try {
      // Clean up any remaining object URLs
      // Clear performance metrics if needed
      console.log('🧹 Divine export service cleanup completed');
    } catch (error) {
      console.error('❌ Cleanup failed:', error);
    }
  }

  /**
   * 📄 Helper Content Generators
   * Sacred template generation
   */
  generateMetaTags(projectData, options) {
    const name = projectData.name || 'QUORRA Project';
    const description = projectData.description || 'Created with QUORRA - Divine Website Creator';
    
    const tags = [
      `<meta name="description" content="${this.escapeHtml(description)}">`,
      `<meta name="keywords" content="${this.escapeHtml(projectData.industry || 'website')}">`,
      `<meta name="author" content="QUORRA">`,
      `<meta property="og:title" content="${this.escapeHtml(name)}">`,
      `<meta property="og:description" content="${this.escapeHtml(description)}">`,
      `<meta property="og:type" content="website">`,
      `<meta name="twitter:card" content="summary">`,
      `<meta name="twitter:title" content="${this.escapeHtml(name)}">`,
      `<meta name="twitter:description" content="${this.escapeHtml(description)}">`
    ];
    
    return tags.map(tag => `  ${tag}`).join('\n');
  }

  generateExternalLinks(projectData, options) {
    const links = [];
    
    // Add Google Fonts if used
    if (projectData.googleFonts) {
      links.push('<link rel="preconnect" href="https://fonts.googleapis.com">');
      links.push('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>');
      links.push(`<link href="${projectData.googleFonts}" rel="stylesheet">`);
    }
    
    // Add favicon if present
    if (projectData.favicon) {
      links.push(`<link rel="icon" type="image/x-icon" href="${projectData.favicon}">`);
    }
    
    return links.length > 0 ? 
      links.map(link => `  ${link}`).join('\n') : '';
  }

  getCSSReset() {
    return `/* CSS Reset for cross-browser consistency */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  line-height: 1.5;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #333;
  background-color: #fff;
}`;
  }

  getResponsiveUtilities() {
    return `/* Responsive utilities */
@media (max-width: 768px) {
  .hide-mobile { display: none !important; }
  .show-mobile { display: block !important; }
}

@media (min-width: 769px) {
  .hide-desktop { display: none !important; }
  .show-desktop { display: block !important; }
}`;
  }

  getPolyfills() {
    return `// Basic polyfills for older browsers
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement) {
    return this.indexOf(searchElement) !== -1;
  };
}`;
  }

  generateAnalyticsCode(analytics) {
    if (analytics.googleAnalytics) {
      return `// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', '${analytics.googleAnalytics}', 'auto');
ga('send', 'pageview');`;
    }
    return '';
  }

  generateGitignore() {
    return `# Common files to ignore
.DS_Store
Thumbs.db
*.log
node_modules/
.env
.env.local

# Editor files
.vscode/
.idea/
*.swp
*.swo

# Temporary files
*.tmp
*.temp
~*`;
  }

  generatePerformanceInfo(projectData) {
    const structure = this.analyzeProjectStructure(projectData);
    const loadTime = this.estimateLoadTime(projectData);
    
    return `- **Estimated Load Time**: ${loadTime}ms on average connection
- **Complexity**: ${structure.complexity}
- **HTML Elements**: ${structure.elements || 'N/A'}
- **CSS Rules**: ${structure.cssRules || 'N/A'}
- **Framework**: None (vanilla HTML/CSS/JS)
- **Total Size**: ${this.formatFileSize(
  (projectData.html || '').length + 
  (projectData.css || '').length + 
  (projectData.javascript || '').length
)}`;
  }

  generatePDFPlaceholder(projectData) {
    // Basic PDF structure - in production, use jsPDF or similar
    return `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj

4 0 obj
<<
/Length 120
>>
stream
BT
/F1 12 Tf
72 720 Td
(${projectData.name || 'QUORRA Project'}) Tj
0 -20 Td
(Generated by QUORRA - Divine Website Creator) Tj
0 -20 Td
(PDF Export: ${new Date().toISOString()}) Tj
ET
endstream
endobj

xref
0 5
0000000000 65535 f 
0000000010 00000 n 
0000000053 00000 n 
0000000125 00000 n 
0000000229 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
400
%%EOF`;
  }

  getZipFileList(zip) {
    // Extract file list from JSZip object
    const files = [];
    zip.forEach((relativePath, zipEntry) => {
      files.push({
        name: relativePath,
        size: zipEntry._data ? zipEntry._data.uncompressedSize : 0,
        isDirectory: zipEntry.dir
      });
    });
    return files;
  }
}

// Export the divine export service
export default ExportService;