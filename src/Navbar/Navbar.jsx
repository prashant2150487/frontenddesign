import { AppBar, Button, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Stack } from '@mui/system';
import ArticleIcon from '@mui/icons-material/Article';

function Navbar() {
  return (
    <div>
        <AppBar height={7} sx={{background:'#ffffff'}}>
        <Toolbar >
            <Typography variant='h1' sx={{color:'black',mr:1,fontSize:'35px',fontWeight:'bold',my:1}}>ACTION</Typography>
            <IconButton edge='start' size='large' color='inherit'>
              <CheckCircleOutlineIcon display='block' sx={{color:'green',}} />
            </IconButton>
            <Stack direction='row' spacing={1} height={1} mr={30} ml={1}>
              <Button sx={{color:'#000',fontWeight:'1000',textTransform:'none',fontSize:"20px"}}>Sports</Button>
              <Button sx={{color:'#000',fontWeight:'1000',textTransform:'none',fontSize:"20px"}}>Odds</Button>
              <Button sx={{color:'#000',fontWeight:'1000',textTransform:'none',fontSize:"20px"}}>Pics</Button>
              <Button sx={{color:'#000',fontWeight:'1000',textTransform:'none',fontSize:"20px"}}>Legal Betting</Button>
              <Button sx={{color:'#000',fontWeight:'1000',textTransform:'none',fontSize:"20px"}}>SportsBooks</Button>
              <Button sx={{color:'#000',fontWeight:'1000',textTransform:'none',fontSize:"20px"}}>Education</Button>
              <Button sx={{color:'#000',fontWeight:'1000',textTransform:'none',fontSize:"20px"}}>Resources</Button>
            </Stack>
            <Stack direction='row' spacing={1}>
              <Button sx={{color:'#000',fontWeight:'1000',p:1}}>Log In</Button>
              <Button variant='contained' sx={{color:'#ffffff',fontWeight:'900'}}>TRY FOR FREE</Button>
              <Button><ArticleIcon sx={{color:'#000'}}/></Button>
            </Stack>
        </Toolbar>
        <Divider></Divider>
        <Toolbar mt={2}>
          <Stack direction='row'  spacing={2}>
            <Button sx={{color:'#000000',fontSize:17,textTransform:'none'}} >Public Betting</Button>
            <Button sx={{color:'#000000',fontSize:17,textTransform:'none'}}>Pro Report</Button>
            <Button sx={{color:'#000000',fontSize:17,textTransform:'none'}}>PRO Projections</Button>
            <Button sx={{color:'#000000',fontSize:17,textTransform:'none'}}>Game Odds</Button>
            <Button sx={{color:'#000000',fontSize:17,textTransform:'none'}}>Future Odds</Button>
            <Button sx={{color:'#000000',fontSize:17,textTransform:'none'}}>NFL</Button>
            <Button sx={{color:'#000000',fontSize:17,textTransform:'none'}}>NCAAF</Button>
            <Button sx={{color:'#000000',fontSize:17,textTransform:'none'}}>NBA</Button>
            <Button sx={{color:'#000000',fontSize:17,textTransform:'none'}}>NCAAB</Button>
            <Button sx={{color:'#000000',fontSize:17,textTransform:'none'}}>Golf</Button>
            <Button sx={{color:'#000000',fontSize:17,textTransform:'none'}}>UFC</Button>
            <Button sx={{color:'#000000',fontSize:17,textTransform:'none'}}>Soccer</Button>
            <Button sx={{color:'#000000',fontSize:17,textTransform:'none'}}>MLB</Button>
            <Button sx={{color:'#000000',fontSize:17,textTransform:'none'}}>NHL</Button>
          </Stack>
        </Toolbar>
        
        
        
    </AppBar>
    </div>
    
  )
}

export default Navbar