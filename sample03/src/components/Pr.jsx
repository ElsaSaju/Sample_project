

import React from 'react';
import { useEffect} from 'react';
import { useState } from 'react';
import {Card,CardContent,Typography} from '@mui/material';
import axios from 'axios'

const Pr=()=>{
  var[output,setOutput]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      console.log(response.data)
      setOutput(response.data)
    })
    .catch(()=>{ console.log(error) })
  
  },[])
  


  return (
    <>
    {output.map((val,i)=>{
        return(
          <>
          <Card sx={{color:"bisque",outlineColor:"aqua",outlineWidth:6,outlineOffset:4}}>
            <CardContent>
              <Typography style={{color:"green",fontFamily:'-moz-initial',fontSize:"15px",textAlign:"center"}}>
                userId:{val.userId}

              </Typography>
              <Typography style={{color:"green",fontFamily:'-moz-initial',fontSize:"15px",textAlign:"center"}}>
                Id:{val.id}

              </Typography>
              <Typography style={{color:"green",fontFamily:'-moz-initial',fontSize:"15px",textAlign:"center"}}>
                title:{val.title}

              </Typography><br/>
              <Typography style={{color:"green",fontFamily:'-moz-initial',fontSize:"15px",textAlign:"center"}}>
                body:{val.body}

              </Typography>
              
            </CardContent>
          </Card>
          <br/>
          </>
        )
      })}
    
    </>
  )
}


export default Pr;