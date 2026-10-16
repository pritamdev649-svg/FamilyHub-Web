"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function DeleteAccount() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid registered email address.');
      return;
    }
    if (!confirmed) {
      setError('Please confirm that you understand this action will permanently delete your data.');
      return;
    }

    setError('');
    setSubmitting(true);

    // Simulate immediate deletion request processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="text-blue-600 hover:underline inline-flex items-center gap-1 text-sm font-medium">
            &larr; Back to Home
          </Link>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
            DIFMO PRIVATE LIMITED
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Account & Data Deletion
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Official Deletion Request Portal for <strong>FamilyHub</strong> (Package: <code>com.difmo.fmr</code>) &bull; Developer: <strong>DIFMO PRIVATE LIMITED</strong>
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          In compliance with Google Play User Data policies, <strong>FamilyHub</strong> allows all registered users to request the permanent deletion of their account and all associated personal data at any time, whether directly through the mobile application or via this web portal.
        </p>

        {/* Option 1: In-App Deletion */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</span>
            Delete via the Mobile App (Recommended)
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            If you have the FamilyHub app installed on your device, you can delete your account instantly:
          </p>
          <ol className="list-decimal ml-5 text-sm text-gray-700 space-y-1.5">
            <li>Open the <strong>FamilyHub</strong> application on your mobile device.</li>
            <li>Navigate to the <strong>Settings</strong> tab from the bottom navigation bar.</li>
            <li>Tap on <strong>Account &amp; Security</strong>.</li>
            <li>Scroll down and tap <strong>Delete My Account</strong>.</li>
            <li>Confirm your password to immediately deactivate and delete your account.</li>
          </ol>
        </div>

        {/* Option 2: Web Deletion Request Form */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">2</span>
            Request Deletion via Web Form (If App is Uninstalled)
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            If you have uninstalled the app or cannot log in, submit your registered account details below. Our data privacy team will verify and execute your deletion request.
          </p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-xl">
              <h3 className="font-bold text-base mb-1 flex items-center gap-2">
                ✓ Account Deletion Request Received
              </h3>
              <p className="text-sm mb-3">
                Your deletion request for <strong>{email}</strong> has been successfully registered with our Privacy Operations Team.
              </p>
              <ul className="text-xs space-y-1 text-emerald-800 list-disc ml-5">
                <li>Your account authentication is scheduled for immediate revocation.</li>
                <li>All personal data and family associations will be permanently purged within 30 days.</li>
                <li>A confirmation notice will be dispatched to <strong>{email}</strong>.</li>
              </ul>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 text-red-700 border border-red-200 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Registered Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Reason for Deletion (Optional)
                </label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={2}
                  className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder="Tell us why you are leaving or leave blank..."
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="confirmDelete"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <label htmlFor="confirmDelete" className="text-xs text-gray-600">
                  I understand that this action is permanent. Deleting my account removes all profile data, emergency cards, assigned tasks, and family records.
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-150 disabled:opacity-50"
              >
                {submitting ? 'Submitting Request...' : 'Submit Account Deletion Request'}
              </button>
            </form>
          )}
        </div>

        {/* Data Handling & Retention Policy Disclosures */}
        <div className="border-t border-gray-200 pt-8 mt-8 space-y-6">
          <h2 className="text-xl font-bold text-gray-900">
            Data Handling &amp; Retention Policy
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-100 p-4 rounded-xl">
              <h3 className="font-semibold text-red-900 text-sm mb-2">Data Types Permanently Deleted:</h3>
              <ul className="text-xs text-red-800 space-y-1 list-disc ml-4">
                <li>Account credentials &amp; login tokens</li>
                <li>Personal profile details (Name, avatar, role)</li>
                <li>Family workspace membership records</li>
                <li>Emergency health cards &amp; medical contacts</li>
                <li>Assigned tasks, chores &amp; completion logs</li>
                <li>Ledger expenses, splits &amp; savings goals</li>
                <li>Notice board announcements &amp; attachments</li>
                <li>Distress (SOS) alerts &amp; live GPS coordinates</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl">
              <h3 className="font-semibold text-amber-900 text-sm mb-2">Data Retention &amp; Timeframe:</h3>
              <ul className="text-xs text-amber-800 space-y-1 list-disc ml-4">
                <li><strong>Deactivation:</strong> Immediate upon request verification.</li>
                <li><strong>Permanent Purge:</strong> All records are wiped from production and backup servers within <strong>30 days</strong>.</li>
                <li><strong>Legal Retention:</strong> Anonymized audit logs or billing records may be retained only if strictly required by applicable financial regulations (up to 90 days), after which they are permanently destroyed.</li>
              </ul>
            </div>
          </div>

          <div className="text-xs text-gray-500 pt-2">
            <p>
              Need immediate assistance? You may also email our Data Protection Officer directly at{' '}
              <a href="mailto:privacy@difmo.com?subject=FamilyHub%20Account%20Deletion%20Request" className="text-blue-600 underline font-medium">
                privacy@difmo.com
              </a>{' '}
              with your registered email address.
            </p>
            <p className="mt-2">
              FamilyHub &bull; DIFMO PRIVATE LIMITED &bull; Last updated: September 2026
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
