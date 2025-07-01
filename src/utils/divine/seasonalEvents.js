/**
 * QUORRA SEASONAL EVENTS SYSTEM
 * Brings divine celebrations and special moments throughout the year
 * 
 * Features: Dynamic seasonal events, special achievements, enhanced divine effects
 * Philosophy: "The sacred forge burns brightest during times of celebration"
 */

class QuorraSeasonalEvents {
  constructor() {
    this.eventDefinitions = {
      // MONTHLY EVENTS - Regular Divine Celebrations
      'divine-forge-week': {
        id: 'divine-forge-week',
        name: "Divine Forge Week",
        description: "A sacred week when Quorra's forge burns brightest",
        icon: "🔥",
        type: 'monthly',
        duration: 7 * 24 * 60 * 60 * 1000, // 7 days
        frequency: 'first-week-monthly',
        
        effects: {
          enhancedFlames: true,
          doubleExperience: true,
          bonusAchievements: ['forge-week-warrior', 'flame-touched', 'divine-marathon'],
          specialChallenges: true,
          goldenFlameChance: 0.15 // 15% chance for golden flames
        },
        
        challenges: [
          {
            id: 'forge-marathon',
            name: "Divine Marathon",
            description: "Complete 10 perfect designs during Forge Week",
            reward: { points: 500, title: "Marathon Smith" }
          },
          {
            id: 'flame-mastery',
            name: "Flame Mastery",
            description: "Achieve 50 divine blessings during the event",
            reward: { points: 300, title: "Flame Master" }
          }
        ],
        
        aesthetics: {
          primaryColor: '#FF4500',
          secondaryColor: '#FFD700',
          particleIntensity: 'enhanced',
          backgroundGlow: 'rgba(255, 69, 0, 0.1)'
        },
        
        messages: {
          start: "🔥 The Sacred Forge ignites! Divine Forge Week has begun!",
          progress: "The divine flames burn stronger with your dedication!",
          end: "The Sacred Forge dims, but your achievements burn eternal!"
        }
      },

      'quorra-day': {
        id: 'quorra-day',
        name: "Quorra's Sacred Day",
        description: "Annual celebration of the Goddess of Smithing",
        icon: "👑",
        type: 'annual',
        duration: 24 * 60 * 60 * 1000, // 24 hours
        frequency: 'march-19', // Spring Equinox celebration
        
        effects: {
          mythicEffects: true,
          tripleExperience: true,
          goldenEverything: true,
          exclusiveAchievements: ['quorra-blessed', 'divine-favorite'],
          freeUpgrades: true,
          communityBonus: true
        },
        
        challenges: [
          {
            id: 'goddess-tribute',
            name: "Tribute to the Goddess",
            description: "Create the most beautiful design of your lifetime",
            reward: { points: 1000, title: "Goddess Honored", badge: "👑" }
          }
        ],
        
        aesthetics: {
          primaryColor: '#FFD700',
          secondaryColor: '#FF6B35',
          particleIntensity: 'maximum',
          backgroundGlow: 'rgba(255, 215, 0, 0.2)',
          specialLogo: true
        },
        
        messages: {
          start: "👑 The Goddess herself blesses this sacred day! All creation is divine!",
          progress: "Quorra's divine presence flows through your work!",
          end: "The Goddess's blessing remains with you always!"
        }
      },

      'autumn-harvest': {
        id: 'autumn-harvest',
        name: "Harvest of Sacred Craft",
        description: "Celebrate the fruits of divine labor",
        icon: "🍂",
        type: 'seasonal',
        duration: 10 * 24 * 60 * 60 * 1000, // 10 days
        frequency: 'september-equinox',
        
        effects: {
          bonusRewards: true,
          harvestTheme: true,
          earthyFlames: true,
          craftingBonus: 1.5,
          communitySharing: true
        },
        
        challenges: [
          {
            id: 'bountiful-harvest',
            name: "Bountiful Harvest",
            description: "Complete 25 designs with autumn themes",
            reward: { points: 400, title: "Harvest Master" }
          }
        ],
        
        aesthetics: {
          primaryColor: '#CD853F',
          secondaryColor: '#FF8C00',
          particleIntensity: 'warm',
          backgroundGlow: 'rgba(205, 133, 63, 0.1)'
        },
        
        messages: {
          start: "🍂 The sacred harvest begins! Gather the fruits of your divine labor!",
          progress: "Your creations ripen like golden wheat in divine fields!",
          end: "The harvest is complete - your works nourish the world!"
        }
      },

      'winter-solstice': {
        id: 'winter-solstice',
        name: "Sacred Fire of Solstice",
        description: "When divine fire burns brightest in the longest night",
        icon: "❄️",
        type: 'seasonal',
        duration: 5 * 24 * 60 * 60 * 1000, // 5 days
        frequency: 'december-solstice',
        
        effects: {
          crystalFlames: true,
          reflectiveBonus: true,
          wisdomGained: true,
          meditativeMode: true,
          doubleExperience: true
        },
        
        challenges: [
          {
            id: 'solstice-reflection',
            name: "Sacred Reflection",
            description: "Perfect 3 of your existing designs",
            reward: { points: 350, title: "Divine Perfectionist" }
          }
        ],
        
        aesthetics: {
          primaryColor: '#4169E1',
          secondaryColor: '#87CEEB',
          particleIntensity: 'crystalline',
          backgroundGlow: 'rgba(65, 105, 225, 0.1)'
        },
        
        messages: {
          start: "❄️ In winter's embrace, divine fire burns eternal!",
          progress: "Your inner flame grows stronger with each creation!",
          end: "The solstice passes, but your divine light endures!"
        }
      },

      'spring-awakening': {
        id: 'spring-awakening',
        name: "Divine Awakening",
        description: "Celebrate renewal and fresh divine inspiration",
        icon: "🌸",
        type: 'seasonal',
        duration: 7 * 24 * 60 * 60 * 1000, // 7 days
        frequency: 'march-equinox',
        
        effects: {
          renewalBonus: true,
          freshInspiration: true,
          growthAccelerated: true,
          newBeginnings: true,
          learningBonus: 2.0
        },
        
        challenges: [
          {
            id: 'fresh-start',
            name: "Divine Fresh Start",
            description: "Try 5 completely new design techniques",
            reward: { points: 300, title: "Innovation Seeker" }
          }
        ],
        
        aesthetics: {
          primaryColor: '#32CD32',
          secondaryColor: '#FFB6C1',
          particleIntensity: 'blooming',
          backgroundGlow: 'rgba(50, 205, 50, 0.1)'
        },
        
        messages: {
          start: "🌸 Divine inspiration blooms anew! Fresh possibilities await!",
          progress: "Your creativity flourishes like spring flowers!",
          end: "The awakening continues to grow within you!"
        }
      },

      // SPECIAL COMMUNITY EVENTS
      'community-forge-day': {
        id: 'community-forge-day',
        name: "Sacred Community Forge",
        description: "When craftspeople unite in divine purpose",
        icon: "🤝",
        type: 'community',
        duration: 48 * 60 * 60 * 1000, // 48 hours
        frequency: 'triggered', // Admin-triggered event
        
        effects: {
          collaborationBonus: true,
          sharedExperience: true,
          mentorshipRewards: true,
          communityAchievements: true,
          globalGoals: true
        },
        
        globalChallenges: [
          {
            id: 'unity-forge',
            name: "Unity in Creation",
            description: "Community creates 1000 designs together",
            globalProgress: true,
            reward: { communityTitle: "Unified Smiths" }
          }
        ],
        
        aesthetics: {
          primaryColor: '#9370DB',
          secondaryColor: '#20B2AA',
          particleIntensity: 'unified',
          backgroundGlow: 'rgba(147, 112, 219, 0.1)'
        },
        
        messages: {
          start: "🤝 The sacred forge unites all craftspeople! Together we create!",
          progress: "United we forge, divided we never fall!",
          end: "The bonds forged in community burn eternal!"
        }
      },

      // MILESTONE CELEBRATIONS
      'million-designs': {
        id: 'million-designs',
        name: "Million Divine Creations",
        description: "Celebrating one million blessed designs created",
        icon: "💎",
        type: 'milestone',
        duration: 72 * 60 * 60 * 1000, // 72 hours
        frequency: 'milestone-triggered',
        
        effects: {
          diamondFlames: true,
          legendaryRewards: true,
          historicAchievements: true,
          eternalRecognition: true,
          freeEverything: true
        },
        
        aesthetics: {
          primaryColor: '#E6E6FA',
          secondaryColor: '#FFD700',
          particleIntensity: 'legendary',
          backgroundGlow: 'rgba(230, 230, 250, 0.2)'
        },
        
        messages: {
          start: "💎 One million divine creations! History is made!",
          progress: "Each creation adds to our legendary legacy!",
          end: "This milestone burns eternal in divine memory!"
        }
      }
    };

    this.activeEvents = new Map();
    this.eventHistory = [];
    this.userParticipation = new Map();
    this.globalProgress = new Map();
    
    this.eventSchedule = this.generateEventSchedule();
    this.checkForActiveEvents();
    
    // Start event monitoring
    this.startEventMonitoring();
  }

