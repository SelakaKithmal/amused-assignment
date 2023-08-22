import * as React from 'react';
import useSearchItemList from '../../hooks/useSearchItemList';
import SearchResult from '../SearchResult';

const SearchBar = (() => {
    const inputRef = React.useRef(null);
    const [searchResult, setSearchName] = useSearchItemList()

    const handleClick = () => {
        setSearchName(inputRef.current.value)
    }

    const clearResults = () => {
        setSearchName(null)
    }

    return (
        <div className='row'>
            <div className='row col-12' style={{ padding: "15px", justifyContent: "end" }}>
                <input className="form-control form-control-md col-md-3 col-6" ref={inputRef} label="Search" />
                <button type="button" className="btn btn-success" onClick={handleClick} data-testid="search-button">Search </button>
                <button type="button" className="btn btn-danger" onClick={clearResults} data-testid="clear-results-button">Clear </button>
            </div>
            <SearchResult result={searchResult} />
        </div>
    );
})

export default SearchBar;