// pages/terms-of-service.js

import Head from 'next/head';

export default function TermsOfService() {
  return (
    <div className="mt-5">
      <Head>
        <title>Terms of Service | Your Company Name</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-4">Last updated: April 17, 2025</p>

        <p className="mb-4">
          Welcome to our website. By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Services</h2>
        <p className="mb-4">
          We provide custom software solutions tailored to client requirements. The scope, timeline, and pricing for each project will be agreed upon in a separate contract.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
        <p className="mb-4">
          All content, code, and software provided by us remain our intellectual property unless explicitly stated otherwise in the contract.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Limitation of Liability</h2>
        <p className="mb-4">
          We are not liable for any indirect or consequential damages arising from the use of our software or services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Changes</h2>
        <p className="mb-4">
          We may update these terms at any time. Changes will be posted on this page with an updated effective date.
        </p>

        <p>If you have any questions about our Terms of Service, please contact us.</p>
      </main>
    </div>
  );
}
