import axios from 'axios';

export const getAllMovies = async () => {
    const res = await axios.get('http://localhost:8080/movie').catch(error => console.log(error))
    if (res.status !== 200) {
        return console.log('No Data')
    }
    const data = await res.data;
    return data;
}