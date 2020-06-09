import React, { useEffect, useState, useRef } from 'react';

const HelloWorld = (props) => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState(0);

    useEffect(() => {
        setName(props.name);
    }, [props.name])


    return (
        <div className="p-3"><h1>
            hello {name}
        </h1>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Count up</button>
            <button onClick={() => setNumber(number - 1)}>Count down</button>
        </div>
    );
}

export default HelloWorld;

