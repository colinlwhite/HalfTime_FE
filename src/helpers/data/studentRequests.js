import axios from 'axios';

const getStudents = () => new Promise((resolve, reject) => {
  axios
    .get('https://localhost:44387/api/students/1')
    .then((result) => {
      resolve(result.data);
    })
    .catch(error => reject(error));
});

export default { getStudents };
