// C:\Users\Kimberly\quorra\src\store\slices\projectSlice.js
// QUORRA Project Management Slice
// Divine project state management blessed by the Goddess of Smithing

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const createProjectSlice = (set, get) => ({
  // ===== PROJECT STATE =====
  projects: [],
  currentProject: null,
  isLoading: false,
  error: null,
  
  // Project metadata
  projectStats: {
    totalProjects: 0,
    activeProjects: 0,
    completedProjects: 0,
    totalCSSGenerated: 0,
    performanceGains: {
      averageSizeReduction: 87,
      averageSpeedIncrease: 3.2
    }
  },

  // ===== PROJECT ACTIONS =====
  
  /**
   * Create a new project blessed by Quorra
   */
  createProject: async (projectData) => {
    set({ isLoading: true, error: null });
    
    try {
      const newProject = {
        id: `proj_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name: projectData.name,
        industry: projectData.industry || 'general',
        description: projectData.description || '',
        
        // Divine project settings
        divineSettings: {
          colorPalette: projectData.colorPalette || 'auto',
          typography: projectData.typography || 'auto',
          layoutStyle: projectData.layoutStyle || 'modern',
          industryIntelligence: true,
          sparkyGuidance: true
        },
        
        // Design data structure
        designData: {
          components: [],
          layout: {
            header: null,
            hero: null,
            sections: [],
            footer: null
          },
          styles: {
            colors: {},
            fonts: {},
            spacing: {},
            animations: {}
          },
          responsive: {
            mobile: {},
            tablet: {},
            desktop: {}
          }
        },
        
        // Generated code
        generatedCode: {
          html: '',
          css: '',
          lastGenerated: null,
          sizeStats: {
            cssSize: 0,
            htmlSize: 0,
            totalSize: 0,
            compressionRatio: 0
          }
        },
        
        // Project metadata
        metadata: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          lastAccessed: new Date().toISOString(),
          version: '1.0.0',
          status: 'draft', // draft, active, completed, archived
          tags: projectData.tags || [],
          collaborators: []
        },
        
        // Sparky memory for this project
        sparkyMemories: [],
        
        // Performance tracking
        performance: {
          buildTime: 0,
          lastBuildTime: null,
          optimizations: [],
          warnings: []
        }
      };
      
      const { projects } = get();
      const updatedProjects = [...projects, newProject];
      
      set({
        projects: updatedProjects,
        currentProject: newProject,
        isLoading: false,
        projectStats: {
          ...get().projectStats,
          totalProjects: updatedProjects.length,
          activeProjects: updatedProjects.filter(p => p.metadata.status === 'active').length
        }
      });
      
      return newProject;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  /**
   * Load project into the sacred forge
   */
  loadProject: async (projectId) => {
    set({ isLoading: true, error: null });
    
    try {
      const { projects } = get();
      const project = projects.find(p => p.id === projectId);
      
      if (!project) {
        throw new Error(`Project ${projectId} not found in divine records`);
      }
      
      // Update last accessed timestamp
      const updatedProject = {
        ...project,
        metadata: {
          ...project.metadata,
          lastAccessed: new Date().toISOString()
        }
      };
      
      const updatedProjects = projects.map(p => 
        p.id === projectId ? updatedProject : p
      );
      
      set({
        projects: updatedProjects,
        currentProject: updatedProject,
        isLoading: false
      });
      
      return updatedProject;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  /**
   * Update project with divine changes
   */
  updateProject: (projectId, updates) => {
    const { projects, currentProject } = get();
    
    const updatedProject = {
      ...projects.find(p => p.id === projectId),
      ...updates,
      metadata: {
        ...projects.find(p => p.id === projectId)?.metadata,
        updatedAt: new Date().toISOString(),
        version: incrementVersion(projects.find(p => p.id === projectId)?.metadata?.version || '1.0.0')
      }
    };
    
    const updatedProjects = projects.map(p => 
      p.id === projectId ? updatedProject : p
    );
    
    set({
      projects: updatedProjects,
      currentProject: currentProject?.id === projectId ? updatedProject : currentProject
    });
    
    return updatedProject;
  },

  /**
   * Update design data with Quorra's blessing
   */
  updateDesignData: (designUpdates) => {
    const { currentProject } = get();
    if (!currentProject) return;
    
    const updatedDesignData = {
      ...currentProject.designData,
      ...designUpdates
    };
    
    get().updateProject(currentProject.id, {
      designData: updatedDesignData
    });
  },

  /**
   * Generate sacred code from design
   */
  generateCode: async (options = {}) => {
    const { currentProject } = get();
    if (!currentProject) throw new Error('No project loaded in the forge');
    
    set({ isLoading: true });
    
    try {
      const startTime = Date.now();
      
      // This would call the QUORRA core engine
      const generatedCode = await generateDivineCode(currentProject.designData, {
        industry: currentProject.industry,
        divineSettings: currentProject.divineSettings,
        ...options
      });
      
      const buildTime = Date.now() - startTime;
      
      const updatedProject = get().updateProject(currentProject.id, {
        generatedCode: {
          ...generatedCode,
          lastGenerated: new Date().toISOString(),
          sizeStats: calculateSizeStats(generatedCode)
        },
        performance: {
          ...currentProject.performance,
          buildTime,
          lastBuildTime: new Date().toISOString()
        }
      });
      
      set({ isLoading: false });
      return generatedCode;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  /**
   * Delete project from divine records
   */
  deleteProject: (projectId) => {
    const { projects, currentProject } = get();
    const updatedProjects = projects.filter(p => p.id !== projectId);
    
    set({
      projects: updatedProjects,
      currentProject: currentProject?.id === projectId ? null : currentProject,
      projectStats: {
        ...get().projectStats,
        totalProjects: updatedProjects.length,
        activeProjects: updatedProjects.filter(p => p.metadata.status === 'active').length
      }
    });
  },

  /**
   * Duplicate project with divine blessing
   */
  duplicateProject: (projectId, newName) => {
    const { projects } = get();
    const originalProject = projects.find(p => p.id === projectId);
    
    if (!originalProject) return null;
    
    return get().createProject({
      ...originalProject,
      name: newName || `${originalProject.name} (Copy)`,
      id: undefined // Will be regenerated
    });
  },

  /**
   * Archive project
   */
  archiveProject: (projectId) => {
    return get().updateProject(projectId, {
      metadata: {
        status: 'archived'
      }
    });
  },

  /**
   * Get projects by status
   */
  getProjectsByStatus: (status) => {
    const { projects } = get();
    return projects.filter(p => p.metadata.status === status);
  },

  /**
   * Get projects by industry
   */
  getProjectsByIndustry: (industry) => {
    const { projects } = get();
    return projects.filter(p => p.industry === industry);
  },

  /**
   * Search projects
   */
  searchProjects: (query) => {
    const { projects } = get();
    const lowercaseQuery = query.toLowerCase();
    
    return projects.filter(p => 
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.industry.toLowerCase().includes(lowercaseQuery) ||
      p.metadata.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  },

  /**
   * Clear all project data (divine reset)
   */
  clearProjects: () => {
    set({
      projects: [],
      currentProject: null,
      isLoading: false,
      error: null,
      projectStats: {
        totalProjects: 0,
        activeProjects: 0,
        completedProjects: 0,
        totalCSSGenerated: 0,
        performanceGains: {
          averageSizeReduction: 87,
          averageSpeedIncrease: 3.2
        }
      }
    });
  },

  /**
   * Set error state
   */
  setError: (error) => set({ error }),

  /**
   * Clear error state
   */
  clearError: () => set({ error: null })
});

// ===== HELPER FUNCTIONS =====

/**
 * Mock function for divine code generation
 * In real implementation, this would call QuorraCoreEngine
 */
const generateDivineCode = async (designData, options) => {
  // Simulate divine processing time
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
  
  // Mock generated code (would be real in production)
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Divine Creation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Blessed by Quorra, Goddess of Smithing -->
  <main class="divine-container">
    <h1 class="sacred-heading">Welcome to Divine Creation</h1>
  </main>
</body>
</html>`;

  const css = `/* Blessed by Quorra - Sacred Styles */
.divine-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.sacred-heading {
  color: #ff6b35;
  font-size: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`;

  return { html, css };
};

/**
 * Calculate size statistics for generated code
 */
const calculateSizeStats = (generatedCode) => {
  const htmlSize = new Blob([generatedCode.html]).size;
  const cssSize = new Blob([generatedCode.css]).size;
  const totalSize = htmlSize + cssSize;
  
  // Mock framework comparison (real implementation would be more sophisticated)
  const frameworkSize = totalSize * 7.5; // Simulate 87% reduction
  const compressionRatio = ((frameworkSize - totalSize) / frameworkSize) * 100;
  
  return {
    htmlSize,
    cssSize,
    totalSize,
    compressionRatio: Math.round(compressionRatio)
  };
};

/**
 * Increment semantic version
 */
const incrementVersion = (version) => {
  const parts = version.split('.');
  const patch = parseInt(parts[2]) + 1;
  return `${parts[0]}.${parts[1]}.${patch}`;
};

// Create the store slice
export const useProjectStore = create(
  devtools(
    persist(createProjectSlice, {
      name: 'quorra-projects',
      // Only persist essential data, not loading states
      partialize: (state) => ({
        projects: state.projects,
        projectStats: state.projectStats
      })
    }),
    { name: 'QuorraProjectStore' }
  )
);