  /**
   * EVENT LIFECYCLE MANAGEMENT
   */

  // Start monitoring for events
  startEventMonitoring() {
    setInterval(() => {
      this.checkForActiveEvents();
      this.updateActiveEvents();
    }, 60000); // Check every minute
  }

  // Check for events that should be active
  checkForActiveEvents() {
    const now = Date.now();
    
    Object.values(this.eventDefinitions).forEach(event => {
      if (this.shouldEventBeActive(event, now) && !this.activeEvents.has(event.id)) {
        this.startEvent(event.id);
      }
    });

    // Check for events that should end
    Array.from(this.activeEvents.keys()).forEach(eventId => {
      const activeEvent = this.activeEvents.get(eventId);
      if (now > activeEvent.endTime) {
        this.endEvent(eventId);
      }
    });
  }

  // Determine if event should be active
  shouldEventBeActive(event, timestamp) {
    switch (event.frequency) {
      case 'first-week-monthly':
        return this.isFirstWeekOfMonth(timestamp);
      
      case 'march-19':
        return this.isSpecificDate(timestamp, 3, 19);
      
      case 'september-equinox':
        return this.isNearDate(timestamp, this.getAutumnEquinox(new Date(timestamp).getFullYear()));
      
      case 'december-solstice':
        return this.isNearDate(timestamp, this.getWinterSolstice(new Date(timestamp).getFullYear()));
      
      case 'march-equinox':
        return this.isNearDate(timestamp, this.getSpringEquinox(new Date(timestamp).getFullYear()));
      
      case 'triggered':
        return false; // These are manually triggered
      
      case 'milestone-triggered':
        return this.checkMilestoneConditions(event);
      
      default:
        return false;
    }
  }

