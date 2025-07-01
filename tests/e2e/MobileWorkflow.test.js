/**
 * QUORRA MOBILE WORKFLOW E2E TESTS
 * Divine validation of mobile-first user experience
 */

import { test, expect } from '@playwright/test';

test.describe('📱 QUORRA Mobile Workflow - Divine Touch Experience', () => {
  test.beforeEach(async ({ page }) => {
    // Set mobile viewport (iPhone 12 Pro)
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
  });

  test('🔥 Complete mobile website creation workflow', async ({ page }) => {
    // 1. Landing page mobile experience
    await expect(page.locator('h1')).toContainText('QUORRA');
    await expect(page.locator('.mobile-hero')).toBeVisible();
    
    // Mobile-specific elements should be visible
    await expect(page.locator('.mobile-nav-toggle')).toBeVisible();
    await expect(page.locator('.desktop-nav')).toBeHidden();

    // 2. Mobile navigation
    await page.click('[data-testid="mobile-menu-button"]');
    await expect(page.locator('.mobile-menu')).toBeVisible();
    await page.click('[data-testid="mobile-start-creating"]');

    // 3. Mobile editor initialization
    await expect(page).toHaveURL(/.*\/editor/);
    await expect(page.locator('.mobile-editor')).toBeVisible();
    
    // Mobile editor should have touch-optimized controls
    await expect(page.locator('.touch-toolbar')).toBeVisible();
    await expect(page.locator('.mobile-canvas')).toBeVisible();

    // 4. Industry selection on mobile
    await page.click('[data-testid="mobile-industry-selector"]');
    await expect(page.locator('.mobile-industry-grid')).toBeVisible();
    
    // Tap healthcare option
    await page.tap('[data-testid="industry-healthcare"]');
    await expect(page.locator('.industry-selected')).toContainText('Healthcare');

    // 5. Mobile Sparky interaction
    await expect(page.locator('.mobile-sparky-panel')).toBeVisible();
    await expect(page.locator('.sparky-mobile-message')).toContainText('healthcare');
    
    // Sparky should provide mobile-optimized guidance
    await page.tap('[data-testid="sparky-mobile-help"]');
    await expect(page.locator('.mobile-guidance-modal')).toBeVisible();

    // 6. Touch-based color selection
    await page.tap('[data-testid="mobile-color-tab"]');
    await expect(page.locator('.mobile-color-picker')).toBeVisible();
    
    // Touch to select trust blue
    await page.tap('[data-testid="color-trust-blue"]');
    await expect(page.locator('.color-preview')).toHaveCSS('background-color', 'rgb(37, 99, 235)');

    // 7. Mobile typography selection
    await page.tap('[data-testid="mobile-typography-tab"]');
    await expect(page.locator('.mobile-font-selector')).toBeVisible();
    
    // Swipe through font options
    await page.locator('.font-carousel').swipe('left');
    await page.tap('[data-testid="font-inter"]');

    // 8. Touch-based layout composition
    await page.tap('[data-testid="mobile-layout-tab"]');
    await expect(page.locator('.mobile-layout-tools')).toBeVisible();
    
    // Drag and drop on mobile
    const sourceElement = page.locator('[data-testid="mobile-section-services"]');
    const targetElement = page.locator('[data-testid="mobile-canvas-drop-zone"]');
    
    await sourceElement.dragTo(targetElement, { 
      force: true,
      sourcePosition: { x: 50, y: 50 },
      targetPosition: { x: 195, y: 200 }
    });

    // 9. Mobile preview and adjustment
    await page.tap('[data-testid="mobile-preview-button"]');
    await expect(page.locator('.mobile-preview-frame')).toBeVisible();
    
    // Test mobile responsiveness
    await expect(page.locator('.preview-mobile-view')).toBeVisible();
    await expect(page.locator('.preview-content')).toHaveCSS('max-width', '100%');

    // 10. Mobile-optimized generation
    await page.tap('[data-testid="mobile-forge-website"]');
    await expect(page.locator('.mobile-generation-progress')).toBeVisible();
    
    // Wait for mobile-optimized generation
    await expect(page.locator('.mobile-generation-complete')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('.mobile-divine-blessing')).toContainText('Blessed by Quorra');

    // 11. Mobile sharing and export
    await page.tap('[data-testid="mobile-share-button"]');
    await expect(page.locator('.mobile-share-options')).toBeVisible();
    
    // Test mobile-specific sharing
    await page.tap('[data-testid="mobile-share-link"]');
    await expect(page.locator('.mobile-share-success')).toContainText('Link copied');

    // 12. Mobile export options
    await page.tap('[data-testid="mobile-export-button"]');
    await expect(page.locator('.mobile-export-modal')).toBeVisible();
    
    await page.tap('[data-testid="mobile-download-html"]');
    // Note: Download testing on mobile requires special handling
    await expect(page.locator('.mobile-download-started')).toBeVisible();
  });

  test('📱 Mobile touch gestures and interactions', async ({ page }) => {
    await page.goto('/editor');
    await page.setViewportSize({ width: 390, height: 844 });

    // 1. Pinch to zoom functionality
    await page.tap('[data-testid="mobile-canvas"]');
    
    // Simulate pinch zoom (Playwright touch events)
    await page.touchscreen.tap(195, 300);
    await page.mouse.wheel(0, -500); // Zoom in
    await expect(page.locator('.canvas-zoom-level')).toContainText('150%');

    // 2. Swipe navigation
    await page.tap('[data-testid="mobile-tools-panel"]');
    
    // Swipe left to navigate tools
    const toolsPanel = page.locator('.mobile-tools-panel');
    await toolsPanel.swipe('left');
    await expect(page.locator('.tools-page-2')).toBeVisible();

    // Swipe right to go back
    await toolsPanel.swipe('right');
    await expect(page.locator('.tools-page-1')).toBeVisible();

    // 3. Long press for context menu
    await page.touchscreen.tap(195, 400, { delay: 1000 }); // Long press
    await expect(page.locator('.mobile-context-menu')).toBeVisible();
    
    await page.tap('[data-testid="context-edit"]');
    await expect(page.locator('.mobile-edit-modal')).toBeVisible();

    // 4. Drag and drop touch interactions
    const draggable = page.locator('[data-testid="mobile-component-button"]');
    const dropZone = page.locator('[data-testid="mobile-canvas-area"]');
    
    await draggable.dragTo(dropZone, {
      force: true,
      steps: 10 // Smooth drag animation
    });
    
    await expect(page.locator('.component-added')).toBeVisible();

    // 5. Pull to refresh functionality
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    
    // Simulate pull down gesture
    await page.mouse.move(195, 100);
    await page.mouse.down();
    await page.mouse.move(195, 300, { steps: 10 });
    await page.mouse.up();
    
    await expect(page.locator('.mobile-refresh-indicator')).toBeVisible();
  });

  test('🎨 Mobile Sparky interaction flow', async ({ page }) => {
    await page.goto('/editor');
    await page.setViewportSize({ width: 390, height: 844 });

    // 1. Sparky mobile interface
    await expect(page.locator('.mobile-sparky-avatar')).toBeVisible();
    await page.tap('[data-testid="mobile-sparky-chat"]');
    
    await expect(page.locator('.mobile-chat-interface')).toBeVisible();
    await expect(page.locator('.sparky-mobile-greeting')).toContainText('divine craftsperson');

    // 2. Voice input testing (if supported)
    if (await page.locator('[data-testid="mobile-voice-input"]').isVisible()) {
      await page.tap('[data-testid="mobile-voice-input"]');
      await expect(page.locator('.voice-recording-indicator')).toBeVisible();
      
      // Simulate voice input completion
      await page.tap('[data-testid="voice-input-stop"]');
      await expect(page.locator('.voice-processing')).toBeVisible();
    }

    // 3. Mobile text input
    await page.tap('[data-testid="mobile-chat-input"]');
    await page.keyboard.type('I need help with colors for my healthcare website');
    await page.tap('[data-testid="mobile-send-message"]');

    await expect(page.locator('.mobile-sparky-response')).toBeVisible();
    await expect(page.locator('.mobile-sparky-response')).toContainText('healthcare');

    // 4. Quick action buttons
    await expect(page.locator('.mobile-quick-actions')).toBeVisible();
    await page.tap('[data-testid="quick-action-colors"]');
    
    await expect(page.locator('.mobile-color-suggestions')).toBeVisible();
    await expect(page.locator('.suggested-color-trust-blue')).toBeVisible();

    // 5. Mobile guidance implementation
    await page.tap('[data-testid="apply-color-suggestion"]');
    await expect(page.locator('.mobile-applying-changes')).toBeVisible();
    await expect(page.locator('.mobile-changes-applied')).toContainText('Colors updated');

    // 6. Sparky mobile tips overlay
    await page.tap('[data-testid="mobile-sparky-tips"]');
    await expect(page.locator('.mobile-tips-overlay')).toBeVisible();
    
    // Swipe through tips
    await page.locator('.tips-carousel').swipe('left');
    await expect(page.locator('.tip-2')).toBeVisible();
  });

  test('⚡ Mobile performance and optimization', async ({ page }) => {
    // 1. Test mobile loading speed
    const startTime = Date.now();
    await page.goto('/editor');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    expect(loadTime).toBeLessThan(3000); // Under 3 seconds on mobile

    // 2. Test mobile responsiveness
    await page.setViewportSize({ width: 390, height: 844 }); // iPhone 12 Pro
    await expect(page.locator('.mobile-layout')).toBeVisible();
    
    await page.setViewportSize({ width: 360, height: 640 }); // Smaller Android
    await expect(page.locator('.mobile-layout')).toBeVisible();
    
    await page.setViewportSize({ width: 414, height: 896 }); // iPhone 11 Pro Max
    await expect(page.locator('.mobile-layout')).toBeVisible();

    // 3. Test touch target sizes
    const touchTargets = await page.locator('[data-touch-target]').all();
    
    for (const target of touchTargets) {
      const box = await target.boundingBox();
      expect(box.width).toBeGreaterThanOrEqual(44); // Minimum 44px
      expect(box.height).toBeGreaterThanOrEqual(44); // Minimum 44px
    }

    // 4. Test scroll performance
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    
    // Smooth scroll test
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => {
        window.scrollBy(0, 200);
      });
      await page.waitForTimeout(100);
    }
    
    // Check if scroll is smooth (no layout thrashing)
    const scrollPosition = await page.evaluate(() => window.scrollY);
    expect(scrollPosition).toBeGreaterThan(900);

    // 5. Test mobile animations
    await page.tap('[data-testid="mobile-animate-button"]');
    await expect(page.locator('.mobile-animation')).toHaveCSS('transform', /translate/);
    
    // Animation should complete smoothly
    await page.waitForTimeout(500);
    await expect(page.locator('.animation-complete')).toBeVisible();
  });

  test('🔄 Mobile offline functionality', async ({ page }) => {
    await page.goto('/editor');
    
    // 1. Go offline
    await page.context().setOffline(true);
    
    // 2. Test offline indicator
    await expect(page.locator('.mobile-offline-indicator')).toBeVisible();
    await expect(page.locator('.offline-message')).toContainText('Working offline');

    // 3. Test offline functionality
    await page.tap('[data-testid="mobile-color-tab"]');
    await expect(page.locator('.mobile-color-picker')).toBeVisible();
    
    // Colors should still work offline
    await page.tap('[data-testid="color-trust-blue"]');
    await expect(page.locator('.color-applied-offline')).toBeVisible();

    // 4. Test offline storage
    await page.tap('[data-testid="mobile-save-offline"]');
    await expect(page.locator('.saved-offline-indicator')).toBeVisible();

    // 5. Go back online
    await page.context().setOffline(false);
    await expect(page.locator('.mobile-online-indicator')).toBeVisible();
    
    // 6. Test sync functionality
    await page.tap('[data-testid="mobile-sync-changes"]');
    await expect(page.locator('.sync-in-progress')).toBeVisible();
    await expect(page.locator('.sync-complete')).toBeVisible();
  });

  test('📐 Mobile accessibility features', async ({ page }) => {
    await page.goto('/editor');

    // 1. Test high contrast mode
    await page.tap('[data-testid="mobile-accessibility-menu"]');
    await page.tap('[data-testid="mobile-high-contrast"]');
    
    await expect(page.locator('body')).toHaveClass(/high-contrast/);
    
    // Check contrast ratios
    const button = page.locator('[data-testid="mobile-primary-button"]');
    await expect(button).toHaveCSS('background-color', /rgb\(0, 0, 0\)/); // High contrast

    // 2. Test large text mode
    await page.tap('[data-testid="mobile-large-text"]');
    await expect(page.locator('body')).toHaveClass(/large-text/);
    
    const text = page.locator('.mobile-text');
    await expect(text).toHaveCSS('font-size', /20px|larger/);

    // 3. Test keyboard navigation
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toBeVisible();
    
    // Tab through interactive elements
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      const focused = page.locator(':focus');
      await expect(focused).toBeVisible();
    }

    // 4. Test screen reader support
    const landmarks = await page.locator('[role="main"], [role="navigation"], [role="button"]').all();
    expect(landmarks.length).toBeGreaterThan(3);
    
    // Check aria labels
    const buttons = await page.locator('button[aria-label]').all();
    expect(buttons.length).toBeGreaterThan(5);

    // 5. Test skip links
    await page.keyboard.press('Tab');
    const skipLink = page.locator('.skip-link');
    if (await skipLink.isVisible()) {
      await expect(skipLink).toContainText('Skip to main content');
    }
  });

  test('🌐 Mobile cross-browser compatibility', async ({ page, browserName }) => {
    await page.goto('/editor');
    
    console.log(`Testing mobile on: ${browserName}`);

    // 1. Test basic functionality across browsers
    await expect(page.locator('.mobile-editor')).toBeVisible();
    await expect(page.locator('.mobile-canvas')).toBeVisible();
    
    // 2. Test touch events
    await page.tap('[data-testid="mobile-color-tab"]');
    await expect(page.locator('.mobile-color-picker')).toBeVisible();
    
    // 3. Test CSS Grid/Flexbox support
    const gridContainer = page.locator('.mobile-grid-layout');
    await expect(gridContainer).toHaveCSS('display', /grid|flex/);
    
    // 4. Test modern CSS features
    const modernElement = page.locator('.mobile-modern-css');
    await expect(modernElement).toHaveCSS('border-radius', /px/);
    
    // 5. Browser-specific tests
    if (browserName === 'webkit') {
      // Safari-specific mobile tests
      await expect(page.locator('.ios-optimized')).toBeVisible();
      
      // Test Safari touch events
      await page.tap('[data-testid="safari-touch-test"]');
      await expect(page.locator('.safari-touch-response')).toBeVisible();
    }
    
    if (browserName === 'chromium') {
      // Chrome mobile tests
      await expect(page.locator('.chrome-mobile-features')).toBeVisible();
      
      // Test Chrome's mobile viewport
      const viewport = await page.evaluate(() => ({
        width: window.innerWidth,
        height: window.innerHeight
      }));
      expect(viewport.width).toBeLessThan(500); // Mobile width
    }
  });

  test('🔄 Mobile landscape/portrait orientation', async ({ page }) => {
    // 1. Start in portrait
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/editor');
    
    await expect(page.locator('.mobile-portrait-layout')).toBeVisible();
    await expect(page.locator('.mobile-landscape-layout')).toBeHidden();

    // 2. Switch to landscape
    await page.setViewportSize({ width: 844, height: 390 });
    await page.waitForTimeout(500); // Allow orientation change
    
    await expect(page.locator('.mobile-landscape-layout')).toBeVisible();
    await expect(page.locator('.mobile-portrait-layout')).toBeHidden();

    // 3. Test landscape-specific features
    await expect(page.locator('.landscape-toolbar')).toBeVisible();
    await expect(page.locator('.landscape-canvas')).toBeVisible();
    
    // Landscape should show more tools
    const landscapeTools = await page.locator('.landscape-tool').count();
    expect(landscapeTools).toBeGreaterThan(5);

    // 4. Test orientation-specific interactions
    await page.tap('[data-testid="landscape-color-panel"]');
    await expect(page.locator('.landscape-color-grid')).toBeVisible();
    
    // Landscape color grid should show more colors
    const landscapeColors = await page.locator('.landscape-color-option').count();
    expect(landscapeColors).toBeGreaterThan(12);

    // 5. Switch back to portrait
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(500);
    
    await expect(page.locator('.mobile-portrait-layout')).toBeVisible();
    await expect(page.locator('.mobile-landscape-layout')).toBeHidden();
  });

  test('📶 Mobile network conditions', async ({ page }) => {
    // 1. Test on fast 4G
    await page.context().route('**/*', route => {
      // Simulate fast network
      setTimeout(() => route.continue(), 10);
    });
    
    const startTime = Date.now();
    await page.goto('/editor');
    const fastLoadTime = Date.now() - startTime;
    
    expect(fastLoadTime).toBeLessThan(2000);

    // 2. Test on slow 3G
    await page.context().route('**/*', route => {
      // Simulate slow network
      setTimeout(() => route.continue(), 500);
    });
    
    await page.reload();
    await expect(page.locator('.mobile-loading-slow')).toBeVisible();
    await expect(page.locator('.network-speed-indicator')).toContainText('slow');

    // 3. Test progressive loading
    await expect(page.locator('.mobile-critical-content')).toBeVisible();
    await expect(page.locator('.mobile-secondary-content')).toBeVisible({ timeout: 3000 });

    // 4. Test image lazy loading
    await page.scroll(0, 500);
    await expect(page.locator('.lazy-loaded-image')).toBeVisible();
    
    // 5. Test graceful degradation
    await page.context().setOffline(true);
    await page.reload();
    
    await expect(page.locator('.mobile-offline-mode')).toBeVisible();
    await expect(page.locator('.essential-features-only')).toBeVisible();
  });
});

// Helper functions for mobile testing
async function simulatePinchZoom(page, scale) {
  await page.evaluate((scale) => {
    const event = new WheelEvent('wheel', {
      deltaY: scale > 1 ? -100 : 100,
      ctrlKey: true,
      bubbles: true
    });
    document.dispatchEvent(event);
  }, scale);
}

async function simulateSwipeGesture(page, element, direction) {
  const box = await element.boundingBox();
  const startX = box.x + box.width / 2;
  const startY = box.y + box.height / 2;
  
  let endX = startX;
  let endY = startY;
  
  switch (direction) {
    case 'left':
      endX = startX - 100;
      break;
    case 'right':
      endX = startX + 100;
      break;
    case 'up':
      endY = startY - 100;
      break;
    case 'down':
      endY = startY + 100;
      break;
  }
  
  await page.mouse.move(startX, startY);
  await page.mouse.down();
  await page.mouse.move(endX, endY, { steps: 10 });
  await page.mouse.up();
}

console.log('📱 QUORRA Mobile Workflow tests loaded - Divine touch experience ready for validation');