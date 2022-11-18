import {Box} from "@mui/material";
import "./style.css";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function TransitionScreenLoading() {
    const navigate = useNavigate();
    useEffect(() => {
        // sleep 2 seconds
        setTimeout(() => {
            navigate("/enigma/cdi");
        }, 2000);
    }, []);

    return <Box sx={{height:"100vh", width:"100vw", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <img src="/public/assets/images/loader.gif" alt={"loader"} className={"imgLoader"}/>
    </Box>
}
