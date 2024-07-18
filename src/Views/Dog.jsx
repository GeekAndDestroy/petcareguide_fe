import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DogInfo from "../Components/DogInfo";
import FeedingSchedule from "../Components/FeedingSchedule";
import ActivityLog from "../Components/ActivityLog";

export default function Dog() {
    const { dog_id } = useParams();

    const [dog, setDog] = useState([]);
    const [feedingSchedule, setFeedingSchedule] = useState([]);
    const [activityLogs, setActivityLogs] = useState([]);
    const [newLog, setNewLog] = useState({ activity: "", notes: "" });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const fetchDog = async () => {
        const response = await fetch(
            "http://3.16.138.57:8000/dog/" + dog_id + "/"
        );
        const data = await response.json();
        setDog(data);
        console.log(data);
    };

    const fetchFeedingSchedule = async () => {
        const response = await fetch(
            "http://3.16.138.57:8000/dog/feeding_schedule/" + dog_id + "/"
        );
        const data = await response.json();
        setFeedingSchedule(data);
        console.log(data);
    };

    const fetchActivityLogs = async () => {
        const response = await fetch(
            "http://3.16.138.57:8000/dog/activity_log/" + dog_id + "/"
        );
        const data = await response.json();
        setActivityLogs(data);
        console.log(data);
        setFormSubmitted(false);
    };

    const handleInputChange = (event) => {
        // console.log(event.target.name, event.target.value);
        setNewLog({ ...newLog, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(
            "http://3.16.138.57:8000/dog/activity_log/",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    activity: newLog.activity,
                    notes: newLog.notes,
                    dog: dog.id,
                }),
            }
        );
        setFormSubmitted(true);
    };

    const closeModal = () =>
        document.getElementById("AL_Modal").close()

    useEffect(() => {
        fetchDog();
    }, []);

    useEffect(() => {
        fetchFeedingSchedule();
    }, []);

    useEffect(() => {
        fetchActivityLogs();
    }, [formSubmitted]);

    useEffect(() => {
        console.log(newLog);
    }, [newLog]);

    return (
        <div className="flex flex-col w-full items-center justify-center text-center">
            <h1 className="text-3xl my-16 font-extrabold w-full text-center">
                Here's what you need to know for {dog.name}!
            </h1>

            <DogInfo dog={dog} />

            <FeedingSchedule feedingSchedule={feedingSchedule} dog={dog}/>


            <h1 className="text-3xl mt-16 font-extrabold">
                Here's what {dog.name} has been up to!
            </h1>

            <span className="w-full">
                <button
                    className="btn btn-primary m-4"
                    onClick={() =>
                        document.getElementById("AL_Modal").showModal()
                    }
                >
                    Add Activity
                </button>
            </span>

            <ActivityLog activityLogs={activityLogs} />


            <dialog id="AL_Modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add Activity to Log</h3>
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                id="activity"
                                name="activity"
                                className="input input-bordered w-full m-2"
                                placeholder="Activity"
                                onChange={handleInputChange}
                            />

                            <textarea
                                id="notes"
                                name="notes"
                                className="textarea textarea-bordered w-full m-2"
                                placeholder="Enter any details about this activity!"
                                onChange={handleInputChange}
                            ></textarea>
                            <button
                                className="btn btn-primary mx-2"
                                onClick={() =>
                                    document.getElementById("AL_Modal").close()
                                }
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn mx-2">Cancel</button>
                            {/* <button
                                className="btn btn-primary mx-2"
                                onClick={ () => { handleFormSubmit(); closeModal();}}
                            >
                                Submit
                            </button> */}
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}
