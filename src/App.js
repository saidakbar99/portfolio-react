import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="text-gray-300 bg-dark-blue snap-y snap-mandatory overflow-y-scroll h-screen w-screen">
            <div className='snap-start'>
                <Navbar />
            </div>
            <div className='snap-start'>
                <Home />
            </div>
            <div className='snap-start'>
                <About />
            </div>
            <div className='snap-start'>
                <Skills />
            </div>
            <div className='snap-start'>
                <Work />
            </div>
            <div className='snap-start'>
                <Contact />
            </div>
        </div>
    );
}

export default App;
