import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import SearchBar from "./Components/SearchBar";
// import ImageGallery from "./Components/ImageGallery/ImageGallery"


function App() {


    const handleFormSubmit = (keyword) => {
        this.setState({ keyword });
        this.setState({ page: 1 })

    };

    return (
        <div className='App'>
            <SearchBar onSubmit={handleFormSubmit} />
            <ImageGallery request={this.state.keyword} startPage={this.state.page} />
            <ToastContainer autoClose={3000} />
        </div>
    );
}

export default App