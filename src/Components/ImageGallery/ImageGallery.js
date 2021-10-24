import s from "./ImageGallery.module.css";
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import { useState, useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Modal from '../Modal'
import { fetchPictures } from '../Services/PicFinderAPI';
import Button from '../Button/Button'


const baseApi = 'https://pixabay.com/api/';
const APIkey = '22968833-cf9b798f42870513c2372fa03';
function ImageGallery({ request, startPage }) {

    const [page, setPage] = useState(startPage);
    const [pictures, setPictures] = useState([]);
    const [chosenPic, setChosenPic] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null);
    const [searchValue, setSearchValue] = useState('')


    useEffect(() => {

        if (!request) {
            return;
        }
        setSearchValue(request)

        if (request !== searchValue) {
            setPage(1)

            console.log(`${searchValue} for ${request}`);
        }

        setStatus('pending')

        fetchPictures(request, baseApi, APIkey, page)

            .then((data) => {
                if (page !== 1) { setPictures([...pictures, ...data]) }
                else { setPictures([...data]) }
                setStatus('resolve')
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            }).catch(error => {
                setStatus('rejected');
                setError(error)
            });
    }, [request, page, searchValue,])




    const chosePic = e => {
        setChosenPic(e.target.dataset.source)
    };

    const toggleModal = () => {
        setShowModal(!showModal)

    };

    const onLoadMoreClick = () => {
        setPage(page + 1)

    };


    if (status === 'idle') {
        return <div></div>;
    }

    if (status === 'pending') {

        return (
            <>
                <ul className={s.ImageGallery}>
                    <ImageGalleryItem pictures={pictures} chosenPic={chosePic} toggleModal={toggleModal} />
                </ul>
                <Loader type="TailSpin" color="#00BFFF" height={80} width={80} /></>
        );
    }

    if (status === 'rejected') {
        return (
            <div>
                <div className={s.rejection}>{error}</div>
            </div>
        )
    }
    if (status === 'resolve') {
        if (pictures.length === 0) {
            return (
                <div>
                    <div className={s.rejection}>Sorry, no matches found</div>
                </div>
            )
        }

        return (
            <>
                <ul className={s.ImageGallery}>
                    <ImageGalleryItem pictures={pictures} chosenPic={chosePic} toggleModal={toggleModal} />
                </ul>
                {showModal && (
                    <Modal toggleModal={toggleModal}>
                        <img className="modalImage" src={chosenPic} alt="" />
                    </Modal>
                )}
                <Button onLoadMoreClick={onLoadMoreClick} />
            </>
        );
    }
}

ImageGallery.propTypes = {
    request: PropTypes.string,
};

export default ImageGallery