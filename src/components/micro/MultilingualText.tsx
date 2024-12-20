const fontFamilyMap = {
  arabic: '"Noto Naskh Arabic", serif',
  urdu: '"IBM Plex Sans Arabic", serif',
  english: '"Roboto", "Arial", sans-serif',
};

/**
 * Clamp Function Structure: Each clamp() function follows this pattern:
 * - Minimum size: For mobile devices and smaller viewports
 * - Preferred size: Scales with viewport width using vw units
 * - Maximum size: Upper limit for larger screens
 */
const sizeMap = {
  micro: "clamp(0.5rem, 1vw, 0.625rem)", // 8px - 10px
  tiny: "clamp(0.625rem, 1.2vw, 0.75rem)", // 10px - 12px

  xSmall: "clamp(0.6875rem, 1.4vw, 0.8125rem)", // 11px - 13px
  small: "clamp(0.75rem, 1.6vw, 0.875rem)", // 12px - 14px
  smallPlus: "clamp(0.8125rem, 1.8vw, 0.9375rem)", // 13px - 15px

  tinyMedium: "clamp(0.875rem, 2vw, 0.9375rem)", // 14px - 15px
  medium: "clamp(0.9375rem, 2.2vw, 1rem)", // 15px - 16px
  mediumPlus: "clamp(1rem, 2.4vw, 1.125rem)", // 16px - 18px

  tinyLarge: "clamp(1.125rem, 2.6vw, 1.1875rem)", // 18px - 19px
  large: "clamp(1.1875rem, 2.8vw, 1.25rem)", // 19px - 20px
  largePlus: "clamp(1.25rem, 3vw, 1.375rem)", // 20px - 22px

  tinyXLarge: "clamp(1.375rem, 3.2vw, 1.4375rem)", // 22px - 23px
  xLarge: "clamp(1.4375rem, 3.4vw, 1.5rem)", // 23px - 24px
  xLargePlus: "clamp(1.5rem, 3.6vw, 1.625rem)", // 24px - 26px

  tinyXHuge: "clamp(1.75rem, 3.8vw, 1.875rem)", // 28px - 30px
  huge: "clamp(1.875rem, 4vw, 2rem)", // 30px - 32px
  hugePlus: "clamp(2rem, 4.2vw, 2.125rem)", // 32px - 34px

  tinyGiant: "clamp(2.125rem, 4.4vw, 2.1875rem)", // 34px - 35px
  xGiant: "clamp(2.1875rem, 4.6vw, 2.25rem)", // 35px - 36px
  xGiantPlus: "clamp(2.25rem, 4.8vw, 2.375rem)", // 36px - 38px
};

type LanguageType = keyof typeof fontFamilyMap;
type FontSize = keyof typeof sizeMap;

interface MultilingualTextProps {
  text: string;
  colour?: string;
  fontSize?: FontSize | number;
  language?: LanguageType;
  customStyle?: React.CSSProperties;
}

const MultilingualText = ({
  text = "",
  colour = "#000000",
  fontSize = "medium",
  language = "arabic",
  customStyle = {},
}: MultilingualTextProps) => {
  const getResponsiveFontSize = (size: number | string) => {
    if (
      typeof size === "string" &&
      (size.includes("rem") ||
        size.includes("em") ||
        size.includes("vh") ||
        size.includes("vw"))
    ) {
      return size;
    }

    if (typeof size === "number") {
      return `${size}px`;
    }

    return sizeMap[size as keyof typeof sizeMap] || sizeMap.medium;
  };

  const baseStyle: React.CSSProperties = {
    // Default text direction and alignment for all languages
    direction: language === "english" ? "ltr" : "rtl",
    textAlign: language === "english" ? "left" : "right",
    fontFamily: fontFamilyMap[language],
    color: colour,
    fontSize: getResponsiveFontSize(fontSize),
    lineHeight: "clamp(1.3, 1.5vw + 1.2, 1.6)",
    maxWidth: "100%",
    overflowWrap: "break-word",
    padding: "clamp(0.25rem, 1.5vw, 1rem)",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    // Language-specific letter spacing
    letterSpacing: language === "english" ? "0.015em" : "0.01em",
    // Additional optimizations for English text
    ...(language === "english" && {
      fontWeight: 400,
      // Improved text rendering for Latin characters
      textRendering: "optimizeLegibility",
    }),
  };

  const finalStyle = { ...baseStyle, ...customStyle };

  return <div style={finalStyle}>{text}</div>;
};

export default MultilingualText;
