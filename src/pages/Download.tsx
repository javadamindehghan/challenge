import React from "react";
import PropTypes from "prop-types";
import { Container, Card, Typography, Box, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Divider from "@mui/material/Divider";
import ItemDownload from "../components/ItemDownload";

function Download() {
  return (
    <Container maxWidth="sm" sx={{ padding: "50px" }}>
      <Card
        variant="outlined"
        sx={{
          width: "fit-content",
          height: "fit-content",
          background: "linear-gradient(to left,  #1E1928  0%, #351944 100%)",
          border: "2px solid #380C9D",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            height: "fit-content",
            margin: "24px 26px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "16px",
              color: "#DFE1F9",
            }}
          >
            Select the subtitle format
          </Typography>
        </Box>
        <ItemDownload title="CSV" level="Premium" selected={false} />
        <ItemDownload title="Excel" level="Premium" selected={false} />
        <ItemDownload title="JSON" level="Premium" selected={false} />
        <ItemDownload title="Anki" level="Premium" selected={false} />
        <ItemDownload title="Text" level="Free" selected={true} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: "10px",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#1B1B21",
              border: "solid 1px #380C9D",
              borderRadius: "20px",
              color: "white",
            }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            sx={{
              background:
                "linear-gradient(to left, #BB19D2   0%, #790FCC 100%)",
              borderRadius: "20px",
            }}
            variant="contained"
          >
            Download
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

Download.propTypes = {};

export default Download;
