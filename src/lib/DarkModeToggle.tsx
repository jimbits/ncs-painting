import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded bg-gray-200 px-4 py-2 dark:bg-gray-800 dark:text-white"
    >
      Toggle Dark Mode
    </button>
  );
}
