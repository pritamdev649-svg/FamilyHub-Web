import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Back to Home</Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">Last Updated: September 27, 2026</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Data Collection</h2>
        <p className="text-gray-600 mb-4">FamilyHub collects minimal data required to run your family organization, including names, tasks, and optional location data for SOS emergencies.</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Location Data</h2>
        <p className="text-gray-600 mb-4">Location sharing is completely opt-in and is only actively shared during an SOS emergency alert. We do not track you in the background otherwise.</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Data Security</h2>
        <p className="text-gray-600 mb-4">All health and emergency card data is securely encrypted. We do not share your family data with third parties.</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Contact</h2>
        <p className="text-gray-600 mb-4">For any privacy concerns, contact us at privacy@difmo.com.</p>
      </div>
    </main>
  );
}
