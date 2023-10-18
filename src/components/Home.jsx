import React from "react";
import AppsIcon from "@mui/icons-material/Apps";

import {Avatar,  styled, Box} from "@mui/material";
import  Search  from "./Search";



const HomeContainer= styled(Box)(()=>({
  display :"flex",
  flexDirection:"column",
  height:"100vh"
  }))

  const HeaderContainer = styled(Box)(()=>({
    display :"flex",
    justifyContent:"space-between",
    padding:"10px 20px",
   alignItems:"center"
    }))
    const Header = styled(Box)(() => ({
      display: "flex",
      alignItems: "center",
      '& p': {
        marginRight: 20,
        fontSize: 15,
      },
      '.left-margin': {
        marginLeft: "20px"
      }
    }));
    
    
    const BodyContainer = styled(Box)(() => ({
      display: "flex",
      flex:1,
      marginTop:"10%",
      flexDirection:"column",
      '& img': {
        objectFit:"contain",
        height:"100px",
        marginBottom:"5px"
      }
    }));



export default function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <Header>
          <p>About</p>
          <p>Store</p>
        </Header>
        <Header>
          <p> Gmail </p>
          <p> Images </p>
          <AppsIcon className="left-margin" />
          <Avatar className="left-margin"/>
        </Header>
      </HeaderContainer>
      <BodyContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
          alt="google"
        />
        <div>
          <Search />

        </div>
       
      </BodyContainer>
    </HomeContainer>
  );
}
