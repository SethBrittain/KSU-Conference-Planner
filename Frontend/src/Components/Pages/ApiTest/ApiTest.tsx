import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiDataOutput from './ApiDataOutput';

const ApiTest = (): React.JSX.Element => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('/api/test')
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

    
    var result = loading ? "Loading..." : error ? "Error" : data ? <ApiDataOutput name="test" data={data} /> : "No data";

    return (
        <div>
            {result}
        </div>
    );
};

export default ApiTest;
