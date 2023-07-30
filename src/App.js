import TopicBrowser from "./components/TopicBrowser/TopicBrowser";
import { Routes, Route } from "react-router-dom";
import EvenAndOdd from "./components/Topics/EvenAndOdd";
import FilterObject from "./components/Topics/FilterObject";
import FilterString from "./components/Topics/FilterString";
import Palindrome from "./components/Topics/Palindrome";
import Sum from "./components/Topics/Sum";
import HomeScreen from './components/TopicBrowser/HomeScreen'

function App() {
  return (
    <>
      <TopicBrowser/>
      <Routes>
        <Route index element={<HomeScreen/>} />
        <Route path="/even" element={<EvenAndOdd />} />
        <Route path="/object" element={<FilterObject />} />
        <Route path="/string" element={<FilterString />} />
        <Route path="/palindrome" element={<Palindrome />} />
        <Route path="/sum" element={<Sum />} />
      </Routes>
    </>
  );
}

export default App;
