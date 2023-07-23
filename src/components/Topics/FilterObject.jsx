import { useState } from "react";

const FilterObject = () => {
  const [userInput, setUserInput] = useState("");
  const [filteredlistArr, setFilteredArr] = useState([]);
  const [unfilteredListArr, setListArr] = useState([
    {
      name: "Tyler",
      age: 29,
      favColor: "purple",
    },
    {
      name: "Dad",
      age: 51,
      job: "captain",
    },
    {
      name: "Mom",
      age: 50,
      favSnack: "ice-cream",
    },
    {
      name: "Carissa",
      age: 27,
      sign: "pesce",
    },
  ]);

  const clickHandler = () => {
    let filter = []
    unfilteredListArr.filter(obj => {
      userInput in obj && filter.push(obj)
    })
    setFilteredArr(filter)
  }


  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">{JSON.stringify(unfilteredListArr)}</span>
      <input
        type="text"
        className="inputLine"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <button className="confirmationButton" onClick={clickHandler}>
        Filter
      </button>
      <span className="resultsBox filterObjectRB">
        {JSON.stringify(filteredlistArr)}
      </span>
    </div>
  );
};

export default FilterObject;
