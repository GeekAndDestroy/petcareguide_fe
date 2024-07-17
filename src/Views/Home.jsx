import { useEffect, useState } from "react";

export default function Home() {
    const [activities, setActivities] = useState([]);

    const fetchActivities = async () => {
        const response = await fetch("http://localhost:8000/dog/activity_log/");
        const data = await response.json();
        setActivities(data);
        console.log(data);
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    return (
        <>
            <div className="flex justify-center w-full">
                <div className="w-full">
                    <h1 className="text-3xl my-16 font-extrabold">Here's what the dogs have been up to!</h1>
                    <div className="overflow-x-auto w-full">
                        <table className="table table-lg">
                            {/* head */}
                            <thead>
                                <tr>
                                    
                                    <th className="text-center">Date</th>
                                    <th className="text-center">Activity</th>
                                    <th className="text-center">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {activities.map((activity) => (
                                    <tr key={activity.id}  className="hover">
                                        <td className="text-center">{activity.date}</td>
                                        <td className="text-center">{activity.activity}</td>
                                        <td className="text-center">{activity.notes}</td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
