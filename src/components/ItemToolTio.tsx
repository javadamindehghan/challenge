import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  data: string[];
}

function ItemToolTio(props: Props) {
  const { data, title } = props;

  return (
    <>
      <Box
        sx={{
          padding: "16px 24px",
          backgroundColor: "#322F3E",
          borderRadius: "20px",
          margin: "20px 0",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "15px",
              lineHeight: "20px",
              color: "#C6C5D0",
              margin:'15px 0'
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "261px",
          }}
        >
          {data.map((item) => {
            return (
              <>
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
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default ItemToolTio;
