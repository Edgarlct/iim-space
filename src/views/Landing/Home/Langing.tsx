import {Box, Link, Typography} from "@mui/material";
import "./style.css";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
export default function Landing() {
    const navigate = useNavigate();

    useEffect(() => {
        const arrowListener = document.onkeydown = (e) => {
            if (e.key === "ArrowRight") {
                handleChangeCarousel("left")
                console.log("right");
            }
            if (e.key === "ArrowLeft") {
                console.log("left");
                handleChangeCarousel("right")
            }
        }
        return () => {
            document.onkeydown = null;
        }

    },[]);

    const handleChangeCarousel = (direction:string) => {
        const containerPlanet = document.getElementById("container-planet");
        let planets:any = containerPlanet?.childNodes;
        if (planets) {
            const dots = document.getElementById("dot-container");
            // We want to keep only element with class "planet"
            planets = Array.from(planets).filter((planet:any) => planet.classList.contains("planet"));
            // if direction is left the class active move to the left of the list
            if (direction === "left") {
                const active:any = Array.from(planets).find((planet:any) => planet.classList.contains("active"));
                const left:any = Array.from(planets).find((planet:any) => planet.classList.contains("left"));
                const right:any = Array.from(planets).find((planet:any) => planet.classList.contains("right"));
                if (active) {
                    active.classList.remove("active");
                    active.classList.add("left");
                    if (left) {
                        left.classList.remove("left");

                    }
                    if (right) {
                        right.classList.remove("right")
                        right.classList.add("active");
                        if (right.nextElementSibling) {
                            right.nextElementSibling.classList.add("right");
                        } else {
                            planets[0].classList.add("right");
                        }
                    }
                } else {
                    planets[0].classList.add("active");
                    planets[1].classList.add("right");
                    planets[planets.length - 1].classList.add("left");
                }
            }
            // if direction is right the class active move
            if (direction === "right") {
                const active:any = Array.from(planets).find((planet:any) => planet.classList.contains("active"));
                const left:any = Array.from(planets).find((planet:any) => planet.classList.contains("left"));
                const right:any = Array.from(planets).find((planet:any) => planet.classList.contains("right"));
                if (active) {
                    active.classList.remove("active");
                    active.classList.add("right");
                    if (right) {
                        right.classList.remove("right");
                    }
                    if (left) {
                        left.classList.remove("left");
                        left.classList.add("active");
                        if (left.previousElementSibling) {
                            left.previousElementSibling.classList.add("left");
                        } else {
                            planets[planets.length - 1].classList.add("left");
                        }
                    }
                } else {
                    planets[0].classList.add("active");
                    planets[1].classList.add("right");
                    planets[planets.length - 1].classList.add("left");
                }
            }
            // get index of active planet
            const index = Array.from(planets).findIndex((planet:any) => planet.classList.contains("active"));
            // get class of element with class active
            const active:any = Array.from(planets).find((planet:any) => planet.classList.contains("active"));
            const name = active?.classList[0];
            // set active dot to the index of active planet
            if (dots) {
                // remove active class from all dots
                Array.from(dots.childNodes).forEach((dot:any) => dot.classList.remove("active"));
                const dot:any = dots.childNodes[index];
                dot.classList.add("active");
            }

            const nameTypo:any = document.getElementById("title-planet");
            nameTypo.textContent = name;
        }

    }

    const handleClick = (axe:string) => {
        navigate("/landing/detail/" + axe);
    }

    return <Box className="background-landing">
        <Typography variant={"h1"}>Galaxie des Axes</Typography>
        <Box className="container-planet">
            <img src="/assets/images/border-rect-white.svg" alt="border" className="border"/>
            <div onClick={()=>{handleChangeCarousel("right")}} className={"arrow arrow-left"}>
                <img src="/assets/images/arrow-left.svg" alt="arrow left"/>
            </div>
            <div onClick={()=>{handleChangeCarousel("left")}} className={"arrow arrow-right"}>
                <img src="/assets/images/arrow-right.png" alt="arrow right"/>
            </div>
            <div id="container-planet" className="container">
                <div className="cd planet left" onClick={()=>handleClick("cd")}><img src="/assets/images/planet-crea.png" alt="planet cdeb"/></div>
                <div className="cdeb planet active" onClick={()=>handleClick("cdeb")}><img src="/assets/images/planet-cdeb.png" alt="planet cdeb"/></div>
                <div className="cdi planet right" onClick={()=>handleClick("cdi")}><img src="/assets/images/planet-cdi.png" alt="planet cdeb"/></div>
                <div className="3d planet" onClick={()=>handleClick("3d")}><img src="/assets/images/planet-3d.png" alt="planet 3d"/></div>
                <div className="jv planet" onClick={()=>handleClick("jv")}><img src="/assets/images/planet-jv.png" alt="planet jv"/></div>
            </div>
        </Box>
        <Typography variant={"h4"} id={"title-planet"} sx={{textTransform:"uppercase", textAlign:"center", padding:"0 2rem 0 3.5rem"}}>CDEB</Typography>
        <Box className="dot-container" id={"dot-container"}>
            <div className="dot"></div>
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </Box>
        <Box sx={{display:"flex", justifyContent:"space-between", width:"90%", margin:"0 auto"}}>
            <Typography variant={"h4"}>#spaceimm2022</Typography>
            <div className={"link-container"}>
                <img src="/assets/images/sound.gif" alt="sound animation"/>
                <Link variant={"h4"} href={"https://www.instagram.com/iim_paris"} className={"link"}>instagram</Link>
                <Link variant={"h4"} href={"https://twitter.com/iimparis"} className={"link"}>twitter</Link>
                <Link variant={"h4"} href={"https://www.youtube.com/user/chaineIIM"} className={"link"}>youtube</Link>
            </div>
        </Box>
    </Box>
}
