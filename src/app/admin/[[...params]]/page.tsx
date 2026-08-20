import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Payload Admin',
};

export default async function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Portfolio CMS</h1>
        <p className="text-gray-600 mb-6">
          Payload CMS admin requires proper backend setup. Please follow the setup instructions in README.md to configure the admin panel.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
          <p className="text-sm text-blue-900 mb-2 font-semibold">Quick Start:</p>
          <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
            <li>Stop the dev server (Ctrl+C)</li>
            <li>Run: <code className="bg-white px-2 py-1 rounded">npm run dev</code></li>
            <li>Payload will initialize the admin panel</li>
            <li>Create an admin account when prompted</li>
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
