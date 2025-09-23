import { IMessageHistoryProps } from '../../interfaces';
import Message from '../Message/Message';
import Response from '../Response/Response';
import Typing from '../Typing/Typing';

export default function MessageHistory({ messages }: IMessageHistoryProps) {
    if (!messages || messages.length === 0) {
        return null;
    }

    return (
        <ul>
            {messages.map((message) => {
                switch (message.type) {
                    case 'message':
                        return <Message message={message} />;
                    case 'response':
                        return <Response message={message} />;
                    case 'typing':
                        return <Typing message={message} />;
                    default:
                        return null;
                }
            })}
        </ul>
    );
};
