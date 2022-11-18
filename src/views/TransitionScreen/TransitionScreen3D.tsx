import {Box, Container, Typography} from "@mui/material";
import "./style.css";
import {useNavigate} from "react-router-dom";

export default function TransitionScreen3D() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/transition/cdeb");
    }

    return <Box sx={{height:"100vh", width:"100vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <Box sx={{textAlign:"start", display:"flex", flexDirection:"column"}} className="background-square">
            <Box className="annim container-text">
                <Typography variant={"subtitle2"}>{"</"}</Typography>
                <div className={"text-stack"}>
                    <Typography variant={"h3"}>Le vaisseau a subit des dégâts. <span className="bold">Vous devez le réparer.</span></Typography>
                    <Typography variant={"h3"}>Le système d’auto-réparation à pu récupérer les pièces les plus importantes.</Typography>
                    <Typography variant={"h2"}>Assemblez les pour continuer le voyage et atteindre votre destination.</Typography>
                </div>
            </Box>
            <Box className={"container-button"} onClick={handleClick}>
                <Typography variant={"button"}>CONTINUER</Typography> <span className={"arrow"}>{">"}</span>
            </Box>
        </Box>
    </Box>
}
