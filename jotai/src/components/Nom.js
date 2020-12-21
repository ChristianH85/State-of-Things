import React from 'react';
import {useAtom} from 'jotai'
import { name } from "../Atoms";
function Nom (){
    const [nom,changeNom]=useAtom(name)
    console.log(nom)
    const newNom=()=>{
      changeNom('St. Dangerous')
    }

    return(
        <div>
            <h1 style={{color:'blue'}}>{nom}</h1>
            <button onClick={newNom}>Make Dangerous</button>
        </div>
    )
}
export default Nom