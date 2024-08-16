import React, { useCallback, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);
  return (
    <div className="home">
      <TextField
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        id="joinidfield"
        variant="outlined"
        type="text"
        label="create room code"
      />
      <Button onClick={handleJoinRoom} variant="outlined">
        Create Room
      </Button>
    </div>
  );
};

export default HomePage;
