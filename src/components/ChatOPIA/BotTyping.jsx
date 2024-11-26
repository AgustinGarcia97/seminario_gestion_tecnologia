import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Message from "./Message";

export const BotTyping = () => {
  const [dots, setDots] = useState("."); // Inicialmente un solo punto

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length === 3) {
          return ".";
        } else {
          return prevDots + ".";
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Message
        messageData={{ role: "assistant", message: dots }}
        fontSize="1.5rem"
      />
    </Box>
  );
};
