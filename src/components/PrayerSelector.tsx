import React from "react";
import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import prayers from "../data/prayers.json";
import MultilingualText from "./micro/MultilingualText";

interface PrayerSelectorProps {
  onSelectPrayer: (prayerId: number) => void;
}

export const PrayerSelector: React.FC<PrayerSelectorProps> = ({
  onSelectPrayer,
}) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        flex: 1,
        overflow: "auto",
        pb: 8,
      }}
    >
      {prayers.prayers.map((prayer) => (
        <ListItem
          key={prayer.id}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            py: 2,
            px: 3,
            "&:hover": {
              bgcolor: "rgba(0, 0, 0, 0.04)",
            },
            display: "flex",
            alignItems: "center", // Ensure vertical centering
          }}
          onClick={() => onSelectPrayer(prayer.id)}
        >
          <Avatar
            sx={{
              bgcolor: prayer.colour,
              width: 50,
              height: 50,
              flexShrink: 0, // Prevent avatar from shrinking
              fontSize: "0.875rem",
            }}
          >
            {prayer.recommendedDaily}x
          </Avatar>

          <ListItemText
            sx={{
              mx: 2, // Add margin on both sides
              flex: 1, // Take up remaining space
            }}
            primary={
              <MultilingualText
                text={prayer.arabicText}
                fontSize="xLargePlus"
                colour={prayer.colour}
              />
            }
          />

          <IconButton
            edge="end"
            aria-label="select prayer"
            sx={{
              flexShrink: 0, // Prevent icon from shrinking
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};
