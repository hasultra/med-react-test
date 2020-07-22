import React from 'react';
import { useSelector } from 'react-redux';

const OutputComponent = () => {
    const customAsyncData = useSelector((state) => state.customAsyncData).payload;

    const { firstname, lastname } = customAsyncData ? customAsyncData : { firstname: "", lastname: "" };


    return <div>
        <div> 
            <p style={{color: "red",fontSize: "xxx-large",fontWeight: "bold"}} >{firstname} {lastname}</p>
        </div>
        <br />
       
    </div>
}

export default OutputComponent;