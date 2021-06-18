import axios from 'axios';

export const postRequest = async (url, payload = {}) => {
    const data = await axios.post(url, payload)
        .then(resp => resp.data)
        .catch(err => (
            { error :"Some error " }
        ));
    return data;
}

export const putRequest = async (url, payload = {}) => {
    const data = await axios.put(url, payload)
        .then(resp => resp.data)
        .catch(err => (
            { error :"Some error " }
        ));
    return data;
}

export const getRequest = async (url) => {
    const data = await axios.get(url)
        .then(resp => resp.data)
        .catch(err => (
            { error :"Some error " }
        ));
    return data;
}

export const deleteRequest = async (url) => {
    const data = await axios.delete(url)
        .then(resp => resp.data)
        .catch(err => (
            { error: "Some error" }
        ));
    return data;
}