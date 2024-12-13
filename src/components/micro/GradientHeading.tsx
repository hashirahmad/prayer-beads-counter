import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Theme } from "@mui/material";
import { SxProps } from "@mui/system";

interface GradientHeadingProps {
  children: React.ReactNode;
  colors?: string[];
  duration?: number;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontWeight?: number;
  letterSpacing?: string | number;
  textAlign?: "left" | "center" | "right" | "justify";
  marginBottom?: number;
  sx?: SxProps<Theme>;
}

interface GradientContainerProps {
  colors: string[];
  duration: number;
}

const generateGradient = (colors: string[]): string => {
  return `linear-gradient(-45deg, ${colors.join(", ")})`;
};

const GradientContainer = styled("div")<GradientContainerProps>(
  ({ colors, duration }) => ({
    background: generateGradient(colors),
    backgroundSize: "300% 300%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: `gradient ${duration}s ease infinite`,
    "@keyframes gradient": {
      "0%": {
        backgroundPosition: "0% 50%",
      },
      "50%": {
        backgroundPosition: "100% 50%",
      },
      "100%": {
        backgroundPosition: "0% 50%",
      },
    },
  }),
);

const headingSizes: Record<string, { xs: string; sm: string }> = {
  h1: { xs: "1.75rem", sm: "2.5rem" },
  h2: { xs: "1.5rem", sm: "2rem" },
  h3: { xs: "1.25rem", sm: "1.75rem" },
  h4: { xs: "1rem", sm: "1.5rem" },
  h5: { xs: "0.875rem", sm: "1.25rem" },
  h6: { xs: "0.75rem", sm: "1rem" },
};

const GradientHeading: React.FC<GradientHeadingProps> = ({
  children,
  colors = ["#FF3366", "#FF6B6B", "#4ECDC4", "#45B7D1", "#926EFF"],
  duration = 20,
  variant = "h1",
  fontWeight = 800,
  letterSpacing = "-0.5px",
  textAlign = "center",
  marginBottom = 5,
  sx,
  ...props
}) => {
  return (
    <GradientContainer colors={colors} duration={duration}>
      <Typography
        variant={variant}
        sx={{
          fontSize: headingSizes[variant],
          fontWeight: fontWeight,
          textAlign: textAlign,
          mb: marginBottom,
          letterSpacing: letterSpacing,
          ...sx,
        }}
        {...props}
      >
        {children}
      </Typography>
    </GradientContainer>
  );
};

export default GradientHeading;
