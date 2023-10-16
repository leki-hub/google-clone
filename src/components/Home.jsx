import React from "react";
import AppsIcon from "@mui/icons-material/Apps";

import {Avatar,  styled, Box} from "@mui/material";



const HomeContainer= styled(Box)(()=>({
  display :"flex",
  flexDirection:"column",
  height:"100vh"
  }))

const HeaderContainer = styled(Box)(()=>({
  display :"flex",
  justifyContent:"space-between",
  padding:"10px 30px",
  alignItems: "center"
  }))




export default function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
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
      </HeaderContainer>
      <div className="body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
          alt="google"
        />
      </div>
    </HomeContainer>
  );
}
