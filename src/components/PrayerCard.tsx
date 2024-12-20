import React, { useState } from "react";
import { Card, Typography, Button, LinearProgress, Box } from "@mui/material";
import { Prayer } from "../types";
import { useProgress } from "../hooks/useProgress";
import AddCircle from "@mui/icons-material/AddCircle";
import RemoveCircle from "@mui/icons-material/RemoveCircle";
import ArrowBack from "@mui/icons-material/ArrowBack";
import MultilingualText from "./micro/MultilingualText";

interface PrayerCardProps {
  prayer: Prayer;
  onClose: () => void;
}

export const PrayerCard: React.FC<PrayerCardProps> = ({ prayer, onClose }) => {
  const [showUrdu, setShowUrdu] = useState(false);
  const { todayCount, increment, decrement } = useProgress(prayer.id);
  const progress = (todayCount / prayer.recommendedDaily) * 100;

  const toggleUrdu = () => {
    setShowUrdu(!showUrdu);
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
          {prayer.translations.urdu && (
            <Button
              size="small"
              variant={showUrdu ? "outlined" : "contained"}
              onClick={toggleUrdu}
            >
              {showUrdu ? "English" : "Urdu"}
            </Button>
          )}
        </Box>

        {/* Content container */}
        <Box
          sx={{
            flex: "65%",
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          {/* Arabic text - always visible */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MultilingualText
              text={prayer.arabicText}
              colour={prayer.colour}
              fontSize="xGiant"
              language="arabic"
            />
          </Box>

          {/* Translation container with flip animation */}
          <Box
            sx={{
              flex: 1,
              perspective: "1000px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                transition: "transform 0.6s",
                transformStyle: "preserve-3d",
                transform: showUrdu ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* English translation - front side */}
              <MultilingualText
                customStyle={{
                  position: "absolute",
                  width: "100%",
                  backfaceVisibility: "hidden",
                  textAlign: "initial",
                }}
                text={prayer.translations.english}
                colour={prayer.colour}
                language="english"
                fontSize="largePlus"
              />
              {/* Urdu translation - back side */}
              <MultilingualText
                customStyle={{
                  position: "absolute",
                  width: "100%",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  textAlign: "initial",
                }}
                text={prayer.translations.urdu}
                colour={prayer.colour}
                language="urdu"
                fontSize="largePlus"
              />
            </Box>
          </Box>
        </Box>

        {/* Counter buttons */}
        <Box
          sx={{
            flex: "35%",
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
            <Typography sx={{ textAlign: "center", color: "text.secondary" }}>
              Recited {todayCount}/{prayer.recommendedDaily}
            </Typography>
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
