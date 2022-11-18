import {Box} from "@mui/material";
import "./style.css";
import {useEffect} from "react";

export default function SpaceInvader(){

    useEffect(() => {
        const script = document.createElement("script");

        script.src = "/index.js";

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [])

    return <Box id={"canvas-container"}>
        <canvas id="game-canvas" width="640" height="640"></canvas>
    </Box>
}
