import {Box} from "@mui/material";
import "./style.css";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function TransitionScreenUnlock() {
    const navigate = useNavigate();
    useEffect(() => {
        // sleep 2 seconds
        setTimeout(() => {
            navigate("/transition/space/invader");
        }, 2500);
    }, []);

    return <Box sx={{height:"100vh", width:"100vw", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <img src="/assets/images/unloack.gif" alt={"loader"} className={"imgLoader"}/>
    </Box>
}
