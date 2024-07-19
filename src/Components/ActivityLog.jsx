import React from 'react'

export default function ActivityLog({ activityLogs }) {

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

  return (
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
                    <td className="text-center">{formatDate(activity.date)}</td>
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
  )
}
