"use client";

import { useEffect, useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <button
        onClick={() => setDark(!dark)}
        className="rounded-lg bg-gray-200 px-4 py-2 dark:bg-gray-700"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}
