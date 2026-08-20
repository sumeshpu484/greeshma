import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Portfolio',
  description: 'Get in touch with me',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Have a question or want to work together? I'd love to hear from you.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
