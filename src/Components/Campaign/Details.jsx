import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const data=useLoaderData()
    const [specificData,setSpecificData]=useState([])
    const {id}=useParams()
    const idInt=parseInt(id)
    useEffect(()=>{
       const SingleData=data.find((na)=>na.id===idInt)
       setSpecificData(SingleData)
    },[data,idInt])
    
    console.log(specificData)

    return (
        <div className="max-w-7xl mx-auto border my-10">
           

        </div>
    );
};

export default Details;