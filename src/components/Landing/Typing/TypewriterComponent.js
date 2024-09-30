import React from 'react';
import useTypewriter from './Typing';  // Adjust the path if needed

const MultiTextTypewriterComponent = () => {
  // Array of texts for the typewriter to cycle through
  const texts = [
    'AI Engineer',
    'Data Scientist',
    'Data Analyst',
    'Web Developer'
  ];

  const displayText = useTypewriter(texts, 100, 1500);  // 100ms per character, 1500ms pause between texts

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '24px' }}>
      <h1>{displayText}</h1> {/* Display the typed text */}
    </div>
  );
};

export default MultiTextTypewriterComponent;
