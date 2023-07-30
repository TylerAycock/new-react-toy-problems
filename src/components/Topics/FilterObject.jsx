import { useState } from "react";

const FilterObject = () => {
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([
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
    // let hope = list.filter(obj => {
    //  console.log(obj)
    //  return obj.name === search
    // })
    let results = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i] === search) {
        return results.push(list[i]);
      }
      console.log(results);
    }

    // console.log(hope)
  };

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">{JSON.stringify(list)}</span>
      <input
        type="text"
        className="inputLine"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="confirmationButton" onClick={clickHandler}>
        Filter
      </button>
      <span className="resultsBox filterObjectRB">
        {JSON.stringify(filtered)}
      </span>
    </div>
  );
};

export default FilterObject;
