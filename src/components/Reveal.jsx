import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(50px)';
      case 'down': return 'translateY(-50px)';
      case 'left': return 'translateX(50px)';
      case 'right': return 'translateX(-50px)';
      case 'none': return 'none';
      default: return 'translateY(50px)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transform-gpu will-change-[opacity,transform] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getTransform(),
        transition: 'opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1), transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
