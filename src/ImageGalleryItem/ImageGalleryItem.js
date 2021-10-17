import { Component } from "react";
import s from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={s.ImageGalleryItem}>
        <img src="" alt="" className={s.ImageGalleryItemPic} />
      </li>
    );
  }
}
