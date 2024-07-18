import React from 'react'

export default function FeedingSchedule({ feedingSchedule, dog }) {
  return (
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
  )
}
