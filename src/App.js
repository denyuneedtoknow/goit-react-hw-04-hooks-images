
import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import ImageGallery from "./Components/ImageGallery/ImageGallery"


export default class App extends Component {
  state = {
    keyword: "",
    page: null,
    showModal: false,
  };
  handleFormSubmit = (keyword) => {
    this.setState({ keyword });
    this.setState({ page: 1 });
  };
  render() {
    return (
      <div className='App'>
        <SearchBar onSubmit={this.handleFormSubmit} />

        <ImageGallery request={this.state.keyword} pageCounter={this.page} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
