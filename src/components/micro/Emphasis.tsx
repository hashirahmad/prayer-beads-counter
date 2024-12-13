import { ReactNode } from "react";
import { Typography } from "@mui/material";

export default ({ children }: { children: ReactNode }) => (
  <Typography component="span" sx={{ fontWeight: "bold" }}>
    {children}
  </Typography>
);
