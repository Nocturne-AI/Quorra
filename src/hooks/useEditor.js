/**
 * QUORRA HTML GENERATOR
 * Creates semantic, accessible HTML from visual designs
 * Blessed by the Goddess of Smithing for divine markup
 */

import { IndustryIntelligence } from '../intelligence/IndustryIntelligence.js';

export class HTMLGenerator {
  constructor() {
    this.industryIntelligence = new IndustryIntelligence();
  }

  /**
   * MAIN GENERATION METHOD
   * Converts design data into semantic HTML
   */
  async generateHTML(designData, options = {}) {
    const {
      industry = 'general',
      pageType = 'landing',
      includeHead = true,
      accessibility = 'wcag2.1',
      seoOptimized = true
    } = options;

    try {
      // Get industry-specific patterns
      const industryPatterns = await this.industryIntelligence.getPatterns(industry);
      
      // Extract page structure
      const pageStructure = this.extractPageStructure(designData, industryPatterns);
      
      // Generate HTML sections
      const htmlSections = {
        doctype: '<!DOCTYPE html>',
        html: this.generateHTMLTag(),
        head: includeHead ? this.generateHead(designData, options) : '',
        body: this.generateBody(pageStructure, industry, options)
      };

      // Combine into complete document
      const completeHTML = this.assembleHTML(htmlSections, includeHead);

      return {
        html: completeHTML,
        structure: pageStructure,
        accessibility: this.analyzeAccessibility(completeHTML),
        seo: seoOptimized ? this.analyzeSEO(completeHTML) : null,
        meta: {
          industry,
          pageType,
          generatedAt: new Date().toISOString(),
          generator: 'QUORRA Divine HTML Engine v1.0'
        }
      };

    } catch (error) {
      console.error('HTML Generation Error:', error);
      throw new Error(`Divine smithing interrupted: ${error.message}`);
    }
  }

  /**
   * HTML TAG GENERATION
   */
  generateHTMLTag() {
    return '<html lang="en" class="scroll-smooth">';
  }

  /**
   * HEAD SECTION GENERATION
   * Creates optimized document head
   */
  generateHead(designData, options) {
    const { title, description, keywords, favicon } = designData.meta || {};
    
    return `<head>
  <!-- QUORRA Generated Head - Divine Metadata -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <!-- Divine Title & Description -->
  <title>${title || 'Forged by QUORRA - Divine Website'}</title>
  <meta name="description" content="${description || 'Blessed by the Goddess of Smithing'}">
  ${keywords ? `<meta name="keywords" content="${keywords}">` : ''}
  
  <!-- Sacred Icons -->
  <link rel="icon" type="image/x-icon" href="${favicon || '/favicon.ico'}">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  
  <!-- Divine Fonts (if needed) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- QUORRA Styles -->
  <link rel="stylesheet" href="/styles/quorra-generated.css">
  
  <!-- Open Graph (Social Media) -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title || 'Forged by QUORRA'}">
  <meta property="og:description" content="${description || 'Divine website creation'}">
  <meta property="og:url" content="${options.url || ''}">
  <meta property="og:image" content="${options.ogImage || '/og-image.jpg'}">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title || 'Forged by QUORRA'}">
  <meta name="twitter:description" content="${description || 'Divine website creation'}">
  <meta name="twitter:image" content="${options.twitterImage || '/twitter-image.jpg'}">
  
  <!-- Performance & Security -->
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#FF8C42">
  <link rel="canonical" href="${options.canonicalUrl || ''}">
</head>`;
  }

  /**
   * BODY GENERATION
   * Creates semantic body structure
   */
  generateBody(pageStructure, industry, options) {
    let bodyHTML = '<body class="min-h-screen bg-background text-neutral">\n';
    
    // Skip to content link (accessibility)
    bodyHTML += this.generateSkipLink();
    
    // Main page structure
    pageStructure.sections.forEach(section => {
      bodyHTML += this.generateSection(section, industry, options);
    });
    
    // Closing scripts
    bodyHTML += this.generateScripts(options);
    bodyHTML += '\n</body>';
    
    return bodyHTML;
  }

