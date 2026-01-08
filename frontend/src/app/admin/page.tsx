'use client';

import Link from 'next/link';

const stats = [
  { label: 'Total Posts', value: '0', href: '/admin/posts', icon: '📝', color: 'bg-blue-500' },
  { label: 'Portfolio Items', value: '0', href: '/admin/portfolio', icon: '💼', color: 'bg-green-500' },
  { label: 'Resume', value: '1', href: '/admin/resume', icon: '📄', color: 'bg-purple-500' },
];

const quickActions = [
  { label: 'New Post', href: '/admin/posts/new', icon: '✏️' },
  { label: 'New Portfolio', href: '/admin/portfolio/new', icon: '➕' },
  { label: 'Edit Resume', href: '/admin/resume', icon: '📝' },
  { label: 'View Site', href: '/', icon: '🌐' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to TechLog Admin</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} text-white p-4 rounded-xl text-2xl`}>
                {stat.icon}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all group"
            >
              <span className="text-3xl mb-2">{action.icon}</span>
              <span className="text-sm font-medium text-gray-600 group-hover:text-primary-600">
                {action.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="text-center py-12 text-gray-500">
          <p className="text-4xl mb-4">📋</p>
          <p>No recent activity</p>
          <p className="text-sm mt-1">Start by creating your first post!</p>
        </div>
      </div>

      {/* Getting Started Guide */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-sm p-6 text-white">
        <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl mb-2">1️⃣</div>
            <h3 className="font-medium mb-1">Set up your Resume</h3>
            <p className="text-sm text-white/80">Add your experience, skills, and education</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl mb-2">2️⃣</div>
            <h3 className="font-medium mb-1">Add Portfolio Items</h3>
            <p className="text-sm text-white/80">Showcase your best projects</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl mb-2">3️⃣</div>
            <h3 className="font-medium mb-1">Write Blog Posts</h3>
            <p className="text-sm text-white/80">Share your knowledge and experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
