import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const CustomTextArea = () => {
  return (
    <div className="content">
      <TextField
        fullWidth
        multiline
        variant="outlined"
        rows={4}
        sx={{ mt: 1, mb: 1 }}
        placeholder="Type your message here"
        InputProps={{
          endAdornment: (
            <Button variant="contained" endIcon={<SendIcon />}></Button>
          ),
          sx: {
            "& fieldset": {
              borderColor: "#ccc",
            },
            "&:hover fieldset": {
              borderColor: "#ccc",
            },
          },
        }}
      />
    </div>
  );
};

export default CustomTextArea;
