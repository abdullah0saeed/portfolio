import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <MyNavbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
