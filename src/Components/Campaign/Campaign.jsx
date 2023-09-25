import { useEffect } from "react";
import { useState } from "react";
import Donation from "./Donation";

const Campaign = () => {
    const [donations,setDonations]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setDonations(data))
    },[])

    return (
        <div>
            <div>
                {
                    donations.map((na)=><Donation key={na.id} data={na}></Donation>)
                }
            </div>
        </div>
    );
};

export default Campaign;