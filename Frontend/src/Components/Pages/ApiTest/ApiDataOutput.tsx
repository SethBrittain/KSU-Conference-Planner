import React from 'react';

const ApiDataOutput = (props: any): React.JSX.Element => {
    return (
        <div className='p-3'>
            <h1 className='text-3xl text-left'>{props.name}</h1>
            <pre className='m-3 p-3 bg-gray-400 rounded text-left'>
                {typeof props.data == "object" ? JSON.stringify(props.data,null,4) : 'error'}
            </pre>
        </div>
    );
};

export default ApiDataOutput;