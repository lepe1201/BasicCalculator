import React from "react";

export default function CalculatorVisual() {
    return (
        <>
            <div id="calculator-frame" style={{ position: "fixed", backgroundColor: "lightgray", height: "700px", width: "600px", left: "50%", top: "50%", borderRadius: "20px", transform: "translate(-50%, -50%)" }}>
                <div id="result-box" style={{position:"absolute", backgroundColor: "black", height: "130px", width: "530px", left: "50%", top: "100px", borderRadius: "20px", transform: "translate(-50%, -50%)"}}/>
                <button id="ce" style={{position: "relative", top:"200px", left:"30px", height:"100px", width:"120px", fontSize:"70px"}}>CE</button>
                <button id="num-0" style={{position: "relative", top:"200px", left:"50px", height:"100px", width:"120px", fontSize:"70px"}}>0</button>
                <button id="divide" style={{position: "relative", top:"200px", left:"70px", height:"100px", width:"120px", fontSize:"70px"}}>/</button>
                <button id="equal" style={{position: "relative", top:"200px", left:"90px", height:"100px", width:"120px", fontSize:"70px"}}>=</button><br/>
                <button id="num-7" style={{position: "relative", top:"220px", left:"30px", height:"100px", width:"120px", fontSize:"70px"}}>7</button>
                <button id="num-8" style={{position: "relative", top:"220px", left:"50px", height:"100px", width:"120px", fontSize:"70px"}}>8</button>
                <button id="num-9" style={{position: "relative", top:"220px", left:"70px", height:"100px", width:"120px", fontSize:"70px"}}>9</button>
                <button id="multiply" style={{position: "relative", top:"220px", left:"90px", height:"100px", width:"120px", fontSize:"70px"}}>x</button><br/>
                <button id="num-4" style={{position: "relative", top:"240px", left:"30px", height:"100px", width:"120px", fontSize:"70px"}}>4</button>
                <button id="num-5" style={{position: "relative", top:"240px", left:"50px", height:"100px", width:"120px", fontSize:"70px"}}>5</button>
                <button id="num-6" style={{position: "relative", top:"240px", left:"70px", height:"100px", width:"120px", fontSize:"70px"}}>6</button>
                <button id="substract" style={{position: "relative", top:"240px", left:"90px", height:"100px", width:"120px", fontSize:"70px"}}>-</button><br/>
                <button id="num-1" style={{position: "relative", top:"260px", left:"30px", height:"100px", width:"120px", fontSize:"70px"}}>1</button>
                <button id="num-2" style={{position: "relative", top:"260px", left:"50px", height:"100px", width:"120px", fontSize:"70px"}}>2</button>
                <button id="num-3" style={{position: "relative", top:"260px", left:"70px", height:"100px", width:"120px", fontSize:"70px"}}>3</button>
                <button id="add" style={{position: "relative", top:"260px", left:"90px", height:"100px", width:"120px", fontSize:"70px"}}>+</button>
            </div>
        </>
    )
}