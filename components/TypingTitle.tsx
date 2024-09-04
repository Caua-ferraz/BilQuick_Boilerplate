"use client";

import React, { useState, useEffect, useCallback } from "react";

interface TypingTitleProps {
  preText: string;
  highlightedText: string;
  speed?: number;
}

/**
 * TypingTitle Component
 * 
 * This component creates a typing animation effect for a title,
 * with a part of the text highlighted and a blinking cursor.
 * 
 * @param preText - The first part of the text (not highlighted)
 * @param highlightedText - The second part of the text (highlighted)
 * @param speed - The typing speed in milliseconds (default: 50ms)
 */
const TypingTitle: React.FC<TypingTitleProps> = ({
  preText,
  highlightedText,
  speed = 50,
}) => {
  // State to hold the currently displayed text
  const [displayedText, setDisplayedText] = useState("");
  // State to track if the typing animation is complete
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  // Combine preText and highlightedText
  const fullText = `${preText}${highlightedText}`;

  // Function to handle the typing animation
  const typeText = useCallback(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        // Add the next character to the displayed text
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        // Typing is complete, clear the interval and set the state
        clearInterval(intervalId);
        setIsTypingComplete(true);
      }
    }, speed);

    // Cleanup function to clear the interval if the component unmounts
    return () => clearInterval(intervalId);
  }, [fullText, speed]);

  // Effect to start the typing animation
  useEffect(() => {
    const cleanup = typeText();
    return cleanup;
  }, [typeText]);

  // Split the displayed text into preText and highlightedText parts
  const preTextPart = displayedText.slice(0, preText.length);
  const highlightedTextPart = displayedText.slice(preText.length);

  return (
    <h1 className="text-4xl font-extrabold">
      <span className="text-primary">{preTextPart}</span>
      <span className="text-white">{highlightedTextPart}</span>
      {/* Blinking cursor */}
      <span className={`${isTypingComplete ? 'animate-fast-blink' : ''}`}>
        {isTypingComplete ? '|' : (displayedText.length < fullText.length ? '|' : '')}
      </span>
    </h1>
  );
};

export default TypingTitle;