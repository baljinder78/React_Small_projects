import React from 'react';
import './Calculator.css';
class Calculator extends React.Component {
  state = {
    value: '',
    res: 0,
    op: '',
    A: 0,
    B: 0,
  };
  addvalue = (e) => {
    let val = e.target.value;
    let { value, op } = this.state;
    val = value + val;
    if (op === '') {
      let A = e.target.value;
      this.setState({ A: A, res: A, value: val });
    } else {
      let B = e.target.value;
      this.setState({ B: B, value: val });
    }
  };
  calculateres = (e) => {
    let { op, A, B, res } = this.state;
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
    let { value, res, A, B } = this.state;
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
          <button onClick={this.calculateres} value='='>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
