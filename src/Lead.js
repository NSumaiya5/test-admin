import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { ButtonGroup } from '@mui/material';
import {Button} from '@mui/material';



const Lead = () => {

    // const columns = [
    //     { field: 'id', headerName: 'ID', width: 50 },
    //     { field: 'Name', headerName: 'Name', width: 140 },
    //     { field: 'Email', headerName: 'Email', width: 250 },
    //     { field: 'Phone', headerName: 'Phone', width: 170 },
    //     { field: 'Organization', headerName: 'Organization', width: 200 },
    //     { field: 'LeadGroup', headerName: 'Lead Group', width: 150 },
    //     { field: 'CreateOn', headerName: 'Create On', width: 150}





        // {
        //   field: 'age',
        //   headerName: 'Age',
        //   type: 'number',
        //   width: 120,
        // },
        // {
        //   field: 'Name',
        //   headerName: 'Name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 100,
        //   valueGetter: (params) =>
        //     `${params.row.Name || ''} ${params.LeadGroup || ''}`,
        // },
    //   ];
      
    //   const rows = [
    //     { id: 1, Name: 'Sumaiya Aktar', Email: 'sumaiyaaktar3029@gmail.com', Phone: '01632193899', Organization:'Innovative Solution', LeadGroup: 'Customer', CreateOn:'21/06/2022'},
    //     { id: 2, Name: 'Iftekar Uddin Rishad', Email: 'iftekharrishad@gmail.com', Phone: '01632193898', Organization:'Walton', LeadGroup: 'Customer', CreateOn:'21/06/2022'},
    //     { id: 3, Name: 'Sumaiya Aktar', Email: 'sumaiyaaktar3029@gmail.com', Phone: '01632193899', Organization:'Innovative Solution', LeadGroup: 'Customer', CreateOn:'21/06/2022'},
    //     { id: 4, Name: 'Sumaiya Aktar', Email: 'sumaiyaaktar3029@gmail.com', Phone: '01632193899', Organization:'Innovative Solution', LeadGroup: 'Customer', CreateOn:'21/06/2022'},
    //     { id: 5, Name: 'Sumaiya Aktar', Email: 'sumaiyaaktar3029@gmail.com', Phone: '01632193899', Organization:'Innovative Solution', LeadGroup: 'Customer', CreateOn:'21/06/2022'},
    //     { id: 6, Name: 'Sumaiya Aktar', Email: 'sumaiyaaktar3029@gmail.com', Phone: '01632193899', Organization:'Innovative Solution', LeadGroup: 'Customer', CreateOn:'21/06/2022'},
    //     { id: 7, Name: 'Sumaiya Aktar', Email: 'sumaiyaaktar3029@gmail.com', Phone: '01632193899', Organization:'Innovative Solution', LeadGroup: 'Customer', CreateOn:'21/06/2022'},
    //     { id: 8, Name: 'Sumaiya Aktar', Email: 'sumaiyaaktar3029@gmail.com', Phone: '01632193899', Organization:'Innovative Solution', LeadGroup: 'Customer', CreateOn:'21/06/2022'},
    //     { id: 9, Name: 'Sumaiya Aktar', Email: 'sumaiyaaktar3029@gmail.com', Phone: '01632193899', Organization:'Innovative Solution', LeadGroup: 'Customer', CreateOn:'21/06/2022'},
    //     { id: 10, Name: 'Sumaiya Aktar', Email: 'sumaiyaaktar3029@gmail.com', Phone: '01632193899', Organization:'Innovative Solution', LeadGroup: 'Customer', CreateOn:'21/06/2022'},
    //   ];
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
       
      }));
      

      

      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      function createData(name, email, phone, organization, status, createdOn) {
        return { name, email, phone, organization, status, createdOn };
      }
      
      const rows = [
        createData('Sumaiya Aktar','sumaiyaaktar3029@gmail.com', '01632193899', 'Innovative Solution', 'Customer','10/03/2022'),
        createData('Iftekher Uddin Rishad','rishad@gmail.com', '01632193898', 'Walton', 'Customer','10/03/2022'),
        createData('Sumaiya Aktar','sumaiyaaktar3029@gmail.com', '01632193899', 'Innovative Solution', 'Customer','10/03/2022'),
        createData('Iftekher Uddin Rishad','rishad@gmail.com', '01632193898', 'Walton', 'Customer','10/03/2022'),
       
       
        // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        // createData('Eclair', 262, 16.0, 24, 6.0),
        // createData('Cupcake', 305, 3.7, 67, 4.3),
        // createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
      

    return (

        <TableContainer component={Paper} className="mt-5">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">Organization</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Created On</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.phone}</StyledTableCell>
                <StyledTableCell align="center"  size="sm">{row.organization}</StyledTableCell>
                <StyledTableCell><Button align="right" className="LeadStatus ms-5"  variant="contained" >{row.status}</Button>
</StyledTableCell>
                <StyledTableCell align="center">{row.createdOn}</StyledTableCell>


              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        // <div style={{ height: 400, width: '100%'}} className="mt-5">
        // <DataGrid
        //   rows={rows}
        //   columns={columns}
        //   pageSize={5}
        //   rowsPerPageOptions={[5]}
        //   checkboxSelection
        // />
  
        //   </div>   
         );
};

export default Lead;





