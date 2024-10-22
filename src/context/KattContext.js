import { useState } from "react";
// valami szöveg...
import { createContext } from "react";





export const KattContext = createContext("")
export const KattProvider = ({children})=>{


    const [lista, setLista] = useState([true,true,false,false,true,true,true,false,true,])
    
    function katt(adat){

        const slista = [...lista];

        slista[adat] = !slista[adat]
        setLista([...slista]); 

    }

    return <KattContext.Provider value={{lista, katt}}>
                {children}
            </KattContext.Provider>;
}