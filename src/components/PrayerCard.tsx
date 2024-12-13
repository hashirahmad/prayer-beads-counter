import React, { useState } from "react";
import { Card, Typography, Button, LinearProgress, Box } from "@mui/material";
import { Prayer } from "../types";
import { useProgress } from "../hooks/useProgress";
import AddCircle from "@mui/icons-material/AddCircle";
import RemoveCircle from "@mui/icons-material/RemoveCircle";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArabicText from "./micro/ArabicText";

interface PrayerCardProps {
  prayer: Prayer;
  onClose: () => void;
}

export const PrayerCard: React.FC<PrayerCardProps> = ({ prayer, onClose }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<
    "english" | "urdu" | null
  >(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const { todayCount, increment, decrement } = useProgress(prayer.id);
  const progress = (todayCount / prayer.recommendedDaily) * 100;

  const handleLanguageSelect = (language: "english" | "urdu") => {
    if (selectedLanguage === language && isFlipped) {
      setIsFlipped(false);
      setSelectedLanguage(null);
    } else {
      setSelectedLanguage(language);
      setIsFlipped(true);
    }
  };

  return (
    <div
      style={{
        height: "95vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 800,
          height: "95%",
          m: 2,
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: 6 }}
        />

        {/* Language selection buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 1,
            p: "10px 10px 0px 10px",
          }}
        >
          <Button size="small" variant="outlined" onClick={onClose}>
            <ArrowBack fontSize="medium" />
          </Button>
          <Button
            size="small"
            variant={
              selectedLanguage === "english" && isFlipped
                ? "contained"
                : "outlined"
            }
            onClick={() => handleLanguageSelect("english")}
          >
            English
          </Button>
          {prayer.translations.urdu && (
            <Button
              size="small"
              variant={
                selectedLanguage === "urdu" && isFlipped
                  ? "contained"
                  : "outlined"
              }
              onClick={() => handleLanguageSelect("urdu")}
            >
              Urdu
            </Button>
          )}
        </Box>

        {/* Flip container */}
        <Box
          sx={{
            flex: "40%",
            perspective: "1000px",
            position: "relative",
          }}
        >
          {/* Flip card inner container */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front side (Arabic) */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: 2,
              }}
            >
              <ArabicText
                text={prayer.arabicText}
                fontSize="2.15em"
                color={prayer.colour}
              />
            </Box>

            {/* Back side (Translation) */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: 2,
              }}
            >
              <Typography
                sx={{
                  textAlign: "initial",
                  fontSize: "1.15em",
                  color: prayer.colour,
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                {selectedLanguage === "english"
                  ? prayer.translations.english
                  : prayer.translations.urdu}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Counter and buttons remain the same */}
        <Typography sx={{ textAlign: "center", color: "text.secondary" }}>
          Recited {todayCount}/{prayer.recommendedDaily}
        </Typography>

        <Box
          sx={{
            flex: "60%",
            minWidth: "110%",
            display: "flex",
            pr: -10,
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            onClick={increment}
            color="success"
            sx={{
              flex: 4.2,
              height: "100%",
              fontSize: { xs: "2rem", sm: "2.5rem" },
            }}
          >
            <AddCircle fontSize="large" />
          </Button>
          <Button
            variant="contained"
            onClick={decrement}
            color="error"
            sx={{
              flex: 0.8,
              height: "100%",
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            <RemoveCircle sx={{ ml: -4 }} fontSize="large" />
          </Button>
        </Box>
      </Card>
    </div>
  );
};
