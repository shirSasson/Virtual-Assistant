import React from 'react';
import { Card, Typography } from 'antd';
import './ChatMassage .css';

const { Paragraph } = Typography;

interface SearchResultProps {
    results: string[];
}

const ChatMassage: React.FC<SearchResultProps> = ({results}) => {
    return (
        <div className="result-container">
            {results.length > 0 ? (
                results.map( (item, index)=> (
                    <Paragraph className="result-card" key={index}>{item}</Paragraph>
                ))
            ):(
                <Paragraph className="result-card">No results found.</Paragraph>
            )}
        </div>
    );
};

export default ChatMassage;
