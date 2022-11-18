import {Box, Container, Typography} from "@mui/material";
import "./style.css";
import {useNavigate} from "react-router-dom";

export default function TransitionScreenCongratulation() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/transition/3D");
    }

    return <Box sx={{height:"100vh", width:"100vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <Box sx={{textAlign:"start", display:"flex", flexDirection:"column"}} className="background-square">
            <Box className="annim container-text">
                <Typography variant={"subtitle2"}>{"</"}</Typography>
                <div className={"text-stack"}>
                    <Typography variant={"h3"}><span className="bold">BIEN JOUÉ !</span></Typography>
                    <Typography variant={"h3"} sx={{textTransform:"uppercase"}}>vous avez Défendu le SPACEIIM Avec succès!</Typography>
                    <Typography variant={"h3"} sx={{textTransform:"uppercase"}}>Vous allez MAINTENANT POUVOIR naviguer dans la galaxie des axes ...</Typography>
                </div>
            </Box>
            <Box className={"container-button"} onClick={handleClick}>
                <Typography variant={"button"}>CONTINUER</Typography> <span className={"arrow"}>{">"}</span>
            </Box>
        </Box>
    </Box>
}