  /**
   * SECTION GENERATION
   * Creates semantic sections
   */
  generateSection(section, industry, options) {
    const { type, id, content, components } = section;
    
    let sectionHTML = '';
    
    switch (type) {
      case 'header':
        sectionHTML = this.generateHeader(content, components, industry);
        break;
      case 'hero':
        sectionHTML = this.generateHero(content, components, industry);
        break;
      case 'features':
        sectionHTML = this.generateFeatures(content, components, industry);
        break;
      case 'testimonials':
        sectionHTML = this.generateTestimonials(content, components, industry);
        break;
      case 'cta':
        sectionHTML = this.generateCTA(content, components, industry);
        break;
      case 'footer':
        sectionHTML = this.generateFooter(content, components, industry);
        break;
      default:
        sectionHTML = this.generateGenericSection(section, industry);
    }
    
    return sectionHTML;
  }

  /**
   * HEADER GENERATION
   */
  generateHeader(content, components, industry) {
    return `
  <!-- QUORRA Header - Divine Navigation -->
  <header class="bg-background shadow-sm" role="banner">
    <div class="container">
      <nav class="flex-between p-md" role="navigation" aria-label="Main navigation">
        <!-- Logo -->
        <div class="flex items-center gap-sm">
          ${content.logo ? `<img src="${content.logo}" alt="${content.brandName || 'Logo'}" class="w-10 h-10">` : ''}
          <span class="text-xl font-bold text-primary">${content.brandName || 'Divine Brand'}</span>
        </div>
        
        <!-- Navigation Menu -->
        <ul class="flex gap-lg" role="menubar">
          ${content.navigation?.map(item => `
          <li role="none">
            <a href="${item.url}" class="text-neutral hover:text-primary transition-normal" role="menuitem">
              ${item.label}
            </a>
          </li>`).join('') || ''}
        </ul>
        
        <!-- CTA Button -->
        ${content.ctaButton ? `
        <a href="${content.ctaButton.url}" class="btn btn-primary">
          ${content.ctaButton.text}
        </a>` : ''}
      </nav>
    </div>
  </header>`;
  }

  /**
   * HERO GENERATION
   */
  generateHero(content, components, industry) {
    return `
  <!-- QUORRA Hero - Divine First Impression -->
  <section class="bg-gradient-to-r from-primary to-secondary text-white" role="main">
    <div class="container">
      <div class="grid grid-2 items-center gap-xl p-xl">
        <!-- Hero Content -->
        <div class="space-y-lg">
          <h1 class="text-4xl font-bold leading-tight">
            ${content.headline || 'Divine Craftsmanship Awaits'}
          </h1>
          <p class="text-xl opacity-90">
            ${content.subheadline || 'Forged by the Goddess of Smithing for exceptional results'}
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex gap-md flex-wrap">
            ${content.primaryCTA ? `
            <a href="${content.primaryCTA.url}" class="btn btn-primary bg-white text-primary hover:bg-gray-100">
              ${content.primaryCTA.text}
            </a>` : ''}
            ${content.secondaryCTA ? `
            <a href="${content.secondaryCTA.url}" class="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
              ${content.secondaryCTA.text}
            </a>` : ''}
          </div>
        </div>
        
        <!-- Hero Image -->
        <div class="text-center">
          ${content.heroImage ? `
          <img src="${content.heroImage}" alt="${content.heroImageAlt || 'Hero image'}" class="w-full max-w-lg mx-auto rounded-lg shadow-lg">
          ` : `
          <div class="w-full max-w-lg mx-auto aspect-square bg-white/20 rounded-lg flex items-center justify-center">
            <span class="text-2xl opacity-75">🔥</span>
          </div>`}
        </div>
      </div>
    </div>
  </section>`;
  }

  /**
   * FEATURES GENERATION
   */
  generateFeatures(content, components, industry) {
    return `
  <!-- QUORRA Features - Divine Capabilities -->
  <section class="p-xl" id="features">
    <div class="container">
      <div class="text-center mb-xl">
        <h2 class="text-3xl font-bold mb-md">
          ${content.title || 'Sacred Features'}
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          ${content.subtitle || 'Blessed with divine capabilities for exceptional results'}
        </p>
      </div>
      
      <div class="grid grid-3 gap-lg">
        ${content.features?.map(feature => `
        <article class="card text-center group">
          <div class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-md group-hover:bg-primary/20 transition-normal">
            ${feature.icon ? `<img src="${feature.icon}" alt="" class="w-8 h-8">` : '<span class="text-2xl">⚡</span>'}
          </div>
          <h3 class="text-xl font-semibold mb-sm">${feature.title}</h3>
          <p class="text-gray-600">${feature.description}</p>
        </article>`).join('') || ''}
      </div>
    </div>
  </section>`;
  }

