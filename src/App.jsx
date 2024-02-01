import Navabr from "./components/Navbar";
import SearchBar from "./components/subcomponents/SearchBar";
import "./styles/index.css";

const App = () => {
  return (
    <>
      <Navabr />
      <SearchBar vis={"md:hidden"} rs={"sm"}/>
    </>
  );
};

export default App;
