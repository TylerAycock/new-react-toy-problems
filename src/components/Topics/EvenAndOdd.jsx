import { useState } from "react";

const EvenAndOdd = () => {
  const [userInput, setUserInput] = useState("");
  const [evenArr, setEvenArr] = useState([]);
  const [oddArr, setOddArr] = useState([]);

  const eventHandler = (e) => {
    setUserInput(e.target.value);
  };
  const clickHandler = () => {
    let evens = [];
    let odd = [];
    let numArr = userInput.split(",");
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] % 2 === 0) {
        evens.push(numArr[i] + ' ');
      } else {
        odd.push(numArr[i] + " ");
      }
    }
    setEvenArr(evens);
    setOddArr(odd);
  };

  //  let answer= numArr.forEach(num =>{
  //     if(num%2 ===0){
  //         setEvenArr(num)
  //     }else{
  //         setOddArr(num)
  //     }
  //   })

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens & Odds</h4>
      <input type="text" className="inputLine" onChange={eventHandler} />
      <button className="confirmationButton" onClick={clickHandler}>
        Check
      </button>
      <span className="resultsBox">Evens: {evenArr}</span>
      <span className="resultsBox">Odds: {oddArr}</span>
    </div>
  );
};

export default EvenAndOdd;
