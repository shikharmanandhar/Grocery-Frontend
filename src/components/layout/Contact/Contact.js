import React, { Fragment } from 'react';
import "./Contact.css";

const Contact = () => {
  return <Fragment>
      <div className="contactContainer">
          {/* <img src='http://cdn.onlinewebfonts.com/svg/img_52216.png'></img> */}
          <a className="mailBtn" href="mailto:shikharaa26@gmail.com">
              <img src='http://cdn.onlinewebfonts.com/svg/img_52216.png'></img>
              <button>Contact: shikharaa26@gmail.com</button>
          </a>
      </div>
      </Fragment>
};

export default Contact;
