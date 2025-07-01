/**
 * QUORRA Divine Experience System
 * Weaves mythological magic throughout the user experience
 * 
 * Creates: Delightful divine moments, blessed notifications, sacred achievements
 * Powers: The feeling that users are truly blessed by the Goddess of Smithing
 */

class QuorraDivineExperience {
  constructor() {
    this.divineConfig = {
      enableDivineMode: true,         // Master toggle for divine features
      flameIntensity: 'medium',       // 'subtle', 'medium', 'vibrant'
      sparkleFrequency: 'balanced',   // 'minimal', 'balanced', 'abundant'
      divineMessagesEnabled: true,    // Quorra-themed notifications
      achievementSystem: true,        // Divine achievement unlocks
      seasonalEvents: true,           // Special divine events
      audioEnabled: false             // Divine sound effects (subtle)
    };

    // Divine message banks for different contexts
    this.divineMessages = {
      success: [
        "Your work has been blessed by Quorra's flame ✨",
        "The goddess smiles upon your creation 🔥",
        "Divine fire has purified your design",
        "Blessed by the sacred forge - perfection achieved!",
        "Quorra herself would be proud of this craftsmanship",
        "Your creation burns bright with divine energy"
      ],
      
      perfectAlignment: [
        "Elements aligned by divine will ⚡",
        "The goddess guides your hand - perfect placement!",
        "Sacred geometry achieved through divine blessing",
        "Your design sings in harmony with the divine order"
      ],
      
      cleanCode: [
        "Blessed by divine fire - your code is pure! 🔥",
        "Quorra's flame has forged flawless CSS",
        "The goddess whispers: 'This code pleases me'",
        "Divine craftsmanship - 87% purer than mortal frameworks",
        "Your CSS burns clean and bright, free from framework bloat"
      ],
      
      errors: [
        "Even divine fire needs proper kindling 🔥",
        "The forge requires patience - let's try again",
        "Quorra's hammer strikes true, but needs better materials",
        "Divine wisdom: every master smith faces setbacks",
        "The goddess teaches through gentle correction"
      ],
      
      loading: [
        "Channeling divine fire...",
        "The goddess shapes your vision...",
        "Sacred flames forge your design...",
        "Divine craftsmanship in progress...",
        "Quorra's blessing descends upon your work..."
      ],
      
      export: [
        "Your creation emerges from the divine forge! 🔥",
        "Blessed code, ready for the mortal realm",
        "Divine craftsmanship completed - take it forth!",
        "The goddess releases your work to bless the world"
      ]
    };

    // Sparky's divine personality phrases
    this.sparkyDivineLines = {
      welcome: [
        "Greetings, blessed craftsperson! I bring wisdom from Quorra's forge 🔥",
        "The goddess has sent me to guide your divine journey",
        "Welcome to the sacred realm of divine design!"
      ],
      
      suggestions: [
        "Let me channel Quorra's wisdom for this layout...",
        "The goddess whispers that flexbox would serve you better here",
        "Divine insight reveals a more harmonious approach",
        "Quorra's flame illuminates a better path forward",
        "Sacred knowledge suggests this arrangement..."
      ],
      
      encouragement: [
        "The goddess sees great potential in your work!",
        "Your skills grow stronger with each divine blessing",
        "Quorra's flame burns brighter with your progress",
        "The sacred forge awaits your next masterpiece"
      ],
      
      helpfulTips: [
        "Divine wisdom: consistent spacing pleases the goddess",
        "Quorra favors clean code over complex frameworks",
        "The sacred flame burns brightest with semantic HTML",
        "Divine truth: accessibility blesses all who encounter your work"
      ]
    };

    // Achievement system
    this.divineAchievements = {
      'first-design': {
        name: "Novice Smith",
        description: "Created your first blessed design",
        icon: "🔥",
        rarity: "common",
        message: "The divine forge welcomes a new craftsperson!"
      },
      
      'perfect-alignment': {
        name: "Divine Precision",
        description: "Achieved perfect element alignment",
        icon: "⚡",
        rarity: "uncommon",
        message: "The goddess guides your hand with divine precision!"
      },
      
      'clean-css': {
        name: "Blessed Smith",
        description: "Generated clean, framework-free CSS",
        icon: "✨",
        rarity: "rare",
        message: "Your code burns pure with divine fire!"
      },
      
      'responsive-master': {
        name: "Divine Craftsperson",
        description: "Mastered responsive design across all devices",
        icon: "👑",
        rarity: "epic",
        message: "Quorra herself recognizes your supreme skill!"
      },
      
      'accessibility-champion': {
        name: "Guardian of All Souls",
        description: "Created fully accessible designs",
        icon: "🕊️",
        rarity: "legendary",
        message: "The goddess blesses your inclusive spirit!"
      },
      
      'performance-god': {
        name: "Master of Sacred Speed",
        description: "Achieved perfect Lighthouse scores",
        icon: "🌟",
        rarity: "mythic",
        message: "Divine fire flows through your optimizations!"
      },
      
      'community-helper': {
        name: "Quorra's Chosen",
        description: "Helped fellow craftspeople in the community",
        icon: "🤝",
        rarity: "legendary",
        message: "The goddess smiles upon your generous spirit!"
      }
    };

    // Divine visual effects configuration
    this.visualEffects = {
      flames: {
        colors: ['#FF6B35', '#FF8C42', '#FFD700', '#FF4500'],
        particles: 12,
        duration: 800,
        spread: 30
      },
      
      sparkles: {
        colors: ['#FFD700', '#FFF8DC', '#FFFFE0', '#F0E68C'],
        particles: 8,
        duration: 600,
        twinkle: true
      },
      
      divineGlow: {
        color: 'rgba(255, 107, 53, 0.3)',
        blur: '10px',
        spread: '2px',
        pulse: true
      }
    };

    // User progress tracking
    this.userProgress = {
      divineLevel: 1,
      totalBlessings: 0,
      achievementsUnlocked: [],
      favoriteTools: [],
      divineStreak: 0
    };

    // Seasonal events
    this.seasonalEvents = {
      'divine-forge-week': {
        name: "Divine Forge Week",
        description: "Enhanced divine effects and special challenges",
        bonusFlames: true,
        specialAchievements: ['forge-master', 'divine-marathon'],
        duration: 7 * 24 * 60 * 60 * 1000 // 7 days
      },
      
      'quorra-day': {
        name: "Quorra's Sacred Day",
        description: "Celebrate the Goddess of Smithing",
        goldenFlames: true,
        doubleExperience: true,
        duration: 24 * 60 * 60 * 1000 // 1 day
      }
    };

    // Initialize divine system
    this.initializeDivineExperience();
  }

