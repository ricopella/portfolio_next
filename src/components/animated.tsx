'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section({
  children,
  className,
  key,
}: {
  children: React.ReactNode;
  className?: string;
  key: string;
}) {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  return (
    <motion.div
      className={className ?? ''}
      key={key}
      ref={ref}
      exit='exit'
      initial={'hidden'}
      animate={animation}
      variants={{
        exit: {
          opacity: 0,
          y: 20,
          transition: {
            duration: 0.5,
          },
        },
        hidden: {
          opacity: 0,
          y: 20,
          transition: {
            duration: 0.5,
          },
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            yoyo: 5, // number of bounces
            ease: 'easeOut',
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