  /**
   * TESTIMONIALS GENERATION
   */
  generateTestimonials(content, components, industry) {
    return `
  <!-- QUORRA Testimonials - Divine Social Proof -->
  <section class="bg-gray-50 p-xl" id="testimonials">
    <div class="container">
      <div class="text-center mb-xl">
        <h2 class="text-3xl font-bold mb-md">
          ${content.title || 'Blessed Testimonials'}
        </h2>
        <p class="text-lg text-gray-600">
          ${content.subtitle || 'What divine smiths say about their experience'}
        </p>
      </div>
      
      <div class="grid grid-3 gap-lg">
        ${content.testimonials?.map(testimonial => `
        <blockquote class="card">
          <div class="flex gap-sm mb-md">
            ${Array.from({length: testimonial.rating || 5}, () => '<span class="text-yellow-400">⭐</span>').join('')}
          </div>
          <p class="text-gray-700 mb-md italic">"${testimonial.quote}"</p>
          <footer class="flex items-center gap-sm">
            ${testimonial.avatar ? `<img src="${testimonial.avatar}" alt="${testimonial.name}" class="w-10 h-10 rounded-full">` : ''}
            <div>
              <cite class="font-medium not-italic">${testimonial.name}</cite>
              <p class="text-sm text-gray-500">${testimonial.role || ''}</p>
            </div>
          </footer>
        </blockquote>`).join('') || ''}
      </div>
    </div>
  </section>`;
  }

  /**
   * CTA GENERATION
   */
  generateCTA(content, components, industry) {
    return `
  <!-- QUORRA CTA - Divine Call to Action -->
  <section class="bg-primary text-white p-xl">
    <div class="container">
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-md">
          ${content.headline || 'Ready to Channel Divine Fire?'}
        </h2>
        <p class="text-xl opacity-90 mb-lg">
          ${content.subheadline || 'Join the blessed craftspeople forging the future'}
        </p>
        
        <div class="flex gap-md justify-center flex-wrap">
          ${content.primaryCTA ? `
          <a href="${content.primaryCTA.url}" class="btn btn-primary bg-white text-primary hover:bg-gray-100">
            ${content.primaryCTA.text}
          </a>` : ''}
          ${content.secondaryCTA ? `
          <a href="${content.secondaryCTA.url}" class="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
            ${content.secondaryCTA.text}
          </a>` : ''}
        </div>
      </div>
    </div>
  </section>`;
  }

  /**
   * FOOTER GENERATION
   */
  generateFooter(content, components, industry) {
    return `
  <!-- QUORRA Footer - Divine Foundation -->
  <footer class="bg-gray-900 text-white p-xl" role="contentinfo">
    <div class="container">
      <div class="grid grid-4 gap-lg mb-lg">
        <!-- Brand Column -->
        <div>
          <div class="flex items-center gap-sm mb-md">
            ${content.logo ? `<img src="${content.logo}" alt="${content.brandName || 'Logo'}" class="w-8 h-8">` : ''}
            <span class="text-lg font-bold">${content.brandName || 'Divine Brand'}</span>
          </div>
          <p class="text-gray-300 text-sm">
            ${content.description || 'Blessed by the Goddess of Smithing'}
          </p>
        </div>
        
        <!-- Links Columns -->
        ${content.linkColumns?.map(column => `
        <div>
          <h3 class="font-semibold mb-md">${column.title}</h3>
          <ul class="space-y-sm">
            ${column.links?.map(link => `
            <li>
              <a href="${link.url}" class="text-gray-300 hover:text-white text-sm transition-normal">
                ${link.label}
              </a>
            </li>`).join('') || ''}
          </ul>
        </div>`).join('') || ''}
      </div>
      
      <!-- Footer Bottom -->
      <div class="border-t border-gray-700 pt-lg flex-between flex-wrap gap-md">
        <p class="text-sm text-gray-400">
          © ${new Date().getFullYear()} ${content.brandName || 'Divine Brand'}. Forged by QUORRA.
        </p>
        
        <!-- Social Links -->
        ${content.socialLinks ? `
        <div class="flex gap-md">
          ${content.socialLinks.map(social => `
          <a href="${social.url}" class="text-gray-400 hover:text-white transition-normal" aria-label="${social.platform}">
            ${social.icon || social.platform}
          </a>`).join('')}
        </div>` : ''}
      </div>
    </div>
  </footer>`;
  }

