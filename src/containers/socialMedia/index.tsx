import Linkedin from "../../assets/icons/linkedin.png";
import Twitter from "../../assets/icons/twitter.png";
import Github from "../../assets/icons/github.png";
import React from "react";

export const SocialMedia: React.FC = (): JSX.Element => {
    return(
        <ul className="SocialMedia">
            <li>
                <a href="https://twitter.com/juarez1_irving">
                    <img src={Twitter} alt="twitter" />
                </a>
            </li>

            <li>
                <a href="https://github.com/IrvingJuarez">
                    <img src={Github} alt="github" />
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/in/irvingdevjuarez/">
                    <img src={Linkedin} alt="linkedin" />
                </a>
            </li>
        </ul>
    )
}