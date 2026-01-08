export interface Post {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  tags: string[];
  category?: string;
  thumbnail?: string;
  published: boolean;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostInput {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  tags?: string[];
  category?: string;
  thumbnail?: string;
  published?: boolean;
}

export interface UpdatePostInput extends Partial<CreatePostInput> {}

export interface PostsResponse {
  data: Post[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
