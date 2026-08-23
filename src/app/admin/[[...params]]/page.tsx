'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<string>('profile');
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(`/api/${activeTab}?limit=100`);
      if (res.ok) {
        const result = await res.json();
        setData(result);
        if (result.docs && result.docs.length > 0) {
          setFormData(result.docs[0]);
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch(`/api/${activeTab}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert('Data saved successfully!');
        fetchData();
      }
    } catch (error) {
      alert('Error saving data: ' + error);
    }
  }

  const collections = [
    { id: 'profile', label: 'Profile' },
    { id: 'social-links', label: 'Social Links' },
    { id: 'cta-buttons', label: 'CTA Buttons' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog-posts', label: 'Blog Posts' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">📊 Payload CMS Admin</h1>
          <Link href="/" className="text-blue-600 hover:underline">← Back to Site</Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow p-4 sticky top-24">
              <h2 className="font-bold text-gray-900 mb-4">Collections</h2>
              <div className="space-y-2">
                {collections.map(col => (
                  <button
                    key={col.id}
                    onClick={() => setActiveTab(col.id)}
                    className={`w-full text-left px-4 py-3 rounded transition font-medium text-sm ${
                      activeTab === col.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {col.label}
                  </button>
                ))}
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-2 capitalize text-gray-900">
                {collections.find(c => c.id === activeTab)?.label}
              </h2>
              <p className="text-gray-600 mb-6">
                Total items: <span className="font-bold text-lg">{data.totalDocs || 0}</span>
              </p>

              {loading ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">Loading...</p>
                </div>
              ) : (
                <div>
                  {data.docs && data.docs.length > 0 ? (
                    <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="font-bold mb-4 text-gray-900">Existing Data:</h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded text-xs overflow-auto max-h-64">
                        {JSON.stringify(data.docs[0], null, 2)}
                      </pre>
                    </div>
                  ) : (
                    <div className="mb-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-yellow-800">No data yet. Use the form below or API to add content.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.keys(formData).filter(key => !key.startsWith('_')).map(key => (
                        <div key={key}>
                          <label className="block text-sm font-medium text-gray-700 capitalize mb-1">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </label>
                          <input
                            type={typeof formData[key] === 'number' ? 'number' : 'text'}
                            value={formData[key] || ''}
                            onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                      Save Data
                    </button>
                  </form>

                  <div className="mt-8 pt-8 border-t">
                    <h3 className="font-bold mb-4 text-gray-900">API Information:</h3>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded text-sm">
                      <p className="mb-2">GET endpoint:</p>
                      <code className="block mb-4">/api/{activeTab}</code>
                      <p className="mb-2">POST endpoint:</p>
                      <code className="block">curl -X POST http://localhost:3000/api/{activeTab} \</code>
                      <code className="block">  -H "Content-Type: application/json" \</code>
                      <code className="block">  -d '{'{...}'}'</code>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
