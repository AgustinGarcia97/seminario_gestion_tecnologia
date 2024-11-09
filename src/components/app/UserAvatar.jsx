import { useEffect, useState } from "react";
import { getUser } from "../../services/user";
import { Avatar } from "@mui/material";

export const UserAvatar = ({ ...props }) => {
  const [username, setUsername] = useState(() => {
    return sessionStorage.getItem("username");
  });

  const [name, setName] = useState(null);

  useEffect(() => {
    const handleUserChange = () => {
      const newUsername = sessionStorage.getItem("username");
      setUsername(newUsername);
    };

    window.addEventListener("userChange", handleUserChange);

    return () => {
      window.removeEventListener("userChange", handleUserChange);
    };
  }, []);

  useEffect(() => {
    if (username) {
      getUser(username)
        .then((userData) => {
          setName(userData.name);
        })
        .catch(() => {
          setName(null);
        });
    } else {
      setName(null);
    }
  }, [username]);

  const initials =
    name
      ?.split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("") || null;

  return <Avatar {...props}>{initials}</Avatar>;
};
