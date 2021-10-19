
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
        return (<li onClick={onItemClick} key={pic.id} className={s.ImageGalleryItem}><img src={pic.webformatURL} alt={pic.tags} data-source={pic.largeImageURL} className={s.ImageGalleryItemPic} /></li>)
      })}
    </>)
}