  // Start an event
  startEvent(eventId) {
    const event = this.eventDefinitions[eventId];
    if (!event) return;

    const now = Date.now();
    const activeEvent = {
      ...event,
      startTime: now,
      endTime: now + event.duration,
      participants: new Set(),
      progress: new Map(),
      challenges: event.challenges?.map(challenge => ({
        ...challenge,
        progress: new Map(),
        completedBy: new Set()
      })) || []
    };

    this.activeEvents.set(eventId, activeEvent);
    this.applyEventEffects(event);
    this.announceEventStart(event);
    this.trackEventHistory(eventId, 'started', now);
  }

  // End an event
  endEvent(eventId) {
    const activeEvent = this.activeEvents.get(eventId);
    if (!activeEvent) return;

    this.announceEventEnd(activeEvent);
    this.distributeEventRewards(activeEvent);
    this.removeEventEffects(activeEvent);
    this.trackEventHistory(eventId, 'ended', Date.now());
    
    this.activeEvents.delete(eventId);
  }

  // Apply event effects to the system
  applyEventEffects(event) {
    const effects = event.effects;
    
    // Apply visual effects
    document.body.classList.add(`divine-event--${event.id}`);
    
    // Apply aesthetic changes
    this.applyEventAesthetics(event.aesthetics);
    
    // Apply gameplay effects
    if (effects.doubleExperience) {
      this.setExperienceMultiplier(2.0);
    }
    if (effects.tripleExperience) {
      this.setExperienceMultiplier(3.0);
    }
    if (effects.enhancedFlames) {
      this.enhanceFlameEffects();
    }
    if (effects.goldenEverything) {
      this.activateGoldenMode();
    }
  }

