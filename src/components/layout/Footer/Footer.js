import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
    return (
        <footer>
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                {/* <p>Download App For Android and IOS mobile Phone</p> */}
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="appstore" />
            </div>
            <div className="midFooter">
                <h1>FoodCourt</h1>
                {/* <p>Best Product is our first priority</p> */}
                <p>Copyright 2021 &copy; Food Court</p>
            </div>
            <div className="rightFooter">
                <h4>Follow Us</h4>
                {/* <a href="https://www.linkedin.com">LinkedIn</a>
                <a href="https://github.com">Github</a>
                <a href="https://www.instagram.com">Instagram</a> */}
                <a href="https://github.com" target="blank">
                    <GitHubIcon className="githubSvgIcon" />
                </a>

                <a href="https://www.linkedin.com" target="blank">
                    <LinkedInIcon className="LinkedInSvgIcon" />
                </a>

                <a href="https://www.instagram.com" target="_blank">
                    <InstagramIcon className="instagramSvgIcon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
