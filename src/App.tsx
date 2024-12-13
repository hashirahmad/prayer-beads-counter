import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Navigation } from "./components/Navigation";
import { PrayersPage } from "./pages/Prayers";
import { HomePage } from "./pages/HomePage";
import { ProgressPage } from "./pages/Progress";
import GradientBackground from "./components/GradientBackground";
import Bismillah from "./components/micro/Bismillah";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#D4AF37",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#E0E0E0",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GradientBackground />
      <Bismillah />
      <CssBaseline />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/prayers" element={<PrayersPage />} />
            <Route path="/progress" element={<ProgressPage />} />
          </Routes>
          <Navigation />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
