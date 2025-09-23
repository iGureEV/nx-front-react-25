import './App.css'
import MessageHistory from './components/MessageHistory/MessageHistory';
import messages from './consts/messages';

function App() {
    return (
        <div className="clearfix container">
            <div className="chat">
                <div className="chat-history">
                    <MessageHistory messages={messages} />
                </div>
            </div>  
        </div>
    );
}

export default App;
