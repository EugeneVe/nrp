import React from 'react';
import './InputName.scss';

const InputName = ({ onChange }) => {
  return (
    <form className="enterYourName formInner">
      <input defaultValue="" onChange={onChange} id="name" placeholder="Your name" />
    </form>
  );
};

export default InputName;
