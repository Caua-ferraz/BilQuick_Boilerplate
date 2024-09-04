"use client"
import React, { useEffect, useState } from 'react';

/**
 * FadeInProps Interface
 * 
 * Defines the props for the FadeIn component.
 * 
 * @property children - The content to be wrapped by the FadeIn component.
 * @property className - Optional additional CSS classes to be applied to the wrapper div.
 */
interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * FadeIn Component
 * 
 * A reusable component that applies a fade-in effect to its children.
 * 
 * Features:
 * - Smooth opacity transition from 0 to 100
 * - Customizable delay before fade-in starts
 * - Accepts additional CSS classes for styling
 * 
 * Usage:
 * <FadeIn>
 *   <YourContent />
 * </FadeIn>
 * 
 * @param {FadeInProps} props - The props for the FadeIn component
 */
const FadeIn: React.FC<FadeInProps> = ({ children, className = '' }) => {
  // State to control visibility of the component
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger the fade-in effect
    // You can adjust the delay (100ms) as needed
    const timer = setTimeout(() => setIsVisible(true), 100);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;