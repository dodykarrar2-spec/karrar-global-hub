import { useEffect, useState, useCallback } from "react";

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    setOffset(window.scrollY * speed);
  }, [speed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return offset;
};

interface ParallaxHeroProps {
  image: string;
  speed?: number;
  overlay?: string;
  className?: string;
}

export const ParallaxHero = ({ 
  image, 
  speed = 0.4, 
  overlay = "bg-gradient-to-l from-primary/95 via-primary/85 to-primary/80",
  className = ""
}: ParallaxHeroProps) => {
  const offset = useParallax(speed);

  return (
    <div 
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <div 
        className="absolute inset-0 w-full h-[120%]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${offset}px)`,
          willChange: 'transform',
        }}
      />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
};
