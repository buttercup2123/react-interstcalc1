import React from "react"
import {useState}from "react"
function Forms(){
    const [principle,setPrinciple]=useState(0)
    const [time,setTime]=useState(0)
    const [rate,setRate]=useState(0)
    const [interestType,setInterestType]=useState("simpleinterest")
    const [result,setResult]=useState(0)

    function simple(){
        const p={principle}
        const t={time}
        const r={rate}
        setResult((p*t*r)/100)
    }
    function compound(){
        const p={principle}
        const t={time}
        const r={rate}
        const compoundInterest = p * Math.pow(1 + r / 100, t) - p;
        setResult(compoundInterest);
        
    }

    return(
        <div>
            <forms>
            <label for="principle">Enter Principle</label>
            <input type="number"
            value={principle}
            placeholder="Enter Principle"
            onChange={(e)=>setPrinciple(e.target.value)}>
            </input>

            <label for="Time">Enter Time period in years</label>
            <input type="number"
            value={time}
            placeholder="Enter Time Period"
            onChange={(e)=>setTime(e.target.value)}>
            </input>

            <label for="Rate">Enter Rate</label>
            <input type="number"
            value={rate}
            onChange={(e)=>setRate(e.target.value)}>
            </input>

            <label for="interestType">Select Interest Type</label>
            <select value={interestType} onChange={(e)=>setInterestType(e.target.value)}>
                <option value="simpleinterest"></option>
                <option value="compoundinterest"></option>
            </select>
            </forms>

            <div>
                {interestType==="simpleinterest"?{simple}:{compound}}
            </div>

            <h3>{result}</h3>

        </div>
        
            

        
    );
}
export default Forms;
    
    