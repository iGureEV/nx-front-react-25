import './App.css'
import Portfolio from './components/Portfolio/Portfolio';
import { FILTERS, PROJECTS } from './consts/data.const';

function App() {
    return (
        <div className="App">
            <Portfolio projects={PROJECTS} filters={FILTERS} />
        </div>
    );
}

export default App;
