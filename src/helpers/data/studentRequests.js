import axios from 'axios';

const getStudents = () => new Promise((resolve, reject) => {
  axios
    .get('https://localhost:44387/api/students/1')
    .then((result) => {
      resolve(result.data);
    })
    .catch(error => reject(error));
});

const deleteStudent = studentId => axios.delete(`https://localhost:44387/api/students/${studentId}`);

export default {
  getStudents,
  deleteStudent,
};
