import axios from 'axios';

const getStudents = () => new Promise((resolve, reject) => {
  axios
    .get('https://localhost:44387/api/students/1')
    .then((result) => {
      resolve(result.data);
    })
    .catch(error => reject(error));
});

const deleteStudent = studentId => axios.put(`https://localhost:44387/api/students/delete/${studentId}`);

const createStudent = newStudent => axios.post('https://localhost:44387/api/students/', newStudent);

export default {
  getStudents,
  deleteStudent,
  createStudent,
};
