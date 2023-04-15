import React, { useState } from "react";
import TopBar from "../../../components/top-bar/TopBar";
import { useReactToPrint } from "react-to-print"
import "./resume.css"
import { useRef } from 'react';
import { WithContext as ReactTags } from "react-tag-input";
import Page0 from "./page0";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";

const Resume2 = () => {

    const [educationList, setEducationList] = useState([{ educationFrom: '', location: '' }]);

    const [currPage, setCurrPage] = useState(1);

    const handleCurrPage = (e) => {
        let _name = e.target.name;
        console.log(_name);
        console.log(currPage);
        if  (_name==="previous") {
            if (currPage>0) {
                setCurrPage(currPage-1);
            }
        } else {
            if (currPage<5) {
                setCurrPage(currPage+1);
            }
        }
    }

    const handleUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setBackgroundImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const [backgroundImage, setBackgroundImage] = useState('https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png');


    return (
        <>
            <TopBar />

            <div className="resume">
                <div className="resume-form">
                    <div className="left">
                        <h1>Hi, M S Dhoni!!</h1>
                        <div className="profile-div">
                            <div className="profile-img" style={{ backgroundImage: `url(${backgroundImage})` }} onClick={() => document.getElementById('fileInput').click()}>
                                <input
                                    id="fileInput"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleUpload}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        { currPage === 0 && <Page0 /> }
                        { currPage === 1 && <Page1 /> }
                        { currPage === 2 && <Page2 /> }
                        { currPage === 3 && <Page3 /> }
                        { currPage === 4 && <Page4 /> }
                        { currPage === 5 && <Page5 /> }
                        
                        <div className="bottom">
                            {currPage!=0 && <button className="prev-button" name="previous" onClick={(e) => handleCurrPage(e)}>Previous</button>}
                            <button className="next-button" name="next" onClick={(e) => handleCurrPage(e)}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume2;