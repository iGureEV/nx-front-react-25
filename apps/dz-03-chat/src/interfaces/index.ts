export interface IFrom {
    name: string,
};

export interface IMessage {
    id: string,
    from: IFrom,
    type: string,
    time: string,
    text?: string,
}

export interface IMessageProps {
    message: IMessage,
};

export interface IMessageHistoryProps {
    messages: IMessage[],
};
