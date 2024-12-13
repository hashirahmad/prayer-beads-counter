import React from "react";

const GradientBackground = () => {
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
            radial-gradient(circle at 15% 20%, rgba(60, 60, 60, 0.4) 0%, transparent 45%),
            radial-gradient(circle at 80% 25%, rgba(50, 50, 50, 0.5) 0%, transparent 40%),
            radial-gradient(circle at 50% 60%, rgba(40, 40, 40, 0.3) 0%, transparent 35%),
            radial-gradient(circle at 20% 75%, rgba(30, 30, 30, 0.6) 0%, transparent 40%),
            radial-gradient(circle at 90% 85%, rgba(20, 20, 20, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 45% 35%, rgba(70, 70, 70, 0.3) 0%, transparent 65%),
            radial-gradient(ellipse at 75% 40%, rgba(45, 45, 45, 0.4) 0%, transparent 55%),
            radial-gradient(circle at 35% 65%, rgba(35, 35, 35, 0.5) 0%, transparent 45%),
            radial-gradient(ellipse at 65% 70%, rgba(25, 25, 25, 0.3) 0%, transparent 60%)
          `,
          boxShadow: `
            inset 20px 20px 60px rgba(60, 60, 60, 0.4),
            inset -20px -20px 60px rgba(40, 40, 40, 0.45),
            inset 40px 40px 100px rgba(30, 30, 30, 0.35),
            inset -40px -40px 100px rgba(20, 20, 20, 0.3),
            25px 25px 60px rgba(60, 60, 60, 0.3),
            -25px -25px 80px rgba(40, 40, 40, 0.35),
            50px 50px 120px rgba(30, 30, 30, 0.25),
            -50px -50px 150px rgba(20, 20, 20, 0.2)
          `,
          backgroundSize: "400% 400%",
          animation: "meshChaosWithShadows 300s infinite ease-in-out",
          filter: "blur(8px)",
        }}
      />
      <style>
        {`
          @keyframes meshChaosWithShadows {
            0%, 100% {
              background-position: 20% 30%, 70% 40%, 40% 60%, 30% 80%, 90% 85%, 45% 35%, 75% 40%, 35% 65%, 65% 70%;
              box-shadow: 
                inset 20px 20px 60px rgba(60, 60, 60, 0.4),
                inset -20px -20px 60px rgba(40, 40, 40, 0.45),
                inset 40px 40px 100px rgba(30, 30, 30, 0.35),
                inset -40px -40px 100px rgba(20, 20, 20, 0.3),
                25px 25px 60px rgba(60, 60, 60, 0.3),
                -25px -25px 80px rgba(40, 40, 40, 0.35),
                50px 50px 120px rgba(30, 30, 30, 0.25),
                -50px -50px 150px rgba(20, 20, 20, 0.2);
            }
            20% {
              background-position: 65% 15%, 25% 70%, 80% 40%, 15% 55%, 45% 95%, 70% 25%, 30% 60%, 85% 35%, 20% 80%;
              box-shadow: 
                inset 30px 30px 80px rgba(50, 50, 50, 0.45),
                inset -30px -30px 80px rgba(30, 30, 30, 0.5),
                inset 60px 60px 120px rgba(25, 25, 25, 0.4),
                inset -60px -60px 120px rgba(15, 15, 15, 0.35),
                35px 35px 80px rgba(50, 50, 50, 0.35),
                -35px -35px 100px rgba(30, 30, 30, 0.4),
                70px 70px 140px rgba(20, 20, 20, 0.3),
                -70px -70px 160px rgba(15, 15, 15, 0.25);
            }
            40% {
              background-position: 45% 85%, 90% 30%, 15% 70%, 75% 25%, 35% 60%, 20% 80%, 95% 45%, 50% 90%, 80% 15%;
              box-shadow: 
                inset 25px 25px 70px rgba(55, 55, 55, 0.35),
                inset -25px -25px 70px rgba(35, 35, 35, 0.4),
                inset 50px 50px 110px rgba(28, 28, 28, 0.3),
                inset -50px -50px 110px rgba(18, 18, 18, 0.25),
                30px 30px 70px rgba(55, 55, 55, 0.3),
                -30px -30px 90px rgba(35, 35, 35, 0.35),
                60px 60px 130px rgba(25, 25, 25, 0.25),
                -60px -60px 150px rgba(18, 18, 18, 0.2);
            }
            60% {
              background-position: 80% 50%, 30% 20%, 70% 60%, 40% 30%, 85% 20%, 15% 70%, 55% 85%, 25% 40%, 90% 65%;
              box-shadow: 
                inset 35px 35px 90px rgba(45, 45, 45, 0.4),
                inset -35px -35px 90px rgba(25, 25, 25, 0.45),
                inset 70px 70px 130px rgba(22, 22, 22, 0.35),
                inset -70px -70px 130px rgba(12, 12, 12, 0.3),
                40px 40px 90px rgba(45, 45, 45, 0.35),
                -40px -40px 110px rgba(25, 25, 25, 0.4),
                80px 80px 150px rgba(15, 15, 15, 0.3),
                -80px -80px 170px rgba(10, 10, 10, 0.25);
            }
            80% {
              background-position: 30% 70%, 60% 40%, 50% 80%, 75% 30%, 10% 50%, 85% 15%, 40% 95%, 70% 20%, 15% 85%;
              box-shadow: 
                inset 15px 15px 50px rgba(65, 65, 65, 0.35),
                inset -15px -15px 50px rgba(45, 45, 45, 0.4),
                inset 45px 45px 90px rgba(32, 32, 32, 0.3),
                inset -45px -45px 90px rgba(22, 22, 22, 0.25),
                20px 20px 60px rgba(65, 65, 65, 0.3),
                -20px -20px 80px rgba(45, 45, 45, 0.35),
                40px 40px 120px rgba(35, 35, 35, 0.25),
                -40px -40px 140px rgba(25, 25, 25, 0.2);
            }
          }
        `}
      </style>
    </>
  );
};

export default GradientBackground;
