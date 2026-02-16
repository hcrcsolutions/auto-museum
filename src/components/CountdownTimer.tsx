"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Target date: 6 months from now
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 6);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return <div className="h-28" />;
  }

  const blocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex gap-3 sm:gap-6">
      {blocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-gold/20 bg-charcoal-dark/80 backdrop-blur-sm sm:h-24 sm:w-24">
            <span className="font-serif text-2xl font-bold text-gold sm:text-4xl">
              {String(block.value).padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-xs uppercase tracking-widest text-foreground/50 sm:text-sm">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
