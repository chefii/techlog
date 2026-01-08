export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    PROFILE: '/api/auth/profile',
  },
  POSTS: {
    BASE: '/api/posts',
    BY_SLUG: (slug: string) => `/api/posts/${slug}`,
    BY_ID: (id: string) => `/api/posts/${id}`,
  },
  PORTFOLIO: {
    BASE: '/api/portfolio',
    FEATURED: '/api/portfolio/featured',
    BY_ID: (id: string) => `/api/portfolio/${id}`,
  },
  RESUME: {
    BASE: '/api/resume',
    BY_ID: (id: string) => `/api/resume/${id}`,
  },
} as const;

export const CATEGORIES = [
  'Development',
  'DevOps',
  'Architecture',
  'Career',
  'Tutorial',
  'Review',
] as const;

export const SKILL_CATEGORIES = [
  'Frontend',
  'Backend',
  'Database',
  'DevOps',
  'Tools',
  'Language',
] as const;

export type Category = (typeof CATEGORIES)[number];
export type SkillCategory = (typeof SKILL_CATEGORIES)[number];
