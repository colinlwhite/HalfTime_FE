import axios from 'axios';

const getUser = () => new Promise((resolve, reject) => {
    axios
    .get(`https://localhost:44387/api/users/1`)
    .then((result) => {
      resolve(result.data);
    })
    .catch(error => reject(error));
});

export default getUser;
