import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            <div className="flex flex-col items-center justify-center border-2 rounded-2xl w-10/12 p-16 my-4  bg-base-200">
                <h1 className="text-2xl mb-16  font-extrabold w-full">
                    {dog.name}'s Info
                </h1>
                <ul className="">
                    <li className="my-4">
                        <h6 className="text-xl font-bold">Breed</h6>
                        <p>{dog.breed}</p>
                    </li>
                    <li className="my-4">
                        <h6 className="text-xl font-bold">
                            Estimated Date Of Birth
                        </h6>
                        <p>{dog.est_dob}</p>
                    </li>
                    <li className="my-4">
                        <h6 className="text-xl font-bold">Weight</h6>
                        <p>{dog.weight} lbs</p>
                    </li>
                    <li className="my-4">
                        <h6 className="text-xl font-bold">Sex</h6>
                        <p>{dog.sex}</p>
                    </li>
                    <li className="my-4">
                        <h6 className="text-xl font-bold">
                            Known Medical Conditions
                        </h6>
                        <p>{dog.medical_conditions}</p>
                    </li>
                </ul>
            </div>
            <div className="border-2 rounded-2xl w-10/12 p-16 my-4  bg-base-200">
                <h1 className="text-2xl mb-16 font-extrabold w-full">
                    {dog.name}'s Feeding Schedule
                </h1>
                <div className="">
                    <ul className="">
                        <li className="my-4">
                            <h6 className="text-xl font-bold">Food</h6>
                            <p>{feedingSchedule.food}</p>
                        </li>
                        <li className="my-4">
                            <h6 className="text-xl font-bold">Amount</h6>
                            <p>{feedingSchedule.amount} cups</p>
                        </li>
                        <li className="my-4">
                            <h6 className="text-xl font-bold">Frequency</h6>
                            <p>{feedingSchedule.frequency}</p>
                        </li>
                    </ul>
                </div>
            </div>
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
            <div className="overflow-x-auto w-10/12 mb-16">
                <table className="table table-lg  bg-base-200">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-center">Date</th>
                            <th className="text-center">Activity</th>
                            <th className="text-center">Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activityLogs.map((activity) => (
                            <tr key={activity.id} className="hover">
                                <td className="text-center">{activity.date}</td>
                                <td className="text-center">
                                    {activity.activity}
                                </td>
                                <td className="text-center">
                                    {activity.notes}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
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
