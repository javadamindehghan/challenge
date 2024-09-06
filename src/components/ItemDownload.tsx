import React from "react";
import { Container, Card, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DoneIcon from "@mui/icons-material/Done";
interface Props {
  title: string;
  level: "Premium" | "Free";
  selected: boolean;
}

function ItemDownload(props: Props) {
  const { title, level, selected } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 26px",
        borderBottom: "1px solid #2c2538",
        backgroundColor: `${selected ? '#2D1D51' :''}` ,
      }}
    >
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "18.75px",
          color: "white",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{

          color: `${selected ? '#48C1E8' :'#ED2481'}` ,
          fontWeight: "500",
          fontSize: "12px",
          lineHeight: "14.06px",
          display: "flex",
          alignItems: "center",
        }}
      >
          {selected ? `(${level})` : level}
        
        {selected ? <DoneIcon /> : <StarIcon />}
      </Typography>
    </Box>
  );
}

export default ItemDownload;
