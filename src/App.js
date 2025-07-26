import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div id="main">
      <Navbar />
      
    </div>
  );
};

root.render(<App />);
