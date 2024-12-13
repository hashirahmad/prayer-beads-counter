const ArabicText = ({ text = "", color = "#000000", fontSize = "medium" }) => {
  const getResponsiveFontSize = (size: any) => {
    const sizeMap = {
      tiny: "0.75rem",
      small: "0.875rem",
      medium: "1rem",
      large: "1.25rem",
      xlarge: "1.5rem",
      huge: "2rem",
      xhuge: "2.25rem",
    };

    // If the provided size is already using relative units (rem, em, vh, vw),
    // return it as-is
    if (
      typeof size === "string" &&
      (size.includes("rem") ||
        size.includes("em") ||
        size.includes("vh") ||
        size.includes("vw"))
    ) {
      return size;
    }

    // If it's one of our predefined sizes, use the mapping
    if (sizeMap[size as keyof typeof sizeMap]) {
      return sizeMap[size as keyof typeof sizeMap];
    }

    // Default to medium size if the provided size isn't recognized
    return sizeMap.medium;
  };

  const arabicTextStyle = {
    direction: "rtl",
    textAlign: "right",
    fontFamily: '"Mada", sans-serif',
    fontWeight: "bold",
    color: color,
    fontSize: getResponsiveFontSize(fontSize),
    lineHeight: "1.5",
    maxWidth: "100%",
    // This ensures text won't overflow on small screens
    overflowWrap: "break-word",
    // Adding responsive padding
    padding: "clamp(0.5rem, 2vw, 1rem)",
  };

  // @ts-ignore
  return <div style={arabicTextStyle}>{text}</div>;
};
export default ArabicText;
