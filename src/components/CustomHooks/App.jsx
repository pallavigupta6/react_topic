import React from "react";
import useFetch from "./useFetch";

const App = () => {
    const data = useFetch("https://jsonplaceholder.typicode.com/posts");

    return (
        <div>
            <h1>Fetched Data</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
