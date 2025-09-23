import { IMessageProps } from '../../interfaces';

export default function Typing({ message }: IMessageProps) {
    return (
        <li>
            <div className="message-data align-left">
                <span className="message-data-name">
                    <i className="fa fa-circle online"></i> {message.from.name}
                </span>
                <span className="message-data-time">{message.time}</span>
            </div>
            <div className="message my-message">
                ...печатает
            </div>
        </li>
    );
}
