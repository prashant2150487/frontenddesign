import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Stack } from '@mui/system';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0,3),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,3),
  createData('Eclair', 262, 16.0, 24, 6.0,3),
  createData('Cupcake', 305, 3.7, 67, 4.3,3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'700',fontSize:'18px'}}>SCHEDULED</TableCell>
            <TableCell align="right" sx={{fontWeight:'800'}}>OPEN</TableCell>
            <TableCell align="right" sx={{fontWeight:'800'}}>BEST ODDS</TableCell>
            <TableCell align="right"><Button variant='contained' sx={{backgroundColor:' #ff0000',fontStyle:'italic'}} >POINTSBET</Button></TableCell>
            <TableCell align="right"><img width={120} height={35}  src='https://www.telecomasia.net/upload/sprint.editor/e1a/e1ad2a034ee204b728feb64684390f02.png' alt='logo'></img></TableCell>
            <TableCell align="right"><img width={120} height={35} src='https://assets.actionnetwork.com/256064_caesars_800x200.png' alt='logo'></img></TableCell>
            <TableCell align="right"><img width={120} height={35} src='https://www.thelines.com/wp-content/uploads/2018/09/FanDuel.png' alt='logo'></img></TableCell>
            <TableCell align="right"><img width={120} height={35}src='https://www.legalsportsreport.com/wp-content/uploads/2018/09/SB_logo_2c_v2.png' alt='logo'></img></TableCell>
            <TableCell align="right"><img width={120} height={35} src='https://cdn.dimers.com/3314/b947340db02a4a174b48bcbdb367b8eb.jpeg' alt='logo'></img></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" mr={2}>
                <Stack direction='row' spacing={2}>
                  <Stack  >
                    <Typography sx={{fontWeight:'800'}}>Ravens</Typography>
                    <Typography variant='body' sx={{fontWeight:'600'}}>101</Typography>
                  </Stack>
                  <Stack><Typography sx={{fontWeight:'800'}}>27</Typography></Stack>
                </Stack>
                
                
                
              </TableCell>
              <TableCell align="right">
                <Stack>
                  <Typography sx={{fontWeight:'800'}}>+3.5</Typography>
                  <Typography>-110</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right">
                <Card sx={{height:"70px",width:'110px',textAlign:'center'}}>
                  <CardContent>
                    <Stack>
                      <Typography sx={{fontWeight:'800'}}>+2.5</Typography>
                      <Typography>-107</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </TableCell>
              <TableCell align="right">
                <Card sx={{height:"70px",width:'110px',textAlign:'center'}}>
                  <CardContent height='60'>
                    <Stack>
                      <Typography sx={{fontWeight:'800'}}>+2.5</Typography>
                      <Typography>-107</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </TableCell>
              <TableCell align="right">
                <Card sx={{height:"70px",width:'110px',textAlign:'center'}}>
                  <CardContent>
                    <Stack>
                      <Typography sx={{fontWeight:'800'}}>+2.5</Typography>
                      <Typography>-107</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </TableCell>
              <TableCell align="right">
                <Card sx={{height:"70px",width:'110px',textAlign:'center'}}>
                  <CardContent>
                    <Stack>
                      <Typography sx={{fontWeight:'800'}}>+2.5</Typography>
                      <Typography>-107</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </TableCell>
              <TableCell align="right">
                <Card sx={{height:"70px",width:'110px',textAlign:'center'}}>
                  <CardContent>
                    <Stack>
                      <Typography sx={{fontWeight:'800'}}>+2.5</Typography>
                      <Typography>-107</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </TableCell>
              <TableCell align="right">
                <Card sx={{height:"70px",width:'110px',textAlign:'center'}}>
                  <CardContent>
                    <Stack>
                      <Typography sx={{fontWeight:'800'}}>+2.5</Typography>
                      <Typography>-107</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </TableCell>
              <TableCell align="right">
                <Card sx={{height:"70px",width:'110px',textAlign:'center'}}>
                  <CardContent>
                    <Stack>
                      <Typography sx={{fontWeight:'800'}}>+2.5</Typography>
                      <Typography>-107</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </TableCell>
              <Typography>Final</Typography>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
