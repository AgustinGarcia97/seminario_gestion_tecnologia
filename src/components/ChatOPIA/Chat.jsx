import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { BotTyping } from "./BotTyping";

export const Chat = ({ isBotResponding, onFinishTyping }) => {
  const { messages } = useSelector((state) => state.chatOPIA);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [displayedMessages, setDisplayedMessages] = useState(messages);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].role === "assistant"
    ) {
      const message = messages[messages.length - 1].message;
      let index = -1;

      setDisplayedMessages(messages.slice(0, messages.length - 1));

      const typeInterval = setInterval(() => {
        if (index < message.length) {
          const nextChar = message[index];
          if (nextChar !== undefined) {
            setDisplayedAnswer((prev) => prev + nextChar);
          }
          index++;
        } else {
          onFinishTyping();
          clearInterval(typeInterval);
        }
      }, 10);

      return () => clearInterval(typeInterval);
    } else {
      setDisplayedAnswer("");
      setDisplayedMessages(messages);
    }
  }, [messages, onFinishTyping]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [displayedAnswer, messages]);

  return (
    <Box
      sx={{
        height: "auto",
        width: "80%",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        overflow: "auto",
      }}
    >
      <Box sx={{ padding: 2 }}>
        {displayedMessages.map((msg, index) => (
          <Message key={index} messageData={msg} />
        ))}
      </Box>
      {displayedAnswer && !isBotResponding && (
        <Message
          messageData={{ role: "assistant", message: displayedAnswer }}
        />
      )}
      {isBotResponding && <BotTyping />}
      <div ref={messagesEndRef} />
    </Box>
  );
};

Chat.propTypes = {
  isBotResponding: PropTypes.bool,
};
