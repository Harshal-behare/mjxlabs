import Image from "next/image";
import Footer from './components/Footer';
import Header from './components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
        {/* Main Banner Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to MJX LABS</h1>
          <p className="mt-4 text-lg text-gray-400">We build innovative solutions to elevate your business.</p>
          <div className="mt-6">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Get a Free Consultation</Link>
            <Link href="/case-studies" className="ml-4 bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-600">See Our Work</Link>
          </div>
        </div>

        {/* Key Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">Expertise</h2>
            <p className="mt-2 text-gray-400">Our team consists of industry experts with years of experience.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">Cost Efficiency</h2>
            <p className="mt-2 text-gray-400">We provide high-quality solutions at competitive prices.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">Global Reach</h2>
            <p className="mt-2 text-gray-400">Our services are available worldwide, ensuring accessibility for all.</p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/case-studies" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">View Our Portfolio</Link>
        </div>
      </div>
      
    </>
  );
}
