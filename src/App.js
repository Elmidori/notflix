import "./App.css";
import Carousel from "./components/Carousel";
import requests from "./requests";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <section className="Container">
        <Carousel title="TOP RATED" fetchUrl={requests.fetchTopRated} isLarge />
        <Carousel title="LATEST MOVIES" fetchUrl={requests.fetchLatest} />
        <Carousel title="UPCOMING MOVIES" fetchUrl={requests.fetchUpcoming} />
        <Carousel title="CRIME MOVIES" fetchUrl={requests.fetchCrime} />
      </section>
    </div>
  );
}

export default App;
