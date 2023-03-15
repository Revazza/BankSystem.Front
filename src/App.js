import "./App.css";
import Header from "./components/header/Header";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Auth />
      <Home />

    </div>
  );
}

export default App;
