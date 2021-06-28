import React, { useState } from 'react';
import Coustomselet from "./React_select";
import Extraselect from "./Extraselcet";
const App=()=>
{
    const [optionarr,setoptionarr]=useState([])
    const [idisplay,setdisplay]=useState([]);
     var opt=[];
function onclickaddmore(e) {
  opt=e;

}
function onclickadd(o,value,key) {
    let j=o;
o= [
  { label: 'React', value: 'react', isDisabled: false,default:false },
  { label: 'ReactNative', value: 'react-native' , isDisabled: false,default:false},
  { label: 'JavaSript', value: 'js' , isDisabled: false,default:false},
  { label: 'Css', value: 'css' , isDisabled: false,default:false},
]
for (let i = 0; i < o.length; i++) {
    if (o[i].value === value)
    {
        o[i].default=true;
    }
    else{
        o[i].default = false;
    }
    if (o[i].value === value||j[i].isDisabled===true) {
      o[i].isDisabled = true;
    }
  }
  opt=o;
}
function onclick()
{
    setoptionarr([...optionarr,opt]);
    setdisplay([...idisplay,true]);
}
function deleteselect(v)
{
    let o = [...idisplay];
    o[v]=false;
    setdisplay(o);
}
    return (
      <>
        <button onClick={() => onclick()}>Add more</button>
        <Coustomselet onclickaddmore={onclickaddmore} />
        {optionarr.map((options, i) => (
          idisplay[i]?<> 
            <Extraselect
              key={i}
              keys={i}
              options={options}
              onclickadd={onclickadd}
              deleteselect={deleteselect}
            />
          </>:null
        ))}
      </>
    );
}

export default App;