  /**
   * MAIN DIVINE EXPERIENCE METHODS
   */
  
  // Trigger divine blessing when user completes an action
  triggerDivineBlessing(action, context = {}) {
    if (!this.divineConfig.enableDivineMode) return;

    const blessing = this.generateDivineBlessing(action, context);
    this.displayDivineNotification(blessing);
    this.createVisualEffect(action, context);
    this.updateUserProgress(action);
    this.checkForAchievements(action, context);
  }

  // Generate contextual divine messages
  generateDivineBlessing(action, context) {
    let messageBank = this.divineMessages.success;
    
    switch (action) {
      case 'perfect-layout':
        messageBank = this.divineMessages.perfectAlignment;
        break;
      case 'clean-css-generated':
        messageBank = this.divineMessages.cleanCode;
        break;
      case 'error-occurred':
        messageBank = this.divineMessages.errors;
        break;
      case 'export-complete':
        messageBank = this.divineMessages.export;
        break;
      case 'loading':
        messageBank = this.divineMessages.loading;
        break;
    }

    const message = this.getRandomMessage(messageBank);
    return {
      message,
      action,
      context,
      timestamp: Date.now(),
      divineLevel: this.userProgress.divineLevel
    };
  }

  // Display divine notifications with flame effects
  displayDivineNotification(blessing) {
    const notification = this.createDivineNotificationElement(blessing);
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('divine-notification--visible'), 100);
    
