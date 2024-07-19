import { useEffect, useState } from "react";

export default function Home() {
    const [activities, setActivities] = useState([]);

    const fetchActivities = async () => {
        const response = await fetch("http://3.16.138.57:8000/dog/activity_log/");
        const data = await response.json();
        setActivities(data);
        console.log(data);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
      };

    useEffect(() => {
        fetchActivities();
    }, []);

    return (
        <>
            <div className="flex items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-3xl my-16 font-extrabold text-center">Here's what the dogs have been up to!</h1>
                    <div className="overflow-x-auto w-10/12  bg-base-200">
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
                                        <td className="text-center">{formatDate(activity.date)}</td>
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
