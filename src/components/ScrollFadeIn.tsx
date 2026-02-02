import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}
export function ScrollFadeIn({
  children,
  delay = 0,
  className = '',
  direction = 'up'
}: ScrollFadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px'
  });
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return {
          y: 40,
          x: 0
        };
      case 'down':
        return {
          y: -40,
          x: 0
        };
      case 'left':
        return {
          x: 40,
          y: 0
        };
      case 'right':
        return {
          x: -40,
          y: 0
        };
      default:
        return {
          y: 40,
          x: 0
        };
    }
  };
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...getInitialPosition()
      }}
      animate={
      isInView ?
      {
        opacity: 1,
        x: 0,
        y: 0
      } :
      {
        opacity: 0,
        ...getInitialPosition()
      }
      }
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: delay
      }}
      className={className}>

      {children}
    </motion.div>);

}