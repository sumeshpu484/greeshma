'use client';

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load Payload admin iframe or interface
    const loadAdmin = async () => {
      try {
        const response = await fetch('/api/admin/init', { method: 'POST' });
        if (!response.ok) {
          throw new Error('Failed to initialize Payload CMS');
        }
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };

    loadAdmin();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Payload CMS Admin...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">⚠️ Admin Setup</h1>
          <p className="text-gray-600 mb-6">
            {error}
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
            <p className="text-sm text-blue-900 font-semibold mb-2">To enable admin panel:</p>
            <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
              <li>Restart dev server: <code className="bg-white px-2 py-1 rounded">npm run dev</code></li>
              <li>Wait for Payload to initialize</li>
              <li>Create an admin account</li>
              <li>Manage content in the dashboard</li>
            </ol>
          </div>
          <a
            href="/"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">Payload CMS Admin</h1>
          <p className="text-gray-600 text-sm">Manage your portfolio content</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 mb-4">
            The Payload CMS admin interface is loading. This may take a few moments on first load.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-primary-600 bg-blue-50 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">📝 Available Collections:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✅ <strong>Profile</strong> - Your main profile information</li>
                <li>✅ <strong>Social Links</strong> - LinkedIn, GitHub, Twitter, etc.</li>
                <li>✅ <strong>CTA Buttons</strong> - Call-to-action buttons (Get in Touch, Resume, etc.)</li>
                <li>✅ <strong>Users</strong> - Admin user accounts</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <p className="text-sm text-yellow-900">
                💡 <strong>First Time?</strong> You'll need to create an admin account. Check your console or terminal for setup instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
