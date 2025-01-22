import React from 'react';
import { Card, Typography } from 'antd';
import './SearchResult.css';

const { Paragraph } = Typography;

interface SearchResultProps {
    results: string[];
}

const SearchResult: React.FC<SearchResultProps> = ({results}) => {
    return (
        <div className="result-container">
            <Card className="result-card">
                {results.length > 0 ? (
                    results.map( (item, index)=> (
                        <Paragraph key={index}>{item}</Paragraph>
                    ))
                ):(
                    <Paragraph>No results found.</Paragraph>
                )}
            </Card>
        </div>
    );
};

export default SearchResult;
