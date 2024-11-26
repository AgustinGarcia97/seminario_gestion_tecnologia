import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export const InputChat = ({ onSend, disabled, inputRef }) => {
  const [text, setText] = useState("");

  const handleSendClick = () => {
    onSend(text);
    setText("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Evita el salto de línea
      onSend(text); // Llama a la función proporcionada con el valor actual del campo
      setText("");
    }
  };

  return (
    <Box sx={{ ...input_style.container }}>
      <TextField
        id="outlined-multiline-flexible"
        inputRef={inputRef}
        value={text}
        multiline
        maxRows={4}
        placeholder={
          disabled ? "Por favor aguarde..." : "Escribí tu consulta acá..."
        }
        disabled={disabled}
        onInput={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        sx={{
          width: "80%",
          padding: 2,
          backgroundColor: "rgba(154,154,154,0.18)",
          boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: 5,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-disabled fieldset": {
              borderColor: "transparent",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#98A2B3",
          },
          "& .MuiInputBase-input::placeholder": {
            fontSize: "1.5rem",
            color: "#98A2B3",
            opacity: 1,
          },
          "& .MuiInputBase-input": {
            fontSize: "1.5rem",
            color: "#98A2B3",
          },
        }}
        InputProps={{
          endAdornment: !disabled && (
            <InputAdornment position="end">
              <IconButton style={{ color: "white" }} onClick={handleSendClick}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

InputChat.propTypes = {
  onSend: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

const input_style = {
  container: {
    height: { xs: 150, md: 150, lg: 150, xl: 150 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 0,
  },
};
