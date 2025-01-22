import React , { useState } from 'react';
import { Input , Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { sendData } from '../../services/searchController';

import './Chat.css';
import {ChatMessageData} from '../../types/chatTypes';
import ChatMessage from './ChatMassage/ChatMassage ';

const { TextArea } = Input;

const Chat: React.FC = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [results, setResults] = useState<ChatMessageData[]>([]);

    const handleSearch = async () =>{
        if (loading) return;

        const text = searchText.trim()
        if(!text) return;

        setLoading(true);

        // Append user input to the chat
        setResults(prev => [...prev, {
            from: 'you',
            text: text
        }]);

        try{
            // Clear user input
            setSearchText('');

            // Send request to server
            const response = await sendData(searchText);

            // Append server response to the list
            setResults(prev => [...prev, {
                from: 'bot',
                text: response
            }]);

        } catch (error) {
            console.log('Search failed', error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className={'chat-container'}>
            <div className="chat-messages">
                {results.length > 0 && (
                    results.map( (item, index)=> (
                        <ChatMessage message={item}/>
                    ))
                )}
            </div>
            <div className="search-bar-container">
                <TextArea
                    className="search-input"
                    placeholder="Search for something..."
                    allowClear
                    autoSize
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                            void handleSearch();
                        }
                    }}
                />
                <Button
                    onClick={handleSearch}
                    variant="filled"
                    className="search-button"
                    icon={<SearchOutlined/>}
                    loading={loading}>
                </Button>
            </div>
        </div>


    );
};

export default Chat;