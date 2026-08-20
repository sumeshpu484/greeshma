'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ContactSubmission } from '@/types';

type Tab = 'contacts' | 'info';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('contacts');
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    try {
      const res = await fetch('/api/submissions');
      if (res.ok) {
        const data = await res.json();
        setContacts(data.docs || []);
      } else {
        setError('Failed to load contact submissions');
      }
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError('Error loading submissions');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">📊 Admin Panel</h1>
            <p className="text-sm text-gray-600">Manage your portfolio</p>
          </div>
          <Link href="/" className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition">
            ← Back to Site
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Info Box */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="font-semibold text-blue-900 mb-2">ℹ️ Admin Dashboard</h2>
          <p className="text-blue-800 text-sm mb-2">
            <strong>Content Management:</strong> Use Payload CMS admin at <Link href="https://localhost:3000/api/payload-admin" target="_blank" className="font-semibold hover:underline">/admin/payload</Link> to manage Profile, Projects, Blog, Social Links, and CTA Buttons.
          </p>
          <p className="text-blue-800 text-sm">
            <strong>Contact Forms:</strong> All contact form submissions appear below.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-4 py-3 font-semibold border-b-2 transition ${
              activeTab === 'contacts'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            💬 Contact Submissions ({contacts.length})
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`px-4 py-3 font-semibold border-b-2 transition ${
              activeTab === 'info'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            ℹ️ Information
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow">
          {activeTab === 'contacts' && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form Submissions</h2>

              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {loading ? (
                <p className="text-gray-600">Loading submissions...</p>
              ) : contacts.length === 0 ? (
                <p className="text-gray-600">No contact submissions yet.</p>
              ) : (
                <div className="space-y-4">
                  {contacts.map(contact => (
                    <div key={contact.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-bold text-lg text-gray-900">{contact.subject}</h3>
                            <span className={`px-3 py-1 text-xs font-semibold rounded ${
                              contact.read
                                ? 'bg-gray-100 text-gray-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {contact.read ? '✓ Read' : '● New'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            <strong>From:</strong> {contact.name} ({contact.email})
                            {contact.phone && ` • Phone: ${contact.phone}`}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                      </div>

                      <div className="flex justify-between items-center">
                        <time className="text-xs text-gray-500">
                          {new Date(contact.createdAt).toLocaleString()}
                        </time>
                        <a
                          href={`mailto:${contact.email}?subject=Re: ${encodeURIComponent(contact.subject)}`}
                          className="text-primary-600 font-semibold hover:underline text-sm"
                        >
                          Reply →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'info' && (
            <div className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Admin Information</h2>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">📝 Content Collections</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Profile:</strong> Your name, title, bio, email, phone, avatar</li>
                  <li><strong>Projects:</strong> Showcase your work with images, descriptions, tags, links</li>
                  <li><strong>Blog Posts:</strong> Write and publish articles with rich text</li>
                  <li><strong>Social Links:</strong> LinkedIn, GitHub, Twitter, Instagram, Email</li>
                  <li><strong>CTA Buttons:</strong> Call-to-action buttons (Get in Touch, Resume, etc.)</li>
                  <li><strong>Contact Submissions:</strong> All contact form submissions (this page)</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">🔧 Access Payload CMS Admin</h3>
                <p className="text-gray-700 mb-4">
                  Manage all your content through Payload CMS:
                </p>
                <a
                  href="/api/payload-admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
                >
                  Go to Payload Admin Panel →
                </a>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 bg-yellow-50">
                <h3 className="font-bold text-lg text-yellow-900 mb-3">⚠️ Important Notes</h3>
                <ul className="space-y-2 text-yellow-800 text-sm">
                  <li>• First-time setup requires creating a Payload admin account</li>
                  <li>• All content is stored in your Payload CMS database</li>
                  <li>• Contact submissions are automatically saved when users submit the form</li>
                  <li>• For production, configure PostgreSQL database</li>
                  <li>• Deploy to Vercel for free hosting</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
