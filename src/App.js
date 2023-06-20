//import './App.css';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import TopBar from "./pages/Global/TopBar";
import Dashboard from "./pages/Dashboard";
import SideBar from './pages/Global/SideBar';
import User from "./pages/team";
import Room from "./pages/Room";
import CreateRoom from "./pages/CreateRoom";
import NewRoom from "./pages/CreateRoom/NewRoomView.jsx"
import EditRoom from "./pages/CreateRoom/EditRoomView.jsx"
// import RoomHistory from "./pages/RoomHistory";
import SignIn from "./pages/SignIn/SignIn.js"
import Register from "./pages/SignIn/Register.js" 

import ReactDOM from "react-dom";
   import { BrowserRouter } from "react-router-dom";

   

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Routes>
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
      </Routes>
      </BrowserRouter>,
      rootElement
    );

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <SideBar />
          <main className='content'>
            <TopBar />  
            <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/user' element={<User/>} />
              <Route path='/reservation' element={<Room/>} />
              {/* <Route path='/room/history' element={<CreateRoom/>} /> */}
              <Route path='/room' element={<CreateRoom/>} />
              <Route path='/room/create' element={<NewRoom/>} />
              <Route path='/room/edit' element={<EditRoom/>} />
              <Route path='/signin' element={<SignIn/>} />
              <Route path='/register' element={<Register/>} />
            </Routes>
          </main>  
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
