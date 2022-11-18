import {Box, Button, TextField, Typography} from "@mui/material";
import "./style.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Dev(){
    const [style, setStyle] = useState("");
    const el = document.getElementById("dev-el");
    const navigate = useNavigate();

    const handleStyleChange = (event: any) => {
        setStyle(event.target.value);
        try {
            el?.setAttribute("style", event.target.value);
            // Check if the style is valid
            if (el !== null) {
                const style = window.getComputedStyle(el);
                if ((style.flexDirection === "column" || style.flexDirection === "column-reverse" ) && style.justifyContent === "space-around" && style.alignItems === "center") {
                    setTimeout(() => {
                        navigate("/transition/unlock");
                    }, 1000);
                }
            }
        } catch (e) {
            console.log("from try",e);
        }
    }

    return <Box sx={{display:"flex", p:1, height:"100vh", width:"100vw", justifyContent:"center", alignItems:"center"}}>
        <Box className="left-part">
            <img src="/assets/images/border-square-cut.svg" alt="" className="img-border"/>
            <Box className="container-title">
                <Typography variant={"subtitle2"}>{"</"}</Typography>
                <div className={"text-stack"}>
                    <Typography variant={"h3"}>Déplacez le fusible sur leur base pour démarrer le vaisseau.</Typography>
                </div>
            </Box>
            <Box className="style-editing">
                <Typography variant={"subtitle1"}>{".fusible {"}</Typography>
                <Box className={"edit-section"}>
                    <Typography variant={"subtitle1"}>display: flex;</Typography>
                    <TextField
                        variant={"standard"}
                        value={style}
                        multiline={true}
                        rows={3}
                        maxRows={3}
                        onChange={handleStyleChange}
                        fullWidth autoFocus
                        InputProps={{disableUnderline: true, style: {backgroundColor: '#1E1E1E', padding: "10px"}}}
                    />
                </Box>
                <Typography variant={"subtitle1"}>{"}"}</Typography>
            </Box>
        </Box>
        <Box className="right-part">
            <Box className="container-fusible">
                <img src="/assets/images/border-square-rect.svg" alt="square border" className={"img-border"}/>
                <Box className="fusible dev" id={"dev-el"}>
                    <div className="elFlex"><div></div></div>
                    <div className="elFlex"><div></div></div>
                    <div className="elFlex"><div></div></div>
                </Box>
                <div className="container-pos">
                    <div className="elPos"></div>
                    <div className="elPos"></div>
                    <div className="elPos"></div>
                </div>
            </Box>
            <Box className="container-law">
                <Box>
                    <Typography variant={"subtitle1"}>flex-direction: column, row, column-reverse, row-reverse</Typography>
                    <Typography variant={"h5"}>{"-> définit la direction de l’objet"}</Typography>
                </Box>
                <Box>
                    <Typography variant={"subtitle1"}>justify-content: space-around, space-between, center, flex-start, flex-end</Typography>
                    <Typography variant={"h5"}>{"-> définit l’alignement des objets sur l’axe principal"}</Typography>
                </Box>
                <Box>
                    <Typography variant={"subtitle1"}>align-items: center, flex-start, flex-end</Typography>
                    <Typography variant={"h5"}>{"-> définit l’alignement des objets sur l’axe secondaire"}</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
}
