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
            radial-gradient(circle at 15% 20%, rgba(60, 60, 60, 0.6) 0%, transparent 75%),
            radial-gradient(circle at 80% 25%, rgba(50, 50, 50, 0.7) 0%, transparent 70%),
            radial-gradient(circle at 50% 60%, rgba(40, 40, 40, 0.5) 0%, transparent 65%),
            radial-gradient(circle at 20% 75%, rgba(30, 30, 30, 0.4) 0%, transparent 70%),
            radial-gradient(circle at 90% 85%, rgba(20, 20, 20, 0.3) 0%, transparent 80%)
          `,
          backgroundSize: "400% 400%",
          animation: "meshChaos 60s infinite ease-in-out",
          filter: "blur(8px)",
        }}
      />
      <style>
        {`
          @keyframes meshChaos {
            0% {
              background-position: 20% 30%, 70% 40%, 40% 60%, 30% 80%, 90% 85%;
            }
            25% {
              background-position: 50% 20%, 80% 70%, 30% 40%, 60% 75%, 20% 90%;
            }
            50% {
              background-position: 80% 50%, 30% 20%, 70% 60%, 40% 30%, 85% 20%;
            }
            75% {
              background-position: 30% 70%, 60% 40%, 50% 80%, 75% 30%, 10% 50%;
            }
            100% {
              background-position: 20% 30%, 70% 40%, 40% 60%, 30% 80%, 90% 85%;
            }
          }
        `}
      </style>
    </>
  );
};
