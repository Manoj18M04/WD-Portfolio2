import { useEffect, useState } from "react";

const useTypewriter = (texts, speed = 100, pause = 1000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);  // Track the current text
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;

    const typeCharacter = () => {
      if (i < texts[currentTextIndex].length && isTyping) {
        setDisplayText(prevText => {
          const newText = `${prevText}${texts[currentTextIndex].charAt(i)}`;
          i++;
          return newText;
        });
        setTimeout(typeCharacter, speed);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setDisplayText('');
          setIsTyping(true);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text
        }, pause);  // Pause before moving to the next text
      }
    };

    typeCharacter();

  }, [currentTextIndex, texts, speed, pause, isTyping]);

  return displayText;
};

export default useTypewriter;
