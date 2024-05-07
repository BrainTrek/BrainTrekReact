import React from 'react';

const SocialIcon = ({ iconClass, text }) => {
  return (
    <div>
      <i className={iconClass}></i>
      <span>{text}</span>
    </div>
  );
}

export default SocialIcon;
