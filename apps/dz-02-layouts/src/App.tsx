import './App.css'
import Store from './components/Store';
import { PROJECTS } from './consts/data.const';

function App() {
    return (
        <div className="app">
            <Store products={PROJECTS} />
        </div>
    );
}

export default App;
