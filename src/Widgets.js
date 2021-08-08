import React from 'react'
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Danish Here!", "Top news - 9099 readers")}
            {newsArticle("Lockdown Soon?!", "Top news - 2873 readers")}
            {newsArticle("Mechatronics", "Top news - 134 readers")}
            {newsArticle("React Linkedin", "Top news - 4839 readers")}
            {newsArticle("Wtf?!", "Top news - 755 readers")}
            {newsArticle("MacBook Pro Leaks!", "Top news - 325 readers")}
        </div>
    );
}

export default Widgets 
