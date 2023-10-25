import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";


import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from '@mui/material/IconButton';



const SwipeButtons = (props) => {
  
  //console.log(props.handleReplay)
  return (
    <div className="swipeButtons">
      <IconButton  onClick={props.handleReplay} className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={props.handleLeft} className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={props.handleSuper} className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={props.handleRight} className="swipeButtons__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
