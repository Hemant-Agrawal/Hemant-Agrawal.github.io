"use client";

import { useEffect, useState } from "react";

const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;

function calc(since: string) {
  return Math.floor((Date.now() - new Date(since).getTime()) / YEAR_MS);
}

export function YearsCount({ since }: { since: string }) {
  const [years, setYears] = useState(() => calc(since));

  useEffect(() => {
    setYears(calc(since));
  }, [since]);

  return <span suppressHydrationWarning>{years}+</span>;
}
