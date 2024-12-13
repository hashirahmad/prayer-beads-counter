import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useNavigate } from "react-router-dom";
import BlockQuote from "./micro/BlockQuote";
import Emphasis from "./micro/Emphasis";
import CustomLink from "./micro/CustomLink";
import GradientHeading from "./micro/GradientHeading";
import Wrapper from "./micro/Wrapper";
import ArabicText from "./micro/ArabicText";
import prayers from "../data/prayers.json";

const PrayerAppeal = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <GradientHeading
        children="Safeguarded in a secure fortress"
        duration={20}
        colors={[
          "#FF0000",
          "#FF4500",
          "#FFA500",
          "#FFD700",
          "#87CEEB",
          "#6495ED",
          "#4169E1",
        ]}
      />

      <Wrapper>
        <Typography paragraph>
          <CustomLink
            href="https://en.wikipedia.org/wiki/Mirza_Nasir_Ahmad"
            children="His Holiness (aba)"
          />{" "}
          addressed on{" "}
          <CustomLink
            href="https://www.alislam.org/friday-sermon/2024-08-23.html"
            children="Friday Sermon"
          />
          {":"}
        </Typography>
        <BlockQuote>
          According to the vision of the{" "}
          <CustomLink
            href="https://en.wikipedia.org/wiki/Mirza_Nasir_Ahmad"
            children="Third Caliph (rh)"
          />
          , the elder said that if these [prayers] were recited then you will{" "}
          <Emphasis
            children="become safeguarded in a secure fortress, impenetrable by Satan,
                made with iron walls reaching the heavens"
          />
        </BlockQuote>
        <Button onClick={handleClickOpen} startIcon={<InfoOutlinedIcon />}>
          More Context
        </Button>
        <Button
          onClick={() => navigate("/prayers")}
          startIcon={<ListOutlinedIcon />}
        >
          List prayers
        </Button>
      </Wrapper>

      <Dialog
        open={openDialog}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
        scroll="paper"
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: isMobile ? 0 : 2,
          },
        }}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>More Information</Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ color: "text.secondary" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ mb: 3 }}>
            <Typography paragraph>
              <CustomLink
                href="https://en.wikipedia.org/wiki/Mirza_Nasir_Ahmad"
                children="His Holiness (aba)"
              />{" "}
              said that he wished to make an appeal:
            </Typography>

            <BlockQuote>
              the{" "}
              <CustomLink
                href="https://en.wikipedia.org/wiki/Mirza_Nasir_Ahmad"
                children="Third Caliph (rh)"
              />{" "}
              saw a vision in which an elder said to him that every adult in the
              Community should recite Durood Sharif [prayer for invoking
              salutations upon the{" "}
              <CustomLink
                href="https://en.wikipedia.org/wiki/Muhammad"
                children="Holy Prophet (sa)"
              />
              {"] "}{" "}
              <ArabicText
                text={prayers.prayers[0].arabicText}
                color={prayers.prayers[0].colour}
              />{" "}
              ({prayers.prayers[0].translations.english}) 200 times. Those who
              are 15-25 years of age recite it at least 100 times, and if
              children recite it at least 33 times and parents help their infant
              children recite it at least three to four times. Then recite{" "}
              <ArabicText
                text={prayers.prayers[1].arabicText}
                color={prayers.prayers[1].colour}
              />{" "}
              ({prayers.prayers[1].translations.english}) 100 times.
            </BlockQuote>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography paragraph>
              <CustomLink
                href="https://en.wikipedia.org/wiki/Mirza_Masroor_Ahmad"
                children="His Holiness (aba)"
              />{" "}
              further said that:
            </Typography>

            <BlockQuote>
              he would also include the prayer{" "}
              <ArabicText
                text={prayers.prayers[2].arabicText}
                color={prayers.prayers[2].colour}
              />{" "}
              ({prayers.prayers[2].translations.english}) to be recited not just
              in these days but generally as well.
            </BlockQuote>
          </Box>

          <Box>
            <Typography paragraph>
              <CustomLink
                href="https://en.wikipedia.org/wiki/Mirza_Masroor_Ahmad"
                children="His Holiness (aba)"
              />{" "}
              in conclusion said that:
            </Typography>

            <BlockQuote
              children="these days when Satan is trying to attack our Community and
                  the world at large, the only way for us to remain safeguarded
                  is through prayers. Hence, we should recite these prayers, not
                  just during the days of Jalsa but throughout the year."
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default PrayerAppeal;
