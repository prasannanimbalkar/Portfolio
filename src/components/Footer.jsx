// import React from 'react';
import {FaGithub, FaLinkedinIn, FaCodepen} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a
                    href="https://github.com/prasannanimbalkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub">
                    <FaGithub/>
                </a>
                <a
                    href="https://www.linkedin.com/in/prasanna-nimbalkar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn">
                    <FaLinkedinIn/>
                </a>
                <a
                    href="https://linkedin.com/in/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn">
                    <FaCodepen/>
                </a>
            </div>
            <p className="copyright">
                &copy; {new Date().getFullYear()}
                Prasanna Nimbalkar. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
