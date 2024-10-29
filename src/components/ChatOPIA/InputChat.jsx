import { Box, TextField } from "@mui/material";

export const InputChat = () => {
    return (
        <Box sx={{ ...input_style.container }}>
            <TextField
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                placeholder={"Escribi tu consulta acá..."}
                sx={{
                    width: '80%',
                    marginTop:30,
                    padding:2,
                    backgroundColor:'rgba(154,154,154,0.18)',
                    boxShadow: '0px -4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius:5,
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
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#98A2B3",
                    },
                    "& .MuiInputBase-input::placeholder": {
                        fontSize: '1.5rem',
                        color: '#98A2B3',
                        opacity: 1,
                    },
                    "& .MuiInputBase-input": {
                        fontSize: '1.5rem',
                        color: '#98A2B3',
                    },
                }}
            />
        </Box>
    );
};

const input_style = {
    container: {
        height: { xs: 150, md: 150, lg: 150, xl: 150 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 0,
        marginTop:20,

    },
};
