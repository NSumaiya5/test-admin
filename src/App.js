import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import bull from './From.js';
import Lead from './Lead';
import Leads from './LeadHome';


import './App.css';
import './Css/Login/LoginFrom.css'

import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';





const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (

    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        
        {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}  /> */}
        {/* <Resource name="users" list={UserList} icon={UserIcon} /> */}
        {/* <Resource  name="From" list={bull} icon={PostIcon} /> */}
        <Resource name="Lead" list={Leads} icon={UserIcon} />

        {/* <Resource name="Lead" list={Lead} icon={UserIcon} /> */}



    </Admin>

);




export default App;
