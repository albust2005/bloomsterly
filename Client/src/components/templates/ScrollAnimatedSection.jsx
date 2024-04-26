import {  useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const ScrollAnimatedSection = ({ children, animation, className, delay}) => {
  const [ref, inView] = useInView();
  const [animated, setAnimated] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isVisible = inView && !animated;

      if (isVisible) {
        setAnimated(true);
      } else {
        const isScrollingDown = currentScrollY > prevScrollY;

        if (isScrollingDown && !inView) {
          setAnimated(false);
        }
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animated, inView, prevScrollY]);

  return (
    <section
      ref={ref}
      className={`${animated ? `${animation}` : ''} ${className } ${delay} animate-ease-in-out `}
    >
      {children}
    </section>
  );
};
