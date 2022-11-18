import {Box, Container, Typography} from "@mui/material";
import "./style.css";
import {useNavigate} from "react-router-dom";

export default function TransitionScreenSpaceInvader() {
    const navigate = useNavigate();

    const handleClick = () => {
        window.location.href = "/enigma/space/invader";
        }

    return <Box sx={{height:"100vh", width:"100vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <Box sx={{textAlign:"start", display:"flex", flexDirection:"column"}} className="background-square">
            <Box className="annim container-text">
                <Typography variant={"subtitle2"}>{"</"}</Typography>
                <div className={"text-stack"}>
                    <Typography variant={"h3"}>Vous êtes maintenant embarqué dans le voyage vers <span className="bold">la galaxie des axes.</span></Typography>
                    <Typography variant={"h3"}>Mais le calme est de courte durée car en entrant dans la stratosphère, Sup de Pub vous attaque !</Typography>
                    <Typography variant={"h2"}>Il faut vous défendre ...</Typography>
                </div>
            </Box>
            <Box className={"container-button"} onClick={handleClick}>
                <Typography variant={"button"}>CONTINUER</Typography> <span className={"arrow"}>{">"}</span>
            </Box>
        </Box>
    </Box>
}
