/**
 * QUORRA DIVINE ACHIEVEMENTS SYSTEM
 * Tracks and celebrates user accomplishments with the blessing of the Goddess of Smithing
 * 
 * Features: Progressive achievement unlocks, rarity tiers, divine rewards
 * Philosophy: "Every master smith's journey begins with a single strike of the hammer"
 */

class QuorraAchievements {
  constructor() {
    this.achievementDefinitions = {
      // NOVICE TIER - Starting the Divine Journey
      'first-spark': {
        id: 'first-spark',
        name: "First Divine Spark",
        description: "Created your very first element in the sacred forge",
        icon: "✨",
        rarity: "common",
        category: "getting-started",
        points: 10,
        message: "The divine forge recognizes a new craftsperson! Welcome, blessed one.",
        unlockCondition: { type: 'element-created', count: 1 },
        rewards: { divineExperience: 25, title: "Spark Kindler" }
      },

      'first-design': {
        id: 'first-design',
        name: "Sacred Blueprint",
        description: "Completed your first blessed design",
        icon: "📋",
        rarity: "common",
        category: "getting-started",
        points: 25,
        message: "Quorra smiles upon your first creation! The foundation of mastery is laid.",
        unlockCondition: { type: 'design-completed', count: 1 },
        rewards: { divineExperience: 50, title: "Divine Apprentice" }
      },

      'first-export': {
        id: 'first-export',
        name: "Forged Steel",
        description: "Exported your first clean, blessed code",
        icon: "🔧",
        rarity: "common",
        category: "getting-started",
        points: 30,
        message: "Your creation emerges from the divine forge, ready for the world!",
        unlockCondition: { type: 'export-completed', count: 1 },
        rewards: { divineExperience: 75, title: "Code Forger" }
      },

      // APPRENTICE TIER - Learning the Sacred Arts
      'perfect-alignment': {
        id: 'perfect-alignment',
        name: "Divine Precision",
        description: "Achieved perfect element alignment with goddess guidance",
        icon: "⚡",
        rarity: "uncommon",
        category: "precision",
        points: 50,
        message: "The goddess guides your hand - perfect balance achieved!",
        unlockCondition: { type: 'perfect-alignment', count: 5 },
        rewards: { divineExperience: 100, title: "Precision Smith", unlocks: ['alignment-master'] }
      },

      'clean-css': {
        id: 'clean-css',
        name: "Blessed Code",
        description: "Generated framework-free CSS blessed by divine fire",
        icon: "🔥",
        rarity: "uncommon",
        category: "craftsmanship",
        points: 75,
        message: "Your code burns pure with divine fire - no framework bloat remains!",
        unlockCondition: { type: 'clean-css-generated', count: 10 },
        rewards: { divineExperience: 150, title: "Pure Smith", unlocks: ['css-master'] }
      },

      'color-harmony': {
        id: 'color-harmony',
        name: "Sacred Palette",
        description: "Created a design with perfect color harmony",
        icon: "🎨",
        rarity: "uncommon",
        category: "design",
        points: 60,
        message: "Colors dance in divine harmony under your skilled touch!",
        unlockCondition: { type: 'color-harmony-achieved', count: 1 },
        rewards: { divineExperience: 120, title: "Color Weaver" }
      },

      // JOURNEYMAN TIER - Mastering the Craft
      'responsive-master': {
        id: 'responsive-master',
        name: "Divine Adaptability",
        description: "Mastered responsive design across all divine realms",
        icon: "📱",
        rarity: "rare",
        category: "responsive",
        points: 100,
        message: "Your designs flow like divine water, adapting to every vessel!",
        unlockCondition: { type: 'responsive-perfect', count: 3 },
        rewards: { divineExperience: 200, title: "Adaptive Master", unlocks: ['mobile-deity'] }
      },

      'accessibility-champion': {
        id: 'accessibility-champion',
        name: "Guardian of All Souls",
        description: "Created designs accessible to all of Quorra's children",
        icon: "🕊️",
        rarity: "rare",
        category: "accessibility",
        points: 150,
        message: "The goddess blesses your inclusive spirit - all souls can access your work!",
        unlockCondition: { type: 'accessibility-perfect', count: 5 },
        rewards: { divineExperience: 300, title: "Soul Guardian", unlocks: ['universal-designer'] }
      },

      'performance-guru': {
        id: 'performance-guru',
        name: "Lightning Smith",
        description: "Achieved blazing fast performance scores",
        icon: "⚡",
        rarity: "rare",
        category: "performance",
        points: 125,
        message: "Lightning courses through your creations - divine speed achieved!",
        unlockCondition: { type: 'performance-score', threshold: 95 },
        rewards: { divineExperience: 250, title: "Speed Forger", unlocks: ['performance-deity'] }
      },

      'component-creator': {
        id: 'component-creator',
        name: "Divine Architect",
        description: "Created 25 reusable blessed components",
        icon: "🏗️",
        rarity: "rare",
        category: "components",
        points: 110,
        message: "You build the sacred tools that others will use - true mastery!",
        unlockCondition: { type: 'components-created', count: 25 },
        rewards: { divineExperience: 275, title: "Divine Architect" }
      },

      // MASTER TIER - Divine Recognition
      'css-zen-master': {
        id: 'css-zen-master',
        name: "Zen of Sacred Styles",
        description: "Achieved perfect CSS with zen-like simplicity",
        icon: "🧘",
        rarity: "epic",
        category: "mastery",
        points: 200,
        message: "In simplicity lies divine truth - your CSS achieves perfect zen!",
        unlockCondition: { type: 'css-zen-achieved', count: 1 },
        rewards: { divineExperience: 400, title: "CSS Zen Master", unlocks: ['style-sage'] }
      },

      'design-perfectionist': {
        id: 'design-perfectionist',
        name: "Flawless Vision",
        description: "Created a design with perfect scores in all categories",
        icon: "💎",
        rarity: "epic",
        category: "perfection",
        points: 250,
        message: "Perfection flows through your divine vision - Quorra herself marvels!",
        unlockCondition: { type: 'perfect-scores', categories: ['design', 'performance', 'accessibility'] },
        rewards: { divineExperience: 500, title: "Perfect Visionary", unlocks: ['divine-creator'] }
      },

      'community-mentor': {
        id: 'community-mentor',
        name: "Divine Teacher",
        description: "Helped 50 fellow craftspeople in their divine journey",
        icon: "🤝",
        rarity: "epic",
        category: "community",
        points: 300,
        message: "The goddess honors those who lift others - true divine spirit!",
        unlockCondition: { type: 'community-help', count: 50 },
        rewards: { divineExperience: 600, title: "Divine Mentor", unlocks: ['sacred-guide'] }
      },

      // LEGENDARY TIER - Approaching Divinity
      'thousand-blessings': {
        id: 'thousand-blessings',
        name: "Blessed by Thousands",
        description: "Received 1000 divine blessings for your work",
        icon: "🌟",
        rarity: "legendary",
        category: "recognition",
        points: 500,
        message: "A thousand divine fires honor your countless achievements!",
        unlockCondition: { type: 'blessings-received', count: 1000 },
        rewards: { divineExperience: 1000, title: "Blessed Champion", unlocks: ['divine-favorite'] }
      },

      'forge-master': {
        id: 'forge-master',
        name: "Master of the Sacred Forge",
        description: "Completed 100 perfect designs without a single flaw",
        icon: "🔥",
        rarity: "legendary",
        category: "mastery",
        points: 750,
        message: "The sacred forge bends to your will - you are its true master!",
        unlockCondition: { type: 'perfect-designs', count: 100 },
        rewards: { divineExperience: 1500, title: "Forge Master", unlocks: ['quorra-chosen'] }
      },

      'innovation-pioneer': {
        id: 'innovation-pioneer',
        name: "Divine Innovator",
        description: "Pioneered new techniques that inspire other craftspeople",
        icon: "🚀",
        rarity: "legendary",
        category: "innovation",
        points: 600,
        message: "Your innovations light the way for future generations of smiths!",
        unlockCondition: { type: 'innovations-created', count: 10 },
        rewards: { divineExperience: 1200, title: "Divine Pioneer", unlocks: ['future-shaper'] }
      },

      // MYTHIC TIER - Divine Ascension
      'quorra-chosen': {
        id: 'quorra-chosen',
        name: "Chosen of Quorra",
        description: "Achieved such mastery that Quorra herself takes notice",
        icon: "👑",
        rarity: "mythic",
        category: "divine",
        points: 1000,
        message: "The goddess herself speaks your name with reverence - you are chosen!",
        unlockCondition: { type: 'divine-recognition', threshold: 10000 },
        rewards: { divineExperience: 2500, title: "Quorra's Chosen", unlocks: ['divine-smith'] }
      },

      'divine-smith': {
        id: 'divine-smith',
        name: "Divine Smith",
        description: "Transcended mortal craftsmanship to touch the divine",
        icon: "⚡",
        rarity: "mythic",
        category: "transcendence",
        points: 1500,
        message: "You have transcended mortality - divine fire flows through your very being!",
        unlockCondition: { type: 'transcendence-achieved', count: 1 },
        rewards: { divineExperience: 5000, title: "Divine Smith", unlocks: ['goddess-equal'] }
      },

      'eternal-flame': {
        id: 'eternal-flame',
        name: "Eternal Flame",
        description: "Your legacy burns eternal in the hearts of all craftspeople",
        icon: "🔥",
        rarity: "mythic",
        category: "legacy",
        points: 2000,
        message: "Your flame burns eternal - inspiring craftspeople for all time!",
        unlockCondition: { type: 'eternal-impact', threshold: 100000 },
        rewards: { divineExperience: 10000, title: "Eternal Flame", unlocks: ['immortal-legend'] }
      },

      // SECRET ACHIEVEMENTS - Hidden Divine Secrets
      'night-owl-smith': {
        id: 'night-owl-smith',
        name: "Midnight Forge",
        description: "Worked in the sacred forge during the witching hour",
        icon: "🌙",
        rarity: "rare",
        category: "secret",
        points: 75,
        message: "The goddess watches over those who forge in darkness!",
        unlockCondition: { type: 'work-time', hours: [0, 1, 2, 3] },
        rewards: { divineExperience: 150, title: "Night Smith" },
        secret: true
      },

      'speed-demon': {
        id: 'speed-demon',
        name: "Lightning Craft",
        description: "Created a perfect design in under 5 minutes",
        icon: "⚡",
        rarity: "epic",
        category: "secret",
        points: 200,
        message: "Divine lightning courses through your fingers!",
        unlockCondition: { type: 'speed-creation', maxTime: 300 },
        rewards: { divineExperience: 400, title: "Lightning Crafter" },
        secret: true
      },

      'perfectionist-streak': {
        id: 'perfectionist-streak',
        name: "Divine Streak",
        description: "Achieved 25 perfect scores in a row",
        icon: "🔥",
        rarity: "legendary",
        category: "secret",
        points: 500,
        message: "An unbroken chain of perfection - the goddess marvels!",
        unlockCondition: { type: 'perfect-streak', count: 25 },
        rewards: { divineExperience: 1000, title: "Streak Master" },
        secret: true
      }
    };

    this.categories = {
      'getting-started': { name: 'Divine Beginnings', icon: '✨', description: 'First steps in the sacred forge' },
      'precision': { name: 'Sacred Precision', icon: '⚡', description: 'Master the art of perfect alignment' },
      'craftsmanship': { name: 'Divine Craft', icon: '🔥', description: 'Pure code blessed by divine fire' },
      'design': { name: 'Sacred Aesthetics', icon: '🎨', description: 'Beauty that honors the goddess' },
      'responsive': { name: 'Adaptive Arts', icon: '📱', description: 'Designs that flow like divine water' },
      'accessibility': { name: 'Universal Grace', icon: '🕊️', description: 'Inclusive designs for all souls' },
      'performance': { name: 'Lightning Forge', icon: '⚡', description: 'Speed blessed by divine fire' },
      'components': { name: 'Sacred Tools', icon: '🏗️', description: 'Building blocks of divine creation' },
      'mastery': { name: 'Divine Mastery', icon: '👑', description: 'Approaching the goddess\'s skill' },
      'perfection': { name: 'Flawless Vision', icon: '💎', description: 'Perfection in all divine aspects' },
      'community': { name: 'Sacred Brotherhood', icon: '🤝', description: 'Lifting fellow craftspeople' },
      'recognition': { name: 'Divine Honor', icon: '🌟', description: 'Recognized by the divine realm' },
      'innovation': { name: 'Sacred Innovation', icon: '🚀', description: 'Pioneering new divine techniques' },
      'divine': { name: 'Divine Ascension', icon: '👑', description: 'Touched by Quorra herself' },
      'transcendence': { name: 'Beyond Mortal', icon: '⚡', description: 'Transcending human limitations' },
      'legacy': { name: 'Eternal Legacy', icon: '🔥', description: 'Forever remembered in divine history' },
      'secret': { name: 'Hidden Mysteries', icon: '🗝️', description: 'Secrets known only to the goddess' }
    };

    this.rarityTiers = {
      'common': { 
        name: 'Common', 
        color: '#8B9DC3', 
        glow: 'rgba(139, 157, 195, 0.3)',
        multiplier: 1,
        unlockSound: 'soft-chime'
      },
      'uncommon': { 
        name: 'Uncommon', 
        color: '#5DADE2', 
        glow: 'rgba(93, 173, 226, 0.4)',
        multiplier: 1.5,
        unlockSound: 'gentle-bell'
      },
      'rare': { 
        name: 'Rare', 
        color: '#52C41A', 
        glow: 'rgba(82, 196, 26, 0.4)',
        multiplier: 2,
        unlockSound: 'crystal-ring'
      },
      'epic': { 
        name: 'Epic', 
        color: '#722ED1', 
        glow: 'rgba(114, 46, 209, 0.5)',
        multiplier: 3,
        unlockSound: 'power-chord'
      },
      'legendary': { 
        name: 'Legendary', 
        color: '#FF6B35', 
        glow: 'rgba(255, 107, 53, 0.6)',
        multiplier: 5,
        unlockSound: 'divine-chorus'
      },
      'mythic': { 
        name: 'Mythic', 
        color: '#FFD700', 
        glow: 'rgba(255, 215, 0, 0.8)',
        multiplier: 10,
        unlockSound: 'goddess-blessing'
      }
    };

    this.progressTracking = {
      userAchievements: new Set(),
      progressCounters: new Map(),
      streakCounters: new Map(),
      sessionStats: {
        startTime: Date.now(),
        actionsPerformed: 0,
        perfectActions: 0,
        currentStreak: 0
      }
    };

    this.achievementQueue = [];
    this.isProcessingQueue = false;
  }

