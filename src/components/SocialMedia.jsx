import React from "react";
import { BsTwitter, BsFacebookF, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/rickflair101">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/Rickflair101">
      <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/richardmbugua1001/">
      <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
