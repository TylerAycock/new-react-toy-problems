import { NavLink } from "react-router-dom";
import "./TopicBrowser.css";
const TopicBrowser = () => {
  return (
    <div className="puzzleFeed">
      <NavLink to={'/'}className={'header'} ><h1>Puzzle Solutions</h1></NavLink>
      <nav className="nav">
        <NavLink
          to={"/even"}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Even & Odd
        </NavLink>
        <NavLink
          to={"/object"}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Object Filter
        </NavLink>
        <NavLink
          to={"/string"}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          String Filter
        </NavLink>
        <NavLink
          to={"/palindrome"}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Palindrome
        </NavLink>
        <NavLink
          to={"/sum"}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Sum
        </NavLink>
      </nav>
    </div>
  );
};

export default TopicBrowser;
