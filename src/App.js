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
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <p>Yo're looking for: {this.state.keyword}</p>
        <ul>
          <ImageGalleryItem request={this.state.keyword} />
        </ul>
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
