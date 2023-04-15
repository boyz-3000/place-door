import React, { useState } from "react";
import TopBar from "../../../components/top-bar/TopBar";
import { useReactToPrint } from "react-to-print"
import "./resume.css"
import { useRef } from 'react';
import { WithContext as ReactTags } from "react-tag-input";

const Resume = () => {
    const resume = useRef();
    const handlePrint = useReactToPrint({
        content: () => resume.current,
        documentTitle: 'emp-data',
        // onAfterPrint:()=> alert("Print Sucessfull.")
    })

    const [name, setName] = useState("Ayush");

    const [backgroundImage, setBackgroundImage] = useState('https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png');

    const handleUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setBackgroundImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const [skills, setSkills] = React.useState([]);

    const handleSkillsTagDelete = (i) => {
        setSkills(skills.filter((tag, index) => index !== i));
    };

    const handleSkillsTagAddition = (tag) => {
        setSkills([...skills, tag]);
    };

    const handleSkillsTagDrag = (tag, currPos, newPos) => {
        const newTags = skills.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setSkills(newTags);
    };

    const handleSkillsTagClick = (index) => {
        console.log("The tag at index " + index + " was clicked");
    };

    const [certificates, setCertificates] = React.useState([]);

    const handleCertificatesTagDelete = (i) => {
        setCertificates(certificates.filter((tag, index) => index !== i));
    };

    const handleCertificatesTagAddition = (tag) => {
        setCertificates([...certificates, tag]);
    };

    const handleCertificatesTagDrag = (tag, currPos, newPos) => {
        const newTags = certificates.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setCertificates(newTags);
    };

    const handleCertificatesTagClick = (index) => {
        console.log("The tag at index " + index + " was clicked");
    };

    const [cources, setCources] = React.useState([]);

    const handleCourceTagDelete = (i) => {
        setCources(cources.filter((tag, index) => index !== i));
    };

    const handleCourceTagAddition = (tag) => {
        setCources([...cources, tag]);
    };

    const handleCourceTagDrag = (tag, currPos, newPos) => {
        const newTags = cources.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setCources(newTags);
    };

    const handleCourceTagClick = (index) => {
        console.log("The tag at index " + index + " was clicked");
    };

    const [interests, setInterest] = React.useState([]);

    const handleInterestTagDelete = (i) => {
        setInterest(interests.filter((tag, index) => index !== i));
    };

    const handleInterestTagAddition = (tag) => {
        setInterest([...interests, tag]);
    };

    const handleInterestTagDrag = (tag, currPos, newPos) => {
        const newTags = interests.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setInterest(newTags);
    };

    const handleInterestTagClick = (index) => {
        console.log("The tag at index " + index + " was clicked");
    };

    const [hobbies, setHobby] = React.useState([]);

    const handleHobbyTagDelete = (i) => {
        setHobby(hobbies.filter((tag, index) => index !== i));
    };

    const handleHobbyTagAddition = (tag) => {
        setHobby([...hobbies, tag]);
    };

    const handleHobbyTagDrag = (tag, currPos, newPos) => {
        const newTags = hobbies.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setHobby(newTags);
    };

    const handleHobbyTagClick = (index) => {
        console.log("The tag at index " + index + " was clicked");
    };

    const [isEditing, setIsEditing] = useState(false);
    const [paragraph, setParagraph] = useState("This is a paragraph.");

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleChange = (event) => {
        setParagraph(event.target.value);
    };

    return (
        <>
            <TopBar />
            <div ref={resume} className="main_resume container">
                <div className="title">
                    <h1>Resume</h1>
                </div>
                <div className="resume" id="resume">
                    <div className="left">
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

                        <div className="left-body">
                            <div className="contact-block">
                                <div className="heading">
                                    <div className="text">CONTACT DETAILS</div>
                                    <div className="line"></div>
                                </div>
                                <div className="content">
                                    <div className="phone" id="content">
                                        <i class="fa-solid fa-phone"></i>
                                        <p>6377563998</p>
                                    </div>

                                    <div className="email" id="content">
                                        <i class="fa-solid fa-envelope-open"></i>
                                        <p>ayushranwa6@gmail.com</p>
                                    </div>

                                    <div className="linkedin" id="content">
                                        <i class="fa-brands fa-linkedin"></i>
                                        <p>6377563998</p>
                                    </div>

                                    <div className="github" id="content">
                                        <i class="fa-brands fa-github"></i>
                                        <p>https://github.com/ayushr6</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tag-block">
                                <div className="heading">
                                    <div className="text">TECHNICAL SKILLS</div>
                                    <div className="line"></div>
                                </div>
                                <div className="content">
                                    <ReactTags
                                        tags={skills}
                                        handleDelete={handleSkillsTagDelete}
                                        handleAddition={handleSkillsTagAddition}
                                        handleDrag={handleSkillsTagDrag}
                                        handleTagClick={handleSkillsTagClick}
                                        inputFieldPosition="inline"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="tag-block">
                                <div className="heading">
                                    <div className="text">CERTIFICATE / WORKSHOPS</div>
                                    <div className="line"></div>
                                </div>
                                <div className="content">
                                    <ReactTags
                                        tags={certificates}
                                        handleDelete={handleCertificatesTagDelete}
                                        handleAddition={handleCertificatesTagAddition}
                                        handleDrag={handleCertificatesTagDrag}
                                        handleTagClick={handleCertificatesTagClick}
                                        inputFieldPosition="inline"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="tag-block">
                                <div className="heading">
                                    <div className="text">DISTINCT COURSES</div>
                                    <div className="line"></div>
                                </div>
                                <div className="content">
                                    <ReactTags
                                        tags={cources}
                                        handleDelete={handleCourceTagDelete}
                                        handleAddition={handleCourceTagAddition}
                                        handleDrag={handleCourceTagDrag}
                                        handleTagClick={handleCourceTagClick}
                                        inputFieldPosition="inline"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="tag-block">
                                <div className="heading">
                                    <div className="text">AREAS OF INTEREST</div>
                                    <div className="line"></div>
                                </div>
                                <div className="content">
                                    <ReactTags
                                        tags={interests}
                                        handleDelete={handleInterestTagDelete}
                                        handleAddition={handleInterestTagAddition}
                                        handleDrag={handleInterestTagDrag}
                                        handleTagClick={handleInterestTagClick}
                                        inputFieldPosition="inline"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="tag-block">
                                <div className="heading">
                                    <div className="text">HOBBIES</div>
                                    <div className="line"></div>
                                </div>
                                <div className="content">
                                    <ReactTags
                                        tags={hobbies}
                                        handleDelete={handleHobbyTagDelete}
                                        handleAddition={handleHobbyTagAddition}
                                        handleDrag={handleHobbyTagDrag}
                                        handleTagClick={handleHobbyTagClick}
                                        inputFieldPosition="inline"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="right">
                        <div className="intro-div">
                            <div className="name">
                                <h1>{name}</h1>
                                <div className="plus-icon">
                                    <i class="fa-light fa-plus fa-xs" style={{color: "#22f765"}}></i>                                </div>
                                {/* {isEditing ? (
                                    <div>
                                        <textarea value={paragraph} onChange={handleChange} />
                                        <button onClick={handleSave}>Save</button>
                                    </div>
                                ) : (
                                    <div>
                                        <p>{paragraph}</p>
                                        <button onClick={handleEdit}>Edit</button>
                                    </div>
                                )} */}
                            </div>
                            <div className="description">
                                Being a calm and punctual individual, with my skills in competitive programming and web development and being passionate about new technologies, I would love to contribute to this community.
                            </div>
                        </div>
                        <div className="right-block">
                            <div className="heading">
                                <div className="text">
                                    Eduational Qualification
                                </div>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handlePrint}> Press it</button>

        </>
    );
}

export default Resume;