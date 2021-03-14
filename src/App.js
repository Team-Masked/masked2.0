import "./App.css";
import Awareness from "./components/Awareness";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <div className="app__view">
        <Sidebar />
        <div className="app__main">
          <Header />
          <div className="right">
            <Form />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
