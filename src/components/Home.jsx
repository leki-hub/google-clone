import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import { styled, Box } from "@mui/material";



const HomeContainer= styled(Box)(()=>({
  display :"flex",
  flexDirection:"column",
  height:"100vh"
  }))

export default function Home() {
  return (
    <div className="HomeContainer">
      <div className="header">
        <div className="header-left">
          <p>About</p>
          <p>Store</p>
        </div>
        <div className="header-right">
          <p> Gmail </p>
          <p> Images </p>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
          alt="google"
        />
      </div>
    </div>
  );
}
