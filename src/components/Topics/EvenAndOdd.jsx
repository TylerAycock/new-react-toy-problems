import { useState } from "react";

const EvenAndOdd = () => {

 const [numbers, setNumbers] = useState('')
 const [even, setEven] = useState([])
 const [odd, setOdd] = useState([])

const filter = ()=>{
  let evenArr=[]
  let oddArr=[]
  numbers.split(',').map(num =>{
      num%2===0? evenArr.push(num) : oddArr.push(num)
  })
  console.log(evenArr)
  setEven(evenArr)
  setOdd(oddArr)
}


  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens & Odds</h4>
      <input type="text" className="inputLine"  onChange={e=>setNumbers(e.target.value)}/>
      <button className="confirmationButton" onClick={filter}>
        Check
      </button>
      <span className="resultsBox eo">Evens:{even}</span>
      <span className="resultsBox eo">Odds:{odd} </span>
    </div>
  );
};

export default EvenAndOdd;
