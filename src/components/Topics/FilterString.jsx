import { useState } from "react";

const FilterString = () => {
  const [unfilteredList, setUnfilteredList] = useState([
    "Tyler",
    "Tanner",
    "Joviah",
    "Juliet",
    "Mom",
    "Mandy",
    "Dad",
    "Dillan",
    "Denice"
  ]);
   const [filteredList, setFilteredList] = useState([])
   const [userInput, setUserInput] = useState('')

   const clickHandler = () => {
    let filteredArr = []
    unfilteredList.filter(name => {
      name.includes(userInput) && filteredArr.push(name)
    })
    setFilteredList(filteredArr)
   }

  
  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">{JSON.stringify(unfilteredList)}</span>
      <input
        type="text"
        className="inputLine"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={clickHandler}>Filter</button>
      <span className="resultsBox filterStringRB">{JSON.stringify(filteredList)}</span>
    </div>
  );
};

export default FilterString;
