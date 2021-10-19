import s from "./ImageGallery.module.css";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Modal from '../Modal'


export default class ImageGallery extends Component {
    state = {
        pictures: [],
        chosenPic: '',
        showModal: false,
        status: 'idle',
    };

    componentDidUpdate(prevProps) {
        const APIkey = "22968833-cf9b798f42870513c2372fa03";
        const SearchUrl = `https://pixabay.com/api/?key=${APIkey}&q=${this.props.request}&image_type=photo`;
        if (prevProps.request !== this.props.request) {
            this.setState({ status: 'pending' })
            fetch(SearchUrl)
                .then((response) => { if (response.ok) { return response.json() } })
                .then((pics) => this.setState({ pictures: pics.hits, status: 'resolve' }))
                .catch(err => {
                    this.setState({ error: err, status: 'rejected' })
                })
        }


    }
    // loadMore = () => {
    //     newFetchPhotos.page += 1;
    //     newFetchPhotos.fetchPhotos().then(response => {
    //         this.setState(prevState => ({
    //             searchResults: [...prevState.searchResults, ...response.hits],
    //         }));

    //         window.scrollTo({
    //             top: document.querySelector('.ImageGallery').scrollHeight,
    //             behavior: 'smooth',
    //         });
    //     });
    // };




    chosePic = e => {
        this.setState({
            chosenPic: e.target.dataset.source,
        });
        console.log(this.state.chosenPic);
    };

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });
    };




    render() {
        const { pictures, status, } = this.state

        if (status === 'idle') {
            return <div></div>;
        }
        if (status === 'pending') {
            return (
                <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
            );
        }
        if (status === 'rejected') {
            return (
                <div>
                    <p>Sorry, no matches found</p>
                </div>
            )
        }

        if (status === 'resolve') {
            if (pictures.length === 0) {
                return (
                    <div>
                        <p>Sorry, no matches found</p>
                    </div>
                )
            }

            return (
                <>
                    <ul className={s.ImageGallery}>

                        <ImageGalleryItem pictures={pictures} chosenPic={this.chosePic} toggleModal={this.toggleModal} />
                    </ul>
                    {this.state.showModal && (
                        <Modal toggleModal={this.toggleModal}>
                            <img className="modalImage" src={this.state.chosenPic} alt="" />
                        </Modal>
                    )}
                </>
            );
        }
    }
}