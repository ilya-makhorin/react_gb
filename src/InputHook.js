import {useState} from 'react';

const inputHook =(defaultValue) => {
    const [val, setVal] = useState(defaultValue);

    const handlerInput = (event) => {
        const currentValue = event.target.value;
        setVal(currentValue)
    }

    return [val,handlerInput]
}

export default inputHook