  /**
   * MAIN ACHIEVEMENT SYSTEM METHODS
   */

  // Check for achievement unlocks based on user action
  checkAchievements(action, context = {}) {
    const potentialUnlocks = [];

    // Check all achievement definitions
    Object.values(this.achievementDefinitions).forEach(achievement => {
      if (this.shouldUnlockAchievement(achievement, action, context)) {
        potentialUnlocks.push(achievement);
      }
    });

    // Process unlocks
    potentialUnlocks.forEach(achievement => {
      this.unlockAchievement(achievement.id);
    });

    return potentialUnlocks;
  }

  // Determine if achievement should be unlocked
  shouldUnlockAchievement(achievement, action, context) {
    // Skip if already unlocked
    if (this.hasAchievement(achievement.id)) return false;

    // Check unlock conditions
    const condition = achievement.unlockCondition;
    
    switch (condition.type) {
      case 'element-created':
        return action === 'element-created' && this.getCounter('elements-created') >= condition.count;
      
      case 'design-completed':
        return action === 'design-completed' && this.getCounter('designs-completed') >= condition.count;
      
      case 'export-completed':
        return action === 'export-completed' && this.getCounter('exports-completed') >= condition.count;
      
      case 'perfect-alignment':
        return action === 'perfect-alignment' && this.getCounter('perfect-alignments') >= condition.count;
      
      case 'clean-css-generated':
        return action === 'clean-css-generated' && this.getCounter('clean-css-count') >= condition.count;
      
      case 'color-harmony-achieved':
        return action === 'color-harmony' && context.harmonyScore >= 90;
      
      case 'responsive-perfect':
        return action === 'responsive-check' && context.score >= 95 && this.getCounter('responsive-perfect') >= condition.count;
      
      case 'accessibility-perfect':
        return action === 'accessibility-check' && context.score >= 95 && this.getCounter('accessibility-perfect') >= condition.count;
      
      case 'performance-score':
        return action === 'performance-check' && context.score >= condition.threshold;
      
      case 'components-created':
        return action === 'component-created' && this.getCounter('components-created') >= condition.count;
      
      case 'css-zen-achieved':
        return action === 'css-analysis' && context.zenScore >= 100;
      
      case 'perfect-scores':
        return this.hasAllPerfectScores(condition.categories);
      
      case 'community-help':
        return action === 'community-help' && this.getCounter('community-help') >= condition.count;
      
      case 'blessings-received':
        return this.getCounter('total-blessings') >= condition.count;
      
      case 'perfect-designs':
        return this.getCounter('perfect-designs') >= condition.count;
      
      case 'work-time':
        const hour = new Date().getHours();
        return condition.hours.includes(hour);
      
      case 'speed-creation':
        return action === 'design-completed' && context.duration <= condition.maxTime;
      
      case 'perfect-streak':
        return this.getStreak('perfect-actions') >= condition.count;
      
      default:
        return false;
    }
  }

