import { useState } from "react"

const Palindrome = ()=> {

    const [userInput, setUserInput] = useState('')
    const [isPalindrom, setIsPalindrom] = useState('')

    const clickHandler = () => {
        const reversedWord = userInput.split('').reverse().join('')
        reversedWord === userInput?  setIsPalindrom('true') :  setIsPalindrom('false')
    }

    return (
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input type="text" className="inputLine" onChange={e => setUserInput(e.target.value)}/>
            <button className="confirmationButton" onClick={clickHandler}>Is Palindrome?</button>
            <span className="resultsBox">Palindrom: {isPalindrom}</span>
        </div>
    )
}

export default Palindrome