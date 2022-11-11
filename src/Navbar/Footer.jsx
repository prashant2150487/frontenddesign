import { Autocomplete, Box, Button, Card, CardContent, Divider, Grid, ImageList, ImageListItem, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import BasicTable from './Lefttable'


const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
]
function Footer() {
  return (
    <div sx={{mt:5}}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <BasicTable/>                   
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent >
                            <Stack direction='row' spacing={4}>
                                <Typography variant='h5' mt={1} sx={{textAlign:'center',fontWeight:'700'}}>Promotions</Typography>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField {...params} label="Movie" />}
                                    />
                            </Stack>
                        </CardContent>
                        <Divider />

                        <CardContent>
                            <Typography variant='h5' sx={{textAlign:'center',fontWeight:'600',mx:"10px"}}>No Promotions Available. Try Selecting a different Location.</Typography>
                        </CardContent>
                    </Card>
                    
                    <Card sx={{mt:3}}>
                        <CardContent>
                            <Stack direction='row'  spacing={28}>
                                <Typography variant='h5' m={1} sx={{color:'#000',fontWeight:'600'}}>NFL Teams</Typography>
                                <Button sx={{fontWeight:'1000'}}>All Teams</Button>
                            </Stack>
                            <Stack ml={3}>
                                <Typography variant='h6' sx={{color:'#000',fontWeight:'600',m:1}}>Cininnati Bengals</Typography>
                                <Typography variant='h6' sx={{color:'#000',fontWeight:'600',m:1}}>Los Angeles Rams</Typography>
                                <Typography variant='h6' sx={{color:'#000',fontWeight:'600',m:1}}>San Francisco 49ers</Typography>
                                <Typography variant='h6' sx={{color:'#000',fontWeight:'600',m:1}}>Kansas City Chiefs</Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                
            </Grid>
        </Box>
    </div>
  )
}

export default Footer