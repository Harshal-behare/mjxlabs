// pages/privacy-policy.js

import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="mt-5">
      <Head >
        <title>Privacy Policy | Your Company Name</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Last updated: April 17, 2025</p>

        <p className="mb-4">
          We value your privacy. This Privacy Policy outlines how we collect,
          use, and protect your personal information when you use our website
          and services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Information Collection
        </h2>
        <p className="mb-4">
          We may collect personal information such as your name, email, phone
          number, and project details when you contact us or use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. Use of Information
        </h2>
        <p className="mb-4">
          The information we collect is used to communicate with you, improve
          our services, and deliver tailored software solutions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Security</h2>
        <p className="mb-4">
          We implement appropriate measures to protect your data. However, no
          method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          4. Third-Party Sharing
        </h2>
        <p className="mb-4">
          We do not sell or share your personal information with third parties
          except when required by law or for essential service delivery.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          5. Changes to Policy
        </h2>
        <p className="mb-4">
          We may update this policy occasionally. All changes will be posted on
          this page with an updated date.
        </p>

        <p>
          If you have any questions about our Privacy Policy, please contact us.
        </p>
      </main>
    </div>
  );
}
