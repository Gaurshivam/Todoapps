import React from 'react';
import { useState } from 'react';
import './Input.css'

const Input = () => {
    const [input, setInput] = useState("")
    const [data, setData] = useState([])

    const AddData = () => {
        setData([...data, input]);
    }

    const DeleteData = (index) =>{
        var Datafilter = data;
        Datafilter.splice(index,1);
        setData([...Datafilter])
    }
    return (
        <div>
            <input type='text' placeholder='Please add item' onChange={(e) => setInput(e.target.value)} />
            <button onClick={AddData}>Add Data</button>
            {
                data.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li><input type='checkbox'  />{item}<button onClick={DeleteData}>Delete</button></li>
                        </ul>
                    )
                })
            }
        </div>
    );
}

export default Input;
