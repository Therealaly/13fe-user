//import './App.css';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import TopBar from "./pages/Global/TopBar";
import Dashboard from "./pages/Dashboard";
import SideBar from './pages/Global/SideBar';
import User from "./pages/team";
import Room from "./pages/Room";
// import CreateRoom from "./pages/CreateRoom";
// import RoomHistory from "./pages/RoomHistory";


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
              <Route path='/room' element={<Room/>} />
              {/* <Route path='/room/history' element={<CreateRoom/>} />
              <Route path='/room/create' element={<CreateRoom/>} /> */}
            </Routes>
          </main>  
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
