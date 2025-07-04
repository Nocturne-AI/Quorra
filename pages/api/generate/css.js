/**
 * QUORRA CSS GENERATION API
 * Transforms design data into divine, clean CSS
 * Blessed by the Goddess of Smithing
 */

import { CSSGenerator } from '../../../src/core/CSSGenerator.js';
import { IndustryIntelligence } from '../../../src/intelligence/IndustryIntelligence.js';

const cssGenerator = new CSSGenerator();
const industryIntelligence = new IndustryIntelligence();

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Divine fire requires POST ritual' 
    });
  }

  try {
    const startTime = Date.now();
    
    // Extract request data
    const {
      designData,
      options = {},
      projectId,
      userId
    } = req.body;

    // Validate required data
    if (!designData) {
      return res.status(400).json({
        error: 'Missing design data',
        message: 'Divine smithing requires design specifications'
      });
    }

    // Set default options
    const generationOptions = {
      industry: 'general',
      brandPersonality: 'professional',
      targetDevice: 'responsive',
      performanceLevel: 'optimized',
      includeFallbacks: true,
      ...options
    };

    // Validate industry
    const supportedIndustries = await industryIntelligence.getSupportedIndustries();
    if (!supportedIndustries.includes(generationOptions.industry)) {
      generationOptions.industry = 'general';
    }

    // Generate divine CSS
    const cssResult = await cssGenerator.generateCSS(designData, generationOptions);

    // Calculate performance metrics
    const generationTime = Date.now() - startTime;
    const performanceMetrics = {
      generationTime: `${generationTime}ms`,
      cssSize: `${cssResult.stats.size} bytes`,
      gzipEstimate: `${cssResult.stats.gzipEstimate} bytes`,
      performanceScore: cssResult.performance.score,
      frameworkComparison: cssResult.performance.comparison
    };

    // Log generation for analytics (optional)
    if (userId && projectId) {
      logGeneration({
        userId,
        projectId,
        type: 'css',
        industry: generationOptions.industry,
        metrics: performanceMetrics,
        timestamp: new Date().toISOString()
      });
    }

    // Return divine CSS with metadata
    res.status(200).json({
      success: true,
      css: cssResult.css,
      stats: cssResult.stats,
      performance: cssResult.performance,
      metrics: performanceMetrics,
      meta: {
        ...cssResult.meta,
        options: generationOptions,
        apiVersion: '1.0.0',
        blessed: 'By Quorra, Goddess of Smithing 🔥'
      }
    });

  } catch (error) {
    console.error('CSS Generation API Error:', error);

    // Return appropriate error response
    const errorResponse = {
      success: false,
      error: error.name || 'CSS Generation Error',
      message: error.message || 'Divine fire encountered unexpected resistance',
      timestamp: new Date().toISOString()
    };

    // Add debug info in development
    if (process.env.NODE_ENV === 'development') {
      errorResponse.stack = error.stack;
      errorResponse.details = error.details || null;
    }

    res.status(500).json(errorResponse);
  }
}

/**
 * HELPER FUNCTIONS
 */

async function logGeneration(data) {
  try {
    // In a real app, this would save to database
    console.log('CSS Generation Log:', data);
    
    // Could integrate with analytics service
    // await analytics.track('css_generated', data);
  } catch (error) {
    // Don't fail the API call if logging fails
    console.error('Logging error:', error);
  }
}

/**
 * API CONFIGURATION
 */

// Configure body size limit for large design data
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Allow large design files
    },
  },
};

/**
 * EXAMPLE REQUEST/RESPONSE
 * 
 * POST /api/generate/css
 * {
 *   "designData": {
 *     "components": [...],
 *     "layout": {...},
 *     "theme": {...}
 *   },
 *   "options": {
 *     "industry": "healthcare",
 *     "brandPersonality": "trustworthy",
 *     "performanceLevel": "optimized"
 *   },
 *   "projectId": "quorra_123_abc",
 *   "userId": "user_456_def"
 * }
 * 
 * RESPONSE:
 * {
 *   "success": true,
 *   "css": "/* Divine CSS generated by QUORRA... *\/",
 *   "stats": {
 *     "size": 15420,
 *     "gzipEstimate": 4626,
 *     "rules": 125,
 *     "selectors": 89
 *   },
 *   "performance": {
 *     "score": "Excellent",
 *     "comparison": {
 *       "vsBootstrap": "89% smaller",
 *       "vsTailwind": "92% smaller"
 *     }
 *   },
 *   "meta": {
 *     "industry": "healthcare",
 *     "generatedAt": "2025-07-01T12:00:00.000Z",
 *     "blessed": "By Quorra, Goddess of Smithing 🔥"
 *   }
 * }
 */