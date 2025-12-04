import { useState } from 'react'
import './Rechner.css'

function Rechner() {
    const [display, setDisplay] = useState('0')
    const [input, setInput] = useState('0')
    const [previousValue, setPreviousValue] = useState(null)
    const [operation, setOperation] = useState(null)
    const [shouldResetDisplay, setShouldResetDisplay] = useState(false)

    const handleNumberClick = (num) => {
        if (shouldResetDisplay) {
            setInput(String(num))
            setDisplay(String(num))
            setShouldResetDisplay(false)
        } else {
            const newInput = input === '0' ? String(num) : input + num
            setInput(newInput)
            setDisplay(newInput)
        }
    }

    const handleOperation = (op) => {
        if (operation && !shouldResetDisplay) {
            handleEquals()
        }
        setPreviousValue(Number(input))
        setOperation(op)
        setShouldResetDisplay(true)
    }

    const handleEquals = () => {
        if (operation && previousValue !== null) {
            const currentValue = Number(input)
            let result = 0

            switch (operation) {
                case '+':
                    result = previousValue + currentValue
                    break
                case '-':
                    result = previousValue - currentValue
                    break
                case '*':
                    result = previousValue * currentValue
                    break
                case '/':
                    result = previousValue / currentValue
                    break
                default:
                    return
            }

            setDisplay(String(result))
            setInput(String(result))
            setPreviousValue(null)
            setOperation(null)
            setShouldResetDisplay(true)
        }
    }

    const handleDecimal = () => {
        if (!input.includes('.')) {
            const newInput = input + '.'
            setInput(newInput)
            setDisplay(newInput)
        }
    }

    const handleToggleSign = () => {
        const newValue = String(Number(input) * -1)
        setInput(newValue)
        setDisplay(newValue)
    }

    const handleClear = () => {
        setInput('0')
        setDisplay('0')
        setPreviousValue(null)
        setOperation(null)
        setShouldResetDisplay(false)
    }

    return (
        <div id="Calculator">
            <div className="button-grid">
                <button id="Number7" onClick={() => handleNumberClick(7)}>7</button>
                <button id="Number8" onClick={() => handleNumberClick(8)}>8</button>
                <button id="Number9" onClick={() => handleNumberClick(9)}>9</button>
                <button id="Divide" onClick={() => handleOperation('/')}>÷</button>

                <button id="Number4" onClick={() => handleNumberClick(4)}>4</button>
                <button id="Number5" onClick={() => handleNumberClick(5)}>5</button>
                <button id="Number6" onClick={() => handleNumberClick(6)}>6</button>
                <button id="Multiply" onClick={() => handleOperation('*')}>×</button>

                <button id="Number1" onClick={() => handleNumberClick(1)}>1</button>
                <button id="Number2" onClick={() => handleNumberClick(2)}>2</button>
                <button id="Number3" onClick={() => handleNumberClick(3)}>3</button>
                <button id="Subtract" onClick={() => handleOperation('-')}>-</button>

                <button id="Number0" onClick={handleToggleSign}>-/+</button>
                <button id="Decimals" onClick={() => handleNumberClick(0)}>0</button>
                <button id="Equal" onClick={handleDecimal}>.</button>
                <button id="Addition" onClick={() => handleOperation('+')}>+</button>
            </div>
            
            <h1 id="Display">{display}</h1>
            <button id="CALCULATE" onClick={handleEquals}>CALC IT!</button>
        </div>
    )
}

export default Rechner