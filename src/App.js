// import React from "react";
import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import ImageGallery from "./ImageGallery/ImageGallery"
import Modal from './Modal'

export default class App extends Component {
  state = {
    keyword: "",
    showModal: false,
  };
  handleFormSubmit = (keyword) => {
    console.log(keyword);
    this.setState({ keyword });
  };
  render() {
    return (
      <div className='App'>
        <SearchBar onSubmit={this.handleFormSubmit} />

        <Modal />
        <ImageGallery request={this.state.keyword} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
