import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ padding: "10px" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
