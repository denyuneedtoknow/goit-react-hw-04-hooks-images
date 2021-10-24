import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import ImageGallery from "./Components/ImageGallery/ImageGallery"


function App() {
    const [keyword, setKeyword] = useState('')
    const [page, setPage] = useState(null)



    const handleFormSubmit = (keyword) => {
        setKeyword(keyword);
        setPage(1)

    };

    return (
        <div className='App'>
            <SearchBar onSubmit={handleFormSubmit} />
            <ImageGallery request={keyword} startPage={page} />
            <ToastContainer autoClose={3000} />
        </div>
    );
}

export default App