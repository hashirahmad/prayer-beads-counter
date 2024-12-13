import React from "react";

export default () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background: `
            radial-gradient(circle at 10% 20%, rgba(240, 242, 250, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 30%, rgba(220, 225, 235, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 60%, rgba(180, 185, 200, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 20% 70%, rgba(160, 165, 180, 0.05) 0%, transparent 50%)
          `,
          backgroundSize: "150% 150%",
          backgroundPosition: "center",
          animation: "meshShift 20s ease-in-out infinite",
        }}
      />
      <style>
        {`
          @keyframes meshShift {
            0% {
              background-position: center;
            }
            50% {
              background-position: 60% 60%;
            }
            100% {
              background-position: center;
            }
          }
        `}
      </style>
    </>
  );
};
###############
import React from "react";

export default () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background: `
            radial-gradient(circle at 10% 20%, rgba(240, 242, 250, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 30%, rgba(220, 225, 235, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 60%, rgba(180, 185, 200, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 20% 70%, rgba(160, 165, 180, 0.05) 0%, transparent 50%)
          `,
          backgroundSize: "150% 150%",
          backgroundPosition: "center",
          animation: "meshShift 20s ease-in-out infinite",
        }}
      />
      <style>
        {`
          @keyframes meshShift {
            0% {
              background-position: center;
            }
            50% {
              background-position: 60% 60%;
            }
            100% {
              background-position: center;
            }
          }
        `}
      </style>
    </>
  );
};

##########
import React from "react";

export default () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background: `
            radial-gradient(circle at 10% 20%, rgba(240, 242, 250, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 40%, rgba(220, 225, 235, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 80% 60%, rgba(180, 185, 200, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 20% 70%, rgba(160, 165, 180, 0.15) 0%, transparent 50%)
          `,
          backgroundSize: "150% 150%",
          backgroundPosition: "center",
          animation: "meshShift 25s ease-in-out infinite",
          boxShadow: `
            20px 20px 50px rgba(0, 0, 0, 0.1),
            -30px -30px 80px rgba(0, 0, 0, 0.1),
            40px 60px 100px rgba(0, 0, 0, 0.08),
            -50px 90px 120px rgba(0, 0, 0, 0.07),
            60px -120px 150px rgba(0, 0, 0, 0.06)
          `,
        }}
      />
      <style>
        {`
          @keyframes meshShift {
            0% {
              background-position: center;
            }
            50% {
              background-position: 60% 60%;
            }
            100% {
              background-position: center;
            }
          }
        `}
      </style>
    </>
  );
};

##########
##########
##########
##########
##########
##########
##########
##########
##########
##########
##########
##########