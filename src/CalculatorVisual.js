import React, { useState } from "react";

export default function CalculatorVisual() {
    const [currentString, setCurrentString] = useState('');

    const handleStringClick = (item) => {
        setCurrentString(currentString + item);
    };

    const handleClearClick = () => {
        setCurrentString('');
    };

    return (
        <>
            <div id="calculator-frame" style={{ position: "fixed", backgroundColor: "lightgray", height: "700px", width: "600px", left: "50%", top: "50%", borderRadius: "20px", transform: "translate(-50%, -50%)" }}>
                <div id="result-box" style={{position:"absolute", backgroundColor: "black", height: "130px", width: "530px", left: "50%", top: "100px", borderRadius: "20px", transform: "translate(-50%, -50%)"}}>
                    <div style={{position: "relative", fontFamily: "Arial", color: "lightgreen", textAlign:"right", right: "20px", top: "5px"}}>{currentString}</div>
                    <div style={{position: "relative", fontFamily: "Arial", color: "lightgreen", textAlign:"right", right: "20px", top: "10px", fontSize: "80px"}}>{currentString}</div>
                </div>
                <button id="ce" style={{position: "relative", top:"200px", left:"30px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleClearClick()}}>CE</button>
                <button id="num-0" style={{position: "relative", top:"200px", left:"50px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleStringClick('0')}}>0</button>
                <button id="divide" style={{position: "relative", top:"200px", left:"70px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleStringClick('/')}}>/</button>
                <button id="equal" style={{position: "relative", top:"200px", left:"90px", height:"100px", width:"120px", fontSize:"70px"}}>=</button><br/>
                <button id="num-7" style={{position: "relative", top:"220px", left:"30px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleStringClick('7')}}>7</button>
                <button id="num-8" style={{position: "relative", top:"220px", left:"50px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleStringClick('8')}}>8</button>
                <button id="num-9" style={{position: "relative", top:"220px", left:"70px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleStringClick('9')}}>9</button>
                <button id="multiply" style={{position: "relative", top:"220px", left:"90px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleStringClick('x')}}>x</button><br/>
                <button id="num-4" style={{position: "relative", top:"240px", left:"30px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleStringClick('4')}}>4</button>
                <button id="num-5" style={{position: "relative", top:"240px", left:"50px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleStringClick('5')}}>5</button>
                <button id="num-6" style={{position: "relative", top:"240px", left:"70px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleStringClick('6')}}>6</button>
                <button id="substract" style={{position: "relative", top:"240px", left:"90px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleStringClick('-')}}>-</button><br/>
                <button id="num-1" style={{position: "relative", top:"260px", left:"30px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleStringClick('1')}}>1</button>
                <button id="num-2" style={{position: "relative", top:"260px", left:"50px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleStringClick('2')}}>2</button>
                <button id="num-3" style={{position: "relative", top:"260px", left:"70px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleStringClick('3')}}>3</button>
                <button id="add" style={{position: "relative", top:"260px", left:"90px", height:"100px", width:"120px", fontSize:"70px"}} onClick={() => {handleStringClick('+')}}>+</button>
            </div>
        </>
    )
}