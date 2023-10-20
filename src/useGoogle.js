import React, { useEffect, useState } from 'react'

const apiKey= "AIzaSyCwNSHXdUVtQ1pBE5RrF1YvhqNNyAk3T2Q"
const apiCx= "264e76a229b3a4cfd"

const  useGoogle= term=> {
    const [data , setData] = useState(null)
    useEffect(()=>{
        fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY
    }&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${term}`)
        .then(res => res.json())
        .then(result =>{
            setData(result)
        });
    },[term]);

console.log(data)

  return (
   <>
   {data}
   </>
  ) 
}
export default useGoogle