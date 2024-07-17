import React from "react";
import { useParams } from "react-router-dom";

export default function Dog() {

    const { dog_id } = useParams();

    const [dog, setDog] = useState([]);

    const fetchDog = async () => {
        const response = await fetch("http://localhost:8000/dog/" + dog_id +"/");
        const data = await response.json();
        setDog(data);
        console.log(data);
    }

    useEffect(() => {
        fetchDog();
    }, []);

    return <div>{ dog.name }</div>;
}
