import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: "https://films-c7a51-default-rtdb.europe-west1.firebasedatabase.app/"
});

export default apiFirebase;