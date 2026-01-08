'use client';

import PortfolioForm from '@/components/admin/PortfolioForm';

export default function NewPortfolioPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">New Portfolio Item</h1>
        <p className="text-gray-600 mt-1">Add a new project to your portfolio</p>
      </div>

      <PortfolioForm />
    </div>
  );
}
