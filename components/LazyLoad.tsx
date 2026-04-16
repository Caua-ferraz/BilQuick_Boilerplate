"use client";
import { useEffect, useRef, useState, ReactNode } from 'react';

interface LazyLoadProps {
  children: ReactNode;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return <div ref={ref}>{isVisible ? children : null}</div>;
};

export default LazyLoad;