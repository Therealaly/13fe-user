import { React, useState} from 'react'
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Box, Typography, useTheme, Button, Tooltip, IconButton, TextField, Stack, InputLabel, Input} from '@mui/material'
import { FormControl } from '@mui/material';



const NewRoomView = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [formData, setFormData] = useState({name: "",desc: "",photo: ""});

    const handleSubmit = (event) => {
        event.preventDefault();
        // API Create new room
    };
    
  return (
    <Box m="20px">
        <Header title="CREATE NEW ROOM" subtitle="Add a New Room To The Database"/>
        <Box>
        
            <form onSubmit={handleSubmit}>
            <Stack spacing={3} direction="column">
                <FormControl required >
                    <TextField id="name" label="Room Name" variant="outlined" sx={{ width: "300px" }} value={formData.name} onChange={(e) => setFormData(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <TextField id="photo" label="Photo URL" variant="outlined" sx={{ width: "300px" }} value={formData.photo} onChange={(e) => setFormData(e.target.value)}/>
                </FormControl>
                <FormControl required>
                    <TextField id="desc" label="Room Description" variant="outlined" multiline={true} rows={3} sx={{ width: "500px"}} value={formData.desc} onChange={(e) => setFormData(e.target.value)}/>
                </FormControl>
                <Button variant="contained" color='secondary' sx={{ width: "150px" }}>Add New Room</Button>
            </Stack>
            </form>
        
        </Box>
    </Box>
  )
}

export default NewRoomView