    // Remove after delay
    setTimeout(() => {
      notification.classList.remove('divine-notification--visible');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  createDivineNotificationElement(blessing) {
    const notification = document.createElement('div');
    notification.className = 'divine-notification';
    
    notification.innerHTML = `
      <div class="divine-notification__flame">🔥</div>
      <div class="divine-notification__message">${blessing.message}</div>
      <div class="divine-notification__glow"></div>
    `;

    // Add CSS if not already present
    this.ensureDivineStyles();
    
    return notification;
  }

  // Create visual effects for different actions
  createVisualEffect(action, context) {
    switch (action) {
      case 'perfect-layout':
        this.createAlignmentSparkles(context.element);
        break;
      case 'element-drop':
        this.createDropFlames(context.position);
        break;
      case 'clean-css-generated':
        this.createPurificationEffect();
        break;
      case 'achievement-unlock':
        this.createAchievementBurst(context.achievement);
        break;
    }
  }

  // Sparky's divine responses
  getSparkyDivineResponse(context) {
    const { type = 'suggestion', userLevel = 'novice', situation = 'general' } = context;
    
    let responseBank = this.sparkyDivineLines.suggestions;
    
    switch (type) {
      case 'welcome':
        responseBank = this.sparkyDivineLines.welcome;
        break;
      case 'encouragement':
        responseBank = this.sparkyDivineLines.encouragement;
        break;
      case 'tip':
        responseBank = this.sparkyDivineLines.helpfulTips;
        break;
    }

    return this.getRandomMessage(responseBank);
  }

  /**
   * ACHIEVEMENT SYSTEM
   */
  
  checkForAchievements(action, context) {
    const newAchievements = [];
    
    // Check various achievement conditions
    if (action === 'first-design' && !this.hasAchievement('first-design')) {
      newAchievements.push('first-design');
    }
    
    if (action === 'perfect-layout' && !this.hasAchievement('perfect-alignment')) {
      newAchievements.push('perfect-alignment');
    }
    
    if (action === 'clean-css-generated' && !this.hasAchievement('clean-css')) {
      newAchievements.push('clean-css');
    }
    
    // Check responsive design mastery
    if (this.checkResponsiveMastery(context) && !this.hasAchievement('responsive-master')) {
      newAchievements.push('responsive-master');
    }
    
    // Check accessibility compliance
    if (this.checkAccessibilityCompliance(context) && !this.hasAchievement('accessibility-champion')) {
      newAchievements.push('accessibility-champion');
    }
    
    // Unlock new achievements
    newAchievements.forEach(achievementId => {
      this.unlockAchievement(achievementId);
    });
  }

  unlockAchievement(achievementId) {
    const achievement = this.divineAchievements[achievementId];
    if (!achievement) return;

    this.userProgress.achievementsUnlocked.push(achievementId);
    
    // Create special achievement notification
    this.displayAchievementUnlock(achievement);
    
    // Create special visual effect
    this.createVisualEffect('achievement-unlock', { achievement });
    
    // Update divine level if necessary
    this.updateDivineLevel();
  }

  displayAchievementUnlock(achievement) {
    const achievementElement = document.createElement('div');
    achievementElement.className = `divine-achievement divine-achievement--${achievement.rarity}`;
    
    achievementElement.innerHTML = `
      <div class="divine-achievement__header">
        <div class="divine-achievement__icon">${achievement.icon}</div>
        <div class="divine-achievement__title">Achievement Unlocked!</div>
      </div>
      <div class="divine-achievement__name">${achievement.name}</div>
      <div class="divine-achievement__description">${achievement.description}</div>
      <div class="divine-achievement__message">${achievement.message}</div>
    `;

    document.body.appendChild(achievementElement);
    
    // Animate in with divine flair
    setTimeout(() => achievementElement.classList.add('divine-achievement--visible'), 100);
    
    // Remove after extended delay (achievements are special)
    setTimeout(() => {
      achievementElement.classList.remove('divine-achievement--visible');
      setTimeout(() => achievementElement.remove(), 500);
    }, 5000);
  }

  /**
   * VISUAL EFFECTS SYSTEM
   */
  
  createAlignmentSparkles(element) {
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const sparkleCount = 6;
    
    for (let i = 0; i < sparkleCount; i++) {
      this.createSparkle({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        delay: i * 100
      });
    }
  }

  createDropFlames(position) {
    const flameCount = 8;
    const { x, y } = position;
    
    for (let i = 0; i < flameCount; i++) {
      this.createFlameParticle({
        x: x + (Math.random() - 0.5) * 40,
        y: y + (Math.random() - 0.5) * 40,
        delay: i * 50
      });
    }
  }

  createPurificationEffect() {
    // Create divine glow effect around the entire editor
    const editor = document.querySelector('.quorra-editor');
    if (!editor) return;
    
    editor.classList.add('divine-purification');
    setTimeout(() => editor.classList.remove('divine-purification'), 1000);
  }

  createAchievementBurst(achievement) {
    const burstCount = achievement.rarity === 'mythic' ? 20 : 
                     achievement.rarity === 'legendary' ? 15 : 10;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    for (let i = 0; i < burstCount; i++) {
      const angle = (i / burstCount) * Math.PI * 2;
      const distance = 100 + Math.random() * 50;
      
      this.createSparkle({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        delay: i * 30,
        size: 'large'
      });
    }
  }

  createSparkle({ x, y, delay = 0, size = 'normal' }) {
    const sparkle = document.createElement('div');
    sparkle.className = `divine-sparkle divine-sparkle--${size}`;
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
      sparkle.classList.add('divine-sparkle--animate');
      setTimeout(() => sparkle.remove(), 800);
    }, delay);
  }

