import React from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Resume.scss';

const Resume = () => {
  return (
    <div className="header__buttons">
    <a
      href="https://drive.google.com/file/d/1pQ2smG42nDj35JwE7YQ-gc8C_IpUHNFU/view?usp=sharing"
      target="_blank"
      className="btn btn-outline"
    >
      Get Resume
    </a>
    </div>
  )
}

export default AppWrap(
    MotionWrap(Resume, 'app_resume'),
    'resume',
    'app__whitebg'
);