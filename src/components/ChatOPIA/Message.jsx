import PropTypes from "prop-types";
import { marked } from "marked";
import { Box, Typography } from "@mui/material";
import { LogoIcon } from "../../assets/icons/navbar/LogoIcon";

export const Message = ({ messageData, fontSize }) => {
  const { role, message } = messageData;

  const formattedMessage = marked(message);

  const isUser = role === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 2,
        alignItems: "center",
      }}
    >
      {!isUser && (
        <Box
          sx={{
            background: "white",
            borderRadius: "12px",
            padding: " 4px 4px 1px 4px",
            alignSelf: "flex-start",
            marginTop: "30px",
          }}
        >
          <LogoIcon height="24px" width="24px" />
        </Box>
      )}
      <Box
        sx={{
          maxWidth: "70%",
          padding: "10px 15px",
          borderRadius: "12px",
          backgroundColor: isUser ? "#555b67" : "",
          color: "white",
          boxShadow: isUser ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
          wordBreak: "break-word",
          fontSize: 20,
        }}
      >
        <Typography
          sx={{
            fontSize: fontSize || "1rem",
            lineHeight: 1.5,
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: formattedMessage }} />
        </Typography>
      </Box>
    </Box>
  );
};

Message.propTypes = {
  messageData: PropTypes.shape({
    role: PropTypes.oneOf(["user", "assistant"]).isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  fontSize: PropTypes.string,
};

export default Message;
