// import React from "react";
import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

export default class App extends Component {
  state = {
    keyword: "",
  };
  handleFormSubmit = (keyword) => {
    console.log(keyword);
    this.setState({ keyword });
    const APIkey = "22968833-cf9b798f42870513c2372fa03";
    const SearchUrl = `https://pixabay.com/api/?key=${APIkey}&q=${keyword}&image_type=photo`;
    console.log(SearchUrl);
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <p>Yo're looking for: {this.state.keyword}</p>
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
