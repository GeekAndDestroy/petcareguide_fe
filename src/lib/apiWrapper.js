import axios from "axios";

const baseURL = "localhost:8000/dog";
const dogEndpoint = "/";
const dogDetailEndpoint = "/:id/";
const feedingScheduleEndpoint = "/feeding-schedule/";
const feedingScheduleDetailEndpoint = "/feeding-schedule/:id/";
const activityLogEndpoint = "/activity-log/";
const activityLogDetailEndpoint = "/activity-log/:id/";

// const fetchDogs = async () => {
//     const response = await fetch("http://localhost:8000/dog/");
//     const data = await response.json();
//     setDogs(data);
//     console.log(data);
// }

export async function getDogs() {
    return axios
        .get(`${baseURL}${dogEndpoint}`)
        .then((response) => response.data);
}

export async function createDog(data) {
    return axios
        .post(`${baseURL}${dogEndpoint}`, data)
        .then((response) => response.data);
}

export async function getDog(id) {
    return axios
        .get(`${baseURL}${dogDetailEndpoint.replace(":id", id)}`)
        .then((response) => response.data);
}

export async function updateDog(id, data) {
    return axios
        .put(`${baseURL}${dogDetailEndpoint.replace(":id", id)}`, data)
        .then((response) => response.data);
}

export async function deleteDog(id) {
    return axios
        .delete(`${baseURL}${dogDetailEndpoint.replace(":id", id)}`)
        .then((response) => response.data);
}

export async function getFeedingSchedules() {
    return axios
        .get(`${baseURL}${feedingScheduleEndpoint}`)
        .then((response) => response.data);
}

export async function createFeedingSchedule(data) {
    return axios
        .post(`${baseURL}${feedingScheduleEndpoint}`, data)
        .then((response) => response.data);
}

export async function getFeedingSchedule(id) {
    return axios
        .get(`${baseURL}${feedingScheduleDetailEndpoint.replace(":id", id)}`)
        .then((response) => response.data);
}

export async function updateFeedingSchedule(id, data) {
    return axios
        .put(`${baseURL}${feedingScheduleDetailEndpoint.replace(":id", id)}`, data)
        .then((response) => response.data);
}

export async function deleteFeedingSchedule(id) {
    return axios
        .delete(`${baseURL}${feedingScheduleDetailEndpoint.replace(":id", id)}`)
        .then((response) => response.data);
}

export async function getActivityLogs() {
    return axios
        .get(`${baseURL}${activityLogEndpoint}`)
        .then((response) => response.data);
}

export async function createActivityLog(data) {
    return axios
        .post(`${baseURL}${activityLogEndpoint}`, data)
        .then((response) => response.data);
}

export async function getActivityLog(id) {
    return axios
        .get(`${baseURL}${activityLogDetailEndpoint.replace(":id", id)}`)
        .then((response) => response.data);
}

export async function updateActivityLog(id, data) {
    return axios
        .put(`${baseURL}${activityLogDetailEndpoint.replace(":id", id)}`, data)
        .then((response) => response.data);
}

export async function deleteActivityLog(id) {
    return axios
        .delete(`${baseURL}${activityLogDetailEndpoint.replace(":id", id)}`)
        .then((response) => response.data);
}