import React from 'react';
import Reveal from './Reveal';

const AnimatedPage = ({ children, className = '' }) => {
  return (
    <div className={`page-transition overflow-hidden ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        // Don't delay the very first top element (hero section)
        const isFirst = index === 0;
        return (
          <Reveal direction={isFirst ? "none" : "up"} delay={isFirst ? 0 : 100}>
            {child}
          </Reveal>
        );
      })}
    </div>
  );
};

export default AnimatedPage;
