import { Component } from "react";
import s from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  state = {
    pictures: [],
  };
  componentDidUpdate(prevProps) {
    const APIkey = "22968833-cf9b798f42870513c2372fa03";
    const SearchUrl = `https://pixabay.com/api/?key=${APIkey}&q=${this.props.request}&image_type=photo`;
    if (prevProps.request !== this.props.request) {
      fetch(SearchUrl)
        .then((res) => res.json())
        .then((pics) => this.setState({ pictures: pics.hits }));
    }

    // const mapping = () => {
    //   console.log(this.state.pictures);
    // };
    // mapping();
  }
  render() {
    return (

      <>
        {this.state.pictures.map((pic) => {
          return (<li key={pic.id} className={s.ImageGalleryItem}><img src={pic.webformatURL} alt={pic.tags} className={s.ImageGalleryItemPic} width='300' /></li>)
        })}
      </>

    );
  }
}
