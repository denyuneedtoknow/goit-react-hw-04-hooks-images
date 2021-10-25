import PropTypes from 'prop-types';
import { useState } from "react";
import s from "./SearchBar.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function SearchBar({ onSubmit }) {

    const [keyword, setKeyword] = useState('')

    const handleKeywordChange = (event) => {
        setKeyword(event.currentTarget.value.toLowerCase());

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (keyword.trim() === "") {
            toast.error("Enter something!");
            return;
        }
        onSubmit(keyword);

        setKeyword("");
    };

    return (
        <header className={s.Searchbar}>
            <form className={s.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={s.SearchFormButton}>
                    <span className={s.SearchFormButtonLabel}>Search</span>
                </button>
                <input
                    className={s.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={keyword}
                    onChange={handleKeywordChange}
                />
            </form>
        </header>
    );
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func,
}


export default SearchBar