import React, { useEffect, useState } from 'react';
import axios from 'axios';

//The information needed to create the output
type ApiDataOutputProps = {
    name : string,
    which : Number
}
/**
 * A component meant to be used to test the API data output. Can be deleted eventaully
 * @param props The data needed to test the data outputs
 * @returns A component meant to be used to test the API data output
 */
const ApiDataOutput = (props: ApiDataOutputProps): React.JSX.Element => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(`/api/test?which=${props.which}`)
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log("Api call failed");
            setLoading(false);
            setError(true);
        });
    }, []);

    
    var result = loading ? "Loading..." : error ? "Error" : data ? JSON.stringify(data,null,4) : "No data";
    return (
        <div className='p-3'>
            <h1 className='text-3xl text-left'>{props.name}</h1>
            <pre className='m-3 p-3 bg-gray-400 rounded text-left'>
                {typeof data == "object" ? result : 'error'}
            </pre>
        </div>
    );
};

export default ApiDataOutput;