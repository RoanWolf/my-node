import { useState } from "react";
import { useEffect } from "react"

export default () => {
    const [data , setData] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const json = await response.json();
                console.log(json);
                setData(json);
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        };

        fetchData();
    },[]);



    return (
        <>
            <h1>Data from Backend</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}