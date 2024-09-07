"use client";
import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  placeholder?: ReactNode;
  rootMargin?: string;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ children, placeholder, rootMargin = '100px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [rootMargin]);

  return (
    <div ref={ref} className="transition-opacity duration-300 ease-in-out">
      {isVisible ? children : placeholder || <div style={{ height: '100px' }} />}
    </div>
  );
};

export default LazyLoad;