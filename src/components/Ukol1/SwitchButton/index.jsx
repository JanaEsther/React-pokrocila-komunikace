import React from 'react';
import './style.css';

export const SwitchButton = ({ label, onSwitch, on }) => {
  const buttonClass = on ? 'switch-button switch-button--on' : 'switch-button';
  return (
    <button className={buttonClass} onClick={onSwitch}>
      <i className="switch-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
