import React from 'react';

const Portfolio = () => {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Turing AGI Advancement</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">LLM evaluation</h2>
          <p className="mt-2 text-gray-400">Comprehensive model performance, accuracy, and scalability assessment.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">LLM training</h2>
          <p className="mt-2 text-gray-400">LLM reasoning, coding, and knowledge improvement with proprietary human data.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Multimodality</h2>
          <p className="mt-2 text-gray-400">Integrate text, images, and videos for human-like intelligence.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">LLM factuality</h2>
          <p className="mt-2 text-gray-400">Advanced fact verification, bias detection, and source credibility assessment.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">LLM alignment & safety</h2>
          <p className="mt-2 text-gray-400">Bias mitigation, RLHF integration, safety protocols, and more.</p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mt-12 mb-6">Turing Intelligence</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Generative AI</h2>
          <p className="mt-2 text-gray-400">Customizable genAI products and solutions for the enterprise.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">AI/Data</h2>
          <p className="mt-2 text-gray-400">Accelerated AI adoption, optimized ML operations, and more.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold">Custom engineering</h2>
          <p className="mt-2 text-gray-400">Application development, cloud migration, and other solutions.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
