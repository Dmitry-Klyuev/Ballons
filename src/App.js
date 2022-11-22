import './App.css';
import {Header} from "./components/Header/Header";
import {SectionAbout} from "./components/SectionAbout/SectionAbout";

function App() {
    return (
        <div className='container'>
            <Header/>
            <SectionAbout />
        </div>
    );
}

export default App;
