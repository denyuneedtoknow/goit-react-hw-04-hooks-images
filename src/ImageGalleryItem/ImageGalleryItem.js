import { Component } from "react";
import s from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  state = {
    pictures: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const APIkey = "22968833-cf9b798f42870513c2372fa03";
    const SearchUrl = `https://pixabay.com/api/?key=${APIkey}&q=${this.props.request}&image_type=photo`;
    if (prevProps.request !== this.props.request) {
      fetch(SearchUrl)
        .then((res) => res.json())
        .then((pics) => this.setState({ pictures: pics.hits }));
    }
    // console.log(this.state.pictures);
    const mapping = () => {
      console.log(this.state.pictures);
    };
    mapping();
  }
  render() {
    return (
      <li className={s.ImageGalleryItem}>
        <img src="" alt="" className={s.ImageGalleryItemPic} />
        <p>{this.props.request}</p>
      </li>
    );
  }
}
