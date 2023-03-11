import React,{useContext, createContext} from "react";
import {useAddress, useContract,useMetamask,useContractWrite} from "@thirdweb-dev/react" 
import {ethers} from "ethers";

const StateContext = createContext();

export const StateContextProvider =({children}) =>{
    const{contract}=useContract('0xe808df3b1fcBD322ea30Ac080B822b489D77057c')
const {mutateAsync:createProject}=useContractWrite(contract,'createProject')
const address=useAddress();
const connect =useMetamask();

const publishProject = async (form) =>{
    try{
    const data = await createProject([
        address,
        form.title,form.description,form.target,new Date(form.deadline).getTime(),form.image
    ])
    console.log("contract call success",data)
}catch(error){
    console.log("contract call failure",error)
}
}

return(
    <StateContext.Provider value={{address,contract,createProject: publishProject}}>{children}</StateContext.Provider>
)

}
export const useStateContext = () => useContext(StateContext); 