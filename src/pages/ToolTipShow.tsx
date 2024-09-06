import { Box, Button, Card, Container, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import React, { useState } from "react";
import SignalCellularAlt2BarSharpIcon from "@mui/icons-material/SignalCellularAlt2BarSharp";
import { isTemplateHead } from "typescript";
import ItemToolTio from "../components/ItemToolTio";
import { data, Opposite, Synonym, Meaning } from "../Constant";

interface Props {}

function ToolTipShow(props: Props) {
  const [Show, setShow] = useState<boolean>(false);
  const {} = props;

  return (
    <>
      <Container maxWidth="sm" sx={{ padding: "50px" }}>
        <Card
          variant="outlined"
          sx={{
            width: "fit-content",
            height: "fit-content",
            backgroundColor: "#231F2F",
            borderRadius: "15px",
            padding: "14px 24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "#EAEAEA",
              width: "320px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" ,alignItems:'center' }}>
              <Typography sx={{fontWeight:'600' ,fontSize:'18px', lineHeight:'24px' ,color:'#EAEAEA'}}>miglioramento</Typography>
              <Typography sx={{ color: "#CBCBCB" ,fontWeight:'500' ,fontSize:'14px', lineHeight:'20px' }}>/ Noun </Typography>
            </Box>
            <Box>
              <Typography>
                <BookmarkBorderIcon />
                <VolumeUpIcon />
              </Typography>
            </Box>
          </Box>
          {Show ? (
            <>
              <ItemToolTio title="Meaning" data={Meaning} />
              <ItemToolTio title="Synonym" data={Synonym} />
              <ItemToolTio title="Opposite" data={Opposite} />
            </>
          ) : (
            <Box
              sx={{
                width: "294px",
                display: "flex",
                flexWrap: "wrap",
                marginTop: "22px",
              }}
            >
              {data.map((item) => {
                return (
                  <Typography
                    sx={{
                      color: "#CBCBCB",
                      fontWeight: "400",
                      fontsize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    &nbsp;{item}.
                  </Typography>
                );
              })}
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "32px",
            }}
          >
            <Box>
              <Button
                sx={{
                  color: "#6157CB",
                  border: "1px solid #6157CB",
                  borderRadius: "20px",
                }}
                variant="outlined"
                onClick={() => setShow(!Show)}
              >
                {Show ? "Hidden" : "  Show more"}
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SignalCellularAlt2BarSharpIcon sx={{ color: "#A21CAF" }} />
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#CBCBCB",
                }}
              >
                Mid level{" "}
              </Typography>
            </Box>
          </Box>
        </Card>
      </Container>
    </>
  );
}

export default ToolTipShow;
