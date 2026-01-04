import React, { useState, useEffect, useMemo } from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LoadingScreenProps {
  onComplete: () => void;
  durationMs?: number;
  step?: number;
}

const DEFAULT_DURATION = 3000;
const DEFAULT_STEP = 2;

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  durationMs = DEFAULT_DURATION,
  step = DEFAULT_STEP,
}) => {
  const [progress, setProgress] = useState(0);

  // ✅ Correct hook usage (no try/catch)
  let appName = 'स्वास्थ्य साथी';
  let loadingText = 'Loading';

  try {
    const lang = useLanguage();
    if (lang?.t) {
      appName = lang.t.appName ?? appName;
      loadingText = lang.t.loading ?? loadingText;
    }
  } catch {
    // fallback if provider not mounted
  }

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(100);
      onComplete();
      return;
    }

    const totalSteps = 100 / step;
    const intervalTime = durationMs / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete, durationMs, step, prefersReducedMotion]);

  return (
    <div
      className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-50 text-white"
      aria-live="polite"
      aria-busy="true"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 mb-6">
        <Heart className="w-10 h-10 animate-pulse" />
        <h1 className="text-2xl font-semibold">{appName}</h1>
      </div>

      {/* Loading text */}
      <p className="mb-4 text-sm opacity-90">{loadingText}</p>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-white/20 rounded overflow-hidden">
        <div
          className="h-full bg-white transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="mt-2 text-xs opacity-70">{progress}%</span>
    </div>
  );
};

export default LoadingScreen;