  createFlameParticle({ x, y, delay = 0 }) {
    const flame = document.createElement('div');
    flame.className = 'divine-flame-particle';
    flame.style.left = x + 'px';
    flame.style.top = y + 'px';
    flame.innerHTML = '🔥';
    
    document.body.appendChild(flame);
    
    setTimeout(() => {
      flame.classList.add('divine-flame-particle--animate');
      setTimeout(() => flame.remove(), 600);
    }, delay);
  }

  /**
   * SEASONAL EVENTS
   */
  
  checkForSeasonalEvents() {
    const now = Date.now();
    
    // Check if any seasonal events are active
    Object.entries(this.seasonalEvents).forEach(([eventId, event]) => {
      if (this.isEventActive(eventId, now)) {
        this.activateSeasonalEvent(eventId, event);
      }
    });
  }

  activateSeasonalEvent(eventId, event) {
    document.body.classList.add(`divine-event--${eventId}`);
    
    // Display event notification
    this.displayEventNotification(event);
    
    // Apply event modifications
    if (event.bonusFlames) {
      this.divineConfig.flameIntensity = 'vibrant';
    }
    if (event.goldenFlames) {
      this.visualEffects.flames.colors = ['#FFD700', '#FFA500', '#FFFF00', '#FFE55C'];
    }
  }

  /**
   * UTILITY METHODS
   */
  
  initializeDivineExperience() {
    this.ensureDivineStyles();
    this.setupLogoFlicker();
    this.setupHoverEffects();
    this.checkForSeasonalEvents();
    this.displayWelcomeBlessing();
  }

