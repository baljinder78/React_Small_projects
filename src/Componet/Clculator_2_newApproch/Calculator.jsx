import React,{useState} from "react"


const Calculator=()=>{
    const [calvalue,setcalvalue]=useState("");
async function addvalue(e){
        let val=e.target.value;
      await   setcalvalue(prevcalvalue =>prevcalvalue + val);

    ;
}

function addval(e){
    
        let val = e.target.value;
        if ((val >= 'a' && val <= 'z') || (val >= 'A' && val <= 'Z'))
        {
         return ;   
        }
          setcalvalue(val);
}

function findresult(e){
        let val=calvalue;
        let A="";
        let B="";
        let op=true;
        let oprand="";

        let v = val.charAt(0);
        A=A+v;
        for(let i=1;i<val.length;i++)
        {
            let c=val.charAt(i);
            if((c>=0&&c<=9))
            {
            op ? (A = A + c) : (B = B + c);
            }
            else{
                switch (oprand) {
                  case '+':
                    A = parseInt(A) + parseInt(B);
                    B = '';
                    break;
                  case '-':
                    A = parseInt(A) - parseInt(B);
                    B = '';
                    break;
                  case '*':
                    A = parseInt(A) * parseInt(B);
                    B = '';
                    break;
                  case '/':
                    A = parseInt(A) / parseInt(B);
                    B = '';
                    break;
                  default:
                    break;
                }
                oprand=c;
                op=false;
            }

        }
         switch (oprand) {
           case '+':
             A = parseInt(A) + parseInt(B);
             B = '';
             break;
           case '-':
             A = parseInt(A) - parseInt(B);
             B = '';
             break;
           case '*':
             A = parseInt(A) * parseInt(B);
             B = '';
             break;
           case '/':
             A = parseInt(A) / parseInt(B);
             B = '';
             break;
           default:
             break;
         }
        setcalvalue(A)
}
function allclear(){
    setcalvalue("");
}

function clearthis()
{
    setcalvalue(prevcalvalue => prevcalvalue.substring(0,prevcalvalue.length-1))
}

    return (
  <div className='claculator_Contaier'>
    <input type="text"  value={calvalue} onChange={(e)=>addval(e)} className='calc_Screen_input' />
    <div className='button_area'>
      <div className='count_area'>
        <button onClick={(e)=>addvalue(e)} value='1'>
          1
        </button>
        <button onClick={(e)=>addvalue(e)} value='2'>
          2
        </button>
        <button onClick={(e)=>addvalue(e)} value='3'>
          3
        </button>
        <button onClick={(e)=>addvalue(e)} value='4'>
          4
        </button>
        <button onClick={(e)=>addvalue(e)} value='5'>
          5
        </button>
        <button onClick={(e)=>addvalue(e)} value='6'>
          6
        </button>
        <button onClick={(e)=>addvalue(e)} value='7'>
          7
        </button>
        <button onClick={(e)=>addvalue(e)} value='8'>
          8
        </button>
        <button onClick={(e)=>addvalue(e)} value='9'>
          9
        </button>
        <button onClick={(e)=>addvalue(e)} value='0'>
          0
        </button>
      </div>
      <div className='opration_area'>
        <button onClick={(e)=>addvalue(e)} value='+'>
          +
        </button>
        <button onClick={(e)=>addvalue(e)} value='-'>
          -
        </button>
        <button onClick={(e)=>addvalue(e)} value='/'>
          /
        </button>
        <button onClick={(e)=>addvalue(e)} value='*'>
          *
        </button>
      </div>

      <button onClick={()=>clearthis()}  value='clear'>
        <img src='https://img.icons8.com/material-sharp/24/000000/clear-symbol--v1.png' alt=""/>
      </button>
      <button onClick={()=>allclear()}  value='ac'>
        AC
      </button>
      <button onClick={(e)=>findresult(e)} value='='>
        =
      </button>
    </div>
  </div>
)

}

export default Calculator;


