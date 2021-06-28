import { React, useState } from 'react';
// import React from 'react'
import Select from 'react-select';



const CustomSelect = ({  onclickaddmore }) => {
  let options = [
  { label: 'React', value: 'react', isDisabled: false ,},
  { label: 'ReactNative', value: 'react-native' , isDisabled: false},
  { label: 'JavaSript', value: 'js' , isDisabled: false},
  { label: 'Css', value: 'css' , isDisabled: false},
];
  function onchange(value){
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === value.value) {
        options[i].isDisabled = true;
      } else {
        options[i].isDisabled = false;
      }
    }
    onclickaddmore(options);
  };
  
  return (
    <>
      <Select
        onChange={(e) => onchange(e)}
        options={options}
      />
      <br />
      <br />
    </>
  );
};

export default CustomSelect;
