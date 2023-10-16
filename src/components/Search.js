import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { styled, Box } from '@mui/material';
import { useState } from 'react';
import { grey } from '@mui/material/colors';

const SearchInput= styled(Box)(()=>({
    display :"flex",
    alignItems:"center",
    border:"1px solid lightgray",
    height :"30px",
    padding :"10px 15px",
    width:"500px",
    margin:"0px auto",
    borderRadius:"999px",
    '& input': {
          flex:1,
          padding: "8px 13px",
          fontSize :"medium",
          border:0,
          outline:0
    },
    '.Searchicon':{
        color:grey
        
    }
    
    }))


    const SearchButton= styled(Box)(()=>({
        display :"flex",
        alignItems:"center",
        border:"1px solid lightgray",
        height :"30px",
        padding :"10px 15px",
        width:"500px",
        margin:"0px auto",
        borderRadius:"999px",
        '& input': {
              flex:1,
              padding: "8px 13px",
              fontSize :"medium",
              border:0,
              outline:0
        },
        '.Searchicon':{
            color:grey
            
        }
        
        }))



const Search = () => {
    const[search, setSearch] = useState("")
    return(
        <div>
            <form>
                <diV>
                <input type="text" placeholder="Search"/>
                </diV>
              

            </form>
            
        </div>
    )
}

export default Search;