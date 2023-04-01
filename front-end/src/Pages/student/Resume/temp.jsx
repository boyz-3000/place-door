import React, { useState } from "react";

const Tags = () => {
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
}


export default Tags;