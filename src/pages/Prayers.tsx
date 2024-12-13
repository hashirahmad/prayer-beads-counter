import React, { useState } from "react";
import { Container } from "@mui/material";
import { PrayerSelector } from "../components/PrayerSelector";
import { PrayerCard } from "../components/PrayerCard";
import prayers from "../data/prayers.json";
import PrayerAppeal from "../components/PrayerAppeal";

export const PrayersPage: React.FC = () => {
  const [selectedPrayerId, setSelectedPrayerId] = useState<number | null>(null);

  const selectedPrayer = prayers.prayers.find((p) => p.id === selectedPrayerId);

  return (
    <>
      {selectedPrayer ? (
        <PrayerCard
          prayer={selectedPrayer}
          onClose={() => setSelectedPrayerId(null)}
        />
      ) : (
        <PrayerSelector onSelectPrayer={setSelectedPrayerId} />
      )}
    </>
  );
};
