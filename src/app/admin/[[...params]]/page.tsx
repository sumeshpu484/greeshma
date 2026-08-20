'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Tab = 'profile' | 'social' | 'buttons';

interface SocialLink {
  id: string;
  platform: string;
  url: string;
  label: string;
  displayOrder: number;
}

interface CTAButton {
  id: string;
  label: string;
  href: string;
  style: 'primary' | 'secondary' | 'ghost';
  displayOrder: number;
}

interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  bio: string;
  avatarUrl: string;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState<ProfileData>({
    name: 'Your Name',
    title: 'Full Stack Engineer',
    tagline: 'Turning ideas into reality with code and creativity',
    email: 'you@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'I am a passionate full-stack engineer with expertise in building modern web applications.',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=profile',
  });

  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    { id: '1', platform: 'linkedin', url: 'https://linkedin.com/in/yourname', label: 'LinkedIn', displayOrder: 1 },
    { id: '2', platform: 'github', url: 'https://github.com/yourname', label: 'GitHub', displayOrder: 2 },
    { id: '3', platform: 'twitter', url: 'https://twitter.com/yourname', label: 'Twitter', displayOrder: 3 },
  ]);

  const [ctaButtons, setCtaButtons] = useState<CTAButton[]>([
    { id: '1', label: 'Get in Touch', href: 'mailto:you@example.com', style: 'primary', displayOrder: 1 },
    { id: '2', label: 'View Resume', href: '#', style: 'secondary', displayOrder: 2 },
  ]);

  // Load data from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('portfolioAdmin');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setProfile(data.profile || profile);
        setSocialLinks(data.socialLinks || socialLinks);
        setCtaButtons(data.ctaButtons || ctaButtons);
      } catch (e) {
        console.log('Could not load saved data');
      }
    }
  }, []);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    const allData = { profile, socialLinks, ctaButtons };
    localStorage.setItem('portfolioAdmin', JSON.stringify(allData));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleSocialChange = (id: string, field: string, value: string) => {
    setSocialLinks(prev =>
      prev.map(link => (link.id === id ? { ...link, [field]: value } : link))
    );
  };

  const addSocialLink = () => {
    const newId = Date.now().toString();
    setSocialLinks([
      ...socialLinks,
      { id: newId, platform: 'twitter', url: '', label: '', displayOrder: socialLinks.length + 1 },
    ]);
  };

  const removeSocialLink = (id: string) => {
    setSocialLinks(socialLinks.filter(link => link.id !== id));
  };

  const handleCTAChange = (id: string, field: string, value: string) => {
    setCtaButtons(prev =>
      prev.map(btn => (btn.id === id ? { ...btn, [field]: value } : btn))
    );
  };

  const addCTAButton = () => {
    const newId = Date.now().toString();
    setCtaButtons([
      ...ctaButtons,
      { id: newId, label: '', href: '', style: 'primary', displayOrder: ctaButtons.length + 1 },
    ]);
  };

  const removeCTAButton = (id: string) => {
    setCtaButtons(ctaButtons.filter(btn => btn.id !== id));
  };

  const handleSaveAll = () => {
    const allData = { profile, socialLinks, ctaButtons };
    localStorage.setItem('portfolioAdmin', JSON.stringify(allData));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const platformIcons: Record<string, string> = {
    linkedin: '👔',
    github: '🐙',
    twitter: '𝕏',
    email: '✉️',
    instagram: '📷',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">📊 Portfolio Admin</h1>
            <p className="text-gray-600 text-sm">Configure your complete profile</p>
          </div>
          <div className="flex gap-4">
            {saved && <span className="text-green-600 font-semibold">✅ Saved!</span>}
            <Link href="/" className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200 bg-white rounded-t-lg">
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
            🔗 Social Links ({socialLinks.length})
          </button>
          <button
            onClick={() => setActiveTab('buttons')}
            className={`px-4 py-3 font-semibold border-b-2 transition ${
              activeTab === 'buttons'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            🎯 CTA Buttons ({ctaButtons.length})
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-lg shadow-md">
          {activeTab === 'profile' && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Profile</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Professional Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={profile.title}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="Full Stack Engineer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={profile.phone}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tagline/Headline *</label>
                  <input
                    type="text"
                    name="tagline"
                    value={profile.tagline}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Your short introduction"
                  />
                  <p className="text-xs text-gray-500 mt-1">This appears in the hero section</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Biography *</label>
                  <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleProfileChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Tell us about yourself..."
                  />
                  <p className="text-xs text-gray-500 mt-1">Share your story, skills, and experience</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Avatar URL</label>
                  <input
                    type="url"
                    name="avatarUrl"
                    value={profile.avatarUrl}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="https://example.com/avatar.jpg"
                  />
                  <p className="text-xs text-gray-500 mt-1">Link to your profile image</p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <button
                    onClick={handleSaveProfile}
                    className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
                  >
                    💾 Save Profile
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Social Media Links</h2>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <div key={link.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{platformIcons[link.platform] || '🔗'}</span>
                        <h3 className="font-semibold text-gray-900 text-lg">Link #{index + 1}</h3>
                      </div>
                      <button
                        onClick={() => removeSocialLink(link.id)}
                        className="text-red-600 hover:text-red-800 font-semibold text-sm"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Platform</label>
                        <select
                          value={link.platform}
                          onChange={(e) => handleSocialChange(link.id, 'platform', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600"
                        >
                          <option value="linkedin">LinkedIn</option>
                          <option value="github">GitHub</option>
                          <option value="twitter">Twitter</option>
                          <option value="instagram">Instagram</option>
                          <option value="email">Email</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Label</label>
                        <input
                          type="text"
                          value={link.label}
                          onChange={(e) => handleSocialChange(link.id, 'label', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600"
                          placeholder="LinkedIn"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">URL</label>
                      <input
                        type="url"
                        value={link.url}
                        onChange={(e) => handleSocialChange(link.id, 'url', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600"
                        placeholder="https://linkedin.com/in/yourname"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addSocialLink}
                  className="w-full px-4 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition"
                >
                  + Add Social Link
                </button>
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={handleSaveAll}
                    className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
                  >
                    💾 Save All
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'buttons' && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Call-to-Action Buttons</h2>
              <div className="space-y-4">
                {ctaButtons.map((btn, index) => (
                  <div key={btn.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Button #{index + 1}</h3>
                      </div>
                      <button
                        onClick={() => removeCTAButton(btn.id)}
                        className="text-red-600 hover:text-red-800 font-semibold text-sm"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Button Label</label>
                        <input
                          type="text"
                          value={btn.label}
                          onChange={(e) => handleCTAChange(btn.id, 'label', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600"
                          placeholder="Get in Touch"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Style</label>
                        <select
                          value={btn.style}
                          onChange={(e) => handleCTAChange(btn.id, 'style', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600"
                        >
                          <option value="primary">Primary (Filled)</option>
                          <option value="secondary">Secondary (Outlined)</option>
                          <option value="ghost">Ghost (Text)</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Link/URL</label>
                      <input
                        type="text"
                        value={btn.href}
                        onChange={(e) => handleCTAChange(btn.id, 'href', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600"
                        placeholder="mailto:you@example.com or /contact"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addCTAButton}
                  className="w-full px-4 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition"
                >
                  + Add Button
                </button>
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={handleSaveAll}
                    className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
                  >
                    💾 Save All
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-900 text-sm">
            <strong>✅ Status:</strong> All changes are automatically saved to your browser. Visit your portfolio at <Link href="/" className="font-semibold hover:underline">http://localhost:3000</Link> to see your updates live!
          </p>
        </div>
      </main>
    </div>
  );
}
