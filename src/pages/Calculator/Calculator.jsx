import React, { useEffect } from 'react';
import './Calculator.css';

let Gab = '';        // ตัวเลขที่ 1
let operator = '';   // ตัวดำเนินการ
let Numbertwo = '';  // ตัวเลขที่ 2

function showOrder() {
    console.log(`Operand 1: ${Gab}, Operator: ${operator}, Operand 2: ${Numbertwo}`);
}

function Numberone(num) {
    const doodee = document.getElementById("dooBigTu");
    if (operator === '' && doodee.textContent !== '0') {
        Gab += num;
        doodee.textContent = Gab;
    } else if (operator === '') {
        Gab = num.toString();
        doodee.textContent = Gab;
    } else {
        Numbertwo += num;
        doodee.textContent = Numbertwo;
    }
    showOrder();
}

function Boglob() {
    const doodee = document.getElementById("dooBigTu");
    if (operator === '') {
        Gab = Gab.substring(0, Gab.length - 1);
        doodee.textContent = Gab;
    } else if (Numbertwo === '' && operator !== '') {
        operator = '';
        doodee.textContent = Gab;
    } else if (Gab !== '' && operator !== '') {
        Numbertwo = Numbertwo.substring(0, Numbertwo.length - 1);
        doodee.textContent = Numbertwo;
    }
    showOrder();
}

function delAll() {
    const doodee = document.getElementById("dooBigTu");
    Gab = '';
    Numbertwo = '';
    operator = '';
    doodee.textContent = '0';
    showOrder();
}

function Bigbom(op) {
    if (Gab === '') return;
    operator = op;
    showOrder();
}

function equal() {
    const doodee = document.getElementById("dooBigTu");
    if (Gab === '' || Numbertwo === '' || operator === '') return;

    let result;
    const num1 = parseFloat(Gab);
    const num2 = parseFloat(Numbertwo);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    doodee.textContent = result;
    Gab = result.toString();
    Numbertwo = '';
    showOrder();
}

const checkKey = (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
        equal();
    } else if (e.key === 'Escape') {
        delAll();
    } else if (e.key === '+') {
        Bigbom('+');
    } else if (e.key === '-') {
        Bigbom('-');
    } else if (e.key === '*') {
        Bigbom('*');
    } else if (e.key === '/') {
        Bigbom('/');
    } else if (e.key >= '0' && e.key <= '9') {
        Numberone(e.key);
    } else if (e.key === '.') {
        Numberone('.');
    }
};

function Calculator() {
    useEffect(() => {
        document.addEventListener('keydown', checkKey);
        return () => {
            document.removeEventListener('keydown', checkKey);
        };
    }, []);

    return (
        <div className='calculator-container'>
        <div className="calculator">
            <div className="display">
                <div id="dooBigTu">0</div>
            </div>
            <div className="buttons">
                <button className="TnT function" onClick={delAll}>C</button>
                <button className="TnT function" onClick={Boglob}>&larr;</button>
                <button className="TnT function" onClick={() => Bigbom('%')}>%</button>
                <button className="TnT operator" onClick={() => Bigbom('/')}>÷</button>

                <button className="TnT number" onClick={() => Numberone(7)}>7</button>
                <button className="TnT number" onClick={() => Numberone(8)}>8</button>
                <button className="TnT number" onClick={() => Numberone(9)}>9</button>
                <button className="TnT operator" onClick={() => Bigbom('*')}>&times;</button>

                <button className="TnT number" onClick={() => Numberone(4)}>4</button>
                <button className="TnT number" onClick={() => Numberone(5)}>5</button>
                <button className="TnT number" onClick={() => Numberone(6)}>6</button>
                <button className="TnT operator" onClick={() => Bigbom('-')}>−</button>

                <button className="TnT number" onClick={() => Numberone(1)}>1</button>
                <button className="TnT number" onClick={() => Numberone(2)}>2</button>
                <button className="TnT number" onClick={() => Numberone(3)}>3</button>
                <button className="TnT operator" onClick={() => Bigbom('+')}>+</button>

                <button className="TnT zero" onClick={() => Numberone(0)}>0</button>
                <button className="TnT number" onClick={() => Numberone('.')}>.</button>
                <button className="TnT equal" onClick={equal}>=</button>
            </div>
        </div>
        </div>
    );
}

export default Calculator;
