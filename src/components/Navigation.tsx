import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { useNavigate, useLocation } from "react-router-dom";

export const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <BottomNavigation
      value={location.pathname}
      onChange={(_, newValue) => {
        navigate(newValue);
      }}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "transparent",
        backdropFilter: "blur(6px)",
        boxShadow: "0px -4px 60px rgba(0, 0, 0, 0.3)",
        zIndex: 1000,
        borderRadius: "20px 20px 0 0",
        transition: "all 0.3s ease",
      }}
    >
      <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Progress"
        value="/progress"
        icon={<ShowChartIcon />}
      />
    </BottomNavigation>
  );
};
