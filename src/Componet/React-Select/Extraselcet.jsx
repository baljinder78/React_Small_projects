import  React,{ useState,useEffect } from 'react';
import Select from 'react-select';
const Extraselect = ({ options, onclickadd, keys, deleteselect }) => {
 // const [show, setshow] = useState('');
  function onchange(value) {
    let o = options;
   // setshow(value.value);
    onclickadd(o, value.value, keys);
  }
  function deletetheval(e) {
    deleteselect(e.target.value);
  }
  return (
    <div>
      <Select
        onChange={(e) => onchange(e)}
        options={options}
      />
      <button value={keys} onClick={(e) => deletetheval(e)}>
        Remove
      </button>
    </div>
  );
};
export default Extraselect;