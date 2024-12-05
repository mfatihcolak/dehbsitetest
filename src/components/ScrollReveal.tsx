import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '',
  as: Component = 'div'
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 }
  };

  const initialAnimation = directions[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ ...initialAnimation, opacity: 0 }}
      animate={inView ? { y: 0, x: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className={className}
      role="region"
      aria-label={`Animated ${direction} scroll reveal section`}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;