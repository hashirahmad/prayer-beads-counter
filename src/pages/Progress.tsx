import React from "react";
import { Container } from "@mui/material";
import PrayerProgressChart from "../components/PrayerProgressChart";
import prayers from "../data/prayers.json";
import { useProgress } from "../hooks/useProgress";
import { DailyProgress } from "../types";

export const ProgressPage: React.FC = () => {
  const progressData = prayers.prayers.map((prayer) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useProgress(prayer.id);
  });

  const getProgress = (): DailyProgress[] => {
    const data: DailyProgress[] = [];

    for (const progress of progressData) {
      data.push(...progress.progress);
    }
    return data;
  };

  return (
    <Container sx={{ pb: 7, pt: 2 }}>
      <PrayerProgressChart
        key={2}
        prayers={prayers.prayers}
        progress={getProgress()}
      />
    </Container>
  );
};
