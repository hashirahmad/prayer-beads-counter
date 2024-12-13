import React, { ReactNode, CSSProperties } from "react";

interface ElevatedContentProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Wrapper: React.FC<ElevatedContentProps> = ({
  children,
  className = "",
  style = {},
}) => {
  const containerStyles: CSSProperties = {
    backgroundColor: "transparent",
    ...style,
  };

  /** shadow effect from https://getcssscan.com/css-box-shadow-examples */
  const wrapperStyles: CSSProperties = {
    padding: "12px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    // boxShadow:
    //   "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
    // boxShadow:
    //   "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    borderRadius: "6px",
  };

  return (
    <div style={containerStyles} className={className}>
      <div style={wrapperStyles}>{children}</div>
    </div>
  );
};

export default Wrapper;
