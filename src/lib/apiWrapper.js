import axios from 'axios';

const baseURL = 'localhost:8000/dog'
const dogEndpoint = '/'
const dogDetailEndpoint = '/:id/'
const feedingScheduleEndpoint = '/feeding-schedule/'
const feedingScheduleDetailEndpoint = '/feeding-schedule/:id/'
const activityLogEndpoint = '/activity-log/'
const activityLogDetailEndpoint = '/activity-log/:id/'


// async function getDogs() {
//     return axios.get(baseURL + dogEndpoint)
// }

// async function getDog(id) {