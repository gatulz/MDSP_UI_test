import React, { useState } from "react";

// const f = {
//     useVisibilityToggler : 
//         (component, visibility=false)=>{
//             const [visible, setVisibility] = useState(()=>visibility);
//             return [visible?component:null,()=>setVisibility((v)=>!v)];
//         }
// }
const useVisibilityToggler = (component, visibility) => {
    let [visible, setVisibility] = useState(visibility);
    return [visible ? component : null, () => setVisibility((v) => !v)];
}


export default useVisibilityToggler;
/*
import f from "../function/func";

//declaration of toggler
const [ComponentVar, toggleVisibility1] =
    f.useVisibilityToggler(
        <Component />, true
    );

// on code, replace <Component/>
        {ComponentVar1}
//trigger button
<button onClick={f.toggleCardVisibility}/>
*/