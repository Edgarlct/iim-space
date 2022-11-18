import React, {useEffect} from 'react'
import './App.css'
import {Box, Container, CssBaseline, ThemeProvider} from "@mui/material";
import {muiTheme} from "./muiTheme";
import {Outlet, useNavigate} from "react-router-dom";
import io from 'socket.io-client';
import {unset} from "lodash-es";


function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const audio = new Audio("/public/assets/music/sound-bg.mp3");
        audio.loop = true;
        audio.play();
    }, []);
    return (
        <ThemeProvider theme={muiTheme} >
            <div className={"crt"}>
                <div className={"grain"}>
                    <Box className="background" sx={{height:"100vh", width:"100vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                        <CssBaseline />
                        <Outlet/>
                    </Box>
                </div>
            </div>
        </ThemeProvider>
    )
}


export default App
