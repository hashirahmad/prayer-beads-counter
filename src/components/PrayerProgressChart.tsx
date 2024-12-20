import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { Prayer, DailyProgress } from "../types";
import Wrapper from "./micro/Wrapper";
import MultilingualText from "./micro/MultilingualText";

const ConcentricRings: React.FC<{
  prayers: Prayer[];
  progress: DailyProgress[];
  selectedDate: string;
}> = ({ prayers, progress, selectedDate }) => {
  // Our base measurements are calculated as proportions of the total size
  const baseSize = 300;
  const ringWidth = baseSize * 0.08;
  const margin = baseSize * 0.1;
  const totalSize = baseSize + margin * 2;

  // We reverse the prayers array to make the first prayer the outermost ring
  const reversedPrayers = [...prayers].reverse();

  return (
    <div style={{ width: "100%", maxWidth: totalSize, margin: "0 auto" }}>
      {/* The SVG container for our rings */}
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${totalSize} ${totalSize}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Center all our rings */}
        <g transform={`translate(${margin}, ${margin})`}>
          {reversedPrayers.map((prayer, index) => {
            const currentProgress = progress.find(
              (p) => p.prayerId === prayer.id && p.date === selectedDate,
            );

            const radius = baseSize / 2 - index * (ringWidth + baseSize * 0.02);
            const circumference = 2 * Math.PI * radius;
            const progressPercent = Math.min(
              ((currentProgress?.count || 0) / prayer.recommendedDaily) * 100,
              100,
            );
            const strokeDashoffset =
              circumference - (progressPercent / 100) * circumference;
            const color = prayer.colour;

            return (
              <g key={prayer.id}>
                {/* Background circle - static */}
                <circle
                  cx={baseSize / 2}
                  cy={baseSize / 2}
                  r={radius}
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth={ringWidth}
                />
                {/* Progress circle - animated */}
                <circle
                  cx={baseSize / 2}
                  cy={baseSize / 2}
                  r={radius}
                  fill="none"
                  stroke={color}
                  strokeWidth={ringWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  transform={`rotate(-90 ${baseSize / 2} ${baseSize / 2})`}
                  strokeLinecap="round"
                  style={{
                    transition: "stroke-dashoffset 0.5s ease-in-out",
                  }}
                />
              </g>
            );
          })}
        </g>
      </svg>

      {/* Prayer information displayed below the rings */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "flex-end",
        }}
      >
        {reversedPrayers.map((prayer, index) => {
          const currentProgress = progress.find(
            (p) => p.prayerId === prayer.id && p.date === selectedDate,
          );
          const color = prayer.colour;

          return (
            <div
              key={prayer.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {/* Prayer text and progress */}
              <MultilingualText
                colour={color}
                text={`${prayer.arabicText} (${currentProgress?.count || 0}/${
                  prayer.recommendedDaily
                })`}
                fontSize="large"
                language="arabic"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const PrayerProgressChart: React.FC<{
  prayers: Prayer[];
  progress: DailyProgress[];
}> = ({ prayers, progress }) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  return (
    <Wrapper>
      <Stack alignItems="center">
        <TextField
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          inputProps={{
            min: "2024-12-01",
            max: new Date().toISOString().split("T")[0],
          }}
          sx={{ width: "100%", maxWidth: 300 }}
        />

        <Wrapper
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ConcentricRings
            prayers={prayers}
            progress={progress}
            selectedDate={selectedDate}
          />
        </Wrapper>
      </Stack>
    </Wrapper>
  );
};
export default PrayerProgressChart;
