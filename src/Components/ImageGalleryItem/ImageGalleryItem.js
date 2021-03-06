import PropTypes from 'prop-types';
import s from "./ImageGalleryItem.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export default function ImageGalleryItem({ pictures, chosenPic, toggleModal }) {

  function onItemClick(e) {
    toggleModal();
    chosenPic(e);
  }

  return (
    <>
      {pictures.map((pic) => {
        return (<li onClick={onItemClick} key={pic.webformatURL} className={s.ImageGalleryItem}><img src={pic.webformatURL} alt={pic.tags} data-source={pic.largeImageURL} className={s.ImageGalleryItemPic} /></li>)
      })}
    </>)
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  toggleModal: PropTypes.func,
  chosenPic: PropTypes.func,
  largeImageURL: PropTypes.string,
};