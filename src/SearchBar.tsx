import { useState, useEffect } from "react";
import type { SearchBarProps } from "./types";

function SearchBar({ onSearch, initialValue = "" }: SearchBarProps) {
    const [searchValue, setSearchValue] = useState(initialValue);

    useEffect(() => {
        setSearchValue(initialValue);
    }, [initialValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearch(value);
    };

    return (
        <div className="search-bar-wrapper">
            <input
                type="text"
                placeholder="Hledat prvek"
                value={searchValue}
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;