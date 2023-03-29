import React, { useState } from "react";
import TopBar from "../../../components/top-bar/TopBar";
import { useReactToPrint } from "react-to-print"
import "./resume.css"
import { useRef } from 'react';

const Resume = () => {

    const resume = useRef();
    const handlePrint = useReactToPrint({
        content: () => resume.current,
        documentTitle: 'emp-data',
        // onAfterPrint:()=> alert("Print Sucessfull.")
    })

    const [backgroundImage, setBackgroundImage] = useState('https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png');

    const handleUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setBackgroundImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };
    return (
        <>
            <TopBar />
            <div ref={resume} className="main_resume container">
                <div className="title">
                    <h1>Resume</h1>
                </div>
                <div className="resume">
                    <div className="left">
                        <div className="profile-img" style={{ backgroundImage: `url(${backgroundImage})` }} onClick={() => document.getElementById('fileInput').click()}>
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleUpload}
                            />
                        </div>

                        <div className="block">
                            <div className="heading">
                                {/* <p>Contact Details</p>
                                <div className="heading-hr"/> */}
                                <p className="hr-lines">CONTACT DETAILS</p>
                            </div>

                        </div>

                    </div>
                    <div className="right">
                        RIGHT
                    </div>
                </div>
            </div>
            <button onClick={handlePrint}> Press it</button>

        </>
    );
}

export default Resume;