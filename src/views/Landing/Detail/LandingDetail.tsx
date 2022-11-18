import {Box, IconButton, Link, Typography} from "@mui/material";
import "./style.css";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Close} from "@mui/icons-material";
export default function LandingDetail() {
    const [data, setData] = useState<{title:string, description:string}>({title: "", description: ""});
    const {axe} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        // read file data_landing.json
        fetch("/public/assets/data/data_landing.json")
            .then(response => response.json())
            .then(data => {
                console.log(data[axe+""]);
                setData(data[axe+""]);
            })
            .catch(error => console.log("error",error));
    }, []);

    return <Box className="background-landing-detail">
        <div className={"btn-container"}>
            <IconButton onClick={()=>navigate("/landing/choose")}>
                <Close/>
            </IconButton>
        </div>
        <Box className="container-planet-detail">
            <div className="planet active"><img src={`/public/assets/images/planet-${axe}.png`} alt="planet cdeb"/></div>
        </Box>
        <Box className="text-container">
            <Box className="text">
                <img src="/public/assets/images/border-text.svg" alt="border text" className="border-text"/>
                <Typography variant={"h6"}>{data.title}</Typography>
                <Typography variant={"body1"}>{data.description}</Typography>
            </Box>
        </Box>
    </Box>
}
