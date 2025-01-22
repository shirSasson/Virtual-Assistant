import React , { useState } from 'react';
import { Input , Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { sendData } from '../../services/searchController';
import SearchResult from "../SearchResult/SearchResult";

import './SearchBar.css';


const { TextArea } = Input;

const SearchBar: React.FC = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [results, setResults] = useState<string[]>([]);

    const handleSearch = async () =>{
        if(!searchText.trim()) return;
        setLoading(true);

        try{
            const response = await sendData(searchText);
            setResults(response ? response.split('\n') : []);
        }catch (error){
            console.log('Search failed', error);
        }finally {
            setLoading(false);
        }
    }
    return (
        <>
            <div className="search-bar-container">
                <TextArea
                    className="search-input"
                    placeholder="Search for something..."
                    allowClear
                    autoSize
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Button
                    onClick={handleSearch}
                    variant="filled"
                    className="search-button"
                    icon={<SearchOutlined/>}
                    loading={loading}>
                </Button>
            </div>
            <SearchResult results={results}/>
        </>


    );
};

export default SearchBar;
