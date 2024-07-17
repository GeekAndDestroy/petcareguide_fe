import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Views/Home";
import Dog from "./Views/Dog";

export default function App() {

    const [dogs, setDogs] = useState([]);

    const fetchDogs = async () => {
        const response = await fetch("http://localhost:8000/dog/");
        const data = await response.json();
        setDogs(data);
        console.log(data);
    }

    useEffect(() => {
        fetchDogs();
    }, []);

    return (
        <>
            <Navigation dogs={dogs} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dog/:dog_id" element={<Dog />} />
            </Routes>
        </>
    );
}
