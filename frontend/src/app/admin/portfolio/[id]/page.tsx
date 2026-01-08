'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import PortfolioForm from '@/components/admin/PortfolioForm';
import { api } from '@/lib/api';

interface Portfolio {
  _id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies?: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export default function EditPortfolioPage() {
  const params = useParams();
  const [item, setItem] = useState<Portfolio | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await api.getPortfolio(params.id as string);
        setItem(response as Portfolio);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch item');
      } finally {
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">Item not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Edit Portfolio Item</h1>
        <p className="text-gray-600 mt-1">Update your project details</p>
      </div>

      <PortfolioForm initialData={item} isEdit />
    </div>
  );
}
