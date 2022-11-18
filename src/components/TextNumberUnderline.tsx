import {TextField} from "@mui/material";
import {useState} from "react";

export default function TextNumberUnderline(props: {id: string, idNext:string, value:any, error?:boolean}) {
    const [value, setValue] = useState('');
    return (
        <TextField variant={"standard"} value={value} color={"info"} id={props.id}
                   onChange={(e)=> {
                       const regex = /^[0-9\b]+$/;
                       if (e.target.value == "" || regex.test(e.target.value)) {
                           setValue(e.target.value);
                           if (e.target.value !== "") {
                               props.value(e.target.value);
                               if (props.idNext !== "") {
                                   document.getElementById(props.idNext)?.focus();
                               }
                           }
                       }
                   }} sx={{width:"20px"}} autoFocus={props.id === "nb1"} error={props.error}
                   inputProps={{maxLength:1, style:{textAlign:"center", color:"white"}}}
        />
    )
}
