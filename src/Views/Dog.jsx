import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Dog() {

    const { dog_id } = useParams();

    const [dog, setDog] = useState([]);
    const [feedingSchedule, setFeedingSchedule] = useState([]);
    const [activityLogs, setActivityLogs] = useState([]);

    const fetchDog = async () => {
        const response = await fetch("http://localhost:8000/dog/" + dog_id +"/");
        const data = await response.json();
        setDog(data);
        console.log(data);
    }

    const fetchFeedingSchedule = async () => {
        const response = await fetch("http://localhost:8000/dog/feeding_schedule/" + dog_id + "/");
        const data = await response.json();
        setFeedingSchedule(data);
        console.log(data);
    }

    const fetchActivityLogs = async () => { 
        const response = await fetch("http://localhost:8000/dog/activity_log/" + dog_id + "/");
        const data = await response.json();
        setActivityLogs(data);
        console.log(data);
    }

    useEffect(() => {
        fetchDog();
    }, []);

    useEffect(() => {
        fetchFeedingSchedule();
    }, []);

    useEffect(() => {
        fetchActivityLogs();
    }, []);

    return (
        <div className="flex flex-col w-full items-center justify-center">
            <h1 className="text-3xl my-16 font-extrabold w-full">Here's what you need to know for {dog.name}!</h1>
            <div className="border-2 rounded-2xl w-10/12 p-16">
                <h1 className="text-2xl mb-16 font-extrabold w-full">Feeding Schedule</h1>
                <div className="">
                    <ul className="">
                        <li className="my-4">
                            <h6 className="text-xl font-bold">Food</h6>
                            <p>{ feedingSchedule.food }</p>
                        </li>
                        <li className="my-4">    
                            <h6 className="text-xl font-bold">Amount</h6>
                            <p>{ feedingSchedule.amount } cups</p>
                        </li>
                        <li className="my-4">
                            <h6 className="text-xl font-bold">Frequency</h6>
                            <p>{ feedingSchedule.frequency }</p>
                        </li>
                    </ul>

                </div>
            </div>
                


        </div>
    )
}
