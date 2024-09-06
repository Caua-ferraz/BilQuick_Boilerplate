import React from 'react';

const TypingTitleDocumentation: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-8">
      <h2 className="text-2xl font-bold mb-4">TypingTitle Component Documentation</h2>
      <p className="mb-4">
        The TypingTitle component creates an animated typing effect for headings, with a blinking cursor.
      </p>
      <h3 className="text-xl font-semibold mb-2">Features:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Animated typing effect</li>
        <li>Customizable typing speed</li>
        <li>Blinking cursor after typing completion</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Usage:</h3>
      <pre className="bg-gray-900 p-4 rounded-md mb-4 overflow-x-auto">
        <code className="text-sm">{`<TypingTitle 
  preText="Welcome to"
  highlightedText="Our SaaS"
/>`}</code>
      </pre>
      <p>
        For more customization options, refer to the component file:
      </p>
      <code className="bg-gray-900 p-2 rounded-md block mt-2">components/TypingTitle.tsx</code>
    </div>
  );
};

export default TypingTitleDocumentation;
