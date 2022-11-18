import {Box, Container, Typography} from "@mui/material";
import "./style.css";
import {useNavigate} from "react-router-dom";

export default function TransitionScreenWelcome() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/loading");
    }

    return <Box sx={{height:"100vh", width:"100vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <Box sx={{textAlign:"start", display:"flex", flexDirection:"column"}} className="background-square">
            <Box className="annim container-text">
                <Typography variant={"subtitle2"}>{"</"}</Typography>
                <div className={"text-stack"}>
                    <Typography variant={"h3"}>Bienvenue à bord de la navette pour la mission <span className="bold">Opengate34</span>.</Typography>
                    <Typography variant={"h3"}>Il est temps pour vous de décoller. Pour ce faire, vous devez trouver comment</Typography>
                    <Typography variant={"h2"}>allumer les fusibles pour démarrer les réacteurs...</Typography>
                </div>
            </Box>
            <Box className={"container-button"} onClick={handleClick}>
                <Typography variant={"button"}>CONTINUER</Typography> <span className={"arrow"}>{">"}</span>
            </Box>
        </Box>
    </Box>
}
