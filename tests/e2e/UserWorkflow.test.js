/**
 * QUORRA USER WORKFLOW E2E TESTS
 * Divine validation of complete user journey from discovery to deployment
 */

import { test, expect } from '@playwright/test';

test.describe('🎨 QUORRA Complete User Workflow - Divine Creation Journey', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('🔥 Complete beginner user journey - Healthcare website', async ({ page }) => {
    // 1. Landing page discovery
    await expect(page.locator('h1')).toContainText('QUORRA');
    await expect(page.locator('.divine-tagline')).toContainText('Forge the Future');
    await expect(page.locator('.goddess-imagery')).toBeVisible();

    // Check divine branding elements
    await expect(page.locator('.flame-q-logo')).toBeVisible();
    await expect(page.locator('.mythological-messaging')).toContainText('Goddess of Smithing');

    // 2. Value proposition understanding
    await expect(page.locator('.performance-claims')).toContainText('87% smaller');
    await expect(page.locator('.speed-claims')).toContainText('3x faster');
    await expect(page.locator('.clean-code-promise')).toContainText('clean CSS');

    // View live examples
    await page.click('[data-testid="view-examples"]');
    await expect(page.locator('.example-showcase')).toBeVisible();
    await expect(page.locator('.healthcare-example')).toBeVisible();

    // 3. Start creation journey
    await page.click('[data-testid="start-creating"]');
    await expect(page).toHaveURL(/.*\/editor/);

    // Welcome to the sacred forge
    await expect(page.locator('.forge-welcome')).toContainText('Sacred Forge');
    await expect(page.locator('.sparky-greeting')).toContainText('divine craftsperson');

    // 4. Onboarding flow for beginners
    await expect(page.locator('.onboarding-overlay')).toBeVisible();
    await expect(page.locator('.tutorial-step-1')).toContainText('Choose your industry');

    // Take the divine tutorial
    await page.click('[data-testid="start-tutorial"]');
    await expect(page.locator('.tutorial-active')).toBeVisible();

    // 5. Industry selection with guidance
    await expect(page.locator('.industry-selector')).toBeVisible();
    await expect(page.locator('.sparky-industry-help')).toContainText('What type of business');

    // Hover for industry insights
    await page.hover('[data-testid="industry-healthcare"]');
    await expect(page.locator('.industry-tooltip')).toContainText('trust-building colors');

    // Select healthcare
    await page.click('[data-testid="industry-healthcare"]');
    await expect(page.locator('.industry-selected')).toContainText('Healthcare');

    // Sparky responds with industry-specific guidance
    await expect(page.locator('.sparky-response')).toContainText('healthcare');
    await expect(page.locator('.sparky-response')).toContainText('trust');

    // 6. Guided color selection
    await page.click('[data-testid="continue-to-colors"]');
    await expect(page.locator('.color-selection-stage')).toBeVisible();

    // Sparky explains color psychology
    await expect(page.locator('.sparky-color-guidance')).toContainText('Divine patterns suggest');
    await expect(page.locator('.color-recommendations')).toBeVisible();

    // View recommended palette
    await page.click('[data-testid="view-recommended-palette"]');
    await expect(page.locator('.recommended-palette')).toBeVisible();
    await expect(page.locator('.trust-blue-color')).toBeVisible();
    await expect(page.locator('.healing-peach-color')).toBeVisible();

    // Accept recommendations
    await page.click('[data-testid="use-recommended-colors"]');
    await expect(page.locator('.colors-applied')).toContainText('Divine harmony achieved');

    // 7. Typography guidance
    await page.click('[data-testid="continue-to-typography"]');
    await expect(page.locator('.typography-selection-stage')).toBeVisible();

    // Sparky explains font psychology
    await expect(page.locator('.sparky-font-guidance')).toContainText('sacred typography');
    await expect(page.locator('.font-recommendations')).toBeVisible();

    // Preview font combinations
    await page.click('[data-testid="preview-font-inter"]');
    await expect(page.locator('.font-preview')).toContainText('Inter');
    await expect(page.locator('.readability-score')).toContainText('Excellent');

    // Apply typography
    await page.click('[data-testid="apply-typography"]');
    await expect(page.locator('.typography-applied')).toContainText('Professional readability');

    // 8. Layout composition with assistance
    await page.click('[data-testid="continue-to-layout"]');
    await expect(page.locator('.layout-composition-stage')).toBeVisible();

    // Sparky provides layout guidance
    await expect(page.locator('.sparky-layout-help')).toContainText('sacred structure');
    await expect(page.locator('.layout-templates')).toBeVisible();

    // Choose healthcare template
    await page.click('[data-testid="healthcare-layout-template"]');
    await expect(page.locator('.template-preview')).toBeVisible();
    await expect(page.locator('.template-sections')).toContainText('Services');

    // Customize content
    await page.click('[data-testid="customize-content"]');
    await page.fill('[data-testid="practice-name"]', 'Canyon Lake Medical Center');
    await page.fill('[data-testid="practice-tagline"]', 'Compassionate Care, Every Step of the Way');

    // Add services
    await page.click('[data-testid="add-service"]');
    await page.fill('[data-testid="service-1-name"]', 'Primary Care');
    await page.fill('[data-testid="service-1-description"]', 'Comprehensive healthcare for all ages');

    // 9. Real-time preview and refinement
    await page.click('[data-testid="preview-website"]');
    await expect(page.locator('.website-preview')).toBeVisible();
    await expect(page.locator('.preview-frame')).toBeVisible();

    // Check preview content
    const previewFrame = page.frameLocator('.preview-frame');
    await expect(previewFrame.locator('h1')).toContainText('Canyon Lake Medical Center');
    await expect(previewFrame.locator('.tagline')).toContainText('Compassionate Care');
    await expect(previewFrame.locator('.service-item')).toContainText('Primary Care');

    // Mobile preview check
    await page.click('[data-testid="mobile-preview"]');
    await expect(page.locator('.mobile-preview-frame')).toBeVisible();
    await expect(page.locator('.responsive-indicator')).toContainText('Mobile optimized');

    // 10. Sparky's final review and suggestions
    await page.click('[data-testid="sparky-review"]');
    await expect(page.locator('.sparky-final-review')).toBeVisible();
    await expect(page.locator('.sparky-approval')).toContainText('Divine creation approved');

    // Performance insights
    await expect(page.locator('.performance-preview')).toBeVisible();
    await expect(page.locator('.load-time-estimate')).toContainText('1.6 seconds');
    await expect(page.locator('.file-size-estimate')).toContainText('12.8 KB');

    // 11. Website generation - The Divine Forging
    await page.click('[data-testid="forge-website"]');
    await expect(page.locator('.forging-in-progress')).toBeVisible();
    await expect(page.locator('.divine-fire-animation')).toBeVisible();

    // Watch the forging progress
    await expect(page.locator('.forging-step')).toContainText('Analyzing design');
    await expect(page.locator('.forging-step')).toContainText('Applying industry wisdom');
    await expect(page.locator('.forging-step')).toContainText('Generating clean HTML');
    await expect(page.locator('.forging-step')).toContainText('Forging optimized CSS');

    // Divine blessing completion
    await expect(page.locator('.forging-complete')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('.divine-blessing')).toContainText('Blessed by Quorra, Goddess of Smithing');

    // 12. Results and metrics
    await expect(page.locator('.generation-results')).toBeVisible();
    await expect(page.locator('.performance-metrics')).toBeVisible();

    // Check performance achievements
    await expect(page.locator('.file-size-reduction')).toContainText('89%');
    await expect(page.locator('.loading-speed-improvement')).toContainText('3.2x faster');
    await expect(page.locator('.lighthouse-score')).toContainText('97');

    // Code quality indicators
    await expect(page.locator('.semantic-html-badge')).toBeVisible();
    await expect(page.locator('.accessibility-aa-badge')).toBeVisible();
    await expect(page.locator('.mobile-optimized-badge')).toBeVisible();

    // 13. Code export and download
    await page.click('[data-testid="view-generated-code"]');
    await expect(page.locator('.code-viewer')).toBeVisible();

    // HTML preview
    await page.click('[data-testid="html-tab"]');
    await expect(page.locator('.html-code')).toContainText('<!DOCTYPE html>');
    await expect(page.locator('.html-code')).toContainText('Canyon Lake Medical Center');

    // CSS preview
    await page.click('[data-testid="css-tab"]');
    await expect(page.locator('.css-code')).toContainText(':root');
    await expect(page.locator('.css-code')).toContainText('#2563EB');

    // Download files
    const downloadPromise = page.waitForEvent('download');
    await page.click('[data-testid="download-complete-package"]');
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/canyon-lake-medical.*\.zip/);

    // 14. Publishing options
    await page.click('[data-testid="publishing-options"]');
    await expect(page.locator('.publishing-modal')).toBeVisible();

    // Direct publishing
    await expect(page.locator('.publish-to-web')).toBeVisible();
    await expect(page.locator('.custom-domain-option')).toBeVisible();

    // Integration options
    await expect(page.locator('.export-to-wordpress')).toBeVisible();
    await expect(page.locator('.export-to-shopify')).toBeVisible();

    // 15. Save project for future editing
    await page.click('[data-testid="save-project"]');
    await page.fill('[data-testid="project-name"]', 'Canyon Lake Medical Website');
    await page.click('[data-testid="confirm-save"]');

    await expect(page.locator('.project-saved')).toContainText('Project blessed and saved');
    await expect(page.locator('.project-dashboard-link')).toBeVisible();

    // 16. User satisfaction and feedback
    await expect(page.locator('.satisfaction-survey')).toBeVisible();
    await page.click('[data-testid="rating-5-stars"]');
    await page.fill('[data-testid="feedback-text"]', 'Amazing tool! The AI guidance made it so easy.');
    await page.click('[data-testid="submit-feedback"]');

    await expect(page.locator('.feedback-thanks')).toContainText('Divine gratitude');
  });

  test('⚡ Intermediate user journey - Restaurant website with customization', async ({ page }) => {
    // Skip onboarding for intermediate user
    await page.goto('/editor?experience=intermediate');
    
    // 1. Quick industry selection
    await page.click('[data-testid="industry-restaurant"]');
    await expect(page.locator('.industry-selected')).toContainText('Restaurant');

    // 2. Custom color palette creation
    await page.click('[data-testid="create-custom-palette"]');
    await expect(page.locator('.color-palette-creator')).toBeVisible();

    // Use color picker
    await page.click('[data-testid="color-picker-primary"]');
    await page.fill('[data-testid="hex-input"]', '#8B6914');
    await page.click('[data-testid="apply-color"]');

    // Generate harmonious palette
    await page.click('[data-testid="generate-harmony"]');
    await expect(page.locator('.harmonious-colors')).toBeVisible();
    await expect(page.locator('.harmony-quality')).toContainText('Excellent');

    // 3. Advanced typography selection
    await page.click('[data-testid="advanced-typography"]');
    await expect(page.locator('.font-pairing-tool')).toBeVisible();

    // Test font combinations
    await page.selectOption('[data-testid="heading-font"]', 'Playfair Display');
    await page.selectOption('[data-testid="body-font"]', 'Crimson Text');
    await expect(page.locator('.pairing-score')).toContainText('Excellent appetite appeal');

    // 4. Custom layout design
    await page.click('[data-testid="custom-layout"]');
    await expect(page.locator('.layout-builder')).toBeVisible();

    // Drag and drop sections
    await page.dragAndDrop('[data-testid="hero-section"]', '[data-testid="layout-canvas"]');
    await page.dragAndDrop('[data-testid="menu-preview-section"]', '[data-testid="layout-canvas"]');
    await page.dragAndDrop('[data-testid="about-section"]', '[data-testid="layout-canvas"]');

    // Customize sections
    await page.click('[data-testid="edit-hero-section"]');
    await page.fill('[data-testid="restaurant-name"]', 'Bistro Divine');
    await page.fill('[data-testid="restaurant-tagline"]', 'Where Flavor Meets the Sacred');

    // Add menu items
    await page.click('[data-testid="edit-menu-section"]');
    await page.click('[data-testid="add-menu-item"]');
    await page.fill('[data-testid="dish-name"]', 'Sacred Salmon');
    await page.fill('[data-testid="dish-price"]', '$28');
    await page.fill('[data-testid="dish-description"]', 'Divine Atlantic salmon with herb crust');

    // 5. Advanced preview and testing
    await page.click('[data-testid="advanced-preview"]');
    await expect(page.locator('.multi-device-preview')).toBeVisible();

    // Test different devices
    await page.click('[data-testid="desktop-preview"]');
    await expect(page.locator('.desktop-frame')).toBeVisible();

    await page.click('[data-testid="tablet-preview"]');
    await expect(page.locator('.tablet-frame')).toBeVisible();

    await page.click('[data-testid="mobile-preview"]');
    await expect(page.locator('.mobile-frame')).toBeVisible();

    // Performance testing
    await page.click('[data-testid="performance-test"]');
    await expect(page.locator('.performance-analysis')).toBeVisible();
    await expect(page.locator('.speed-score')).toContainText('Excellent');

    // 6. Generate with custom optimizations
    await page.click('[data-testid="custom-generation-options"]');
    await page.check('[data-testid="enable-lazy-loading"]');
    await page.check('[data-testid="optimize-images"]');
    await page.check('[data-testid="inline-critical-css"]');

    await page.click('[data-testid="forge-website"]');
    await expect(page.locator('.forging-complete')).toBeVisible({ timeout: 15000 });

    // 7. Code customization
    await page.click('[data-testid="customize-code"]');
    await expect(page.locator('.code-editor')).toBeVisible();

    // Add custom CSS
    await page.click('[data-testid="add-custom-css"]');
    await page.fill('[data-testid="custom-css-input"]', '.special-menu-item { box-shadow: 0 4px 8px rgba(0,0,0,0.1); }');
    await page.click('[data-testid="apply-custom-css"]');

    // 8. A/B testing setup
    await page.click('[data-testid="ab-testing"]');
    await expect(page.locator('.ab-test-creator')).toBeVisible();

    // Create variant
    await page.click('[data-testid="create-variant"]');
    await page.fill('[data-testid="variant-name"]', 'Orange CTA Variant');
    await page.click('[data-testid="modify-cta-color"]');
    await page.fill('[data-testid="cta-color"]', '#F97316');

    await expect(page.locator('.variant-created')).toContainText('Variant ready for testing');
  });

  test('🚀 Advanced user journey - Technology SaaS website with API integration', async ({ page }) => {
    // Advanced user flow
    await page.goto('/editor?tier=foundry&experience=advanced');

    // 1. Quick setup with minimal guidance
    await page.click('[data-testid="skip-guidance"]');
    await page.click('[data-testid="industry-technology"]');

    // 2. Import design assets
    await page.click('[data-testid="import-assets"]');
    await expect(page.locator('.asset-importer')).toBeVisible();

    // Upload brand assets
    const fileInput = page.locator('[data-testid="brand-assets-upload"]');
    await fileInput.setInputFiles([
      { name: 'logo.svg', mimeType: 'image/svg+xml', buffer: Buffer.from('<svg></svg>') },
      { name: 'brand-colors.json', mimeType: 'application/json', buffer: Buffer.from('{"primary": "#6366F1"}') }
    ]);

    await expect(page.locator('.assets-uploaded')).toContainText('Brand assets imported');

    // 3. API-driven content integration
    await page.click('[data-testid="api-content-integration"]');
    await expect(page.locator('.api-integrator')).toBeVisible();

    // Connect to content API
    await page.fill('[data-testid="api-endpoint"]', 'https://api.flowsuite.com/content');
    await page.fill('[data-testid="api-key"]', 'test-api-key-12345');
    await page.click('[data-testid="test-connection"]');

    await expect(page.locator('.api-connected')).toContainText('Content API connected');

    // Import content structure
    await page.click('[data-testid="import-content-structure"]');
    await expect(page.locator('.content-mapped')).toContainText('Features and pricing imported');

    // 4. Advanced component creation
    await page.click('[data-testid="create-custom-component"]');
    await expect(page.locator('.component-builder')).toBeVisible();

    // Build pricing table component
    await page.fill('[data-testid="component-name"]', 'SaaS Pricing Table');
    await page.click('[data-testid="add-pricing-tier"]');
    await page.fill('[data-testid="tier-name"]', 'Starter');
    await page.fill('[data-testid="tier-price"]', '$29/month');

    await page.click('[data-testid="save-component"]');
    await expect(page.locator('.component-saved')).toContainText('Custom component created');

    // 5. Multi-page website structure
    await page.click('[data-testid="add-page"]');
    await page.fill('[data-testid="page-name"]', 'Features');
    await page.selectOption('[data-testid="page-template"]', 'feature-showcase');

    await page.click('[data-testid="add-page"]');
    await page.fill('[data-testid="page-name"]', 'Pricing');
    await page.selectOption('[data-testid="page-template"]', 'pricing-page');

    await expect(page.locator('.pages-created')).toContainText('3 pages structured');

    // 6. SEO and analytics setup
    await page.click('[data-testid="seo-analytics-setup"]');
    await expect(page.locator('.seo-configurator')).toBeVisible();

    // Configure SEO
    await page.fill('[data-testid="meta-title"]', 'FlowSuite - Boost Productivity, Simplify Workflows');
    await page.fill('[data-testid="meta-description"]', 'All-in-one productivity platform for modern teams');
    await page.fill('[data-testid="meta-keywords"]', 'productivity, workflow, team collaboration');

    // Setup analytics
    await page.fill('[data-testid="google-analytics-id"]', 'GA-123456789');
    await page.check('[data-testid="enable-conversion-tracking"]');

    // 7. Advanced performance optimization
    await page.click('[data-testid="performance-optimization"]');
    await expect(page.locator('.performance-optimizer')).toBeVisible();

    // Enable advanced optimizations
    await page.check('[data-testid="tree-shaking"]');
    await page.check('[data-testid="critical-css-inlining"]');
    await page.check('[data-testid="resource-preloading"]');
    await page.check('[data-testid="modern-image-formats"]');

    await page.click('[data-testid="analyze-performance-impact"]');
    await expect(page.locator('.performance-prediction')).toContainText('95% Lighthouse score predicted');

    // 8. Team collaboration setup
    await page.click('[data-testid="team-collaboration"]');
    await expect(page.locator('.team-manager')).toBeVisible();

    // Invite team members
    await page.fill('[data-testid="invite-email"]', 'designer@flowsuite.com');
    await page.selectOption('[data-testid="team-role"]', 'designer');
    await page.click('[data-testid="send-invite"]');

    await expect(page.locator('.invite-sent')).toContainText('Team member invited');

    // 9. Version control integration
    await page.click('[data-testid="version-control"]');
    await expect(page.locator('.git-integration')).toBeVisible();

    // Connect to GitHub
    await page.fill('[data-testid="github-repo"]', 'flowsuite/website');
    await page.fill('[data-testid="github-token"]', 'ghp_test12345');
    await page.click('[data-testid="connect-github"]');

    await expect(page.locator('.github-connected')).toContainText('Repository connected');

    // 10. Advanced generation with deployment
    await page.click('[data-testid="advanced-generation"]');
    await expect(page.locator('.deployment-options')).toBeVisible();

    // Configure deployment
    await page.selectOption('[data-testid="deployment-target"]', 'vercel');
    await page.fill('[data-testid="custom-domain"]', 'flowsuite.com');
    await page.check('[data-testid="auto-deploy-on-changes"]');

    await page.click('[data-testid="forge-and-deploy"]');
    await expect(page.locator('.forging-and-deploying')).toBeVisible();

    // 11. Deployment success and live site
    await expect(page.locator('.deployment-complete')).toBeVisible({ timeout: 30000 });
    await expect(page.locator('.live-site-url')).toContainText('https://flowsuite.com');

    // Test live site
    await page.click('[data-testid="view-live-site"]');
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      page.click('[data-testid="open-live-site"]')
    ]);

    await expect(newPage.locator('h1')).toContainText('FlowSuite');
    await expect(newPage.locator('.performance-optimized')).toBeVisible();
  });

  test('🔄 User returning to edit existing project', async ({ page }) => {
    // 1. Navigate to project dashboard
    await page.goto('/projects');
    await expect(page.locator('.project-dashboard')).toBeVisible();

    // 2. Find existing project
    await expect(page.locator('.project-card')).toBeVisible();
    await expect(page.locator('.project-name')).toContainText('Canyon Lake Medical');

    // View project details
    await page.hover('[data-testid="project-canyon-lake"]');
    await expect(page.locator('.project-stats')).toBeVisible();
    await expect(page.locator('.last-modified')).toContainText('2 days ago');

    // 3. Edit existing project
    await page.click('[data-testid="edit-project-canyon-lake"]');
    await expect(page).toHaveURL(/.*\/editor\/proj_.*/);

    // Project loads with existing data
    await expect(page.locator('.project-loaded')).toContainText('Canyon Lake Medical');
    await expect(page.locator('.existing-colors')).toBeVisible();
    await expect(page.locator('.existing-typography')).toBeVisible();

    // 4. Make modifications
    await page.click('[data-testid="edit-colors"]');
    await page.click('[data-testid="add-accent-color"]');
    await page.fill('[data-testid="accent-color-input"]', '#16A34A');
    await page.click('[data-testid="apply-accent"]');

    await expect(page.locator('.color-updated')).toContainText('Accent color added');

    // 5. Version comparison
    await page.click('[data-testid="view-changes"]');
    await expect(page.locator('.version-comparison')).toBeVisible();
    await expect(page.locator('.changes-preview')).toContainText('Added accent color');

    // 6. Save new version
    await page.click('[data-testid="save-new-version"]');
    await page.fill('[data-testid="version-notes"]', 'Added green accent for better health association');
    await page.click('[data-testid="confirm-save-version"]');

    await expect(page.locator('.version-saved')).toContainText('Version 2 saved');
  });

  test('🎯 Subscription tier upgrade workflow', async ({ page }) => {
    // 1. Start as free user hitting limits
    await page.goto('/editor?tier=ember');
    await page.click('[data-testid="industry-healthcare"]');

    // 2. Hit project limit
    await page.click('[data-testid="save-project"]');
    await expect(page.locator('.upgrade-modal')).toBeVisible();
    await expect(page.locator('.tier-limit-message')).toContainText('Ember tier allows 1 project');

    // 3. View upgrade options
    await page.click('[data-testid="view-upgrade-options"]');
    await expect(page.locator('.pricing-tiers')).toBeVisible();

    // Compare tiers
    await expect(page.locator('.hammer-tier')).toContainText('$35/month');
    await expect(page.locator('.anvil-tier')).toContainText('$59/month');
    await expect(page.locator('.foundry-tier')).toContainText('$129/month');

    // 4. Select tier upgrade
    await page.click('[data-testid="upgrade-to-hammer"]');
    await expect(page.locator('.checkout-modal')).toBeVisible();

    // Enter payment information (mock)
    await page.fill('[data-testid="card-number"]', '4242424242424242');
    await page.fill('[data-testid="card-expiry"]', '12/25');
    await page.fill('[data-testid="card-cvc"]', '123');

    await page.click('[data-testid="complete-upgrade"]');
    await expect(page.locator('.upgrade-success')).toContainText('Welcome to Hammer tier');

    // 5. Verify new features unlocked
    await expect(page.locator('.tier-hammer-badge')).toBeVisible();
    await expect(page.locator('.project-limit')).toContainText('10 projects available');
    await expect(page.locator('.new-features-available')).toBeVisible();

    // 6. Access premium features
    await page.click('[data-testid="premium-templates"]');
    await expect(page.locator('.premium-template-gallery')).toBeVisible();
    await expect(page.locator('.hammer-exclusive')).toBeVisible();
  });
});