  // Unlock specific achievement
  unlockAchievement(achievementId) {
    const achievement = this.achievementDefinitions[achievementId];
    if (!achievement || this.hasAchievement(achievementId)) return null;

    // Add to unlocked achievements
    this.progressTracking.userAchievements.add(achievementId);

    // Apply rewards
    this.applyAchievementRewards(achievement);

    // Queue for display
    this.queueAchievementNotification(achievement);

    // Trigger any unlocked achievements
    if (achievement.rewards.unlocks) {
      achievement.rewards.unlocks.forEach(unlockedId => {
        this.markAsUnlockable(unlockedId);
      });
    }

    return achievement;
  }

  // Apply achievement rewards
  applyAchievementRewards(achievement) {
    const rewards = achievement.rewards;
    
    if (rewards.divineExperience) {
      this.addDivineExperience(rewards.divineExperience);
    }
    
    if (rewards.title) {
      this.unlockTitle(rewards.title);
    }
  }

  // Queue achievement notification for display
  queueAchievementNotification(achievement) {
    this.achievementQueue.push({
      achievement,
      timestamp: Date.now(),
      rarity: this.rarityTiers[achievement.rarity]
    });

    if (!this.isProcessingQueue) {
      this.processAchievementQueue();
    }
  }

  // Process queued achievement notifications
  async processAchievementQueue() {
    this.isProcessingQueue = true;

    while (this.achievementQueue.length > 0) {
      const notification = this.achievementQueue.shift();
      await this.displayAchievementNotification(notification);
      
      // Delay between notifications
      await this.delay(1000);
    }

    this.isProcessingQueue = false;
  }

