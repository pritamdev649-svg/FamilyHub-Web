'use client';

import Link from 'next/link';

export default function DeleteAccount() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4 font-sans">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Back to Home</Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Delete Account Request</h1>
        
        <p className="text-gray-600 mb-6">
          To permanently delete your FamilyHub account and wipe all associated data from our servers, please follow the instructions below.
        </p>

        <div className="bg-red-50 text-red-800 p-4 rounded-xl mb-8">
          <p className="font-semibold">Warning: This action is irreversible.</p>
          <p className="text-sm mt-1">Deleting your account removes you from your family ledger, erases your tasks, and deletes your emergency card.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Registered Email Address</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reason (Optional)</label>
            <textarea className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500" rows={3}></textarea>
          </div>
          <button type="button" className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition">
            Request Deletion
          </button>
        </form>
      </div>
    </main>
  );
}
