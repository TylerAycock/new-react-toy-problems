import { useState } from "react"

const Sum = () => {
    const [numOne, setNumOne] = useState(0)
    const [numTwo, setNumTwo] = useState(0)
    const [sum, setSum] = useState(null)

    const clickHandler = () => {
        setSum(() => {
            return numOne + numTwo})
    }
   
    return(
        <div className="puzzleBox sumPB">
            <h4>"Sum" Fun</h4>
            <input type="text" className="inputLine" onChange={e => setNumOne(+e.target.value)}/>
            <input type="text" className="inputLine" onChange={e => setNumTwo(+e.target.value)}/>
            <button className="confirmationButton" onClick={clickHandler}>Add</button>
            <span className="resultsBox">{+sum}</span>
        </div>
    )
}

export default Sum