import PropTypes from 'prop-types';
import axios from 'axios';

export function fetchPictures(nextInputValue, baseApi, APIkey, page) {

    return axios
        .get(
            `${baseApi}?key=${APIkey}&page=${page}&q=${nextInputValue}&image_type=photo`
        )
        .then(r => { return r.data.hits });

}
fetchPictures.PropTypes = {
    nextInputValue: PropTypes.string,
    baseApi: PropTypes.string,
    APIkey: PropTypes.string,
    page: PropTypes.string,
}

