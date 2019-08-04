import axios from 'axios';

const getSingleEvent = eventId => new Promise((resolve, reject) => {
  axios
    .get(`https://localhost:44387/api/events/ID/${eventId}`)
    .then((result) => {
      resolve(result.data);
    })
    .catch(error => reject(error));
});

const getEvents = () => new Promise((resolve, reject) => {
  axios
    .get('https://localhost:44387/api/events/1')
    .then((result) => {
      resolve(result.data);
    })
    .catch(error => reject(error));
});

const deleteEvent = eventId => axios.put(`https://localhost:44387/api/events/delete/${eventId}`);

const createEvent = newEvent => axios.post('https://localhost:44387/api/events/', newEvent);

const updateEvent = (eventId, event) => axios
  .put(`https://localhost:44387/api/events/${eventId}`, event);

export default {
  getEvents,
  deleteEvent,
  createEvent,
  updateEvent,
  getSingleEvent,
};
