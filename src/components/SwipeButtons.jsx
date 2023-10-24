import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";


import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from '@mui/material/IconButton';

const SwipeButtons = () => {
  const handleReplayClick = () => {
    // Realiza la acción deseada cuando se hace clic en el botón "Replay".
    // Esto podría ser deshacer una acción anterior o realizar alguna otra tarea.
    console.log("Botón Replay clicado");
    // Realiza aquí la acción que necesitas
  };

  return (
    <div className="swipeButtons">
      <IconButton  onClick={handleReplayClick} className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
