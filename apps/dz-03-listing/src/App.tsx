import './App.css';
import Listing from './components/Listing/Listing';
import data from './consts/etsy.json';

function App() {
    return (
        <Listing items={data}></Listing>
    );
}

export default App;
