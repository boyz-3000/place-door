import React from "react";
import TopBar from "../../../components/top-bar/TopBar";
import { useReactToPrint } from "react-to-print"
import "./resume.css"
import { useRef } from 'react';


const Resume=()=>{

    const componentRef=useRef();
    const handlePrint = useReactToPrint({
        content:()=> componentRef.current,
        documentTitle:'emp-data',
        onAfterPrint:()=> alert("Print Sucessfull.")
    })
    return(
        <>
        <TopBar/>
        <div ref={componentRef} className="main_resume container">
            <div className="title">
                <h1>Toyota Fortuner</h1>
            </div>
            <div className="image">
                <img src="https://imgs.search.brave.com/fzZ_PDlGerTE_O8fX6OYJgmWuufqwCgOVy7MZaBgRBE/rs:fit:1200:795:1/g:ce/aHR0cHM6Ly9jZG5p/LmF1dG9jYXJpbmRp/YS5jb20vVXRpbHMv/SW1hZ2VSZXNpemVy/LmFzaHg_bj1odHRw/czolMkYlMkZjZG5p/LmF1dG9jYXJpbmRp/YS5jb20lMkZFeHRy/YUltYWdlcyUyRjIw/MjEwMjE4MDM1OTA3/X0ZvcnR1bmVyX29m/Zl9yb2FkX3RyYWNr/aW5nXy5qcGcmaD03/OTUmdz0xMjAwJmM9/MQ"></img>
                <img src="https://imgs.search.brave.com/fzZ_PDlGerTE_O8fX6OYJgmWuufqwCgOVy7MZaBgRBE/rs:fit:1200:795:1/g:ce/aHR0cHM6Ly9jZG5p/LmF1dG9jYXJpbmRp/YS5jb20vVXRpbHMv/SW1hZ2VSZXNpemVy/LmFzaHg_bj1odHRw/czolMkYlMkZjZG5p/LmF1dG9jYXJpbmRp/YS5jb20lMkZFeHRy/YUltYWdlcyUyRjIw/MjEwMjE4MDM1OTA3/X0ZvcnR1bmVyX29m/Zl9yb2FkX3RyYWNr/aW5nXy5qcGcmaD03/OTUmdz0xMjAwJmM9/MQ"></img>
                <img src="https://imgs.search.brave.com/fzZ_PDlGerTE_O8fX6OYJgmWuufqwCgOVy7MZaBgRBE/rs:fit:1200:795:1/g:ce/aHR0cHM6Ly9jZG5p/LmF1dG9jYXJpbmRp/YS5jb20vVXRpbHMv/SW1hZ2VSZXNpemVy/LmFzaHg_bj1odHRw/czolMkYlMkZjZG5p/LmF1dG9jYXJpbmRp/YS5jb20lMkZFeHRy/YUltYWdlcyUyRjIw/MjEwMjE4MDM1OTA3/X0ZvcnR1bmVyX29m/Zl9yb2FkX3RyYWNr/aW5nXy5qcGcmaD03/OTUmdz0xMjAwJmM9/MQ"></img>
                <img src="https://imgs.search.brave.com/fzZ_PDlGerTE_O8fX6OYJgmWuufqwCgOVy7MZaBgRBE/rs:fit:1200:795:1/g:ce/aHR0cHM6Ly9jZG5p/LmF1dG9jYXJpbmRp/YS5jb20vVXRpbHMv/SW1hZ2VSZXNpemVy/LmFzaHg_bj1odHRw/czolMkYlMkZjZG5p/LmF1dG9jYXJpbmRp/YS5jb20lMkZFeHRy/YUltYWdlcyUyRjIw/MjEwMjE4MDM1OTA3/X0ZvcnR1bmVyX29m/Zl9yb2FkX3RyYWNr/aW5nXy5qcGcmaD03/OTUmdz0xMjAwJmM9/MQ"></img>
                <img src="https://imgs.search.brave.com/fzZ_PDlGerTE_O8fX6OYJgmWuufqwCgOVy7MZaBgRBE/rs:fit:1200:795:1/g:ce/aHR0cHM6Ly9jZG5p/LmF1dG9jYXJpbmRp/YS5jb20vVXRpbHMv/SW1hZ2VSZXNpemVy/LmFzaHg_bj1odHRw/czolMkYlMkZjZG5p/LmF1dG9jYXJpbmRp/YS5jb20lMkZFeHRy/YUltYWdlcyUyRjIw/MjEwMjE4MDM1OTA3/X0ZvcnR1bmVyX29m/Zl9yb2FkX3RyYWNr/aW5nXy5qcGcmaD03/OTUmdz0xMjAwJmM9/MQ"></img>
            
            
            
            </div>
        </div>
        <button onClick={handlePrint}> Press it</button>

        </>
    );
}

export default Resume;