import React from 'react';
import './Calculator.css';
class Calculator extends React.Component {
  state = {
    value: '0',
    res: 0,
    op: '',
    A: 0,
    B: 0,
    pre:"",
  };
  addvalue = (e) => {
    let val = e.target.value;
    let { value, op } = this.state;
    val = value + val;
    if (op === '') {
      let A = e.target.value;
      this.setState({ A: A, res: A, value: A });
    } else {
      let B = e.target.value;
      this.setState({ B: B, value: val });
    }
  };
  calculateres = (e) => {
    let { op, A, B } = this.state;
    if (B === 0) {
      return A;
    }
    let c;
    switch (op) {
      case '+':
        c = parseInt(A) + parseInt(B);

        this.setState({ res: c, value: c });
        return c;
      case '-':
        c = parseInt(A) - parseInt(B);

        this.setState({ res: c, value: c });
        return c;
      case '*':
        c = parseInt(A) * parseInt(B);
        this.setState({ res: c, value: c });
        return c;
      case '/':
        c = parseInt(A) / parseInt(B);
        this.setState({ res: c, value: c });
        return c;
      default:
        alert('wrong op');
    }
  };
  applyopration = (e) => {
    let expression = e.target.value;
    let val = e.target.value;
    let { value} = this.state;
    value = value + val;
    let c = this.calculateres();
    switch (expression) {
      case '+':
        this.setState({ A: c, res: c, op: '+', value: value });
        break;
      case '-':
        this.setState({ A: c, res: c, op: '-', value: value });
        break;
      case '*':
        this.setState({ A: c, res: c, op: '*', value: value });
        break;
      case '/':
        this.setState({ A: c, res: c, op: '/', value: value });
        break;
      default:
        alert('wrong value');
    }
  };
  allclear=(e)=>{
    this.setState({
    value: '0',
    res: 0,
    op: '',
    A: 0,
    B: 0,
  })
  }

  clearprev= ()=>
  {
    alert("run")
    // let {value,res,op,A,B}=this.state;
    // console.log("value:",value," res:",res," op:",op," A:",A," B:",B);
     this.setState( prevState => {
      return{
        //value:prevState.value,
        pre:prevState.value,
      }
    }
    )
    let {pre}=this.state;
    console.log("value:",pre);
  }
  render() {
    const { value } = this.state;
    return (
      <div className='claculator_Contaier'>
        <h1 className='calc_Screen'>{value}</h1>
        <div className='button_area'>
          <div className='count_area'>
            <button onClick={this.addvalue} value='1'>
              1
            </button>
            <button onClick={this.addvalue} value='2'>
              2
            </button>
            <button onClick={this.addvalue} value='3'>
              3
            </button>
            <button onClick={this.addvalue} value='4'>
              4
            </button>
            <button onClick={this.addvalue} value='5'>
              5
            </button>
            <button onClick={this.addvalue} value='6'>
              6
            </button>
            <button onClick={this.addvalue} value='7'>
              7
            </button>
            <button onClick={this.addvalue} value='8'>
              8
            </button>
            <button onClick={this.addvalue} value='9'>
              9
            </button>
            <button onClick={this.addvalue} value='0'>
              0
            </button>
          </div>
          <div className='opration_area'>
            <button onClick={this.applyopration} value='+'>
              +
            </button>
            <button onClick={this.applyopration} value='-'>
              -
            </button>
            <button onClick={this.applyopration} value='/'>
              /
            </button>
            <button onClick={this.applyopration} value='*'>
              *
            </button>
          </div>
          
<button onClick={this.clearprev} value='clear'>
            <img alt="" src="https://img.icons8.com/material-sharp/24/000000/clear-symbol--v1.png"/>
          </button>
          <button onClick={this.allclear} value='ac'>
            AC
          </button>
          <button onClick={this.calculateres} value='='>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