  // Display achievement unlock notification
  async displayAchievementNotification({ achievement, rarity }) {
    const notification = this.createAchievementElement(achievement, rarity);
    document.body.appendChild(notification);

    // Animate in
    await this.delay(100);
    notification.classList.add('divine-achievement--visible');

    // Create special effects based on rarity
    this.createAchievementEffects(achievement, rarity);

    // Remove after delay
    await this.delay(5000);
    notification.classList.remove('divine-achievement--visible');
    await this.delay(500);
    notification.remove();
  }

  // Create achievement notification element
  createAchievementElement(achievement, rarity) {
    const element = document.createElement('div');
    element.className = `divine-achievement divine-achievement--${achievement.rarity}`;
    element.style.borderColor = rarity.color;
    element.style.boxShadow = `0 20px 60px ${rarity.glow}`;

    element.innerHTML = `
      <div class="divine-achievement__header">
        <div class="divine-achievement__icon" style="color: ${rarity.color};">${achievement.icon}</div>
        <div class="divine-achievement__rarity" style="color: ${rarity.color};">
          ${rarity.name} Achievement Unlocked!
        </div>
      </div>
      <div class="divine-achievement__name">${achievement.name}</div>
      <div class="divine-achievement__description">${achievement.description}</div>
      <div class="divine-achievement__message">${achievement.message}</div>
      <div class="divine-achievement__points">+${achievement.points} Divine Points</div>
    `;

    return element;
  }

