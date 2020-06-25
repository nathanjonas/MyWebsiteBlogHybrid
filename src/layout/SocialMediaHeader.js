import React from "react";


const SocialMediaHeader = () => {
  return (
    <div className="SocialMediaBar">
      <div className="SocialMediaElement">
        <a href="https://www.google.com" className="NavLink">
          Twitter
        </a>
      </div>
      <div className="SocialMediaElement">
        <a href="https://github.com/nathanjonas" className="NavLink">
          Github
        </a>
      </div>
      <div className="SocialMediaElement">
        <a href="https://www.linkedin.com/in/nathan-jonas-045839146/" className="NavLink">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default SocialMediaHeader;
