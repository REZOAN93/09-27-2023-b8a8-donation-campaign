const getLocalStorageData=()=>{
    const storedDonateList= localStorage.getItem('donated-List')
    if (storedDonateList) {
        return JSON.parse(storedDonateList)
    }
    return[]
}

const savedDonatedList=id=>{
    const storedDonateList=getLocalStorageData()
    const exists=storedDonateList.find(donateID=>donateID===id)
    if (!exists) {
        storedDonateList.push(id)
        localStorage.setItem('donated-List',JSON.stringify(storedDonateList))
    }
}

export{savedDonatedList,getLocalStorageData}