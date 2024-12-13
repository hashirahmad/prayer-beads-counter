import { ReactNode } from "react";
import { Typography, SxProps, Theme } from "@mui/material";

interface BlockQuoteProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const BlockQuote = ({ children, sx }: BlockQuoteProps) => {
  const defaultStyles: SxProps<Theme> = {
    pl: 3,
    borderLeft: "4px solid",
    borderColor: "primary.light",
    my: 2,
    py: 1,
    fontStyle: "italic",
    color: "text.secondary",
    ...sx,
  };

  return (
    <Typography component="blockquote" sx={defaultStyles}>
      {children}
    </Typography>
  );
};

export default BlockQuote;
