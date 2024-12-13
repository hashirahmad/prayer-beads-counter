import { useState, useEffect } from "react";
import { DailyProgress } from "../types";

export const useProgress = (prayerId: number) => {
  const getTodayDate = () => new Date().toISOString().split("T")[0];

  const getStoredProgress = () => {
    const stored = localStorage.getItem(`prayer-progress-${prayerId}`);
    return stored ? (JSON.parse(stored) as DailyProgress[]) : [];
  };

  const [progress, setProgress] = useState<DailyProgress[]>(
    getStoredProgress(),
  );

  const getTodayProgress = (): number => {
    const today = getTodayDate();
    const todayProgress = progress.find((p) => p.date === today);
    return todayProgress?.count || 0;
  };

  const updateProgress = (increment: number) => {
    const today = getTodayDate();
    const newProgress = [...progress];
    const todayIndex = newProgress.findIndex((p) => p.date === today);

    if (todayIndex >= 0) {
      const newCount = Math.max(0, newProgress[todayIndex].count + increment);
      newProgress[todayIndex].count = newCount;
    } else {
      newProgress.push({
        prayerId,
        date: today,
        count: Math.max(0, increment),
      });
    }

    setProgress(newProgress);
  };

  useEffect(() => {
    localStorage.setItem(
      `prayer-progress-${prayerId}`,
      JSON.stringify(progress),
    );
  }, [progress, prayerId]);

  return {
    todayCount: getTodayProgress(),
    increment: () => updateProgress(1),
    decrement: () => updateProgress(-1),
    progress,
  };
};