  // Remove event effects
  removeEventEffects(event) {
    document.body.classList.remove(`divine-event--${event.id}`);
    this.resetExperienceMultiplier();
    this.resetVisualEffects();
  }

  // Apply event aesthetics
  applyEventAesthetics(aesthetics) {
    if (!aesthetics) return;

    const eventStyles = document.createElement('style');
    eventStyles.id = 'event-aesthetics';
    eventStyles.textContent = `
      :root {
        --event-primary: ${aesthetics.primaryColor};
        --event-secondary: ${aesthetics.secondaryColor};
        --event-glow: ${aesthetics.backgroundGlow};
      }
      
      .divine-notification {
        background: linear-gradient(135deg, var(--event-primary), var(--event-secondary));
        box-shadow: 0 8px 32px var(--event-glow);
      }
      
      body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--event-glow);
        pointer-events: none;
        z-index: -1;
      }
    `;

    // Remove existing event styles
    const existing = document.getElementById('event-aesthetics');
    if (existing) existing.remove();
    
    document.head.appendChild(eventStyles);
  }

  /**
   * EVENT PARTICIPATION & CHALLENGES
   */

  // Track user participation in event
  participateInEvent(eventId, userId, action, context = {}) {
    const activeEvent = this.activeEvents.get(eventId);
    if (!activeEvent) return;

    // Add user as participant
    activeEvent.participants.add(userId);

    // Track user progress
    this.updateUserEventProgress(eventId, userId, action, context);

    // Check challenge completion
    this.checkEventChallenges(eventId, userId, action, context);

    // Update global progress for community events
    if (activeEvent.type === 'community') {
      this.updateGlobalProgress(eventId, action, context);
    }
  }

  // Update user's progress in event
  updateUserEventProgress(eventId, userId, action, context) {
    const activeEvent = this.activeEvents.get(eventId);
    if (!activeEvent) return;

    const userKey = `${eventId}:${userId}`;
    if (!this.userParticipation.has(userKey)) {
      this.userParticipation.set(userKey, {
        eventId,
        userId,
        joinTime: Date.now(),
        actions: [],
        challengesCompleted: [],
        rewards: []
      });
    }

    const participation = this.userParticipation.get(userKey);
    participation.actions.push({
      action,
      context,
      timestamp: Date.now()
    });
  }

  // Check if user completed any event challenges
  checkEventChallenges(eventId, userId, action, context) {
    const activeEvent = this.activeEvents.get(eventId);
    if (!activeEvent || !activeEvent.challenges) return;

    activeEvent.challenges.forEach(challenge => {
      if (this.isChallengeMet(challenge, userId, action, context)) {
        this.completeChallenge(eventId, challenge.id, userId);
      }
    });
  }

  // Complete a challenge for user
  completeChallenge(eventId, challengeId, userId) {
    const activeEvent = this.activeEvents.get(eventId);
    const challenge = activeEvent.challenges.find(c => c.id === challengeId);
    
    if (!challenge || challenge.completedBy.has(userId)) return;

    challenge.completedBy.add(userId);
    
    // Award challenge reward
    this.awardChallengeReward(userId, challenge.reward);
    
    // Announce completion
    this.announceChallengeCompletion(userId, challenge);
  }

  // Award challenge reward to user
  awardChallengeReward(userId, reward) {
    if (reward.points) {
      this.awardPoints(userId, reward.points);
    }
    if (reward.title) {
      this.awardTitle(userId, reward.title);
    }
    if (reward.badge) {
      this.awardBadge(userId, reward.badge);
    }
  }

  /**
   * EVENT ANNOUNCEMENTS & NOTIFICATIONS
   */

