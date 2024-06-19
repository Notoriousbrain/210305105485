import { useLocation } from "react-router-dom";
import { Footer, Navbar } from "./components";
import AllRoute from "./routes";

function App() {
  const location = useLocation();
  return (
    <div className="">
      <Navbar />
      <div className="pt-[10vh] container mx-auto">
        <AllRoute />
      </div>
      {location.pathname !== "/contact-us" && <Footer />}
    </div>
  );
}

export default App;
