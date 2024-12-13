import { ReactNode } from "react";
import { Typography } from "@mui/material";

const Emphasis = ({ children }: { children: ReactNode }) => (
  <Typography component="span" sx={{ fontWeight: "bold" }}>
    {children}
  </Typography>
);

export default Emphasis;
