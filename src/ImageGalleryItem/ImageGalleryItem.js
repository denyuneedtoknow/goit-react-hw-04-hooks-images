import { Component } from "react";
import s from "./ImageGalleryItem.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { pictures } from "../ImageGallery/ImageGallery"
// export default class ImageGalleryItem extends Component {
//   state = {
//     pictures: [],
//     status: 'idle',
//   };

//   componentDidUpdate(prevProps) {
//     const APIkey = "22968833-cf9b798f42870513c2372fa03";
//     const SearchUrl = `https://pixabay.com/api/?key=${APIkey}&q=${this.props.request}&image_type=photo`;
//     if (prevProps.request !== this.props.request) {
//       this.setState({ status: 'pending' })
//       fetch(SearchUrl)
//         .then((response) => { if (response.ok) { return response.json() } })
//         .then((pics) => this.setState({ pictures: pics.hits, status: 'resolve' }))
//         .catch(err => {
//           this.setState({ error: err })
//         })
//     }

//   }
//   render() {
//     const { pictures, status } = this.state

//     if (status === 'idle') {
//       return <div></div>;
//     }
//     if (status === 'pending') {
//       return (
//         <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
//       );
//     }
//     if (status === 'resolve') {
//       if (pictures.length === 0) {
//         return (
//           <div className="info">
//             <p>Sorry, no matches found</p>
//           </div>
//         )
//       }

//       return (
//         <>
//           {pictures.map((pic) => {
//             return (<li key={pic.id} className={s.ImageGalleryItem}><img src={pic.previewURL} alt={pic.tags} className={s.ImageGalleryItemPic} /></li>)
//           })}
//         </>

//       );
//     }
//   }
// }


export default function ImageGalleryItem({ pictures }) {

  return (
    <>
      {pictures.map((pic) => {
        return (<li key={pic.id} className={s.ImageGalleryItem}><img src={pic.previewURL} alt={pic.tags} className={s.ImageGalleryItemPic} /></li>)
      })}
    </>)
}