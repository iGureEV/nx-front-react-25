import { IMessageProps } from '../../interfaces';

export default function Message({ message }: IMessageProps) {
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">
                    {message.from.name} <i className="fa fa-circle me"></i>
                </span>
            </div>
            <div className="message other-message float-right">
                {message.text}
            </div>
        </li>
    );
}
