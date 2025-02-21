import React from 'react';

export default function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-12 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Our Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
        
        {/* Card 1 */}
        <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-2xl border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-blue-500/30 transition-all duration-300">
          <h2 className="text-3xl font-bold text-white">Common</h2>
          <p className="text-4xl font-bold text-white mt-4">$0 <span className="text-lg font-normal">/monthly</span></p>
          <p className="mt-4 text-gray-400">For individuals and teams getting started with Huly.</p>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>✔ Unlimited users</li>
            <li>✔ Unlimited Huly Objects</li>
            <li>✔ 10GB Storage per Workspace</li>
            <li>✔ 10GB Video/Audio Traffic</li>
            <li>✔ AI — TBD</li>
          </ul>
          <button className="w-full mt-6 py-2 px-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300">
            Start Free
          </button>
        </div>

        {/* Card 2 */}
        <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-2xl border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-purple-500/30 transition-all duration-300">
          <h2 className="text-3xl font-bold text-white">Pro</h2>
          <p className="text-4xl font-bold text-white mt-4">$20 <span className="text-lg font-normal">/monthly</span></p>
          <p className="mt-4 text-gray-400">For growing teams and businesses.</p>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>✔ Everything in Common</li>
            <li>✔ Priority Support</li>
            <li>✔ Advanced Analytics</li>
            <li>✔ Custom Integrations</li>
          </ul>
          <button className="w-full mt-6 py-2 px-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300">
            Start Pro
          </button>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg rounded-2xl border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-indigo-500/30 transition-all duration-300">
          <h2 className="text-3xl font-bold text-white">Enterprise</h2>
          <p className="text-4xl font-bold text-white mt-4">Contact Us</p>
          <p className="mt-4 text-gray-400">For large organizations and enterprises.</p>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>✔ Everything in Pro</li>
            <li>✔ Dedicated Account Manager</li>
            <li>✔ Custom Solutions</li>
            <li>✔ Unlimited Projects</li>
          </ul>
          <button className="w-full mt-6 py-2 px-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
}