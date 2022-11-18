import React from "react";
import {Box, Button, TextField} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {toInteger} from "lodash-es";

export default function DallE() {
    const [text, setText] = React.useState("");
    const [color, setColor] = React.useState("");
    const [nb, setNb] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    const [images, setImages] = React.useState([]);

    const search = () => {
        setLoading(true);
        fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },
            body: JSON.stringify({
                "prompt": text,
                "n": nb,
                "size": "512x512"
            })
        })
            .then(res => res.json())
            .then(res => {
                let url:any = [];
                res.data.map((data:any) => {
                    url.push(data.url);
                })
                setImages(url);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            })

    }

    return <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", height:"100vh", gap:5, p:"2rem"}}>
        <Box sx={{display:"flex", alignItems:"center", gap:2}}>
        {/*  We need a textarea with mui  */}
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                sx={{width:'400px'}}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        {/*    we need a count input with mui */}
            <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                value={nb}
                onChange={(e) => {
                    setNb(toInteger(e.target.value))
                    console.log(e.target.value)
                }}
            />
        </Box>
        <LoadingButton loading={loading} variant={"outlined"} onClick={search}>Envoyer</LoadingButton>
        <Box sx={{display:"flex", flex:1, gap:0.5, alignItems:"center", flexWrap:"wrap"}}>
            {images.map((image, index) => {
                return <Box>
                    <img key={index} src={image} alt={index+""} style={{width:"200px", height:"200px"}}/>
                </Box>
            })}
        </Box>
    </Box>
}
