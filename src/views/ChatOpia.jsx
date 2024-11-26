import Grid from "@mui/material/Grid2";
import { ToolbarChat } from "../components/ChatOPIA/ToolbarChat.jsx";
import { SidebarToolbar } from "../components/ChatOPIA/SidebarToolbar.jsx";
import { ChatSuggestions } from "../components/ChatOPIA/ChatSuggestions.jsx";
import { InputChat } from "../components/ChatOPIA/InputChat.jsx";
import { Box, Typography } from "@mui/material";
import { Chat } from "../components/ChatOPIA/Chat.jsx";
import { useRef } from "react";
import chatService from "../services/chat.js";
import { useSelector } from "react-redux";

export const ChatOpia = () => {
  const { messages, isBotResponding } = useSelector((state) => state.chatOPIA);

  const inputRef = useRef(null);

  const handleTextSend = async (message) => {
    await chatService.sendMessage(message);
  };

  const handleFinishTyping = () => {
    inputRef.current.focus();
  };

  return (
    <Grid container sx={{ ...chat_opia_style.container }}>
      <Grid
        item
        xs={4}
        sx={{
          ...chat_opia_style.grid_item,
          backgroundColor: "#3D4857",
          width: { xs: "", md: "", lg: "", xl: "15vw" },
        }}
      >
        <SidebarToolbar />
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          ...chat_opia_style.grid_item,
          backgroundColor: "#444b59",
          width: { xs: "", md: "85vw", lg: "85vw", xl: "85vw" },
          height: "100%",
        }}
      >
        <ToolbarChat />
        <Box
          sx={{
            minHeight: { xs: "", md: "", lg: "", xl: 800 },
            width: "100%",
            height: "calc(100% - 64px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "column",
            gap: 2,
            overflow: "auto",
          }}
        >
          {messages.length === 0 && !isBotResponding ? (
            <>
              <Typography
                sx={{
                  fontSize: { xs: "", md: "", lg: "", xl: 20 },
                  color: "#98A2B3",
                  padding: 2,
                }}
              >
                Explorá los temas o comenzá a chatear con OPIA
              </Typography>

              <ChatSuggestions />
            </>
          ) : null}
          <Chat
            isBotResponding={isBotResponding}
            onFinishTyping={handleFinishTyping}
          />
          <InputChat
            onSend={handleTextSend}
            disabled={isBotResponding}
            inputRef={inputRef}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

const chat_opia_style = {
  container: {
    display: "flex",
    width: "100vw",
    height: "calc(100vh - 106px - 94px)",
    overflow: "hidden",
    justifyContent: "center",
  },
  grid_item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
