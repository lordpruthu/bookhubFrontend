import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Carousels from "./components/Carousels/Carousels";
import DisplayCards from "./components/cards/DisplayCards";
import Introduction from "./components/container/Introduction";

function App() {
  return (
    <>
      <NavBar />
      <Carousels />
      <Introduction />
      <DisplayCards />
    </>
  );
}

export default App;
