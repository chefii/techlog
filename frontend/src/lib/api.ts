const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

interface FetchOptions extends RequestInit {
  token?: string;
}

async function fetchAPI<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { token, ...fetchOptions } = options;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export const api = {
  // Auth
  login: (email: string, password: string) =>
    fetchAPI<{ access_token: string }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  getProfile: (token: string) =>
    fetchAPI('/api/auth/profile', { token }),

  // Posts
  getPosts: (params?: { page?: number; limit?: number }) => {
    const query = new URLSearchParams();
    if (params?.page) query.set('page', String(params.page));
    if (params?.limit) query.set('limit', String(params.limit));
    return fetchAPI(`/api/posts?${query}`);
  },

  getPost: (slug: string) =>
    fetchAPI(`/api/posts/${slug}`),

  createPost: (data: any, token: string) =>
    fetchAPI('/api/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      token,
    }),

  updatePost: (id: string, data: any, token: string) =>
    fetchAPI(`/api/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      token,
    }),

  deletePost: (id: string, token: string) =>
    fetchAPI(`/api/posts/${id}`, {
      method: 'DELETE',
      token,
    }),

  // Portfolio
  getPortfolios: () =>
    fetchAPI('/api/portfolio'),

  getPortfolio: (id: string) =>
    fetchAPI(`/api/portfolio/${id}`),

  createPortfolio: (data: any, token: string) =>
    fetchAPI('/api/portfolio', {
      method: 'POST',
      body: JSON.stringify(data),
      token,
    }),

  updatePortfolio: (id: string, data: any, token: string) =>
    fetchAPI(`/api/portfolio/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      token,
    }),

  deletePortfolio: (id: string, token: string) =>
    fetchAPI(`/api/portfolio/${id}`, {
      method: 'DELETE',
      token,
    }),

  // Resume
  getResume: () =>
    fetchAPI('/api/resume'),

  getResumeById: (id: string) =>
    fetchAPI(`/api/resume/${id}`),

  createResume: (data: any, token: string) =>
    fetchAPI('/api/resume', {
      method: 'POST',
      body: JSON.stringify(data),
      token,
    }),

  updateResume: (id: string, data: any, token: string) =>
    fetchAPI(`/api/resume/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      token,
    }),

  // Users
  getUsers: (params: { page?: number; limit?: number } = {}, token: string) => {
    const query = new URLSearchParams();
    if (params.page) query.set('page', String(params.page));
    if (params.limit) query.set('limit', String(params.limit));
    return fetchAPI(`/api/users?${query}`, { token });
  },

  getUser: (id: string, token: string) =>
    fetchAPI(`/api/users/${id}`, { token }),

  createUser: (data: any, token: string) =>
    fetchAPI('/api/users', {
      method: 'POST',
      body: JSON.stringify(data),
      token,
    }),

  updateUser: (id: string, data: any, token: string) =>
    fetchAPI(`/api/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      token,
    }),

  updateUserPassword: (id: string, password: string, token: string) =>
    fetchAPI(`/api/users/${id}/password`, {
      method: 'PATCH',
      body: JSON.stringify({ password }),
      token,
    }),

  toggleUserActive: (id: string, token: string) =>
    fetchAPI(`/api/users/${id}/toggle-active`, {
      method: 'PATCH',
      token,
    }),

  deleteUser: (id: string, token: string) =>
    fetchAPI(`/api/users/${id}`, {
      method: 'DELETE',
      token,
    }),

  // Auth - Register
  register: (data: { name: string; email: string; password: string }) =>
    fetchAPI<{ access_token: string; user: any }>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};
