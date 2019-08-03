import axios from 'axios';

const getSingleStudent = studentId => new Promise((resolve, reject) => {
  axios
    .get(`https://localhost:44387/api/students/ID/${studentId}`)
    .then((result) => {
      resolve(result.data);
    })
    .catch(error => reject(error));
});

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

const updateStudent = (studentId, student) => axios.put(`https://localhost:44387/api/students/${studentId}`, student);

export default {
  getStudents,
  deleteStudent,
  createStudent,
  updateStudent,
  getSingleStudent,
};