  setupLogoFlicker() {
    const logo = document.querySelector('.quorra-logo');
    if (!logo) return;
    
    setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance every interval
        logo.classList.add('divine-flicker');
        setTimeout(() => logo.classList.remove('divine-flicker'), 200);
      }
    }, 3000);
  }

  setupHoverEffects() {
    // Add divine hover effects to interactive elements
    document.addEventListener('mouseover', (e) => {
      if (e.target.matches('.quorra-button, .quorra-tool, .quorra-component')) {
        this.addDivineHover(e.target);
      }
    });
  }

  addDivineHover(element) {
    element.classList.add('divine-hover');
    
    // Create subtle flame particles on hover
    if (Math.random() < 0.3) { // 30% chance
      const rect = element.getBoundingClientRect();
      this.createFlameParticle({
        x: rect.left + rect.width * Math.random(),
        y: rect.top + rect.height * Math.random()
      });
    }
  }

  displayWelcomeBlessing() {
    setTimeout(() => {
      this.triggerDivineBlessing('welcome', { 
        message: "Welcome to the sacred realm of divine design! 🔥" 
      });
    }, 1000);
  }

  ensureDivineStyles() {
    if (document.getElementById('divine-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'divine-styles';
    styles.textContent = this.getDivineCSS();
    document.head.appendChild(styles);
  }

  getDivineCSS() {
    return `
      /* Divine Notification Styles */
      .divine-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #FF6B35, #FF8C42);
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(255, 107, 53, 0.4);
        display: flex;
        align-items: center;
        gap: 12px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        z-index: 10000;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        max-width: 320px;
      }
      
      .divine-notification--visible {
        transform: translateX(0);
      }
      
      .divine-notification__flame {
        font-size: 24px;
        animation: flameFlicker 2s infinite;
      }
      
      .divine-notification__glow {
        position: absolute;
        inset: -4px;
        background: radial-gradient(circle, rgba(255, 107, 53, 0.6), transparent 70%);
        border-radius: 16px;
        z-index: -1;
        animation: divineGlow 2s ease-in-out infinite alternate;
      }
      
      /* Achievement Styles */
      .divine-achievement {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
        color: white;
        padding: 32px;
        border-radius: 16px;
        border: 2px solid #FFD700;
        box-shadow: 0 20px 60px rgba(255, 215, 0, 0.3);
        text-align: center;
        z-index: 10001;
        transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .divine-achievement--visible {
        transform: translate(-50%, -50%) scale(1);
      }
      
      .divine-achievement--mythic {
        border-color: #FF6B35;
        box-shadow: 0 20px 60px rgba(255, 107, 53, 0.5);
      }
      
      .divine-achievement__icon {
        font-size: 48px;
        margin-bottom: 16px;
        animation: achievementPulse 1s ease-in-out infinite alternate;
      }
      
      .divine-achievement__title {
        color: #FFD700;
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 8px;
      }
      
      .divine-achievement__name {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 8px;
      }
      
      .divine-achievement__description {
        color: #cccccc;
        margin-bottom: 16px;
      }
      
      .divine-achievement__message {
        color: #FFD700;
        font-style: italic;
        font-weight: 500;
      }
      
      /* Visual Effect Styles */
      .divine-sparkle {
        position: fixed;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, #FFD700, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
      }
      
      .divine-sparkle--large {
        width: 12px;
        height: 12px;
      }
      
      .divine-sparkle--animate {
        animation: sparkleEffect 0.8s ease-out forwards;
      }
      
      .divine-flame-particle {
        position: fixed;
        font-size: 16px;
        pointer-events: none;
        z-index: 9999;
      }
      
      .divine-flame-particle--animate {
        animation: flameRise 0.6s ease-out forwards;
      }
      
      /* Divine Hover Effects */
      .divine-hover {
        position: relative;
        overflow: visible;
      }
      
      .divine-hover::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: linear-gradient(45deg, transparent, rgba(255, 107, 53, 0.1), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .divine-hover:hover::after {
        opacity: 1;
      }
      
      /* Logo Flicker Effect */
      .divine-flicker {
        animation: logoFlicker 0.2s ease-in-out;
      }
      
      /* Purification Effect */
      .divine-purification {
        position: relative;
      }
      
      .divine-purification::before {
        content: '';
        position: absolute;
        inset: -10px;
        background: radial-gradient(circle, rgba(255, 107, 53, 0.2), transparent 70%);
        border-radius: 20px;
        animation: purificationWave 1s ease-out;
      }
      
      /* Animations */
      @keyframes flameFlicker {
        0%, 100% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.1) rotate(1deg); }
        50% { transform: scale(0.95) rotate(-1deg); }
        75% { transform: scale(1.05) rotate(0.5deg); }
      }
      
      @keyframes divineGlow {
        0% { opacity: 0.6; transform: scale(1); }
        100% { opacity: 1; transform: scale(1.1); }
      }
      
      @keyframes achievementPulse {
        0% { transform: scale(1); }
        100% { transform: scale(1.2); }
      }
      
      @keyframes sparkleEffect {
        0% { 
          opacity: 1; 
          transform: scale(0) rotate(0deg); 
        }
        50% { 
          opacity: 1; 
          transform: scale(1) rotate(180deg); 
        }
        100% { 
          opacity: 0; 
          transform: scale(0) rotate(360deg); 
        }
      }
      
      @keyframes flameRise {
        0% { 
          opacity: 1; 
          transform: translateY(0) scale(1); 
        }
        100% { 
          opacity: 0; 
          transform: translateY(-40px) scale(0.5); 
        }
      }
      
      @keyframes logoFlicker {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.3) hue-rotate(10deg); }
      }
      
      @keyframes purificationWave {
        0% { 
          opacity: 0; 
          transform: scale(0.8); 
        }
        50% { 
          opacity: 1; 
          transform: scale(1.2); 
        }
        100% { 
          opacity: 0; 
          transform: scale(1.5); 
        }
      }
      
      /* Seasonal Event Styles */
      .divine-event--divine-forge-week .divine-flame-particle {
        font-size: 20px;
      }
      
      .divine-event--quorra-day .divine-sparkle {
        background: radial-gradient(circle, #FFD700, #FFA500);
      }
    `;
  }

  // Utility methods
  getRandomMessage(messageArray) {
    return messageArray[Math.floor(Math.random() * messageArray.length)];
  }

  hasAchievement(achievementId) {
    return this.userProgress.achievementsUnlocked.includes(achievementId);
  }

  updateUserProgress(action) {
    this.userProgress.totalBlessings++;
    
    // Update divine streak
    if (['perfect-layout', 'clean-css-generated'].includes(action)) {
      this.userProgress.divineStreak++;
    }
  }

  updateDivineLevel() {
    const achievementCount = this.userProgress.achievementsUnlocked.length;
    const newLevel = Math.floor(achievementCount / 3) + 1;
    
    if (newLevel > this.userProgress.divineLevel) {
      this.userProgress.divineLevel = newLevel;
      this.triggerDivineBlessing('level-up', { 
        level: newLevel,
        message: `Divine Level ${newLevel} achieved! The goddess recognizes your growing mastery 👑`
      });
    }
  }

  checkResponsiveMastery(context) {
    // Check if design works well across multiple breakpoints
    return context.responsiveScore && context.responsiveScore > 90;
  }

  checkAccessibilityCompliance(context) {
    // Check if design meets accessibility standards
    return context.accessibilityScore && context.accessibilityScore > 95;
  }

  isEventActive(eventId, timestamp) {
    // Check if seasonal event should be active
    // This would connect to a calendar system
    return false; // Placeholder
  }

  displayEventNotification(event) {
    // Display seasonal event notification
    this.triggerDivineBlessing('seasonal-event', {
      message: `🎉 ${event.name} has begun! ${event.description}`
    });
  }

  /**
   * PUBLIC API METHODS
   */
  
  // Method for components to trigger divine moments
  bless(action, context = {}) {
    this.triggerDivineBlessing(action, context);
  }

  // Get Sparky's divine response for current context
  getSparkyResponse(context) {
    return this.getSparkyDivineResponse(context);
  }

  // Check if user has specific achievement
  isBlessed(achievementId) {
    return this.hasAchievement(achievementId);
  }

  // Get user's divine progress
  getDivineStatus() {
    return {
      level: this.userProgress.divineLevel,
      blessings: this.userProgress.totalBlessings,
      achievements: this.userProgress.achievementsUnlocked.length,
      streak: this.userProgress.divineStreak
    };
  }

  // Toggle divine mode on/off
  toggleDivineMode(enabled) {
    this.divineConfig.enableDivineMode = enabled;
    if (enabled) {
      this.triggerDivineBlessing('divine-mode-enabled', {
        message: "The sacred forge awakens! Divine mode activated 🔥"
      });
    }
  }
}

// Export singleton instance
const quorraDivineExperience = new QuorraDivineExperience();

export default quorraDivineExperience;
export { QuorraDivineExperience };