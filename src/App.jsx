import "./App.css";
import Layout from "./components/Layout";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
      <div style={{ marginBottom: "80px" }}>
        <Topbar />
      </div>

      <Layout />
    </>
  );
}

export default App;
