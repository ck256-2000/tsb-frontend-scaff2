"use client";

import {
  useEffect,
  useState,
} from 'react';

import { useTheme } from 'next-themes';

import {
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

export const SwitchTheme = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const themes = ['light', 'cyberpunk', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe']; // Add all your themes here in the order you want them to cycle

  const handleNextTheme = () => {
    const currentIndex = themes.indexOf(resolvedTheme || 'light');
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`flex space-x-2 h-8 items-center justify-center text-sm ${className}`}>
      <button
        onClick={handleNextTheme}
        className="btn btn-sm btn-ghost"
      >
        {resolvedTheme === 'cyberpunk' ? (
          <MoonIcon className="h-5 w-5" />
        ) : (
          <SunIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};