  // Announce event start
  announceEventStart(event) {
    this.createEventNotification({
      type: 'event-start',
      title: event.name,
      message: event.messages.start,
      icon: event.icon,
      duration: 5000,
      priority: 'high'
    });

    // Show event overlay with details
    this.showEventOverlay(event);
  }

  // Announce event end
  announceEventEnd(event) {
    this.createEventNotification({
      type: 'event-end',
      title: `${event.name} Complete`,
      message: event.messages.end,
      icon: event.icon,
      duration: 4000,
      priority: 'medium'
    });
  }

  // Announce challenge completion
  announceChallengeCompletion(userId, challenge) {
    this.createEventNotification({
      type: 'challenge-complete',
      title: 'Challenge Complete!',
      message: `"${challenge.name}" mastered!`,
      icon: '🏆',
      duration: 3000,
      priority: 'high'
    });
  }

  // Create event notification
  createEventNotification({ type, title, message, icon, duration, priority }) {
    const notification = document.createElement('div');
    notification.className = `event-notification event-notification--${type} event-notification--${priority}`;
    
    notification.innerHTML = `
      <div class="event-notification__icon">${icon}</div>
      <div class="event-notification__content">
        <div class="event-notification__title">${title}</div>
        <div class="event-notification__message">${message}</div>
      </div>
      <div class="event-notification__glow"></div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => notification.classList.add('event-notification--visible'), 100);

    // Remove after duration
    setTimeout(() => {
      notification.classList.remove('event-notification--visible');
      setTimeout(() => notification.remove(), 300);
    }, duration);
  }

  // Show event overlay with details
  showEventOverlay(event) {
    const overlay = document.createElement('div');
    overlay.className = 'event-overlay';
    
    overlay.innerHTML = `
      <div class="event-overlay__content">
        <div class="event-overlay__header">
          <div class="event-overlay__icon">${event.icon}</div>
          <h2 class="event-overlay__title">${event.name}</h2>
        </div>
        <p class="event-overlay__description">${event.description}</p>
        ${this.renderEventChallenges(event)}
        <div class="event-overlay__duration">
          Event Duration: ${this.formatDuration(event.duration)}
        </div>
        <button class="event-overlay__close" onclick="this.parentElement.parentElement.remove()">
          Begin Sacred Work
        </button>
      </div>
    `;

    document.body.appendChild(overlay);
    
    setTimeout(() => overlay.classList.add('event-overlay--visible'), 100);
  }

  // Render event challenges
  renderEventChallenges(event) {
    if (!event.challenges?.length) return '';

    return `
      <div class="event-overlay__challenges">
        <h3>Sacred Challenges:</h3>
        ${event.challenges.map(challenge => `
          <div class="event-challenge">
            <div class="event-challenge__name">${challenge.name}</div>
            <div class="event-challenge__description">${challenge.description}</div>
            <div class="event-challenge__reward">Reward: ${challenge.reward.points} points</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  /**
   * UTILITY METHODS
   */

  // Generate event schedule for the year
  generateEventSchedule() {
    const schedule = [];
    const currentYear = new Date().getFullYear();
    
    // Add recurring events
    Object.values(this.eventDefinitions).forEach(event => {
      if (event.frequency !== 'triggered' && event.frequency !== 'milestone-triggered') {
        const dates = this.calculateEventDates(event, currentYear);
        dates.forEach(date => {
          schedule.push({
            eventId: event.id,
            startDate: date,
            endDate: new Date(date.getTime() + event.duration)
          });
        });
      }
    });

    return schedule.sort((a, b) => a.startDate - b.startDate);
  }

  // Calculate event dates for a year
  calculateEventDates(event, year) {
    const dates = [];
    
    switch (event.frequency) {
      case 'first-week-monthly':
        for (let month = 0; month < 12; month++) {
          const firstMonday = this.getFirstMondayOfMonth(year, month);
          dates.push(firstMonday);
        }
        break;
        
      case 'march-19':
        dates.push(new Date(year, 2, 19)); // March 19
        break;
        
      case 'september-equinox':
        dates.push(this.getAutumnEquinox(year));
        break;
        
      case 'december-solstice':
        dates.push(this.getWinterSolstice(year));
        break;
        
      case 'march-equinox':
        dates.push(this.getSpringEquinox(year));
        break;
    }
    
    return dates;
  }

  // Date calculation helpers
  getFirstMondayOfMonth(year, month) {
    const firstDay = new Date(year, month, 1);
    const dayOfWeek = firstDay.getDay();
    const daysToAdd = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
    return new Date(year, month, 1 + daysToAdd);
  }

  getAutumnEquinox(year) {
    return new Date(year, 8, 22); // Approximate September 22
  }

  getWinterSolstice(year) {
    return new Date(year, 11, 21); // Approximate December 21
  }

  getSpringEquinox(year) {
    return new Date(year, 2, 20); // Approximate March 20
  }

  isFirstWeekOfMonth(timestamp) {
    const date = new Date(timestamp);
    return date.getDate() <= 7;
  }

  isSpecificDate(timestamp, month, day) {
    const date = new Date(timestamp);
    return date.getMonth() === month - 1 && date.getDate() === day;
  }

  isNearDate(timestamp, targetDate, daysTolerance = 3) {
    const diff = Math.abs(timestamp - targetDate.getTime());
    const daysDiff = diff / (24 * 60 * 60 * 1000);
    return daysDiff <= daysTolerance;
  }

  formatDuration(milliseconds) {
    const days = Math.floor(milliseconds / (24 * 60 * 60 * 1000));
    const hours = Math.floor((milliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    
    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''}${hours > 0 ? ` ${hours}h` : ''}`;
    }
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  }

  checkMilestoneConditions(event) {
    // Check if milestone conditions are met
    if (event.id === 'million-designs') {
      return this.getTotalDesignsCreated() >= 1000000;
    }
    return false;
  }

  isChallengeMet(challenge, userId, action, context) {
    // Check if user's action contributes to challenge completion
    switch (challenge.id) {
      case 'forge-marathon':
        return action === 'design-completed' && context.perfect;
      case 'flame-mastery':
        return action === 'blessing-received';
      case 'goddess-tribute':
        return action === 'design-completed' && context.beauty_score >= 95;
      case 'bountiful-harvest':
        return action === 'design-completed' && context.theme === 'autumn';
      case 'solstice-reflection':
        return action === 'design-perfected';
      case 'fresh-start':
        return action === 'new-technique-used';
      case 'unity-forge':
        return action === 'design-completed';
      default:
        return false;
    }
  }

  updateGlobalProgress(eventId, action, context) {
    const key = `${eventId}:global`;
    const current = this.globalProgress.get(key) || 0;
    this.globalProgress.set(key, current + 1);
  }

  // Visual effect methods
  setExperienceMultiplier(multiplier) {
    window.quorraExperienceMultiplier = multiplier;
  }

  resetExperienceMultiplier() {
    window.quorraExperienceMultiplier = 1.0;
  }

  enhanceFlameEffects() {
    document.body.classList.add('enhanced-flames');
  }

  activateGoldenMode() {
    document.body.classList.add('golden-mode');
  }

  resetVisualEffects() {
    document.body.classList.remove('enhanced-flames', 'golden-mode');
  }

  // Reward methods
  awardPoints(userId, points) {
    // Implementation would connect to user system
    console.log(`Awarding ${points} points to user ${userId}`);
  }

  awardTitle(userId, title) {
    // Implementation would connect to user system
    console.log(`Awarding title "${title}" to user ${userId}`);
  }

  awardBadge(userId, badge) {
    // Implementation would connect to user system
    console.log(`Awarding badge "${badge}" to user ${userId}`);
  }

  getTotalDesignsCreated() {
    // Implementation would connect to analytics system
    return 0; // Placeholder
  }

  trackEventHistory(eventId, action, timestamp) {
    this.eventHistory.push({
      eventId,
      action,
      timestamp,
      participants: this.activeEvents.get(eventId)?.participants.size || 0
    });
  }

  /**
   * PUBLIC API METHODS
   */

  // Get currently active events
  getActiveEvents() {
    return Array.from(this.activeEvents.values());
  }

  // Get upcoming events
  getUpcomingEvents(limit = 5) {
    const now = new Date();
    return this.eventSchedule
      .filter(event => event.startDate > now)
      .slice(0, limit);
  }

  // Get user's event participation summary
  getUserEventSummary(userId) {
    const participations = Array.from(this.userParticipation.values())
      .filter(p => p.userId === userId);
    
    return {
      eventsParticipated: participations.length,
      totalActions: participations.reduce((sum, p) => sum + p.actions.length, 0),
      challengesCompleted: participations.reduce((sum, p) => sum + p.challengesCompleted.length, 0),
      totalRewards: participations.reduce((sum, p) => sum + p.rewards.length, 0)
    };
  }

  // Manual event triggering for admins
  triggerEvent(eventId, duration = null) {
    const event = this.eventDefinitions[eventId];
    if (!event) return false;

    if (duration) {
      event.duration = duration;
    }

    this.startEvent(eventId);
    return true;
  }

  // Force end an event
  forceEndEvent(eventId) {
    if (this.activeEvents.has(eventId)) {
      this.endEvent(eventId);
      return true;
    }
    return false;
  }

  // Track user participation (main external method)
  participate(eventId, userId, action, context = {}) {
    this.participateInEvent(eventId, userId, action, context);
  }

  // Check if specific event is currently active
  isEventActive(eventId) {
    return this.activeEvents.has(eventId);
  }

  // Get event details
  getEventDetails(eventId) {
    return this.eventDefinitions[eventId] || null;
  }

  // Get user's progress in current events
  getUserEventProgress(userId) {
    const activeEventIds = Array.from(this.activeEvents.keys());
    const progress = {};

    activeEventIds.forEach(eventId => {
      const userKey = `${eventId}:${userId}`;
      const participation = this.userParticipation.get(userKey);
      
      progress[eventId] = {
        joined: !!participation,
        joinTime: participation?.joinTime,
        actionsCount: participation?.actions.length || 0,
        challengesCompleted: participation?.challengesCompleted.length || 0
      };
    });

    return progress;
  }

  // Save/load event state
  saveEventState() {
    const eventState = {
      activeEvents: Object.fromEntries(
        Array.from(this.activeEvents.entries()).map(([id, event]) => [
          id, {
            ...event,
            participants: Array.from(event.participants),
            progress: Object.fromEntries(event.progress),
            challenges: event.challenges.map(challenge => ({
              ...challenge,
              progress: Object.fromEntries(challenge.progress),
              completedBy: Array.from(challenge.completedBy)
            }))
          }
        ])
      ),
      userParticipation: Object.fromEntries(this.userParticipation),
      globalProgress: Object.fromEntries(this.globalProgress),
      eventHistory: this.eventHistory.slice(-100) // Keep last 100 events
    };

    localStorage.setItem('quorra-event-state', JSON.stringify(eventState));
  }

  loadEventState() {
    const saved = localStorage.getItem('quorra-event-state');
    if (!saved) return;

    try {
      const eventState = JSON.parse(saved);
      
      // Restore active events
      if (eventState.activeEvents) {
        Object.entries(eventState.activeEvents).forEach(([id, event]) => {
          this.activeEvents.set(id, {
            ...event,
            participants: new Set(event.participants),
            progress: new Map(Object.entries(event.progress)),
            challenges: event.challenges.map(challenge => ({
              ...challenge,
              progress: new Map(Object.entries(challenge.progress)),
              completedBy: new Set(challenge.completedBy)
            }))
          });
        });
      }

      // Restore user participation
      if (eventState.userParticipation) {
        this.userParticipation = new Map(Object.entries(eventState.userParticipation));
      }

      // Restore global progress
      if (eventState.globalProgress) {
        this.globalProgress = new Map(Object.entries(eventState.globalProgress));
      }

      // Restore event history
      if (eventState.eventHistory) {
        this.eventHistory = eventState.eventHistory;
      }

    } catch (error) {
      console.warn('Failed to load event state:', error);
    }
  }
}

// Export singleton instance
const quorraSeasonalEvents = new QuorraSeasonalEvents();

export default quorraSeasonalEvents;
export { QuorraSeasonalEvents };