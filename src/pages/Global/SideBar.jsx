import React from 'react';
import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
      
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  
  return (
    <Box >
    <Sidebar
      backgroundColor= {colors.primary[400]}
      padding= "5px 35px 5px 20px"
      style={{ height: "100vh"}}
    >
      <Menu 
        iconShape="square"
        menuItemStyles={{
          button: {
                '&:hover': {
                   backgroundColor: '#868dfb',
                },
            },
        }}
      >
        <Box
          margin= "15px"
          textAlign= "start"
        >
          <Typography variant="h3" color={colors.grey[100]}>
            Admin Dashboard
          </Typography>
        </Box>
        <Box mb="25px">
          <Box textAlign="center">
            <Typography
              variant="h2"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" }}
            >
              admin
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              adminApp@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box paddingLeft={"10%"}>
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected} />
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
          </Typography>
          <Item
            title="Users"
            to="/user"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected} />
          <Item
            title="Room"
            to="/room"
            icon={<BusinessOutlinedIcon />}
            selected={selected}
            setSelected={setSelected} />
           <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Room Management
          </Typography>
          <Item
            title="Add Room"
            to="/room/create"
            icon={<DomainAddOutlinedIcon />}
            selected={selected}
            setSelected={setSelected} />
          <Item
            title="Reservation History"
            to="/room/history"
            icon={<HistoryOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected} />
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Exit
          </Typography>  
          <MenuItem
            component={<Link to='#'/>}
            icon={<LogoutOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            menuItemStyles={{
              button: {
                    '&:hover': {
                       backgroundColor: 'red',
                    },
                },
            }}
            >Log Out</MenuItem>
        </Box>
      </Menu>
    </Sidebar>
    </Box>
  )
}

export default SideBar

    