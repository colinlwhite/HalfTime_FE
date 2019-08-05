import axios from 'axios';

const getSingleVolunteer = volunteerId => new Promise((resolve, reject) => {
  axios
    .get(`https://localhost:44387/api/volunteers/ID/${volunteerId}`)
    .then((result) => {
      resolve(result.data);
    })
    .catch(error => reject(error));
});

const getVolunteers = () => new Promise((resolve, reject) => {
  axios
    .get('https://localhost:44387/api/volunteers/1')
    .then((result) => {
      resolve(result.data);
    })
    .catch(error => reject(error));
});

const deleteVolunteer = volunteerId => axios.put(`https://localhost:44387/api/volunteers/delete/${volunteerId}`);

const createVolunteer = newVolunteer => axios.post('https://localhost:44387/api/volunteers/', newVolunteer);

const updateVolunteer = (volunteerId, volunteer) => axios
  .put(`https://localhost:44387/api/volunteers/${volunteerId}`, volunteer);

export default {
  getVolunteers,
  deleteVolunteer,
  createVolunteer,
  updateVolunteer,
  getSingleVolunteer,
};
