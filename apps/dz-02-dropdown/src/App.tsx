import './App.css'
import Dropdown from './components/Dropdown';
import { MENU_ITEMS } from './consts/data.const';

function App() {
    return (
        <div className="app">
            <Dropdown buttonText="Account Settings" items={MENU_ITEMS} />
        </div>
    );
}

export default App;
