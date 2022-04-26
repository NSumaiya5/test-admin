import React from 'react';
import { Box, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Lead from './Lead';
import SearchIcon from '@mui/icons-material/Search';
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const element = <FontAwesomeIcon className="ms-5 mt-2" icon={faMagnifyingGlass} />




const LeadHome = () => {

 
      
    return (


            <div>
                        <div className="mt-4 row">

<div className="col-md-4">
<ToggleButtonGroup>
      <ToggleButton className="leadWidth" value="web">People</ToggleButton>
      <ToggleButton className="leadWidth" value="android">Organization</ToggleButton>
    </ToggleButtonGroup>

</div>
<div className="col-md-4">

    <Box className="box" align="right"  >{element}</Box>
</div>
<div className="col-md-4">

    <Button  align="right" className=" ms-5"  variant="contained" >Add Person</Button>
</div>
</div>

            <Lead></Lead>
        </div>
    );
};

export default LeadHome;