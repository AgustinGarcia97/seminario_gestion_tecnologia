import { Box, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Chat = () => {
    const QA = useSelector(state => state.chatOPIA.selected_answer);
    const [displayedAnswer, setDisplayedAnswer] = useState("");

    useEffect(() => {
        if (QA.answer) {
            let index = -1;
            setDisplayedAnswer("");

            const typeInterval = setInterval(() => {
                if (index < QA.answer.length) {
                    const nextChar = QA.answer[index];
                    if (nextChar !== undefined) {
                        setDisplayedAnswer(prev => prev + nextChar);
                    }
                    index++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 10);


            return () => clearInterval(typeInterval);
        } else {
            setDisplayedAnswer("");
        }
    }, [QA]);

    return (
        <Box sx={{ height: 'auto', width: '80%', padding: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant="body2" color="textSecondary" sx={{
                ...chat_style.typo,
                fontSize: 30,
                fontWeight: 'bold'
            }}>{QA.question}</Typography>
            <Divider sx={{ backgroundColor: '#98A2B3' }} />
            <Typography variant="body2" color="textSecondary" sx={{
                ...chat_style.typo,
                fontSize: 20,

            }}>{displayedAnswer}</Typography>
        </Box>
    )
}

const chat_style = {
    typo: {
        color: '#98A2B3'
    }
}
