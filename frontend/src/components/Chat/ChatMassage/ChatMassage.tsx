import React from 'react';
import './ChatMassage.css';
import {ChatMessageData} from '../../../types/chatTypes';

interface SearchResultProps {
    message: ChatMessageData;
}

const ChatMessage: React.FC<SearchResultProps> = ({message}) => {
    return (
        <div className="chat-message">
            <span className={'user'}>{message.from === 'you' ? 'You' : 'Bot'}:</span>
            <span className={'text'}>{message.text}</span>
        </div>
    );
};

export default ChatMessage;