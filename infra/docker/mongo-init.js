db = db.getSiblingDB('techlog');

db.createCollection('posts');
db.createCollection('portfolios');
db.createCollection('resumes');

db.posts.createIndex({ slug: 1 }, { unique: true });
db.posts.createIndex({ published: 1, createdAt: -1 });
db.posts.createIndex({ tags: 1 });
db.posts.createIndex({ category: 1 });

db.portfolios.createIndex({ order: 1, createdAt: -1 });
db.portfolios.createIndex({ featured: 1 });

db.resumes.createIndex({ isActive: 1 });

print('MongoDB initialized successfully');
