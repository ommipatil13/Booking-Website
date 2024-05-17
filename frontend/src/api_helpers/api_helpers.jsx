import axios from 'axios';

export const getAllMovies = async () => {
    const res = await axios.get('/movie').catch(error => console.log(error))
    if (res.status !== 200) {
        return console.log('No Data')
    }
    const data = await res.data;
    return data;
}

export const sendUserAuthRequest = async (data, signup) => {
    const res = await axios.post(`/user/${signup ? "signup" : "login"}`, {
        name: signup ? data.name : "",
        email: data.email,
        password: data.password
    }).catch((error) => console.log(error))

    if (res.status !== 200 && res.status !== 201) {
        return console.log('No Data')
    }
    const resData = await res.data;
    return resData;
}