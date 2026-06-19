import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface CountUpProps {
  to: number;
  duration?: number; // in milliseconds
  suffix?: string;
  prefix?: string;
  separator?: boolean;
}

export function CountUp({
  to,
  duration = 2000,
  suffix = "",
  prefix = "",
  separator = true,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  // Trigger animation when the element enters the viewport
  const isInView = useInView(elementRef, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = to;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutExpo
      const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentCount = start + easeOutProgress * (end - start);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, to, duration]);

  return (
    <span ref={elementRef} className="font-heading">
      {prefix}
      {separator ? Math.floor(count).toLocaleString() : Math.floor(count)}
      {suffix}
    </span>
  );
}