  /**
   * HELPER METHODS
   */
  generateSkipLink() {
    return `
  <!-- Accessibility Skip Link -->
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white p-md rounded">
    Skip to main content
  </a>`;
  }

  generateScripts(options) {
    return `
  
  <!-- QUORRA Scripts - Divine Interactivity -->
  <script>
    // Basic progressive enhancement
    document.documentElement.classList.add('js-enabled');
    
    // Simple smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  </script>`;
  }

  extractPageStructure(designData, industryPatterns) {
    // Extract page structure from design data
    return {
      sections: designData.sections || [
        { type: 'header', id: 'header', content: designData.header || {} },
        { type: 'hero', id: 'hero', content: designData.hero || {} },
        { type: 'features', id: 'features', content: designData.features || {} },
        { type: 'testimonials', id: 'testimonials', content: designData.testimonials || {} },
        { type: 'cta', id: 'cta', content: designData.cta || {} },
        { type: 'footer', id: 'footer', content: designData.footer || {} }
      ]
    };
  }

  generateGenericSection(section, industry) {
    return `
  <section id="${section.id}" class="p-lg">
    <div class="container">
      <!-- Generated section content -->
      <div class="text-center">
        <h2 class="text-2xl font-bold mb-md">${section.title || 'Section Title'}</h2>
        <p class="text-gray-600">${section.content || 'Section content'}</p>
      </div>
    </div>
  </section>`;
  }

  assembleHTML(sections, includeHead) {
    if (includeHead) {
      return `${sections.doctype}
${sections.html}
${sections.head}
${sections.body}
</html>`;
    } else {
      return sections.body;
    }
  }

  analyzeAccessibility(html) {
    const hasHeadings = /<h[1-6]/.test(html);
    const hasAltText = !/<img(?![^>]*alt=)/.test(html);
    const hasSkipLink = /skip.*content/i.test(html);
    const hasLandmarks = /<(header|main|nav|section|footer)/.test(html);
    
    return {
      score: [hasHeadings, hasAltText, hasSkipLink, hasLandmarks].filter(Boolean).length,
      maxScore: 4,
      checks: {
        headingStructure: hasHeadings,
        altTextPresent: hasAltText,
        skipLinkProvided: hasSkipLink,
        landmarksUsed: hasLandmarks
      },
      recommendations: this.getAccessibilityRecommendations([hasHeadings, hasAltText, hasSkipLink, hasLandmarks])
    };
  }

  analyzeSEO(html) {
    const hasTitle = /<title>/.test(html);
    const hasDescription = /name="description"/.test(html);
    const hasHeadings = /<h1/.test(html);
    const hasStructuredData = /application\/ld\+json/.test(html);
    
    return {
      score: [hasTitle, hasDescription, hasHeadings].filter(Boolean).length,
      maxScore: 3,
      checks: {
        titlePresent: hasTitle,
        descriptionPresent: hasDescription,
        h1Present: hasHeadings,
        structuredDataPresent: hasStructuredData
      }
    };
  }

  getAccessibilityRecommendations(checks) {
    const recommendations = [];
    const [hasHeadings, hasAltText, hasSkipLink, hasLandmarks] = checks;
    
    if (!hasHeadings) recommendations.push('Add proper heading structure (h1-h6)');
    if (!hasAltText) recommendations.push('Add alt text to all images');
    if (!hasSkipLink) recommendations.push('Add skip to content link');
    if (!hasLandmarks) recommendations.push('Use semantic HTML landmarks');
    
    return recommendations;
  }
}

export default HTMLGenerator;