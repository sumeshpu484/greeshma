import { Metadata } from 'next';
import { mockPageData } from '@/lib/mock-data';

export const metadata: Metadata = {
  title: 'About | Portfolio',
  description: 'Learn more about me',
};

export default function AboutPage() {
  try {
    const profile = mockPageData.profile;

    return (
      <div className="min-h-screen bg-white">
        <div className="container-max py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={profile.avatar.url}
                alt={profile.name}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {profile.bio}
              </p>
              <div className="space-y-4">
                <p><strong className="text-gray-900">Email:</strong> <span className="text-gray-600">{profile.email}</span></p>
                {profile.phone && <p><strong className="text-gray-900">Phone:</strong> <span className="text-gray-600">{profile.phone}</span></p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">About</h1>
          <p className="text-gray-600">Loading profile information...</p>
        </div>
      </div>
    );
  }
}
