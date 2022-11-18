import {Box, Container, Typography} from "@mui/material";
import "./style.css";
import {useNavigate} from "react-router-dom";

export default function TransitionScreenCDEB() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/landing/choose");
    }

    return <Box sx={{height:"100vh", width:"100vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <Box sx={{textAlign:"start", display:"flex", flexDirection:"column"}} className="background-square">
            <Box className="annim container-text">
                <Typography variant={"subtitle2"}>{"</"}</Typography>
                <div className={"text-stack"}>
                    <Typography variant={"h3"}>Vous êtes sur le point de <span className="bold">repartir</span>.</Typography>
                    <Typography variant={"h3"}>Les communications avec la tour de contrôle sont rétablies.</Typography>
                    <Typography variant={"h3"}><span className="bold">Transmettez les data importantes</span> que vous trouverez sur <span className="bold">le tableau de bord</span> à la tour.</Typography>
                    <Typography variant={"h3"}>Vous pourrez ensuite <span className="bold">terminer votre voyage</span> en toute sécurité !</Typography>
                </div>
            </Box>
            <Box className={"container-button"} onClick={handleClick}>
                <Typography variant={"button"}>CONTINUER</Typography> <span className={"arrow"}>{">"}</span>
            </Box>
        </Box>
    </Box>
}
