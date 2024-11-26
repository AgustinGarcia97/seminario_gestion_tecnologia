import axios from "axios";
import { addMessage, setIsBotResponding } from "../redux/slices/chatopiaSlice";
import { store } from "../redux/store";
import { getUsername } from "../storage/user";

const chatService = {
  sendMessage: async (message, isPremadeMessage) => {
    try {
      store.dispatch(setIsBotResponding(true));
      !isPremadeMessage &&
        store.dispatch(addMessage({ role: "user", message }));
      const username = getUsername();
      const payload = { role: "user", content: message, username };
      const response = await axios.post("http://localhost:8000/chat/", payload);
      store.dispatch(setIsBotResponding(false));
      store.dispatch(
        addMessage({ role: "assistant", message: response.data.response })
      );
      return response.data;
    } catch (error) {
      store.dispatch(setIsBotResponding(false));
      console.error("Error enviando el mensaje:", error);
      throw error;
    }
  },
};

export default chatService;
