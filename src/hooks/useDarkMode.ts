// hooks/useDarkMode.ts
"use client";

import { useEffect, useState } from "react";

export function useDarkMode() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");

    if (stored === "dark") {
      root.classList.add("dark");
      setEnabled(true);
    } else if (stored === "light") {
      root.classList.remove("dark");
      setEnabled(false);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (enabled) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [enabled]);

  return [enabled, setEnabled] as const;
}