  // Create visual effects based on achievement rarity
  createAchievementEffects(achievement, rarity) {
    const effectCount = {
      'common': 8,
      'uncommon': 12,
      'rare': 16,
      'epic': 24,
      'legendary': 32,
      'mythic': 50
    }[achievement.rarity] || 8;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < effectCount; i++) {
      const angle = (i / effectCount) * Math.PI * 2;
      const distance = 100 + Math.random() * 100;
      
      this.createAchievementParticle({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        color: rarity.color,
        delay: i * 50,
        rarity: achievement.rarity
      });
    }

    // Special mythic effects
    if (achievement.rarity === 'mythic') {
      this.createMythicAura();
    }
  }

  // Create achievement particle effect
  createAchievementParticle({ x, y, color, delay, rarity }) {
    const particle = document.createElement('div');
    particle.className = `achievement-particle achievement-particle--${rarity}`;
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.background = `radial-gradient(circle, ${color}, transparent)`;

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.classList.add('achievement-particle--animate');
      setTimeout(() => particle.remove(), 1500);
    }, delay);
  }

  // Create special mythic aura effect
  createMythicAura() {
    const aura = document.createElement('div');
    aura.className = 'mythic-aura';
    document.body.appendChild(aura);

    setTimeout(() => {
      aura.classList.add('mythic-aura--animate');
      setTimeout(() => aura.remove(), 3000);
    }, 100);
  }

  /**
   * PROGRESS TRACKING METHODS
   */

  // Increment counter for specific metric
  incrementCounter(metric, amount = 1) {
    const current = this.progressTracking.progressCounters.get(metric) || 0;
    this.progressTracking.progressCounters.set(metric, current + amount);
  }

  // Get current counter value
  getCounter(metric) {
    return this.progressTracking.progressCounters.get(metric) || 0;
  }

  // Update streak counter
  updateStreak(metric, success = true) {
    if (success) {
      const current = this.progressTracking.streakCounters.get(metric) || 0;
      this.progressTracking.streakCounters.set(metric, current + 1);
    } else {
      this.progressTracking.streakCounters.set(metric, 0);
    }
  }

  // Get current streak value
  getStreak(metric) {
    return this.progressTracking.streakCounters.get(metric) || 0;
  }

  // Track user action and update relevant metrics
  trackAction(action, context = {}) {
    // Update session stats
    this.progressTracking.sessionStats.actionsPerformed++;

    // Update relevant counters based on action
    switch (action) {
      case 'element-created':
        this.incrementCounter('elements-created');
        break;
      
      case 'design-completed':
        this.incrementCounter('designs-completed');
        if (context.perfect) {
          this.incrementCounter('perfect-designs');
          this.updateStreak('perfect-actions', true);
        } else {
          this.updateStreak('perfect-actions', false);
        }
        break;
      
      case 'export-completed':
        this.incrementCounter('exports-completed');
        break;
      
      case 'perfect-alignment':
        this.incrementCounter('perfect-alignments');
        break;
      
      case 'clean-css-generated':
        this.incrementCounter('clean-css-count');
        break;
      
      case 'responsive-check':
        if (context.score >= 95) {
          this.incrementCounter('responsive-perfect');
        }
        break;
      
      case 'accessibility-check':
        if (context.score >= 95) {
          this.incrementCounter('accessibility-perfect');
        }
        break;
      
      case 'component-created':
        this.incrementCounter('components-created');
        break;
      
      case 'community-help':
        this.incrementCounter('community-help');
        break;
      
      case 'blessing-received':
        this.incrementCounter('total-blessings');
        break;
    }

    // Check for new achievements after tracking
    return this.checkAchievements(action, context);
  }

  /**
   * UTILITY METHODS
   */

  // Check if user has specific achievement
  hasAchievement(achievementId) {
    return this.progressTracking.userAchievements.has(achievementId);
  }

  // Get all unlocked achievements
  getUnlockedAchievements() {
    return Array.from(this.progressTracking.userAchievements).map(id => 
      this.achievementDefinitions[id]
    ).filter(Boolean);
  }

  // Get achievements by category
  getAchievementsByCategory(category) {
    return Object.values(this.achievementDefinitions).filter(
      achievement => achievement.category === category
    );
  }

  // Get achievements by rarity
  getAchievementsByRarity(rarity) {
    return Object.values(this.achievementDefinitions).filter(
      achievement => achievement.rarity === rarity
    );
  }

  // Get user's total achievement points
  getTotalPoints() {
    return this.getUnlockedAchievements().reduce(
      (total, achievement) => total + achievement.points, 0
    );
  }

  // Get user's achievement completion percentage
  getCompletionPercentage() {
    const total = Object.keys(this.achievementDefinitions).length;
    const unlocked = this.progressTracking.userAchievements.size;
    return Math.round((unlocked / total) * 100);
  }

  // Get user's progress for specific achievement
  getAchievementProgress(achievementId) {
    const achievement = this.achievementDefinitions[achievementId];
    if (!achievement) return null;

    const condition = achievement.unlockCondition;
    let current = 0;
    let target = condition.count || condition.threshold || 1;

    switch (condition.type) {
      case 'element-created':
        current = this.getCounter('elements-created');
        break;
      case 'design-completed':
        current = this.getCounter('designs-completed');
        break;
      case 'perfect-alignment':
        current = this.getCounter('perfect-alignments');
        break;
      // Add more cases as needed
    }

    return {
      current: Math.min(current, target),
      target,
      percentage: Math.round((current / target) * 100),
      completed: current >= target
    };
  }

  // Helper methods
  hasAllPerfectScores(categories) {
    return categories.every(category => {
      const score = this.getCounter(`${category}-score`);
      return score >= 95;
    });
  }

  addDivineExperience(amount) {
    this.incrementCounter('divine-experience', amount);
  }

  unlockTitle(title) {
    const unlockedTitles = this.progressTracking.progressCounters.get('unlocked-titles') || [];
    if (!unlockedTitles.includes(title)) {
      unlockedTitles.push(title);
      this.progressTracking.progressCounters.set('unlocked-titles', unlockedTitles);
    }
  }

  markAsUnlockable(achievementId) {
    // Mark achievement as newly unlockable (for UI highlighting)
    const unlockable = this.progressTracking.progressCounters.get('newly-unlockable') || new Set();
    unlockable.add(achievementId);
    this.progressTracking.progressCounters.set('newly-unlockable', unlockable);
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * PUBLIC API METHODS
   */

  // Main method for external components to track achievements
  track(action, context = {}) {
    return this.trackAction(action, context);
  }

  // Get user's achievement summary
  getSummary() {
    return {
      totalPoints: this.getTotalPoints(),
      unlockedCount: this.progressTracking.userAchievements.size,
      totalCount: Object.keys(this.achievementDefinitions).length,
      completionPercentage: this.getCompletionPercentage(),
      recentAchievements: this.getUnlockedAchievements().slice(-5),
      divineExperience: this.getCounter('divine-experience')
    };
  }

  // Get all available achievements (for achievement browser)
  getAllAchievements() {
    return Object.values(this.achievementDefinitions).map(achievement => ({
      ...achievement,
      unlocked: this.hasAchievement(achievement.id),
      progress: this.getAchievementProgress(achievement.id)
    }));
  }

  // Save/load progress
  saveProgress() {
    const progressData = {
      achievements: Array.from(this.progressTracking.userAchievements),
      counters: Object.fromEntries(this.progressTracking.progressCounters),
      streaks: Object.fromEntries(this.progressTracking.streakCounters),
      sessionStats: this.progressTracking.sessionStats
    };
    
    localStorage.setItem('quorra-achievement-progress', JSON.stringify(progressData));
  }

  loadProgress() {
    const saved = localStorage.getItem('quorra-achievement-progress');
    if (!saved) return;

    try {
      const progressData = JSON.parse(saved);
      
      this.progressTracking.userAchievements = new Set(progressData.achievements || []);
      this.progressTracking.progressCounters = new Map(Object.entries(progressData.counters || {}));
      this.progressTracking.streakCounters = new Map(Object.entries(progressData.streaks || {}));
      this.progressTracking.sessionStats = { 
        ...this.progressTracking.sessionStats, 
        ...progressData.sessionStats 
      };
    } catch (error) {
      console.warn('Failed to load achievement progress:', error);
    }
  }
}

// Export singleton instance
const quorraAchievements = new QuorraAchievements();

export default quorraAchievements;
export { QuorraAchievements };