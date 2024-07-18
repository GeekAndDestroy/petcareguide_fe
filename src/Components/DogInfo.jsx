import React from "react";

export default function DogInfo({ dog }) {
    return (
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
    );
}
