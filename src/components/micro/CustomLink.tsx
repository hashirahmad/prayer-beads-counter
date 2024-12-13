import { ReactNode } from "react";
import {
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  SxProps,
  Theme,
} from "@mui/material";

interface LinkProps extends MuiLinkProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
  newTab?: boolean;
}

const CustomLink = ({
  children,
  sx,
  newTab = true,
  href,
  ...otherProps
}: LinkProps) => {
  const securityProps = newTab
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  const defaultStyles: SxProps<Theme> = {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    ...sx,
  };

  return (
    <MuiLink href={href} sx={defaultStyles} {...securityProps} {...otherProps}>
      {children}
    </MuiLink>
  );
};

export default CustomLink;
