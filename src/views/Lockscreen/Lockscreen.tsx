import {Box, TextField} from "@mui/material";
import "./style.css";
import {useEffect, useRef, useState} from "react";
import TextNumberUnderline from "../../components/TextNumberUnderline";
import {useNavigate} from "react-router-dom";

export default function Lockscreen(){
    const [nb1, setNb1] = useState("");
    const [nb2, setNb2] = useState("");
    const [nb3, setNb3] = useState("");
    const [nb4, setNb4] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        checkValid();
    }, [nb1, nb2, nb3, nb4]);

    const checkValid = () => {
        if (nb1 === "7" && nb2 === "4" && nb3 === "4" && nb4 === "5") {
            navigate("/welcome");
        } else {
            if (nb1 !== "" && nb2 !== "" && nb3 !== "" && nb4 !== "") {
                setError(true);
            }
        }
    }

    return <Box sx={{display:"flex", p:1, height:"100vh", alignItems:"center", justifyContent:"center", gap:"10px"}}>
        <TextNumberUnderline id={"nb1"} idNext={"nb2"} value={(v:any)=> {setNb1(v)}} error={error}/>
        <TextNumberUnderline id={"nb2"} idNext={"nb3"} value={(v:any)=>{setNb2(v)}} error={error}/>
        <TextNumberUnderline id={"nb3"} idNext={"nb4"} value={(v:any)=> {setNb3(v)}} error={error}/>
        <TextNumberUnderline id={"nb4"} idNext={""} value={(v:any)=> {setNb4(v)}} error={error}/>
    </Box>
}
