import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { styled, Box } from "@mui/material";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
const SearchInput = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  border: "1px solid lightgray",
  height: "30px",
  padding: "10px 15px",
  width: "500px",
  margin: "0px auto",
  borderRadius: "999px",
  "& input": {
    flex: 1,
    padding: "8px 13px",
    fontSize: "medium",
    border: 0,
    outline: 0,
  },
  ".Searchicon": {
    color: "#9e9e9e",
  },
}));

const SearchButton = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
  "& button": {
    margin: "5px",
    backgroundColor: theme.palette.primary.main,
    border: "1px solid white",
    textTransform: "inherit",

    "&:hover": {
      margin: "5px",
      backgroundColor: theme.palette.info.light,
      color: "#000",
      border: "1px solid #c6c6c6",
    },
  },
}));

const Search = ({hide}) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate()

  const search = (e)=>{
    e.preventDefault();
    navigate("/search")
  }


  return (
    <div>
      <form onSubmit={search}>
        <SearchInput>
          <SearchIcon className="searchicon" />
          <input
            type="text"
            placeholder="Search..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <MicIcon />
        </SearchInput>
        {!hide && (
          <SearchButton>
          <Button type="submit" variant="outline">
            Search
          </Button>
          <Button type="submit" variant="outline">
            Feeling Great
          </Button>
        </SearchButton>

        )}
       
      </form>
    </div>
  );
};

export default Search;
