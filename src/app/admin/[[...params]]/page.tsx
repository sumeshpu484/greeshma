'use client';

import { useState } from 'react';
import Link from 'next/link';

type Tab = 'profile' | 'social' | 'buttons';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [formData, setFormData] = useState({
    name: 'Your Name',
    title: 'Full Stack Engineer',
    tagline: 'Turning ideas into reality',
    email: 'you@example.com',
    bio: 'Your bio here...',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Save to localStorage for now
    localStorage.setItem('portfolioData', JSON.stringify(formData));
    alert('✅ Profile saved! Changes will appear on your portfolio.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">📊 Portfolio Admin</h1>
            <p className="text-gray-600 text-sm">Manage your portfolio content</p>
          </div>
          <Link href="/" className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition">
            ← Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Info Box */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="font-semibold text-blue-900 mb-2">ℹ️ Admin Panel Status</h2>
          <p className="text-blue-800 text-sm mb-4">
            This is a <strong>simplified admin interface</strong> for managing your portfolio. Changes are saved locally.
          </p>
          <p className="text-blue-800 text-sm">
            For a full-featured CMS with database persistence, refer to the README.md for Payload CMS setup instructions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-3 font-semibold border-b-2 transition ${
              activeTab === 'profile'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            👤 Profile
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`px-4 py-3 font-semibold border-b-2 transition ${
              activeTab === 'social'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            🔗 Social Links
          </button>
          <button
            onClick={() => setActiveTab('buttons')}
            className={`px-4 py-3 font-semibold border-b-2 transition ${
              activeTab === 'buttons'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            🎯 CTA Buttons
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow">
          {activeTab === 'profile' && (
            <div className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Professional Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tagline</label>
                  <input
                    type="text"
                    name="tagline"
                    value={formData.tagline}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Biography</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
                >
                  💾 Save Profile
                </button>
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Social Links</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">Primary</span>
                  </div>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourname"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-900">GitHub</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">Primary</span>
                  </div>
                  <input
                    type="url"
                    placeholder="https://github.com/yourname"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-900">Twitter</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">Secondary</span>
                  </div>
                  <input
                    type="url"
                    placeholder="https://twitter.com/yourname"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <button className="w-full px-4 py-2 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition">
                  + Add Social Link
                </button>
              </div>
            </div>
          )}

          {activeTab === 'buttons' && (
            <div className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Call-to-Action Buttons</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-900">Get in Touch</h3>
                    <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded">Primary</span>
                  </div>
                  <input
                    type="text"
                    placeholder="mailto:you@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-900">View Resume</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">Secondary</span>
                  </div>
                  <input
                    type="text"
                    placeholder="/resume"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <button className="w-full px-4 py-2 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition">
                  + Add Button
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-900 text-sm">
            <strong>💡 Note:</strong> This is a simplified interface for MVP testing. For production, set up Payload CMS with a proper database. See README.md for details.
          </p>
        </div>
      </main>
    </div>
  );
}
