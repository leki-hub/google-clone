import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import RoomIcon from '@mui/icons-material/Room';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { UsesStateValue } from "../searchProvider";
import useGoogle from "../useGoogle";

const SearchPageHeader= styled(Box)(()=>({
  display :"flex",
  position:"sticky",
  top:0,
  zIndex:100,
  backgroundColor:"white",
  alignItems:"flex-start",
  padding:"30px",
  borderBottom:"1px solid lightgray",
  '& img':{
    height:'50px',
    marginRight:"50px"
  }
  }))

  const SearchPageOptions= styled(Box)(()=>({
    display :"flex",
    alignItems:"center",
    color:grey,
    marginTop:"30px",
    '& a':{
     textDecoration:"none",
     color:grey,
     marginLeft:"5px"
    }
    }))

    const Options = styled(Box)((props) => ({
      marginLeft: props.right ? "80px" : "0",
      display:"flex",
      alignItems:"center",
     
    }));


    const PageOption = styled(Box)(() => ({
       display:"flex",
      alignItems:"center",
      marginRight:"20px",
    }));

   
    const SearchPageResults = styled(Box)(() => ({
   maxWidth:"650px",
   marginTop: "20px",
   marginLeft:"240px",
   marginBottom:"100px",
      '.resultsCount': {
        color:"#70757a",
        fontSize:"14px",
      },
      '.results':{
        margin:"40px 0px"
      }
    }));


       
    const SearchPageLink= styled("a")(() => ({
      display: "flex",
      alignItems:"center",
      textDecoration:"none",
      color:"#000",
      marginBottom:"3px",
      '& img': {
       height:"50px",
       width:"50px",
       objectFit:"contain",
       marginRight:"10px"
      }
    }));

   
    const SearchPageResultsTitle = styled("a")(() => ({
         textDecoration:"none",
         '& h2': {
          fontWeight:"none",
         },
         '&:hover':{
           textDecoration:"underline"
         }
       }));
   

       const SearchPageResultsDesc = styled("p")(() => ({
        marginTop:"10px"
      }));
  





const SeachPage = () => {
  const[{term}] = UsesStateValue()

  const{data}= useGoogle(term)
  console.log(data)

  return (
    <div>
      <SearchPageHeader>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
            alt="search"
          />
        </Link>
        <div >
          <Search hide />
          <SearchPageOptions>
            <Options>
              <PageOption>
                 <SearchIcon />
                 <Link to="/">ALL</Link>
              </PageOption>
              <PageOption>
                 < DescriptionIcon/>
                 <Link to="/">News</Link>
              </PageOption>
              <PageOption>
                 <ImageIcon />
                 <Link to="/">Images</Link>
              </PageOption>
              <PageOption>
                 <LocalOfferIcon/>
                 <Link to="/">Shopping</Link>
              </PageOption>
              <PageOption>
                 <RoomIcon />
                 <Link to="/">Maps</Link>
              </PageOption>
              <PageOption>
                 <MoreVertIcon />
                 <Link to="/">More</Link>
              </PageOption>

            </Options>
            <Options right>
            <PageOption>
                 <Link to="/">Settings</Link>
              </PageOption>
              <PageOption> 
                 <Link to="/">Tools</Link>
              </PageOption>
            </Options>
            
          </SearchPageOptions>
        </div>
      </SearchPageHeader>
   {term && (
         <SearchPageResults>
         <p className="resultsCount">
           About 21,000,000 results (1.32 seconds )
  for TWD        </p>
         <div className="results">
           <SearchPageLink href="">
            <img src="" alt="News"   />
           </SearchPageLink>
           <SearchPageResultsTitle href="">
               <h2> The Web Dev</h2>
           </SearchPageResultsTitle>
           <SearchPageResultsDesc>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum quidem ipsa
           </SearchPageResultsDesc>
         </div>
       </SearchPageResults>



   )}




      
    </div>
  );
};
export default SeachPage;
