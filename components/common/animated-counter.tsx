"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = value / (duration * 60);
    let animationId: NodeJS.Timeout;

    const animate = () => {
      start += increment;
      if (start < value) {
        setCount(Math.floor(start));
        animationId = setTimeout(animate, 16);
      } else {
        setCount(value);
      }
    };

    animate();

    return () => clearTimeout(animationId);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}
