export interface Experience {
  company: string;
  position: string;
  description?: string;
  achievements: string[];
  startDate: string;
  endDate?: string;
  current: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate?: string;
}

export interface Skill {
  name: string;
  category: string;
  level?: number;
}

export interface Resume {
  _id: string;
  name: string;
  title: string;
  summary?: string;
  email?: string;
  phone?: string;
  location?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  certifications: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateResumeInput {
  name: string;
  title: string;
  summary?: string;
  email?: string;
  phone?: string;
  location?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  experiences?: Experience[];
  education?: Education[];
  skills?: Skill[];
  certifications?: string[];
  isActive?: boolean;
}

export interface UpdateResumeInput extends Partial<CreateResumeInput> {}
