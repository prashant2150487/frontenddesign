import { Autocomplete, Box, Button, Grid, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';



const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  }
]
function Mid() {
  return (
    <Box sx={{m:4,marginTop:20}}>
      <Typography variant='h4' gutterBottom sx={{fontWeight:'bold'}}>Sports Betting Odds</Typography>
      <Stack direction='row' spacing={2}>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 400,fontWeight:'bold' }}
      renderInput={(params) => <TextField {...params} label="NCAAF" />}
      />
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="Spread" />}
      />
      </Stack>
      
      <Grid sx={{display:'flex' ,justifyContent:'space-between',}} mt={2}>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 600 }}
      renderInput={(params) => <TextField {...params} label="WEEK 8" />}
      />
      {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Odds Settings" />}
      /> */}
      <Button variant="outlined" size='large' color='inherit' startIcon={<TuneOutlinedIcon sx={{color:'#000'}}/>}>
        <Typography sx={{fontWeight:'600',color:'#000'}}>Odds Settings</Typography>
      </Button>
      </Grid>     
    </Box>
  )
}

export default Mid