import { createContext } from "react";

export const DonationContext=createContext()

const Context = () => {
    const name='Shawon'
    const data={name}
    return (
        <DonationContext.Provider value={data}>
            
        </DonationContext.Provider>
    );
};

export default Context;