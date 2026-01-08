export interface Portfolio {
  _id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  thumbnail?: string;
  images: string[];
  githubUrl?: string;
  demoUrl?: string;
  startDate?: string;
  endDate?: string;
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePortfolioInput {
  title: string;
  description: string;
  longDescription?: string;
  technologies?: string[];
  thumbnail?: string;
  images?: string[];
  githubUrl?: string;
  demoUrl?: string;
  startDate?: string;
  endDate?: string;
  featured?: boolean;
  order?: number;
}

export interface UpdatePortfolioInput extends Partial<CreatePortfolioInput> {}