// Test utilities for user workflow validation
async function validatePerformanceMetrics(page) {
  const metrics = await page.evaluate(() => {
    return {
      loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
      domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
      firstPaint: performance.getEntriesByType('paint')[0]?.startTime || 0
    };
  });

  expect(metrics.loadTime).toBeLessThan(3000); // Under 3 seconds
  expect(metrics.domContentLoaded).toBeLessThan(2000); // Under 2 seconds
  return metrics;
}

async function validateAccessibility(page) {
  // Check for accessibility landmarks
  const landmarks = await page.locator('[role="main"], [role="navigation"], [role="banner"]').count();
  expect(landmarks).toBeGreaterThan(2);

  // Check for alt text on images
  const imagesWithoutAlt = await page.locator('img:not([alt])').count();
  expect(imagesWithoutAlt).toBe(0);

  // Check for heading hierarchy
  const h1Count = await page.locator('h1').count();
  expect(h1Count).toBe(1); // Should have exactly one h1

  return true;
}

async function validateResponsiveDesign(page) {
  const viewports = [
    { width: 1920, height: 1080 }, // Desktop
    { width: 768, height: 1024 },  // Tablet
    { width: 390, height: 844 }    // Mobile
  ];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.waitForTimeout(500); // Allow layout to settle

    // Check if content is visible and properly arranged
    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('.main-content')).toBeVisible();

    // Ensure no horizontal scrollbars
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.body.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalScroll).toBe(false);
  }

  return true;
}

console.log('🎨 QUORRA User Workflow tests loaded - Divine creation journey ready for validation');